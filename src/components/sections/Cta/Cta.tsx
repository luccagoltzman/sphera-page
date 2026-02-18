import { useState } from 'react';
import { Button } from '@components/ui/Button';
import { CTA_BACKGROUND } from '../../../config/images';
import styles from './Cta.module.scss';

export function Cta() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <section className={styles.section} id="cta">
        <div className={styles.inner}>
          <div className={styles.success}>
            <p className={styles.successTitle}>Mensagem enviada!</p>
            <p className={styles.successText}>
              Em breve nossa equipe entrará em contato.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="cta">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${CTA_BACKGROUND})` }}
        aria-hidden
      />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Pronto para melhorar a gestão da sua frota?
        </h2>
        <p className={styles.subheading}>
          Solicite um orçamento ou fale com nossa equipe.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              className={styles.input}
              placeholder="Seu nome"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="empresa">
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className={styles.input}
              placeholder="Nome da empresa"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="telefone">
              Telefone / WhatsApp
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              className={styles.input}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="seu@email.com"
            />
          </div>
          <Button type="submit" variant="primary" className={styles.submit}>
            SOLICITAR ORÇAMENTO
          </Button>
        </form>
      </div>
    </section>
  );
}
