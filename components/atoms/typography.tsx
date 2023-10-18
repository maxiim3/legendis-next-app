import cn from '@/lib/utils';
import {cva} from 'class-variance-authority';
import {ComponentPropsWithoutRef} from 'react';

export const globalHeadingStyles = cva(
   'font-inter selection:bg-accent/50 selection:text-accent-content font-normal text-base-content'
);
export const Heading1 = ({children, id, className}: ComponentPropsWithoutRef<'h1'>) => (
   <h1
      id={id}
      className={cn(
         globalHeadingStyles(),
         'text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl',
         className
      )}>
      {children}
   </h1>
);

export const Heading2 = ({children, id, className}: ComponentPropsWithoutRef<'h2'>) => (
   <h2
      id={id}
      className={cn(globalHeadingStyles(), className)}>
      {children}
   </h2>
);

export const Heading3 = ({children, id, className}: ComponentPropsWithoutRef<'h3'>) => (
   <h3
      id={id}
      className={cn(globalHeadingStyles(), className)}>
      {children}
   </h3>
);

export const Text = ({children, id, className}: ComponentPropsWithoutRef<'p'>) => (
   <p
      id={id}
      className={cn(
         'font-sans text-sm font-light text-base-content selection:bg-secondary/40 sm:text-base',
         className
      )}>
      {children}
   </p>
);
