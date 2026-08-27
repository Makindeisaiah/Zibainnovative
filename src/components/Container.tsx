import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  id,
  size = 'default',
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div
      id={id}
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};
