# Primavera Fácil — PWA

Projeto do guia de boas-vindas do Condomínio Edifício Primavera, preparado para publicação no GitHub Pages e instalação como aplicativo (PWA).

## Arquivos
- `index.html`: aplicação principal.
- `manifest.json`: nome, cores, modo de exibição e ícones da instalação.
- `service-worker.js`: cache básico dos arquivos do app shell para abrir o conteúdo previamente carregado quando estiver offline.
- `icons/`: ícones PNG para instalação.
- `primavera_facil_mobile_v13_premium_original.html`: cópia do HTML original enviado, para referência/backup.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `primavera-facil`.
2. Envie todos os arquivos e pastas deste pacote para a raiz do repositório (não envie somente o `index.html`).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`, e salve.
5. Aguarde a publicação e abra a URL HTTPS fornecida pelo GitHub Pages.

## Instalar no celular
- **Android/Chrome:** abra a URL publicada; use o menu do navegador e escolha **Instalar app** ou **Adicionar à tela inicial**, conforme a opção exibida.
- **iPhone/Safari:** abra a URL; toque em **Compartilhar → Adicionar à Tela de Início**.

## Importante
- O PWA precisa ser servido por HTTPS (o GitHub Pages fornece HTTPS) ou em `localhost` durante testes para o Service Worker funcionar.
- O checklist e o tema são salvos no armazenamento local do navegador. Eles **não sincronizam** entre aparelhos e podem ser perdidos se os dados do navegador forem apagados.
- O cache offline é básico: recursos e páginas do app shell são armazenados após a primeira carga. Para garantir disponibilidade offline dos PDFs, coloque os PDFs na raiz do projeto com os nomes esperados e inclua-os no cache, se necessário.
- O HTML faz referência a `guia_morador_primavera15.pdf` e `regulamento_interno_primavera_2015.pdf`. Esses documentos não estavam no arquivo recebido; adicione-os à raiz do repositório para que os links funcionem.
- Faça uma revisão das informações internas e contatos antes de publicar. O conteúdo atual inclui orientações e dados de contato do condomínio.

## Teste local
Abra o projeto por um servidor local (não apenas clicando duas vezes no HTML) para testar instalação e Service Worker. Uma opção é usar a extensão Live Server do VS Code.
