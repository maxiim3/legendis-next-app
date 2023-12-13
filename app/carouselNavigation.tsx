'use client';

import React, {ComponentPropsWithoutRef, useEffect, useState} from 'react';

export function CarouselNavigation({len}: {len: number}) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [previousIndex, setPreviousIndex] = useState(len);
   const [nextIndex, setNextIndex] = useState(1);

   useEffect(() => {
      setPreviousIndex(() => {
         if (currentIndex === 0) {
            return len;
         } else {
            return currentIndex - 1;
         }
      });

      setNextIndex(() => {
         if (currentIndex === len) {
            return 0;
         } else {
            return currentIndex + 1;
         }
      });
   }, [currentIndex, len]);

   console.log(currentIndex, len);
   return (
      <span className={'absolute top-1/2 px-4 md:px-12 flex w-screen items-center justify-between'}>
         <NextImageButton
            onClick={() => setCurrentIndex(prev => (prev === 0 ? len : prev - 1))}
            href={`#album-${previousIndex}`}
         />
         <PreviousImageButton
            onClick={() => setCurrentIndex(prev => (prev === len ? 0 : prev + 1))}
            href={`#album-${nextIndex}`}
         />
      </span>
   );
}

function NextImageButton(props: ComponentPropsWithoutRef<'a'>) {
   return (
      <a
         href={props.href}
         className={'btn-glass btn btn-square btn-outline'}
         {...props}>
         {'<'}
      </a>
   );
}

function PreviousImageButton(props: ComponentPropsWithoutRef<'a'>) {
   return (
      <a
         href={props.href}
         className={'btn-glass btn btn-square btn-outline'}
         {...props}>
         {'>'}
      </a>
   );
}
