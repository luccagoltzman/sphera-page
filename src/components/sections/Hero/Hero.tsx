import { useEffect, useState, useRef } from 'react';
import { Button } from '@components/ui/Button';
import { HERO_BACKGROUND } from '../../../config/images';
import { HERO_VIDEO_SEQUENCE } from '../../../config/video';
import styles from './Hero.module.scss';

const HEADLINE = 'Soluções em frotas automotivas.';
const SUBHEADLINE = 'Melhoria contínua, redução de custo e gestão profissional da sua frota.';

export function Hero() {
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [headlineDone, setHeadlineDone] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video || HERO_VIDEO_SEQUENCE.length === 0) return;

    const goNext = () => {
      setVideoIndex((prev) => (prev + 1) % HERO_VIDEO_SEQUENCE.length);
    };

    video.addEventListener('ended', goNext);
    return () => video.removeEventListener('ended', goNext);
  }, [videoIndex]);

  const currentVideoSrc = HERO_VIDEO_SEQUENCE[videoIndex] ?? HERO_VIDEO_SEQUENCE[0];

  return (
    <header className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div
          className={styles.heroBgImage}
          style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
          aria-hidden
        />
        <video
          ref={videoRef}
          key={videoIndex}
          className={styles.heroBgVideo}
          src={currentVideoSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className={styles.overlay} aria-hidden />
        <div className={styles.particles} aria-hidden />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
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
      </div>
    </header>
  );
}
