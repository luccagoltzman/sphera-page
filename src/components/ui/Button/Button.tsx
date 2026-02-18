import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classNames = [styles.btn, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    const { type: _t, ...anchorProps } = props;
    return (
      <a href={href} className={classNames} role="button" {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}
