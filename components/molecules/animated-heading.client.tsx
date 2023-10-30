'use client';

import {Heading2} from '@/components/atoms/typography';

export default function AnimatedHeading() {
   return (
      <Heading2
         className={
            ' prose flex select-none gap-3 overflow-hidden text-center font-brand text-4xl'
         }>
         Digital.{' '}
         <div
            className={
               'flex h-12 flex-col gap-2 text-left transition duration-200 group-hover/logo:-translate-y-12'
            }>
            <span>Solution.</span>
            <span>Simplified.</span>
         </div>
      </Heading2>
   );
}
