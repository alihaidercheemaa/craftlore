
import{ type ReactNode } from 'react';
import { cn } from '~/lib/utils';

type ContainerProps ={
  children: ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={cn("ml-6 mr-6 lg:container",className)}>
      {children}
    </section>
  );
};

