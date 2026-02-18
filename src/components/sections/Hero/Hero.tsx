import { useEffect, useState } from 'react';
import { Button } from '@components/ui/Button';
import styles from './Hero.module.scss';

const HEADLINE = 'Soluções em frotas automotivas.';
const SUBHEADLINE = 'Melhoria contínua, redução de custo e gestão profissional da sua frota.';

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
          <Button href="https://wa.me/5511972880019" variant="secondary" target="_blank" rel="noopener noreferrer">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </header>
  );
}
