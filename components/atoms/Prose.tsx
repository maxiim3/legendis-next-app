import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

const Prose = ({children, className, ...props}: ComponentPropsWithoutRef<'article'>) => {
   return (
      <article
         className={cn('prose text-primary text-balance text-center mx-auto ', className)}
         {...props}>
         {children}
      </article>
   );
};

export default Prose;
