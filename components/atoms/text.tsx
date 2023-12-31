import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

export default function Text({children, id, className}: ComponentPropsWithoutRef<'p'>) {
   return (
      <p
         id={id}
         className={cn(
            'text-balance text-base font-normal leading-relaxed tracking-wider text-primary',
            className
         )}>
         {children}
      </p>
   );
}
