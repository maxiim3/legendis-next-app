'use client';

import {cn} from '@/lib/utils';
import {motion, useScroll, useTransform} from 'framer-motion';
import React, {ComponentPropsWithoutRef} from 'react';

export default function ContainerWithScrollAnimation({
   children,
}: ComponentPropsWithoutRef<'section'>) {
   let {scrollYProgress} = useScroll();

   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '40%']);

   console.log();
   return (
      <motion.section
         id={'hero'}
         style={{
            opacity,
         }}
         aria-label={'Video hero banner'}
         className={cn('relative top-0 mx-auto h-screen w-screen overflow-hidden')}>
         {children}
      </motion.section>
   );
}
