import cn from '@/lib/utils';
import {cva} from 'class-variance-authority';
import {ComponentPropsWithoutRef} from 'react';

export const flexStack = cva('flex w-[100%]', {
   variants: {
      direction: {
         column: 'flex-col',
         row: 'flex-row',
      },
      wrap: {
         true: 'flex-wrap',
         false: 'flex-nowrap',
      },
      center: {
         true: 'justify-center items-center',
      },
   },
   defaultVariants: {
      direction: 'column',
      wrap: false,
   },
});
