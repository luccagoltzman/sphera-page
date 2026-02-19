import { useRef, useCallback } from 'react';
import { SECTION_IMAGES, SERVICE_CARD_IMAGES } from '../../../config/images';
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

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const tiltX = y * -8;
    const tiltY = x * 8;
    el.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

export function Services() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Serviços e <span className={styles.highlight}>soluções</span>
        </h2>
        <p className={styles.subheading}>
          Serviços especializados para frotas automotivas.
        </p>

        <div className={`interactive-image ${styles.visual}`} data-interactive-image>
          <img src={SECTION_IMAGES.servicos} alt="Serviços para frotas" />
        </div>

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
  const cardImage = SERVICE_CARD_IMAGES[title] ?? SECTION_IMAGES.servicos;
  return (
    <div
      ref={tilt.ref}
      className={styles.card}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className={styles.cardImageWrap} aria-hidden>
        <img
          src={cardImage}
          alt=""
          className={styles.cardImage}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className={styles.cardIcon} aria-hidden>
        {icon}
      </span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}
