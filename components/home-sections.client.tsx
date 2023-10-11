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
import React from 'react';

export default function HomeSections() {
   const {artists, presentation, team, projects} = useNavigationStore(store => store.sections);

   let {scrollYProgress} = useScroll();

   let scale = useTransform(scrollYProgress, [0, 1], ['100%', '200%']);
   let y = useTransform(scrollYProgress, [0, 1], ['0', '10%']);
   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
   return (
      <>
         <motion.div
            style={{scale, y, opacity}}
            className={
               'relative top-0 flex h-screen w-screen flex-col items-center justify-center'
            }>
            <Prose
               className={
                  'relative flex aspect-portrait max-h-144 w-screen flex-col items-center justify-center gap-2 rounded-2xl bg-base-100/30 py-8 shadow-[0_4px_20px_2px_rgba(0,0,0,0.6)] drop-shadow-xl backdrop-blur'
               }>
               <h1 className={'sr-only text-xl font-light uppercase text-primary'}>Legendis</h1>
               <Legendis className={'h-24 w-48 fill-primary'} />
               <Heading2 className={'mb-0 text-4xl text-base-content'}>Legendis</Heading2>
               <small className={'text-primary/80'}>Un label Jamais 203 Productions</small>
               <a
                  className={'mt-20'}
                  href={`#${presentation.id}`}>
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
         </motion.div>
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
