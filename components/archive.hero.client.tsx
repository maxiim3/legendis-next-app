'use client';

import LegendisWIthAnimatedText from '@/components/legendis-with-animated-text.client';
import LogoMotion from '@/components/logo-motion.client';
import {useAppState} from '@/components/video-player';
import {cn} from '@/lib/utils';
import {motion} from 'framer-motion';
import React from 'react';

export function Hero() {
   const {isVideoLoaded, componentMounted} = useAppState(state => state);
   const path = {
      duration: 1,
      delay: 1,
   };

   return (
      <>
         <motion.section
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            transition={{duration: 2, delay: 1}}
            className={cn('absolute z-50 h-screen w-screen bg-base-100/80 p-4 sm:p-8 md:p-24')}>
            <LogoMotion
               longPath={path}
               shortPath={path}
               fadeout={path.delay + path.duration}
            />
         </motion.section>
         <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay: 2}}
            className={cn(
               isVideoLoaded && componentMounted
                  ? 'relative z-50 h-screen w-screen p-4 sm:p-8 md:p-24'
                  : 'hidden'
            )}>
            <div
               className={
                  'relative flex h-full w-full flex-col gap-6 rounded-3xl bg-base-100/70 p-2 shadow-2xl shadow-base-100/60 drop-shadow-xl backdrop-blur-sm sm:px-4 sm:py-2 '
               }>
               <motion.header
                  initial={{opacity: 0}}
                  animate={{
                     opacity: 0.8,
                  }}
                  transition={{duration: 1, delay: 3}}
                  className={'relative h-24 w-24'}>
                  <LegendisWIthAnimatedText
                     delay={path.delay + path.duration}
                     duration={0.5}
                  />
               </motion.header>
               <motion.main
                  className={'mx-auto flex h-full w-full flex-col items-center gap-8'}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 1, delay: 3}}>
                  <div className={'prose flex flex-col items-center text-center text-balance'}>
                     <h1 className={'m-0 uppercase'}>Legendis</h1>
                     <small>Un label Jamais 203 productions</small>
                  </div>
                  <div
                     className={
                        'flex w-full flex-col gap-1 border-t border-base-300/40 pt-12 md:flex-row md:justify-around'
                     }>
                     <aside
                        className={'h-48 w-1/3 animate-pulse rounded-xl bg-base-300/70'}></aside>
                     <div
                        className={
                           ' flex- prose flex-1 flex-col items-center justify-center text-center text-balance'
                        }>
                        <h2>Edith Piaf Symphonique</h2>
                        <p>Sortie sortie vendredi 19 octobre 2023</p>
                        <small>En partenariat avec Warner Music France</small>
                     </div>
                  </div>
               </motion.main>
            </div>
         </motion.section>
      </>
   );
}
