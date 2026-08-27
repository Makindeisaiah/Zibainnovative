import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  as?: 'button' | 'a';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  href,
  as = href ? 'a' : 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49E378] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[#49E378] text-white hover:bg-[#3ecb6a] shadow-[0_2px_14px_rgba(73,227,120,0.3)] hover:shadow-[0_4px_20px_rgba(73,227,120,0.4)]',
    secondary:
      'bg-[#0D1418] text-white border border-[#21323B] hover:bg-[#141F26] hover:border-[#334D59] hover:text-white',
    outline:
      'bg-transparent text-zinc-900 border border-zinc-200 hover:bg-zinc-100',
    ghost:
      'bg-transparent text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/60',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] font-semibold gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={combinedClasses} id={props.id}>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
