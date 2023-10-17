'use client';

import Artists from '@/collections/artists-collection';
import Legendis from '@/components/Legendis';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
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
            // style={{scale, y, opacity}}
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
               <article
                  className={
                     'flex w-full flex-col gap-1 border-t border-base-300/40 md:justify-around  md:pt-12'
                  }>
                  <Prose
                     className={
                        ' flex- prose flex-1 flex-col items-center justify-center text-center text-balance'
                     }>
                     <Text className={'m-0 mb-4 p-0'}>Découvrez</Text>
                     <h3 className={'m-0 p-0 text-3xl uppercase text-base-content'}>
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
                     {/*<Tooltip*/}
                     {/*   className={'tooltip-top tooltip-primary relative mx-auto my-8 h-fit w-fit'}*/}
                     {/*   message={'Voir le making off sur Youtube'}>*/}
                     <div className={'group relative mx-auto my-8 h-fit w-fit'}>
                        <div className='badge badge-primary absolute right-2 top-0 z-50 hidden translate-y-0 rotate-0 px-4 py-3 transition group-hover:translate-x-16 group-hover:translate-y-4 group-hover:rotate-12 group-hover:scale-105 group-hover:border-base-100 group-hover:bg-base-100 group-hover:text-base-content group-hover:opacity-40 md:flex'>
                           Nouvelle Sortie
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
                              href={'https://www.youtube.com/watch?v=dMrhkQYBRww&t=52s'}>
                              Making Off
                           </Link>
                           <Link
                              className={
                                 'hover-scale-105 btn btn-outline w-3/4 border-primary/40 bg-primary/60 opacity-90 drop-shadow-xl backdrop-blur-2xl hover:opacity-100'
                              }
                              target={'_blank'}
                              referrerPolicy={'no-referrer'}
                              title={'Voir le Making off sur youtube'}
                              href={'https://www.youtube.com/watch?v=dMrhkQYBRww&t=52s'}>
                              Album
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
                           href={'https://www.youtube.com/watch?v=dMrhkQYBRww&t=52s'}>
                           Voir le making off
                        </Link>
                        <Link
                           className={
                              'hover-scale-105 btn btn-outline w-3/4 border-primary/40 bg-primary/60 opacity-90 drop-shadow-xl backdrop-blur-2xl hover:opacity-100'
                           }
                           target={'_blank'}
                           referrerPolicy={'no-referrer'}
                           title={'Écouter sur Spotify'}
                           href={
                              'https://open.spotify.com/album/3ry22siNcsQCSbklOtdTR7?si=H_iRnoajRtOrHoXy0GTN4Q'
                           }>
                           Écouter l&apos;album
                        </Link>
                     </div>
                     {/*</Tooltip>*/}
                  </Suspense>
               </article>
               {/*<a*/}
               {/*   className={*/}
               {/*      'animate-bounce rounded-lg bg-base-100/10 transition hover:bg-base-100/60'*/}
               {/*   }*/}
               {/*   href={`#${presentation.id}`}>*/}
               {/*   <svg*/}
               {/*      xmlns='http://www.w3.org/2000/svg'*/}
               {/*      fill='none'*/}
               {/*      viewBox='0 0 24 24'*/}
               {/*      strokeWidth={1.5}*/}
               {/*      stroke='currentColor'*/}
               {/*      className='h-12 w-12 stroke-base-content/60'>*/}
               {/*      <path*/}
               {/*         strokeLinecap='round'*/}
               {/*         strokeLinejoin='round'*/}
               {/*         d='M19.5 8.25l-7.5 7.5-7.5-7.5'*/}
               {/*      />*/}
               {/*   </svg>*/}
               {/*</a>*/}
            </div>
         </motion.section>
         {/*<StarsBackground />*/}
      </>
   );
}

function SecondWindow() {
   const {artists, presentation, team, projects} = useNavigationStore(store => store.sections);

   return (
      <>
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
