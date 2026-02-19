/**
 * Imagens da landing – Picsum Photos (carregamento estável, sem API).
 *
 * Por que Picsum? URLs do Unsplash podem falhar (403, hotlinking, IDs antigos).
 * Para usar SUAS fotos: coloque em public/images/ (ex.: problema-solucao.jpg)
 * e troque abaixo para: problemaSolucao: '/images/problema-solucao.jpg'
 */

const P = (seed: string, w = 800, h = 500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Hero
export const HERO_BACKGROUND = P('hero-frota', 1920, 1080);
export const HERO_BACKGROUND_ESPHERA = 'https://espherasolucoes.com.br/medias/img/frota_carros.png';

// Seções (um seed por seção = imagem fixa e sempre carrega)
export const SECTION_IMAGES = {
  problemaSolucao: P('problema-solucao', 800, 500),
  servicos: P('servicos', 800, 500),
  metricas: P('metricas', 800, 500),
  depoimentos: P('depoimentos', 800, 500),
  diferenciais: P('diferenciais', 800, 500),
};

// CTA
export const CTA_BACKGROUND = P('cta', 1920, 1080);

// Cards Serviços (aparece no hover)
export const SERVICE_CARD_IMAGES: Record<string, string> = {
  'Vistorias Automotivas': P('vistorias', 600, 400),
  'Treinamentos': P('treinamentos', 600, 400),
  'Laudos Técnicos': P('laudos', 600, 400),
  'Inspeção de Capacitação Técnica': P('inspecao', 600, 400),
  'Assessoria Técnica': P('assessoria', 600, 400),
  'Saúde, Segurança e Meio Ambiente': P('ssma', 600, 400),
  'Limpeza e Conservação de Frotas': P('limpeza', 600, 400),
};
