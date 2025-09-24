import { ReactNode } from 'react';

interface GlassMorphismProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  shadow?: boolean;
}

export default function GlassMorphism({ 
  children, 
  className = '',
  intensity = 'medium',
  blur = 'md',
  border = true,
  shadow = true
}: GlassMorphismProps) {
  const intensityClasses = {
    light: 'bg-white/10',
    medium: 'bg-white/20',
    strong: 'bg-white/30'
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const borderClass = border ? 'border border-white/20' : '';
  const shadowClass = shadow ? 'shadow-lg shadow-black/5' : '';

  return (
    <div className={`
      ${intensityClasses[intensity]}
      ${blurClasses[blur]}
      ${borderClass}
      ${shadowClass}
      rounded-xl
      ${className}
    `}>
      {children}
    </div>
  );
}