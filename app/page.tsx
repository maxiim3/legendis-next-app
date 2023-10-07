'use client';

import Legendis from '@/components/Legendis';
import StarsBackground from '@/components/StarsBackground';
import {SectionTemplateWrapper} from '@/components/section-template-wrapper.client';
import {useNavigationStore} from '@/lib/navigation.store';
import React from 'react';
import {Spotify} from 'react-spotify-embed';

export default function Home() {
   const {artists, presentation, team, projects} = useNavigationStore(store => store.sections);
   return (
      <main
         className={
            'h-min-screen prose mx-auto mt-24 flex w-screen flex-col items-center justify-center bg-base-100 px-1 text-balance sm:px-3 md:px-8  md:py-12 lg:px-24'
         }>
         <h1 className={'sr-only text-xl font-light uppercase text-primary'}>Legendis</h1>
         <StarsBackground />
         <SectionTemplateWrapper
            slug={presentation.slug}
            id={presentation.id}>
            <h2>Legendis</h2>
            <p>Un label Jamais 203 Productions</p>
            <p>
               Bienvenue dans le monde de Legendis, un label musical dédié à la musique symphonique
               et romantique. Fondé en octobre 2021 par trois amis passionnés de musique - Jérôme
               Kuhn, chef d&apos;orchestre, Nathan Stornetta, compositeur, et Samuel Briand,
               ingénieur du son - Legendis s&apos;efforce de repousser les limites de
               l&apos;expression musicale.
            </p>
            <Legendis className={'fill-primary'} />
            <p>
               Notre stratégie consiste à produire des albums ambitieux, captivant l&apos;essence
               même de la musique de film, des opéras et de la musique classique. Nous croyons
               fermement que ces genres intemporels méritent une place de choix dans le paysage
               musical contemporain.
            </p>

            <p>
               Chez <strong>Legendis</strong>, nous aimons également explorer de nouvelles avenues
               et embrasser l&apos;innovation musicale. Nous avons à cœur de créer des albums
               featuring, fusionnant la musique électronique ou le rap par exemple, avec les riches
               sonorités de l&apos;orchestre symphonique. Cette démarche audacieuse nous permet de
               créer des expériences musicales uniques, mêlant les genres et attirant un public
               varié.
            </p>

            <p>
               Nous mettons un point d&apos;honneur à travailler avec des artistes talentueux, des
               solistes émérites et des compositeurs émergents, afin de donner vie à des projets
               musicaux d&apos;une grande envergure. Notre équipe s&apos;engage à garantir une
               qualité sonore exceptionnelle dans chaque enregistrement, grâce à notre expertise
               technique et à notre passion pour le son.
            </p>

            <p>
               Chez <strong>Legendis</strong>, nous croyons que la musique est un langage universel
               qui transcende les frontières et les époques. Nous aspirons à émouvoir, à inspirer et
               à toucher les cœurs de notre public à travers nos productions musicales. Bienvenue
               dans l&apos;univers sonore de ***Legendis***.
            </p>
         </SectionTemplateWrapper>
         <SectionTemplateWrapper
            slug={artists.slug}
            id={artists.id}>
            <h2>Les artistes</h2>
            <div className={'flex flex-row flex-wrap gap-12'}>
               <Spotify
                  aria-label={'Nathan Stornetta'}
                  link={
                     'https://open.spotify.com/artist/7wEIfjjvLYNiKhM9IqGg0u?si=ofDGQJb3TA-0Vs7I6F8Etw'
                  }
               />
               <Spotify
                  aria-label={'Samuel Pegg'}
                  link={
                     'https://open.spotify.com/artist/2kb6YOViNugJV7cxadLL1j?si=bC_SW49zTIi-ULfDlb-Z8w'
                  }
               />
               <Spotify
                  aria-label={'Jérôme Kuhn'}
                  link={
                     'https://open.spotify.com/artist/09DdZDA7vYqgkcSHmV5xMa?si=VU2qWpyhSN6HRfj7A28_Aw'
                  }
               />
               <Spotify
                  aria-label={'Martin Batchelar'}
                  link={
                     'https://open.spotify.com/artist/5TQCWOTj9cNE4P0C7eiZps?si=ia13S8XkSxalcCGL2xaDVg'
                  }
               />
               <Spotify
                  aria-label={'Prague Symphonic Ensemble'}
                  link={
                     'https://open.spotify.com/artist/4ZpWvstPub2enxQvWlhKb1?si=K_iJZHswSZ-soBk0DX6ykQ'
                  }
               />
               <Spotify
                  aria-label={'Édith Piaf, Legendis Orchestra'}
                  link={
                     'https://open.spotify.com/album/3O3XTwbadfsE3fY06v4Faf?si=HBSEt0imSCyY3GUoBnUqMw'
                  }
               />
               <Spotify
                  aria-label={'Mon plus beau nöel'}
                  link={
                     'https://open.spotify.com/album/1uE8d5ha0lGvAqSDjG6HTl?si=0TkfH9MUSouKcIEH1-0oNQ'
                  }
               />
            </div>
         </SectionTemplateWrapper>
      </main>
   );
}
