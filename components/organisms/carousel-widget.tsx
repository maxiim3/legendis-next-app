'use client';

import Heading2 from '@/components/atoms/heading-2';
import {AlbumFactory} from '@/lib/sanity/album';
import ImageBuilder from '@/lib/sanity/image.builder';
import {getAllAlbums} from '@/lib/sanity/service';
import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef, Suspense, useEffect, useMemo, useState} from 'react';

export default function CarouselWidget() {
   const [albums, setAlbums] = useState<ReturnType<typeof AlbumFactory>[] | null>(null);

   const [currentIdx, setCurrentIdx] = useState<number>(0);
   const [previousIdx, setPreviousIdx] = useState<number>(0);
   const [nextIdx, setNextIdx] = useState<number>(0);

   useEffect(() => {
      getAllAlbums().then(res => {
         setAlbums(res);
         setPreviousIdx(res.length - 1);
         setNextIdx(0 + 1);
      });
   }, []);

   const handlePreviousItem = (idx: number) => {
      if (idx === 0) return albums!.length - 1;
      else return idx - 1;
   };
   const handleNextItem = (idx: number) => {
      if (idx === albums!.length - 1) return 0;
      else return idx + 1;
   };

   const slideBackward = () => {
      setCurrentIdx(handlePreviousItem);
      setPreviousIdx(handlePreviousItem);
      setNextIdx(handlePreviousItem);
   };
   const slideForward = () => {
      setCurrentIdx(handleNextItem);
      setPreviousIdx(handleNextItem);
      setNextIdx(handleNextItem);
   };

   if (!albums) {
      return <p>No albumm found...</p>;
   }

   return (
      <ViewPort>
         <Heading2>Nos Albums</Heading2>
         <Suspense fallback={<p>Fetching albums...</p>}>
            <AlbumContainer>
               <NavigationButton
                  className={'left-12'}
                  handler={slideBackward}>
                  {'<'} Back
               </NavigationButton>
               <NavigationButton
                  className={'right-12'}
                  handler={slideForward}>
                  Next {'>'}
               </NavigationButton>
               <AlbumCard
                  idx={previousIdx}
                  album={albums[previousIdx]}
               />
               <AlbumCard
                  center
                  idx={currentIdx}
                  album={albums[currentIdx]}
               />
               <AlbumCard
                  idx={nextIdx}
                  album={albums[nextIdx]}
               />
            </AlbumContainer>
         </Suspense>
      </ViewPort>
   );
}

///////////// ViewPort Screen ////////////////
function ViewPort({children}: ComponentPropsWithoutRef<'div'>) {
   return <div className='h-screen w-full'>{children}</div>;
}

//////////////// Album Container //////////////
function AlbumContainer({children}: ComponentPropsWithoutRef<'div'>) {
   return (
      <div
         className='relative flex h-128 w-full items-center
            justify-center gap-4 p-8'>
         {children}
      </div>
   );
}

//////////////// NAVIVATION BUTTON ///////////////////
type NavigationButtonProps = ComponentPropsWithoutRef<'button'> & {handler: () => void};

function NavigationButton({handler, children, className}: NavigationButtonProps) {
   return (
      <button
         onClick={handler}
         className={cn('z-50 btn btn-outline btn-lg absolute top-1/2', className)}>
         {children}
      </button>
   );
}

//////////////////// Album Component //////////////////////////
function AlbumCard({
   album,
   idx,
   center = false,
}: {
   album: ReturnType<typeof AlbumFactory>;
   idx: number;
        center?: boolean;
    }) {
    return (
        <div
            key={idx}
            className={cn(
                'reltive aspect-square w-48 rounded-lg bg-base-100',
                center 
                    ? 'scale-125 shadow-base-200 shadow-xl z-40' 
                    : 'shadow-[0_8px_10px_#333333] z-30 grayscale blur-sm',
                'flex items-center justify-center text-6xl',
                "card w-96 bg-base-100 shadow-xl image-full"
            )}>
            <div className='absolute left-0 top-0 w-full overflow-hidden'>
                <img
                    className='aspect-square object-cover'
                    src={ImageBuilder(album.album_cover).url()}
                />
            </div>
            {album?.title?.fr}
        </div>
    );
}
