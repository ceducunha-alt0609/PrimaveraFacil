/* Primavera Fácil PWA — cache app shell compatível com GitHub Pages */
const CACHE_NAME = 'primavera-facil-v2';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Cache each asset independently so one optional failure doesn't block installation.
    for (const asset of APP_SHELL) {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response.ok) await cache.put(asset, response);
      } catch (error) {
        console.warn('Não foi possível armazenar recurso:', asset, error);
      }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('primavera-facil-') && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response && response.ok) {
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const home = await cache.match('./index.html');
        if (home) return home;
      }
      return new Response('Você está offline e este conteúdo ainda não foi armazenado. Conecte-se à internet e tente novamente.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
