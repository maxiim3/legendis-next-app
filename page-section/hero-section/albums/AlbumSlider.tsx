'use client';
//////////////// TODO Adapt Skeleton
import Heading2 from '@/components/atoms/heading-2';

import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {AlbumFactory, OT_Album} from '@/page-section/hero-section/albums/album.factory';
import SanityImageBuilder from '@/page-section/hero-section/albums/sanity-image-builder';
import {useAnimate} from 'framer-motion';
import React, {ComponentPropsWithoutRef, Suspense, useEffect, useState} from 'react';

/**
useCarouselWidget is a custom hook that handles the state and interactions for a carousel widget.

It takes in an array of albums and returns:

- currentIdx - the index of the currently centered album
- setCurrentIdx - function to update currentIdx
- handlePreviousItem - handler to move to previous album
- handleNextItem - handler to move to next album
- calculateDistance - calculates distance of an album from the currentIdx

currentIdx is initialized to 0.

handlePreviousItem moves currentIdx to the previous album index, looping to end if at 0.

handleNextItem moves currentIdx to the next album index, looping to start if at end.

calculateDistance determines the distance from currentIdx:
- Positive if album index is ahead of current
- Negative if album index is behind current
- Adjusted so current album distance is always 1

This allows computing visual positions based on distance.

The hook manages all state and interactions for a carousel.
**/

function useCarouselWidget(albums: OT_Album[]) {
   const [currentIdx, setCurrentIdx] = useState<number>(0);

   const handlePreviousItem = () => {
      if (currentIdx === 0) setCurrentIdx(albums!.length - 1);
      else setCurrentIdx(currentIdx - 1);
   };
   const handleNextItem = () => {
      if (currentIdx === albums!.length - 1) setCurrentIdx(0);
      else setCurrentIdx(currentIdx + 1);
   };

   const calculateDistance = (idx: number): number => {
      const distance = currentIdx - idx;
      return distance < 0 ? distance - 1 : distance + 1;
   };

   return {
      currentIdx,
      setCurrentIdx,
      handlePreviousItem,
      handleNextItem,
      calculateDistance,
   };
}

export default function CarouselWidget({albums}: {albums: OT_Album[]}) {
   const {calculateDistance, setCurrentIdx, currentIdx, handleNextItem, handlePreviousItem} =
      useCarouselWidget(albums);

   if (!albums) {
      return <p>No albumm found...</p>;
   }
   return (
      <Carousel.RootContainer>
         <Suspense fallback={<p>Fetching albums...</p>}>
            <Heading2>Nos Albums : {albums[currentIdx].title?.fr}</Heading2>
            <Carousel.Card.Slot>
               <Carousel.NavButton
                  className={'left-12'}
                  onClick={handlePreviousItem}>
                  {'<'}
               </Carousel.NavButton>
               <Carousel.NavButton
                  className={'right-12'}
                  onClick={handleNextItem}>
                  {'>'}
               </Carousel.NavButton>
               {albums.map((album, idx: number) => {
                  return (
                     <Suspense
                        key={album._id}
                        fallback={<Album.AlbumSkeleton />}>
                        <Album.CardElement
                           onClick={() => setCurrentIdx(idx)}
                           distance={calculateDistance(idx)}
                           album={album}
                        />
                     </Suspense>
                  );
               })}
            </Carousel.Card.Slot>
         </Suspense>
      </Carousel.RootContainer>
   );
}

namespace Carousel {
   export function RootContainer({children}: ComponentPropsWithoutRef<'div'>) {
      return <div className='m-1 mx-auto h-full w-full p-2'>{children}</div>;
   }

   export namespace Card {
      export function Slot({children}: ComponentPropsWithoutRef<'div'>) {
         return (
            <div className='relative flex h-full w-full items-center justify-center gap-12 p-8 md:h-128'>
               {children}
            </div>
         );
      }
   }

   type NavigationButtonProps = ComponentPropsWithoutRef<'button'> & {};

   export function NavButton({children, className, onClick}: NavigationButtonProps) {
      return (
         <Button
            onClick={onClick}
            variant={'outline'}
            className={cn('absolute top-1/2 z-[900] backdrop-blur-lg', className)}>
            {children}
         </Button>
      );
   }
}

namespace Utils {
   export function isCurrentImage(distance: number) {
      return distance === 1;
   }

   //// calculate scale
   export function calculateScale(distance: number) {
      // the most the distance the lower value
      // (1, 0.3, 0.25 ...)
      return 1 / Math.abs(distance);
   }

   ////  calculate the zindex ratio
   export function calculateZIndex(distance: number, defaultVal: number) {
      // the most the distance the lower value
      // (1, 0.3, 0.25 ...)
      return defaultVal / Math.abs(distance);
   }

   ///// calculate the filter ratio to apply
   export function calculateFilter(distance: number) {
      return `blur(${Math.abs(distance) * 3}px) grayscale(${1 - 1 / Math.abs(distance)})`;
   }

   //// calculate position on X (linear)
   export function calculateXPos(distance: number) {
      return `${(window.innerWidth / 10) * distance * -1}px`;
   }
}

/**
 useCalculatePosition is a custom hook that calculates the position of a card
 based on its distance from the current image.

 It takes in distance as a parameter, which is used to determine the scale,
 zIndex, filter, and translateX values of the card.

 It uses the Utils namespace to calculate these values:

 - isCurrentImage checks if the distance is 1, meaning it's the current image
 - calculateScale returns lower scales the further the distance
 - calculateZIndex returns lower zIndexes the further the distance
 - calculateFilter returns stronger blur/grayscale the further the distance
 - calculateXPos calculates translateX position based on distance

 The hook uses useAnimate from Framer Motion to animate the card on change.

 It applies these animated values to the card element ref passed in scope.

 The useEffect hook runs on distance change and animates the scale, zIndex,
 filter, and translateX values over 0.25s easeOut.

 The hook returns the scope ref to apply the animated values to the card element.
 **/
function useCalculatePosition(distance: number) {
   ////// Framer motion
   const [scope, animate] = useAnimate();

   const isCurrent = Utils.isCurrentImage(distance);

   const scale = isCurrent ? 1.3 : Utils.calculateScale(distance);
   const zIndex = isCurrent ? 800 : Utils.calculateZIndex(distance, 800);
   const filter = isCurrent ? 0 : Utils.calculateFilter(distance);
   const translateX = isCurrent ? 0 : Utils.calculateXPos(distance);

   //// calculate position on X (logarithmic)

   useEffect(() => {
      animate(
         scope.current,
         {
            scale,
            zIndex,
            filter,
            translateX,
         },
         {duration: 0.25, ease: 'easeOut'}
      );

      return () => {};
   }, [animate, distance, filter, scale, scope, translateX, zIndex]);

   return scope;
}

//////////////////// Album Component //////////////////////////

namespace Album {
   function CardContainer({children, id, className}: ComponentPropsWithoutRef<'div'>) {
      return (
         <div
            id={id}
            className={cn('carousel-item relative mx-auto h-full w-full rounded-box', className)}>
            {children}
         </div>
      );
   }

   export function AlbumSkeleton() {
      return <CardContainer className={'skeleton'} />;
   }

   export function CardElement({
      album,
      distance,
      onClick,
   }: {
      album: ReturnType<typeof AlbumFactory>;
      distance: number;
      onClick: () => void;
   }) {
      const scope = useCalculatePosition(distance);
      const [isOpen, setIsOpen] = useState(false);

      return (
         <Card
            ref={scope}
            onClick={onClick}
            className={cn(
               'absolute aspect-square w-full rounded-lg',
               'flex items-center justify-center text-6xl',
               'card image-full w-96 overflow-clip rounded-box shadow-xl'
               // isCurrentImage(distance) && 'shadow-lg shadow-base-300'
            )}>
            <div className='card-header'>
               <img
                  className='aspect-square object-contain object-cover'
                  src={SanityImageBuilder(album.album_cover).url()}
               />
            </div>
            <main className='card-body'>
               <button
                  className={'btn btn-ghost'}
                  onClick={() => setIsOpen(true)}>
                  Open Moal
               </button>
               {isOpen && (
                  <div
                     className='absolute left-0 top-0
                h-full w-full bg-base-200/50 '>
                     <button
                        className={'btn btn-ghost'}
                        onClick={() => setIsOpen(false)}>
                        X
                     </button>
                  </div>
               )}
            </main>
            {/* {album?.title?.fr} */}
         </Card>
      );
   }
}

namespace Constants {
   export const MakingOffYoutube = 'https://www.youtubeexport .com/watch?v=dMrhkQYBRww&t';
   export const AlbumSpotify = 'https://edithpiaf.lnk.to/SymLY';
}
