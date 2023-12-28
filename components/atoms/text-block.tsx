import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

export default function TextBlock({
   children,
   className,
   ...props
}: ComponentPropsWithoutRef<'article'>) {
   return (
      <article
         className={cn(
            'prose mx-auto text-center text-primary text-balance selection:bg-secondary/80 selection:text-secondary-content ',
            className
         )}
         {...props}>
         {children}
      </article>
   );
}
