# Esphera – Landing Page

Landing page de alta conversão para **Esphera Soluções em Frotas** ([espherasolucoes.com.br](http://espherasolucoes.com.br/)).

- **Stack:** Astro + React + TypeScript + SCSS
- **Conteúdo:** alinhado ao site da empresa (serviços, contatos, proposta de valor)

## Conteúdo integrado do site

- **Marca:** Esphera – Soluções em frotas automotivas
- **Contato:** contato@espherasolucoes.com.br | (11) 97288-0019 | (11) 94791-8825
- **Serviços:** Vistorias automotivas, Treinamentos, Laudos Técnicos, Inspeção de Capacitação Técnica, Assessoria Técnica, SSMA, Limpeza e Conservação de Frotas

## Desenvolvimento

```bash
npm install
npm run dev
```

Build: `npm run build` | Preview: `npm run preview`

## Mídia

- **Hero:** Vídeo de fundo (caminhão na estrada, Mixkit) em `src/config/video.ts` (`HERO_VIDEO_SRC`). Se o vídeo não carregar, a imagem de `src/config/images.ts` (`HERO_BACKGROUND`) é exibida. Para usar arquivo local: coloque `hero.mp4` em `public/videos/` e use `HERO_VIDEO_SRC = '/videos/hero.mp4'`.
- **CTA:** Imagem de fundo em `src/config/images.ts` (`CTA_BACKGROUND`).
- **Logo:** Header e Footer. Arquivo local: `public/img/logo_esphera.png`.
