import { useRef, useState, useCallback } from 'react';
import styles from './Services.module.scss';

const SERVICES = [
  {
    icon: '🔍',
    title: 'Vistorias Automotivas',
    description: 'Vistorias completas para segurança e conformidade da frota.',
  },
  {
    icon: '📚',
    title: 'Treinamentos',
    description: 'Capacitação para equipes e gestores de frotas.',
  },
  {
    icon: '📋',
    title: 'Laudos Técnicos',
    description: 'Documentação técnica e pareceres especializados.',
  },
  {
    icon: '🛠️',
    title: 'Inspeção de Capacitação Técnica',
    description: 'Avaliação de oficinas e capacitação técnica.',
  },
  {
    icon: '💼',
    title: 'Assessoria Técnica',
    description: 'Consultoria e suporte técnico para sua operação.',
  },
  {
    icon: '🌱',
    title: 'Saúde, Segurança e Meio Ambiente',
    description: 'SSMA e conformidade ambiental para frotas.',
  },
  {
    icon: '✨',
    title: 'Limpeza e Conservação de Frotas',
    description: 'Cuidado e preservação dos veículos da frota.',
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
          Serviços especializados para frotas automotivas.
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
