import {textHeading2} from '@/components/atoms/text-heading2.css';
import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

export default function Heading2({children, className, ...props}: ComponentPropsWithoutRef<'h2'>) {
   return (
      <h2
         className={cn(textHeading2, className)}
         {...props}>
         {children}
      </h2>
   );
}

