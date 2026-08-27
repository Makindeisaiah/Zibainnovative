import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: 'section' | 'div' | 'header' | 'footer' | 'main';
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  as: Component = 'section',
}) => {
  return (
    <Component id={id} className={`relative w-full ${className}`}>
      {children}
    </Component>
  );
};
