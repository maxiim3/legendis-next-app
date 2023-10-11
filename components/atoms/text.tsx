import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

const Text = ({children, id, className}: ComponentPropsWithoutRef<'p'>) => (
   <p
      id={id}
      className={cn(
         'text-sm font-normal leading-relaxed tracking-wider text-primary text-balance sm:text-base',
         className,
      )}>
      {children}
   </p>
);

export default Text;
