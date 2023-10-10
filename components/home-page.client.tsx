'use client';

import Legendis from '@/components/Legendis';
import {SectionTemplateWrapper} from '@/components/section-template-wrapper.client';
import VideoPlayer from '@/components/video-player';
import {useNavigationStore} from '@/lib/navigation.store';
import {cn} from '@/lib/utils';
import {cva} from 'class-variance-authority';
import React, {ComponentPropsWithoutRef, Suspense} from 'react';
import {Spotify} from 'react-spotify-embed';

const Text = ({children, id, className}: ComponentPropsWithoutRef<'p'>) => (
   <p
      id={id}
      className={cn(
         'text-sm font-normal leading-relaxed tracking-wider text-primary text-balance sm:text-base',
         className
      )}>
      {children}
   </p>
);

export default function Home() {
   const {artists, presentation, team, projects} = useNavigationStore(store => store.sections);

   const heading = cva('font-roboto font-normal text-lg sm:text-xl uppercase');

   return (
      <main
         className={
            'h-min-screen prose  mx-auto  mt-24 flex w-screen flex-col items-center justify-center bg-transparent px-1 font-roboto text-balance sm:px-3 md:px-8  md:py-12 lg:px-24'
         }>
         <div className='fixed left-0 -top-[300px] h-screen w-screen overflow-hidden'>
            <Suspense>
               <VideoPlayer />
            </Suspense>
         </div>
         <h1 className={'sr-only text-xl font-light uppercase text-primary'}>Legendis</h1>
         {/*<StarsBackground />*/}
         <SectionTemplateWrapper
            slug={presentation.slug}
            className={'p-2 sm:p-4 md:p-8'}
            id={presentation.id}>
            <InnerStack>
               <h2 className={cn(heading())}>Legendis</h2>
               <Text>Un label Jamais 203 Productions</Text>
               <Text>
                  Bienvenue dans le monde de Legendis, un label musical dédié à la musique
                  symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de
                  musique - Jérôme Kuhn, chef d&apos;orchestre, Nathan Stornetta, compositeur, et
                  Samuel Briand, ingénieur du son - Legendis s&apos;efforce de repousser les limites
                  de l&apos;expression musicale.
               </Text>
               <Legendis className={'w-full fill-primary'} />
               <Text>
                  Notre stratégie consiste à produire des albums ambitieux, captivant l&apos;essence
                  même de la musique de film, des opéras et de la musique classique. Nous croyons
                  fermement que ces genres intemporels méritent une place de choix dans le paysage
                  musical contemporain.
               </Text>

               <Text>
                  Chez <strong>Legendis</strong>, nous aimons également explorer de nouvelles
                  avenues et embrasser l&apos;innovation musicale. Nous avons à cœur de créer des
                  albums featuring, fusionnant la musique électronique ou le rap par exemple, avec
                  les riches sonorités de l&apos;orchestre symphonique. Cette démarche audacieuse
                  nous permet de créer des expériences musicales uniques, mêlant les genres et
                  attirant un public varié.
               </Text>

               <Text>
                  Nous mettons un point d&apos;honneur à travailler avec des artistes talentueux,
                  des solistes émérites et des compositeurs émergents, afin de donner vie à des
                  projets musicaux d&apos;une grande envergure. Notre équipe s&apos;engage à
                  garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce à
                  notre expertise technique et à notre passion pour le son.
               </Text>

               <Text>
                  Chez <strong>Legendis</strong>, nous croyons que la musique est un langage
                  universel qui transcende les frontières et les époques. Nous aspirons à émouvoir,
                  à inspirer et à toucher les cœurs de notre public à travers nos productions
                  musicales. Bienvenue dans l&apos;univers sonore de Legendis.
               </Text>
            </InnerStack>
         </SectionTemplateWrapper>
         <SectionTemplateWrapper
            slug={team.slug}
            className={'p-2 sm:p-4 md:p-8'}
            id={team.id}>
            <InnerStack>
               <h2 className={cn(heading())}>Team</h2>
               <Text>Un label Jamais 203 Productions</Text>
               <Text>
                  Bienvenue dans le monde de Legendis, un label musical dédié à la musique
                  symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de
                  musique - Jérôme Kuhn, chef d&apos;orchestre, Nathan Stornetta, compositeur, et
                  Samuel Briand, ingénieur du son - Legendis s&apos;efforce de repousser les limites
                  de l&apos;expression musicale.
               </Text>
            </InnerStack>
         </SectionTemplateWrapper>
         <SectionTemplateWrapper
            className={'p-2 sm:p-4 md:p-8'}
            slug={artists.slug}
            id={artists.id}>
            <InnerStack>
               <h2>Les artistes</h2>
               <div className={'flex flex-row flex-wrap items-center justify-center gap-12'}>
                  {Artists.map((artist, index) => (
                     <SpotifyPlayer
                        key={index}
                        aria-label={artist.artist}
                        link={artist.link}
                     />
                  ))}
               </div>
            </InnerStack>
         </SectionTemplateWrapper>
      </main>
   );
}
const InnerStack = (props: ComponentPropsWithoutRef<'main'>) => <main {...props} />;

type SpotifyPlayerProps = ComponentPropsWithoutRef<'iframe'> & {
   link: string;
};
const SpotifyPlayer = ({className, link, ...props}: SpotifyPlayerProps) => (
   <Spotify
      aria-label={props['aria-label']}
      link={link}
      className={cn('flex-1', className)}
      {...props}
   />
);

class Artist {
   private readonly _artist: string;
   private readonly _link: string;
   private readonly _image?: string;

   private constructor(artist: string, link: string, image?: string) {
      this._artist = artist;
      this._link = link;
      this._image = image;
   }

   static from(artist: string, link: string, image?: string) {
      return new Artist(artist, link, image);
   }

   get artist(): string {
      return this._artist;
   }

   get link(): string {
      return this._link;
   }

   get image(): string | null {
      return this._image || null;
   }
}

const Artists = [
   Artist.from(
      'Nathan Stornetta',
      'https://open.spotify.com/artist/7wEIfjjvLYNiKhM9IqGg0u?si=ofDGQJb3TA-0Vs7I6F8Etw'
   ),
   Artist.from(
      'Samuel Pegg',
      'https://open.spotify.com/artist/2kb6YOViNugJV7cxadLL1j?si=bC_SW49zTIi-ULfDlb-Z8w'
   ),
   Artist.from(
      'Jérôme Kuhn',
      'https://open.spotify.com/artist/09DdZDA7vYqgkcSHmV5xMa?si=VU2qWpyhSN6HRfj7A28_Aw'
   ),
   Artist.from(
      'Martin Batchelar',
      'https://open.spotify.com/artist/5TQCWOTj9cNE4P0C7eiZps?si=ia13S8XkSxalcCGL2xaDVg'
   ),
   Artist.from(
      'Prague Symphonic Ensemble',
      'https://open.spotify.com/artist/4ZpWvstPub2enxQvWlhKb1?si=K_iJZHswSZ-soBk0DX6ykQ'
   ),
   Artist.from(
      'Édith Piaf, Legendis Orchestra',
      'https://open.spotify.com/album/3O3XTwbadfsE3fY06v4Faf?si=HBSEt0imSCyY3GUoBnUqMw'
   ),
   Artist.from(
      'Mon plus beau nöel',
      'https://open.spotify.com/album/1uE8d5ha0lGvAqSDjG6HTl?si=0TkfH9MUSouKcIEH1-0oNQ'
   ),
];
