import { ReactNode } from 'react';
import svgPaths from '../imports/svg-fg62w5i9ym';

type ButtonVariant = 'primary' | 'black' | 'white' | 'gray' | 'destructive' | 'disabled' | 'glass' | 'outline';
type ButtonSize = 'xs' | 's' | 'm' | 'l';
type IconPosition = 'left' | 'right' | 'none';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconPosition?: IconPosition;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'm',
  iconPosition = 'none',
  icon,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClass = 'mts-button';
  const variantClass = `mts-button--${variant}`;
  const sizeClass = `mts-button--${size}`;
  const disabledClass = disabled ? 'mts-button--disabled' : '';

  const iconSize = size === 'xs' || size === 's' ? 16 : 24;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === 'left' && icon && (
        <span className="mts-button__icon">{icon}</span>
      )}
      <span className="mts-button__content">{children}</span>
      {iconPosition === 'right' && icon && (
        <span className="mts-button__icon">{icon}</span>
      )}
    </button>
  );
}

// Пр��дустановленные иконки из дизайна
export function PlusIcon({ size = 24, fill = 'white' }: { size?: number; fill?: string }) {
  const path = size === 16 ? svgPaths.p10f42300 : svgPaths.p37467100;

  return (
    <svg
      className="block"
      width={size}
      height={size}
      fill="none"
      viewBox={size === 16 ? '0 0 16 16' : '0 0 24 24'}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}

export function LoaderIcon({ size = 24, fill = 'white' }: { size?: number; fill?: string }) {
  const path = size === 16 ? svgPaths.p6d8ca00 : svgPaths.p92e1780;

  return (
    <svg
      className="block"
      width={size}
      height={size}
      fill="none"
      viewBox={size === 16 ? '0 0 16 16' : '0 0 24 24'}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
