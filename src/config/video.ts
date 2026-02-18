/**
 * Sequência de vídeos do hero – tema frotas (caminhões, logística, operação).
 * Mixkit, uso livre.
 */

const MIXKIT = (id: number) =>
  `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`;

export const HERO_VIDEO_SEQUENCE: string[] = [
  MIXKIT(1919),  // Trailers na estrada (frota em movimento)
  MIXKIT(28787), // Caminhão de carga na rodovia
  MIXKIT(23174), // Operador guiando caminhão no pátio (operação de frota)
];
