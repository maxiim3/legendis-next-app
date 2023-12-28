import sanityClient from '@/lib/singleton-sanity-client';
import {ContactRedirection} from '@/page-section/contact-redirection/contact-redirection';
import {AlbumFactory} from '@/page-section/hero-section/albums/album.factory';
import {OT_AlbumFromSanity} from '@/page-section/hero-section/albums/album.types';
import HeroSection from '@/page-section/hero-section/hero-section';
import Members from '@/page-section/members-presentation/members';
import React from 'react';

const LegendisPresentation = React.lazy(
   () => import('@/page-section/legendis-presentation-section/legendis-presentation')
);

async function getAllAlbums() {
   const albumsResponses: OT_AlbumFromSanity[] = await sanityClient.fetch(`*[_type == "album"]`);
   const albums: ReturnType<typeof AlbumFactory>[] = albumsResponses.map(albumRes =>
      AlbumFactory(albumRes)
   );
   return albums;
}

export default async function Page() {
   const albums: Awaited<ReturnType<typeof AlbumFactory>[]> = await getAllAlbums();
   return (
      <main
         className={
            'h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance '
         }>
         <HeroSection albums={albums} />
         <div>
            <LegendisPresentation />
            <Members />
            <ContactRedirection />
         </div>
      </main>
   );
}
