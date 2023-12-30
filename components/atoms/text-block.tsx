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
            'prose mx-auto text-balance text-center text-primary selection:bg-secondary/80 selection:text-secondary-content ',
            className
         )}
         {...props}>
         {children}
      </article>
   );
}
