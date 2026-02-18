import { useEffect, useState } from 'react';
import { Button } from '@components/ui/Button';
import styles from './Hero.module.scss';

const HEADLINE = 'Controle total da sua frota. Reduza custos. Aumente eficiência.';
const SUBHEADLINE = 'Rastreamento, telemetria e gestão inteligente em uma única solução.';

export function Hero() {
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [headlineDone, setHeadlineDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= HEADLINE.length) {
        setDisplayedHeadline(HEADLINE.slice(0, i));
        i++;
      } else {
        clearInterval(t);
        setHeadlineDone(true);
      }
    }, 35);
    return () => clearInterval(t);
  }, []);

  return (
    <header className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div className={styles.gradient} aria-hidden />
        <div className={styles.particles} aria-hidden />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            {displayedHeadline}
            {!headlineDone && <span className={styles.caret} aria-hidden />}
          </span>
        </h1>
        <p className={`${styles.subtitle} ${headlineDone ? styles.visible : ''}`}>
          {SUBHEADLINE}
        </p>
        <div className={`${styles.ctas} ${headlineDone ? styles.visible : ''}`}>
          <Button href="#cta" variant="primary">
            Solicitar Orçamento
          </Button>
          <Button href="#contato" variant="secondary">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </header>
  );
}
