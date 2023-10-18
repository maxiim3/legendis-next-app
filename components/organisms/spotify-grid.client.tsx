'use client';

import Artist from '@/builders/artist.builder';
import artistsCollection, {default as Artists} from '@/collections/artists-collection';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import SpotifyPlayer from '@/components/molecules/spotify-player';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';
import {useNavigationStore} from '@/stores/navigation.store';
import React, {Suspense, useState} from 'react';

export default function SpotifyGrid() {
   const {artists} = useNavigationStore(store => store.sections);
   const [selectedArtist, setSelectedArtist] = useState<Artist>(Artists[0]);

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
         <article
            className={
               'min-h-128 flex w-full flex-col rounded-md border border-base-content/20 bg-base-200 p-1 md:flex-row'
            }>
            <aside
               className={
                  'flex w-full gap-4 border-b border-base-content/20 px-1 py-2 md:w-64 md:flex-col md:border-b-0 md:border-r md:px-3 md:py-8'
               }>
               <h2 className={'hidden text-center text-xl font-bold md:block'}>Artists</h2>
               <nav className={'hidden flex-col gap-2 md:flex'}>
                  {Artists.map((artist, index) => (
                     <p
                        key={index}
                        onClick={() => setSelectedArtist(artist)}
                        className={cn(
                           'cursor-pointer text-base-content/80 hover:text-base-content',
                           selectedArtist.artist === artist.artist &&
                              'cursor-default text-base-content'
                        )}>
                        {artist.artist}
                     </p>
                  ))}
               </nav>
               <Select
                  value={selectedArtist.artist}
                  onValueChange={value => {
                     const artist = artistsCollection.find(artist => artist.artist === value)!;
                     setSelectedArtist(artist);
                  }}>
                  <SelectTrigger className='w-[180px] md:hidden '>
                     <SelectValue placeholder='Artist' />
                  </SelectTrigger>
                  <SelectContent className={'md:hidden'}>
                     {Artists.map((artist, index) => (
                        <SelectItem
                           data-state={
                              selectedArtist.artist === artist.artist ? 'checked' : 'unchecked'
                           }
                           aria-selected={selectedArtist.artist === artist.artist}
                           value={artist.artist}
                           key={index}
                           className={cn(
                              'cursor-pointer text-base-content/80 hover:text-base-content',
                              selectedArtist.artist === artist.artist &&
                                 'cursor-default text-base-content'
                           )}>
                           <button
                              onClick={() => {
                                 setSelectedArtist(artist);
                              }}>
                              {artist.artist}
                           </button>
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </aside>
            <main className={'h-full flex-1 space-y-3 px-6 pb-6 pt-3'}>
               {selectedArtist && (
                  <>
                     <header className={'w-full p-2'}>
                        <h3>{selectedArtist.artist}</h3>
                     </header>
                     <Prose>
                        <Text className={'text-left tracking-normal'}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi
                           consectetur in nemo rerum. Architecto dolorum eius eum fugit in incidunt
                           inventore ipsa laborum magni maiores nihil obcaecati odio, odit optio
                           perferendis quaerat quas quidem quo repellat sint sunt temporibus,
                           voluptatum. Alias architecto deserunt eos maxime, nobis quo quos ratione
                           reiciendis sequi vel vero.
                        </Text>
                     </Prose>
                     <Suspense fallback={<Skeleton className={'h-full w-full'} />}>
                        <SpotifyPlayer
                           className={'w-full'}
                           link={selectedArtist.link}
                        />
                     </Suspense>
                  </>
               )}
            </main>
         </article>

         {/*<div className={'flex w-full flex-row flex-wrap items-center justify-center gap-3'}>*/}
         {/*   {Artists.map((artist, index) => (*/}
         {/*      <SpotifyPlayer*/}
         {/*         key={index}*/}
         {/*         aria-label={artist.artist}*/}
         {/*         link={artist.link}*/}
         {/*      />*/}
         {/*   ))}*/}
         {/*</div>*/}
      </SectionTemplateWrapper>
   );
}
