'use client';

import CarouselWidget from '@/app/carousel-widget.client';
import Legendis from '@/components/atoms/Legendis';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import CtaButton from '@/components/molecules/cta-button.client';
import { AlbumFactory } from '@/lib/sanity/album';
import {useI18nContext} from '@/stores/i18n.store';
import React, {type ComponentPropsWithoutRef} from 'react';


function HeroScreenWrapper({children}: ComponentPropsWithoutRef<'section'>) {
   return (
      <section
         className={'relative top-0 flex h-screen w-screen flex-col items-center justify-center'}>
         {children}
      </section>
   );
}

function HeroContainer({children}: ComponentPropsWithoutRef<'div'>) {
   return (
      <div
         className={
            'flex w-screen md:max-w-[90vw] h-screen md:h-auto md:max-h-[95vh] min-h-[80vh] md:p-8 flex-col items-center justify-center border-base-100/40 bg-base-100/80 py-2 shadow-[0_4px_20px_8px_rgba(0,0,0,0.7),0_4px_90px_30px_rgba(0,0,0,0.5)] drop-shadow-xl backdrop-blur  md:gap-2 md:rounded-2xl md:border lg:w-full'
         }>
         {children}
      </div>
   );
}
export default function HeroBanner({albums}:{albums: ReturnType<typeof AlbumFactory>[]}) {
   const currentLang = useI18nContext(store => store.currentLanguage);

   return (
      <HeroScreenWrapper>
         <HeroContainer>
            <Prose>
               <h1 className={'sr-only text-center text-xl font-light uppercase text-primary'}>
                  Legendis
               </h1>
               <Legendis className={'mx-auto h-16 w-24 fill-primary md:h-24 md:w-48'} />
               <Heading2 className={'my-1 text-center text-4xl text-base-content md:mb-0'}>
                  Legendis
               </Heading2>
               <small className={'text-center text-primary/80'}>
                  {currentLang === 'fr'
                     ? 'Un label Jamais 203 Productions'
                     : 'A Jamais 203 Productions Label'}
               </small>
            </Prose>
                <CarouselWidget albums={albums}/>
            <CtaButton />

         </HeroContainer>
      </HeroScreenWrapper>
   );
}

