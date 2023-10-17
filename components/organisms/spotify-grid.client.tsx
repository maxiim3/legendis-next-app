'use client'

import Artists from '@/collections/artists-collection';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import SpotifyPlayer from '@/components/molecules/spotify-player';
import {useNavigationStore} from '@/stores/navigation.store';
import React from 'react';

export default function SpotifyGrid() {
   const {artists} = useNavigationStore(store => store.sections);
   return (
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
   );
}
