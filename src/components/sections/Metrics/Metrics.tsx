import { useEffect, useState, useRef } from 'react';
import styles from './Metrics.module.scss';

function CountUp({ end, duration }: { end: number; duration: number }) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let start: number;
    const step = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setN(Math.round((1 - Math.pow(1 - progress, 3)) * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return <>{n}</>;
}

export function Metrics() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="metricas" ref={ref}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Resultados que <span className={styles.highlight}>contam</span>
        </h2>
        <p className={styles.subheading}>
          Melhoria contínua e redução de custo para frotas automotivas.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.value}>
              <span className={styles.number}>
                {inView ? <CountUp end={30} duration={1500} /> : 0}
              </span>
              <span className={styles.suffix}>%</span>
            </div>
            <p className={styles.label}>Menos custos operacionais</p>
          </div>
          <div className={styles.card}>
            <div className={styles.value}>
              <span className={styles.glow}>Redução</span>
            </div>
            <p className={styles.label}>Consumo de combustível</p>
          </div>
          <div className={styles.card}>
            <div className={styles.value}>
              <span className={styles.number}>+</span>
              <span className={styles.glow}>Produtividade</span>
            </div>
            <p className={styles.label}>Da frota</p>
          </div>
          <div className={styles.card}>
            <div className={styles.value}>
              <span className={styles.glow}>ROI</span>
            </div>
            <p className={styles.label}>Comprovado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
