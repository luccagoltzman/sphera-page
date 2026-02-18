import { useRef, useState, useCallback } from 'react';
import styles from './Services.module.scss';

const SERVICES = [
  {
    icon: '📍',
    title: 'Rastreamento Veicular',
    description: 'Localização precisa e monitoramento 24h.',
  },
  {
    icon: '📊',
    title: 'Telemetria',
    description: 'Controle de consumo, direção e desempenho.',
  },
  {
    icon: '🧾',
    title: 'Gestão de Custos',
    description: 'Reduza desperdícios e aumente lucro.',
  },
];

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const tiltX = y * -8;
    const tiltY = x * 8;
    setTransform(`perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);
  }, []);

  const onMouseLeave = useCallback(() => setTransform(''), []);

  return { ref, style: { transform }, onMouseMove, onMouseLeave };
}

export function Services() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.inner}>
        <h2 className={styles.heading} data-reveal>
          Serviços e <span className={styles.highlight}>soluções</span>
        </h2>
        <p className={styles.subheading} data-reveal>
          Tudo que sua frota precisa em uma única plataforma.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      className={styles.card}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      data-reveal
    >
      <span className={styles.cardIcon} aria-hidden>
        {icon}
      </span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}
