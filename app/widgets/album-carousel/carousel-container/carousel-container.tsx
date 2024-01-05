'use client'

import {Album} from '@/app/widgets/album-carousel/album-component/album';
import {OT_Album} from '@/app/widgets/album-carousel/album-component/album.factory';
import {
   carouselContainer,
   carouselContent,
   carouselItem, widgetContainer,
} from '@/app/widgets/album-carousel/carousel-container/carouselContainer.css';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import * as React from 'react';
import {Suspense} from 'react';

export function CarouselWidget({albums}: {albums: OT_Album[]}) {
   return (
      <main className={widgetContainer}> <Carousel
         className={carouselContainer}
         opts={{
            align: 'center',
            loop: true,
         }}>
         <CarouselContent className={carouselContent}>
            {albums.map((album, index) => (
               <CarouselItem
                  key={index}
                  data-type={'Carousel Item'}
                  className={carouselItem}>
                  <Suspense fallback={<p>loading album</p>}>
                     <Album albumInfo={album} />
                  </Suspense>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious
            style={{scale: 1.2}}
            variant={'default'}
         />
         <CarouselNext
            style={{scale: 1.2}}
            variant={'default'}
         />
      </Carousel>
      </main>
   );
}
