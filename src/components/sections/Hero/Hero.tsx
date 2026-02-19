import { useEffect, useState, useRef } from 'react';
import { Button } from '@components/ui/Button';
import { HERO_BACKGROUND } from '../../../config/images';
import { HERO_VIDEO_SEQUENCE } from '../../../config/video';
import styles from './Hero.module.scss';

const HEADLINE = 'Soluções em frotas automotivas.';
const SUBHEADLINE = 'Melhoria contínua, redução de custo e gestão profissional da sua frota.';
const PARALLAX_FACTOR = 0.35; // fundo move mais devagar que o scroll

export function Hero() {
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [headlineDone, setHeadlineDone] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Só inicia após hidratação para evitar mismatch server/client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
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
  }, [mounted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || HERO_VIDEO_SEQUENCE.length === 0) return;

    const goNext = () => {
      setVideoIndex((prev) => (prev + 1) % HERO_VIDEO_SEQUENCE.length);
    };

    video.addEventListener('ended', goNext);
    return () => video.removeEventListener('ended', goNext);
  }, [videoIndex]);

  // Parallax: fundo move mais devagar que o scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentVideoSrc = HERO_VIDEO_SEQUENCE[videoIndex] ?? HERO_VIDEO_SEQUENCE[0];
  const parallaxOffset = scrollY * PARALLAX_FACTOR;

  return (
    <header className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div
          className={styles.heroBgParallax}
          style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
          aria-hidden
        >
          <div
            className={styles.heroBgImage}
            style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
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
          />
        </div>
        <div className={styles.overlay} aria-hidden />
        <div className={styles.particles} aria-hidden />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            <span className={styles.titleLine} suppressHydrationWarning>
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
