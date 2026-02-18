import { useState, useCallback, useEffect } from 'react';
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
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const go = useCallback((dir: 'next' | 'prev') => {
    setDirection(dir);
    setIndex((i) => {
      if (dir === 'next') return (i + 1) % ITEMS.length;
      return (i - 1 + ITEMS.length) % ITEMS.length;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.inner}>
        <h2 className={styles.heading} data-reveal>
          Quem <span className={styles.highlight}>confia</span>
        </h2>
        <p className={styles.subheading} data-reveal>
          Depoimentos de quem já conta com a Esphera.
        </p>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {ITEMS.map((item, i) => (
              <blockquote
                key={i}
                className={styles.card}
                data-active={i === index}
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
              onClick={() => go('prev')}
              aria-label="Depoimento anterior"
            >
              ‹
            </button>
            <div className={styles.dots}>
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={styles.dot}
                  data-active={i === index}
                  onClick={() => {
                    setDirection(i > index ? 'next' : 'prev');
                    setIndex(i);
                  }}
                  aria-label={`Ir ao depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => go('next')}
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
