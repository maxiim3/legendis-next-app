import {cn} from '@/lib/utils';
import {ComponentPropsWithoutRef} from 'react';

export default function Heading2({children, className, ...props}: ComponentPropsWithoutRef<'h2'>) {
   return (
      <h2
         className={cn('font-roboto text-3xl font-normal uppercase sm:text-4xl text-primary', className)}
         {...props}>
         {children}
      </h2>
   );
}
