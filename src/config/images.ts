/**
 * Imagens da landing page – Picsum Photos (carregamento confiável, sem API).
 * Formato: https://picsum.photos/seed/{seed}/{width}/{height}
 */

const P = (seed: string, w = 800, h = 500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Hero
export const HERO_BACKGROUND = P('frota-hero', 1920, 1080);
export const HERO_BACKGROUND_ESPHERA = 'https://espherasolucoes.com.br/medias/img/frota_carros.png';

// Seções – uma imagem por seção (seed fixo = mesma imagem sempre)
export const SECTION_IMAGES = {
  problemaSolucao: P('problema-solucao', 800, 500),
  servicos: P('servicos-frota', 800, 500),
  metricas: P('metricas', 800, 500),
  depoimentos: P('depoimentos', 800, 500),
  diferenciais: P('diferenciais', 800, 500),
};

// CTA
export const CTA_BACKGROUND = P('cta-frota', 1920, 1080);

// Uma imagem por card da seção Serviços (aparece na interação)
export const SERVICE_CARD_IMAGES: Record<string, string> = {
  'Vistorias Automotivas': P('card-vistorias', 600, 400),
  'Treinamentos': P('card-treinamentos', 600, 400),
  'Laudos Técnicos': P('card-laudos', 600, 400),
  'Inspeção de Capacitação Técnica': P('card-inspecao', 600, 400),
  'Assessoria Técnica': P('card-assessoria', 600, 400),
  'Saúde, Segurança e Meio Ambiente': P('card-ssma', 600, 400),
  'Limpeza e Conservação de Frotas': P('card-limpeza', 600, 400),
};
