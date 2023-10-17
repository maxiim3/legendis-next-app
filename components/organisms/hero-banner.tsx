import Legendis from '@/components/Legendis';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import CtaButton from '@/components/molecules/cta-button.client';
import Image from 'next/image';
import Link from 'next/link';
import React, {Suspense} from 'react';

export default function HeroBanner() {
   return (
         <section
            className={
               'relative top-0 flex h-screen w-screen flex-col items-center justify-center'
            }>
            <div
               className={
                  '  relative flex h-full w-screen max-w-[800px] flex-col items-center justify-center  border-primary/40 bg-base-100/30 py-2 shadow-[0_4px_20px_2px_rgba(0,0,0,0.6)] drop-shadow-xl backdrop-blur md:mx-3 md:h-auto md:w-3/4 md:gap-2 md:rounded-2xl md:border md:py-8 lg:w-full'
               }>
               <Prose>
                  <h1 className={'sr-only text-center text-xl font-light uppercase text-primary'}>
                     Legendis
                  </h1>
                  <Legendis className={'mx-auto h-16 w-24 fill-primary md:h-24 md:w-48'} />
                  <Heading2 className={'my-1 text-center text-4xl text-base-content md:mb-0'}>
                     Legendis
                  </Heading2>
                  <small className={'text-center text-primary/80'}>
                     Un label Jamais 203 Productions
                  </small>
               </Prose>
               <CtaButton />
            </div>
         </section>
   );
}
