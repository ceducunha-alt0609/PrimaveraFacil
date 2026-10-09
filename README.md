# Primavera Fácil — PWA para GitHub Pages

Este pacote contém o guia de boas-vindas preparado para instalação como aplicativo no Android/Chrome e iPhone/Safari.

## Arquivos obrigatórios
- `index.html` — aplicação principal.
- `manifest.json` — nome, ícones, cores e configuração de instalação.
- `service-worker.js` — cache básico para abrir a aplicação já carregada quando estiver offline.
- `icons/` — ícones PNG de 192×192 e 512×512, incluindo versão maskable.
- `primavera_facil_mobile_v13_premium_original.html` — cópia de referência do HTML original.

## Publicar corretamente
1. Extraia este ZIP no computador.
2. No GitHub, abra o repositório do Primavera Fácil e envie **o conteúdo da pasta `primavera-facil-pwa`**, preservando a pasta `icons`.
3. Confirme que estes endereços abrem sem erro, substituindo `SEU-USUARIO` e `SEU-REPOSITORIO`:
   - `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`
   - `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/manifest.json`
   - `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/service-worker.js`
   - `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/icons/icon-192.png`
   - `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/icons/icon-512.png`
4. Em **Settings → Pages**, selecione `Deploy from a branch`, branch `main` e pasta `/(root)`. Aguarde a publicação HTTPS.
5. Abra o endereço do site no Chrome do Android (não o arquivo HTML local nem a página do repositório GitHub).

## Se o Chrome continuar mostrando “Não foi possível instalar”
1. Confirme que todos os endereços acima abrem, especialmente os dois ícones e `manifest.json`.
2. No Chrome, abra o site, toque no ícone ao lado do endereço → **Configurações do site** → **Armazenamento** → **Limpar dados** (o nome exato pode variar). Reabra o site com internet.
3. Atualize a página. Aguarde alguns segundos para o Service Worker ser registrado e tente novamente pelo menu ⋮ → **Instalar app** ou **Adicionar à tela inicial**.
4. Se houver uma instalação antiga do Primavera Fácil, remova-a antes de tentar novamente.
5. Se falhar, envie a URL pública do GitHub Pages e uma captura da mensagem. Com a URL posso verificar se os arquivos publicados correspondem aos caminhos do projeto.

## Instalação
- Android: Chrome → menu ⋮ → **Instalar app** ou **Adicionar à tela inicial**.
- iPhone: Safari → Compartilhar → **Adicionar à Tela de Início**.

## Limitações conhecidas
- O checklist e o tema ficam salvos no armazenamento local do navegador e não sincronizam entre aparelhos.
- O cache offline é básico; o site precisa ser carregado uma vez com internet para guardar os arquivos.
- O HTML faz referência a `guia_morador_primavera15.pdf` e `regulamento_interno_primavera_2015.pdf`. Esses PDFs não estavam no arquivo recebido; adicione-os à raiz do repositório para que os links funcionem.
- Revise contatos e regras do condomínio antes de tornar o site acessível publicamente.
