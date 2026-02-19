import { useRef, useCallback } from 'react';
import { SECTION_IMAGES } from '../../../config/images';
import styles from './Testimonials.module.scss';

const ITEMS = [
  {
    quote:
      'A Esphera trouxe organização e conformidade para nossa frota. Melhoria contínua de verdade.',
    author: 'Carlos M.',
    role: 'Diretor de Operações',
  },
  {
    quote:
      'Vistorias e treinamentos de qualidade. Suporte técnico que faz a diferença no dia a dia.',
    author: 'Ana Paula R.',
    role: 'Gerente de Frota',
  },
  {
    quote:
      'Implementação rápida e resultados concretos. Recomendo para quem leva frota a sério.',
    author: 'Roberto L.',
    role: 'Gestor de Frotas',
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 320 + 20; // largura do card + gap

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`[data-card-index="${i}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, []);

  const scrollBy = useCallback((delta: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: delta * cardWidth, behavior: 'smooth' });
  }, [cardWidth]);

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.inner}>
        <h2 className={styles.heading} data-reveal>
          Quem <span className={styles.highlight}>confia</span>
        </h2>
        <p className={styles.subheading} data-reveal>
          Depoimentos de quem já conta com a Esphera.
        </p>

        <div className={`interactive-image ${styles.visual}`} data-interactive-image>
          <img src={SECTION_IMAGES.depoimentos} alt="Clientes que confiam" />
        </div>

        <div className={styles.scrollWrap}>
          <div
            ref={scrollRef}
            className={styles.horizontalScroll}
            role="region"
            aria-label="Depoimentos em carrossel"
          >
            {ITEMS.map((item, i) => (
              <blockquote
                key={i}
                className={styles.card}
                data-card-index={i}
                data-reveal
              >
                <p className={styles.quote}>"{item.quote}"</p>
                <footer>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scrollBy(-1)}
              aria-label="Depoimento anterior"
            >
              ‹
            </button>
            {ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={styles.dot}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir ao depoimento ${i + 1}`}
              />
            ))}
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => scrollBy(1)}
              aria-label="Próximo depoimento"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
