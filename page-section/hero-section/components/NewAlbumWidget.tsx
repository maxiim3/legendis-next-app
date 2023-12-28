'use client';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import {cn} from '@/lib/utils';
import {OT_Album} from '@/page-section/hero-section/albums/album.factory';
import SanityImageBuilder from '@/page-section/hero-section/albums/sanity-image-builder';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import {cva} from 'class-variance-authority';
import {Music} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import {Suspense, useState} from 'react';

export default function NewAlbumWidget({albums}: {albums: OT_Album[]}) {
   return (
      <Carousel
         className='mx-auto h-full w-full md:w-3/4 p-8'
         opts={{
            align: 'center',
            loop: true,
         }}>
         <CarouselContent className={'mx-auto w-full lg:w-2/3'}>
            {albums.map((album, index) => (
               <Suspense
                  key={index}
                  fallback={<p>loading album</p>}>
                  <Album albumInfo={album} />
               </Suspense>
            ))}
         </CarouselContent>
         <CarouselPrevious variant={'ghost'} />
         <CarouselNext variant={'ghost'} />
      </Carousel>
   );
}

function Album({albumInfo}: {albumInfo: OT_Album}) {
   const [swap, setSwap] = useState(false);

   const currentLanguage = useAppLanguage(x => x.currentLanguage);

   const description = albumInfo.description?.[currentLanguage][0].children;
   const title = albumInfo.title?.[currentLanguage];
   const artist = albumInfo.compositeur;
   const year = albumInfo.releaseDate;
   const albumCover = SanityImageBuilder(albumInfo.album_cover).url();

   const baseCard = cva('rounded-card aspect-square');

   return (
      <CarouselItem
         className={cn(
            'rounded-card swap swap-flip relative border h-96  md:basis-1/2',
            // 'hover:swap-active ',
            swap && 'swap-active'
         )}>
         <Card className={cn(baseCard(), 'swap-off')}>
            <div
               className={
                  'absolute top-1/2 flex w-full flex-row items-center justify-evenly gap-2 '
               }>
               <Button
                  onClick={() => setSwap(true)}
                  className={'swap-button'}>
                  Plus d&apos;infos
               </Button>
               {albumInfo.spotifyURL && (
                  <Button asChild>
                     <Link
                        href={albumInfo.spotifyURL}
                        prefetch={false}>
                        <Music />
                     </Link>
                  </Button>
               )}
            </div>
            <img
               alt={description && description[0].text}
               src={albumCover}
               className={'object-cover object-center'}
            />
         </Card>
         <Card
            className={cn(baseCard(), 'swap-on flex items-center justify-center bg-base-100 p-6')}>
            <h3 className='card-title text-2xl font-semibold'>{title && title}</h3>
            {description &&
               description.map((desc, index) => {
                  return (
                     <p
                        key={index}
                        className='card-side'>
                        {desc.text}
                     </p>
                  );
               })}
            <Button
               onClick={() => setSwap(false)}
               className={'swap-button absolute right-8 top-8 rounded-full'}>
               X
            </Button>
         </Card>
      </CarouselItem>
   );
}
