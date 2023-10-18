'use client';

import cn from '@/lib/utils';
import {motion} from 'framer-motion';
import {ComponentPropsWithoutRef} from 'react';

type Props = {
   className?: ComponentPropsWithoutRef<'div'>['className'];
   children: ComponentPropsWithoutRef<'div'>['children'];
   duration?: number;
   delay?: number;
   initial?: Object;
   animate?: Object;
};
export default function FadeInContentMotion({
   initial,
   animate,
   duration,
   delay,
   children,
   className,
}: Props) {
   return (
      <div className={'overflow-hidden'}>
         <motion.div
            initial={{opacity: 0, ...initial}}
            animate={{opacity: 1, ...animate}}
            transition={{duration: duration || 0.5, delay: delay || 0.5}}
            className={cn(className && className)}>
            {children}
         </motion.div>
      </div>
   );
}
