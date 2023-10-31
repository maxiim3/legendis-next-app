'use client';

import Legendis from '@/components/atoms/Legendis';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import CtaButton from '@/components/molecules/cta-button.client';
import {useI18nContext} from '@/stores/i18n.store';
import Image from 'next/image';
import Link from 'next/link';
import React, {Suspense} from 'react';

export default function HeroBanner() {
   const currentLang = useI18nContext(store => store.currentLanguage);

   return (
      <section
         className={'relative top-0 flex h-screen w-screen flex-col items-center justify-center'}>
         <div
            className={
               'flex h-auto w-screen max-w-[800px] flex-col items-center justify-center border-base-200/40 bg-base-100/60 py-2 shadow-[0_4px_20px_2px_rgba(0,0,0,0.6)] drop-shadow-xl backdrop-blur  md:gap-2 md:rounded-2xl md:border lg:w-full'
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
                  {currentLang === 'fr'
                     ? 'Un label Jamais 203 Productions'
                     : 'A Jamais 203 Productions Label'}
               </small>
            </Prose>
            <article
               className={
                  'flex w-full flex-col gap-1  md:justify-around  md:pt-12'
               }>
               <Prose
                  className={
                     ' flex- prose flex-1 flex-col items-center justify-center text-center text-balance'
                  }>
                  <Text className={'m-0 mb-4 p-0'}>
                     {currentLang === 'fr' ? 'Découvrez' : 'Last Release'}
                  </Text>
                  <h3 className={'m-0 p-0 text-3xl uppercase text-base-content'}>
                     Edith Piaf Symphonique
                  </h3>
                  <small>
                     {' '}
                     {currentLang === 'fr'
                        ? 'Produit par Warner Music France'
                        : 'A Warner Music France Production'}
                  </small>
               </Prose>
               <Suspense
                  fallback={
                     <div
                        className={
                           'mx-auto my-8 aspect-square h-full w-48 animate-pulse overflow-hidden rounded-xl bg-base-300/70'
                        }
                     />
                  }>
                  {/*<Tooltip*/}
                  {/*   className={'tooltip-top tooltip-primary relative mx-auto my-8 h-fit w-fit'}*/}
                  {/*   message={'Voir le making off sur Youtube'}>*/}
                  <div className={'group relative mx-auto my-8 h-fit w-fit'}>
                     <div className='badge badge-primary absolute right-2 top-0 z-50 hidden translate-y-0 rotate-0 px-4 py-3 transition group-hover:translate-x-16 group-hover:translate-y-4 group-hover:rotate-12 group-hover:scale-105 group-hover:border-base-100 group-hover:bg-base-100 group-hover:text-base-content group-hover:opacity-40 md:flex'>
                        {currentLang === 'fr' ? 'Nouvelle Sortie' : 'New Album'}
                     </div>
                     <Image
                        className={
                           'mx-auto aspect-square w-[45vw] min-w-[160px] max-w-[240px] overflow-hidden rounded-xl object-cover object-center transition md:w-full md:max-w-[600px] md:group-hover:scale-105 md:group-hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.8)] md:group-hover:blur-[1px] md:group-hover:grayscale'
                        }
                        alt={'Edith Piaf Symphonique'}
                        src={'/assets/piaf.jpg'}
                        width={200}
                        height={200}
                     />
                     <div
                        className={
                           'aspect-squares absolute left-0 top-0 mb-12 hidden h-3/4 w-full flex-col items-center justify-end gap-3 transition duration-100 md:group-hover:flex'
                        }>
                        <Link
                           className={
                              'btn-base-100 hover-scale-105 btn btn-outline w-3/4 border-base-100/40 bg-base-100/80 opacity-90 hover:opacity-100'
                           }
                           target={'_blank'}
                           referrerPolicy={'no-referrer'}
                           title={'Voir le Making off sur youtube'}
                           href={MakingOffYoutube}>
                           Making Off
                        </Link>
                        <Link
                           className={
                              'hover-scale-105 btn btn-outline w-3/4 border-primary/40 bg-primary/60 opacity-90 drop-shadow-xl backdrop-blur-2xl hover:opacity-100'
                           }
                           target={'_blank'}
                           referrerPolicy={'no-referrer'}
                           title={'Voir le Making off sur youtube'}
                           href={AlbumSpotify}>
                           {currentLang === 'fr' ? "Écouter l'Album" : 'Listen to the Album'}
                        </Link>
                     </div>
                  </div>
                  <div
                     className={
                        'aspect-squares  mb-12 flex h-3/4 w-full flex-col items-center justify-end gap-3 transition duration-100 md:hidden'
                     }>
                     <Link
                        className={
                           'btn-base-100 hover-scale-105 btn btn-outline w-3/4 border-base-100/40 bg-base-100/80 opacity-90 hover:opacity-100'
                        }
                        target={'_blank'}
                        referrerPolicy={'no-referrer'}
                        title={'Voir le Making off sur youtube'}
                        href={MakingOffYoutube}>
                        Making Off
                     </Link>
                     <Link
                        className={
                           'hover-scale-105 btn btn-outline w-3/4 border-primary/40 bg-primary/60 opacity-90 drop-shadow-xl backdrop-blur-2xl hover:opacity-100'
                        }
                        target={'_blank'}
                        referrerPolicy={'no-referrer'}
                        title={'Écouter sur Spotify'}
                        href={AlbumSpotify}>
                        {currentLang === 'fr' ? "Écouter l'Album" : 'Listen to the Album'}
                     </Link>
                  </div>
                  {/*</Tooltip>*/}
               </Suspense>
            </article>
            <CtaButton />
         </div>
      </section>
   );
}

const MakingOffYoutube = 'https://www.youtube.com/watch?v=dMrhkQYBRww&t';
const AlbumSpotify = 'https://edithpiaf.lnk.to/SymLY';
