'use client';

import Artists from '@/collections/artists-collection';
import Legendis from '@/components/Legendis';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import Tooltip from '@/components/atoms/tooltip';
import MemberCard from '@/components/member-card';
import {SectionTemplateWrapper} from '@/components/section-template-wrapper.client';
import SpotifyPlayer from '@/components/spotify-player';
import {useNavigationStore} from '@/stores/navigation.store';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, {Suspense} from 'react';

export default function HomeSections() {
   const {artists, presentation, team, projects} = useNavigationStore(store => store.sections);

   let {scrollYProgress} = useScroll();

   let scale = useTransform(scrollYProgress, [0, 1], ['100%', '200%']);
   let y = useTransform(scrollYProgress, [0, 1], ['0', '10%']);
   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
   return (
      <>
         <motion.section
            style={{scale, y, opacity}}
            className={
               'relative top-0 flex h-screen w-screen flex-col items-center justify-center'
            }>
            <Prose
               className={
                  '  relative flex  w-screen flex-col items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-base-100/30 py-8 shadow-[0_4px_20px_2px_rgba(0,0,0,0.6)] drop-shadow-xl backdrop-blur'
               }>
               <Prose>
                  <h1 className={'sr-only text-xl font-light uppercase text-primary'}>Legendis</h1>
                  <Legendis className={'h-24 w-48 fill-primary'} />
                  <Heading2 className={'mb-0 text-4xl text-base-content'}>Legendis</Heading2>
                  <small className={'text-primary/80'}>Un label Jamais 203 Productions</small>
               </Prose>
               <article
                  className={
                     'flex w-full flex-col gap-1 border-t border-base-300/40 pt-12  md:justify-around'
                  }>
                  <Prose
                     className={
                        ' flex- prose flex-1 flex-col items-center justify-center text-center text-balance'
                     }>
                     <Text className={'m-0 p-0 mb-4'}>Découvrez</Text>
                     <h3 className={'m-0 p-0 uppercase text-3xl text-base-content'}>
                        Edith Piaf Symphonique
                     </h3>
                     <small>En partenariat avec Warner Music France</small>
                  </Prose>
                  <Suspense
                     fallback={
                        <div
                           className={
                              'mx-auto my-8 aspect-square h-full w-48 animate-pulse overflow-hidden rounded-xl bg-base-300/70'
                           }
                        />
                     }>
                     <Tooltip
                        className={'tooltip-top my-8 tooltip-primary mx-auto h-fit w-fit'}
                        message={'Voir le making off sur Youtube'}>
                        <Link
                           className={'group mx-auto w-1/2 max-w-[488px]'}
                           target={'_blank'}
                           referrerPolicy={'no-referrer'}
                           title={'Voir le Making off sur youtube'}
                           href={'https://www.youtube.com/watch?v=dMrhkQYBRww&t=52s'}>
                           <Image
                              className={
                                 'mx-auto aspect-square w-full overflow-hidden rounded-xl object-cover  object-center transition group-hover:scale-105 group-hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.8)]'
                              }
                              alt={'Edith Piaf Symphonique'}
                              src={'/assets/piaf.jpg'}
                              width={200}
                              height={200}
                           />
                        </Link>
                     </Tooltip>
                  </Suspense>
               </article>
               <a href={`#${presentation.id}`}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.5}
                     stroke='currentColor'
                     className='h-12 w-12 animate-bounce stroke-base-content/60'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                     />
                  </svg>
               </a>
            </Prose>
         </motion.section>
         {/*<StarsBackground />*/}
         <SectionTemplateWrapper
            slug={presentation.slug}
            className={'mt-4 h-144 p-2 px-1  sm:px-3 '}
            id={presentation.id}>
            <Prose className={'mx-auto pb-8 pt-48 text-center'}>
               {/*<Heading2>Bienvenus...</Heading2>*/}
               <Text>
                  Bienvenus dans le monde de Legendis, un label musical dédié à la musique
                  symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de
                  musique - Jérôme Kuhn, chef d&apos;orchestre, Nathan Stornetta, compositeur, et
                  Samuel Briand, ingénieur du son - Legendis s&apos;efforce de repousser les limites
                  de l&apos;expression musicale.
               </Text>
               {/*<Text>*/}
               {/*   Notre stratégie consiste à produire des albums ambitieux, captivant l&apos;essence*/}
               {/*   même de la musique de film, des opéras et de la musique classique. Nous croyons*/}
               {/*   fermement que ces genres intemporels méritent une place de choix dans le paysage*/}
               {/*   musical contemporain.*/}
               {/*</Text>*/}

               {/*<Text>*/}
               {/*   Chez <strong>Legendis</strong>, nous aimons également explorer de nouvelles*/}
               {/*   avenues et embrasser l&apos;innovation musicale. Nous avons à cœur de créer des*/}
               {/*   albums featuring, fusionnant la musique électronique ou le rap par exemple, avec*/}
               {/*   les riches sonorités de l&apos;orchestre symphonique. Cette démarche audacieuse*/}
               {/*   nous permet de créer des expériences musicales uniques, mêlant les genres et*/}
               {/*   attirant un public varié.*/}
               {/*</Text>*/}

               {/*<Text>*/}
               {/*   Nous mettons un point d&apos;honneur à travailler avec des artistes talentueux,*/}
               {/*   des solistes émérites et des compositeurs émergents, afin de donner vie à des*/}
               {/*   projets musicaux d&apos;une grande envergure. Notre équipe s&apos;engage à*/}
               {/*   garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce à*/}
               {/*   notre expertise technique et à notre passion pour le son.*/}
               {/*</Text>*/}

               <Text>
                  Chez <strong>Legendis</strong>, nous croyons que la musique est un langage
                  universel qui transcende les frontières et les époques. Nous aspirons à émouvoir,
                  à inspirer et à toucher les cœurs de notre public à travers nos productions
                  musicales. Bienvenue dans l&apos;univers sonore de Legendis.
               </Text>
            </Prose>
         </SectionTemplateWrapper>
         <SectionTemplateWrapper
            slug={team.slug}
            id={team.id}>
            <Prose className={'mx-auto text-center'}>
               <Heading2>Les membres</Heading2>
               <Text className='mx-auto pb-6 text-center text-3xl font-extrabold text-base-content/80 xl:text-4xl'>
                  Les membres de notre équipe talentueuse
               </Text>
            </Prose>
            <div className='flex w-full '>
               <MemberCard />
            </div>
         </SectionTemplateWrapper>
         <SectionTemplateWrapper
            className={'w-full px-2 sm:px-4 md:px-8 '}
            slug={artists.slug}
            id={artists.id}>
            <Prose className={'mx-auto text-center'}>
               <Heading2>Les artistes</Heading2>
               <Text className='mx-auto pb-6 text-center text-3xl font-extrabold text-base-content/80 xl:text-4xl'>
                  Écoutez nos albums et ceux de nos artistes
               </Text>
            </Prose>
            <div className={'flex w-full flex-row flex-wrap items-center justify-center gap-3'}>
               {Artists.map((artist, index) => (
                  <SpotifyPlayer
                     key={index}
                     aria-label={artist.artist}
                     link={artist.link}
                  />
               ))}
            </div>
         </SectionTemplateWrapper>
      </>
   );
}
