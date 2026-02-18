/**
 * Imagens da landing page – uma por seção, tema frota/logística. Unsplash, uso livre.
 */

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

// Hero
export const HERO_BACKGROUND = U('1601584115197-04ecc0da31d7', 1920);
export const HERO_BACKGROUND_ESPHERA = 'https://espherasolucoes.com.br/medias/img/frota_carros.png';

// Seções – imagem que condiz com cada uma
export const SECTION_IMAGES = {
  problemaSolucao: U('1581092160606-5098d274269e'), // inspeção/ferramentas
  servicos: U('1621902930995-2b570d534d88'),        // caminhão/logística
  metricas: U('1551288049-c64f5fcf8293'),           // gráficos/resultados
  depoimentos: U('1573496359142-b8d87734a5a2'),     // profissional/confiança
  diferenciais: U('1557804506-669a67965ba0'),       // reunião/equipe
};

// CTA
export const CTA_BACKGROUND = U('1522071820081-009f0129c71c', 1920);
