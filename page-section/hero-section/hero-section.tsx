'use client';

import {cn} from '@/lib/utils';
import {AlbumFactory} from '@/page-section/hero-section/albums/album.factory';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import React, {ComponentPropsWithoutRef} from 'react';
import {ButtonLink} from './components/buttons';

export namespace Containers {
   export function CardSlot({children, className}: ComponentPropsWithoutRef<'div'>) {
      return (
         <div
            className={cn(
               'relative z-[880] flex min-h-[80vh] w-full flex-col items-center justify-evenly border-8 border-base-100/40 bg-base-100/80 py-2 shadow-[0_4px_20px_8px_rgba(0,0,0,0.7),0_4px_90px_30px_rgba(0,0,0,0.5)] drop-shadow-xl backdrop-blur sm:w-[80vw] md:h-auto md:max-h-[95vh] md:max-w-[90vw]  md:gap-2 md:rounded-2xl md:border md:p-8',
               className
            )}>
            {children}
         </div>
      );
   }

   export function ScreenRoot({children}: ComponentPropsWithoutRef<'section'>) {
      return (
         <section
            className={
               'relative z-[800] flex h-screen w-screen flex-col items-center justify-center'
            }>
            {children}
         </section>
      );
   }
}
export default function HeroSection({albums}: {albums: ReturnType<typeof AlbumFactory>[]}) {
   const {subtitle} = useSectionData();

   return (
      <Containers.ScreenRoot>
         <Containers.CardSlot className='rounded-card'>
            {/* <TextBlock> */}
            {/*    <h1 className={'sr-only text-center text-xl font-light uppercase text-primary'}> */}
            {/*       Legendis */}
            {/*    </h1> */}
            {/*    <Legendis className={'mx-auto h-16 w-24 fill-primary md:h-24 md:w-48'} /> */}
            {/*    <Heading2 className={'my-1 text-center text-4xl text-base-content md:mb-0'}> */}
            {/*       Legendis */}
            {/*    </Heading2> */}
            {/*    <small className={'text-center text-primary/80'}>{subtitle}</small> */}
            {/* </TextBlock> */}
            <div className={'relative w-full overflow-hidden rounded-box'}>
               {/* <NewAlbumWidget albums={albums} /> */}
               {/*<CarouselWidget albums={albums} />*/}
            </div>
            <ButtonLink />
         </Containers.CardSlot>
      </Containers.ScreenRoot>
   );
}

function useSectionData() {
   const currentLang = useAppLanguage(store => store.currentLanguage);

   const subTitle = MultiLanguageContentFactory.create({
      fr: 'un label jamais 203 productions',
      en: 'a jamais 203 productions label',
   });
   return {
      subtitle: subTitle.get(currentLang),
   };
}
