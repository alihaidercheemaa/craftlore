import{ type ReactNode } from 'react';
import { cn } from '~/lib/utils';

type BackgroundProps ={
  children: ReactNode;
  className?: string;
  color: string
}

export const Background: React.FC<BackgroundProps> = ({ children, className = '',color }) => {
  return (
    <div className={cn(`bg-[${color}]`,className)}>
      {children}
    </div>
  );
};
