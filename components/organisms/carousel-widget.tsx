'use client';

import Heading2 from '@/components/atoms/heading-2';
import {cn} from '@/lib/utils';
import {AnimatePresence, motion} from 'framer-motion';
import {ComponentPropsWithoutRef, useMemo, useState} from 'react';
type Item = {
   x: number;
   clr: string;
};

const colors = [
   'bg-blue-400',
   'bg-red-400',
   'bg-yellow-400',
   'bg-neutral-400',
   'bg-slate-400',
   'bg-orange-400',
   'bg-teal-400',
   'bg-purple-400',
];
function getRandomColor() {
   const randIdx = Math.round(Math.random() * colors.length - 1);
   return colors[randIdx];
}

export default function CarouselWidget() {
   const items: Item[] = useMemo(
      () => Array.from({length: 12}).map((_, x) => ({x: (x += 1), clr: getRandomColor()})),
      []
   );
   const [currentIdx, setCurrentIdx] = useState(0);
   const [previousIdx, setPreviousIdx] = useState(items.length - 1);
   const [nextIdx, setNextIdx] = useState(currentIdx + 1);

   const handlePreviousItem = (idx: number) => {
      if (idx === 0) return items.length - 1;
      else return idx - 1;
   };
   const handleNextItem = (idx: number) => {
      if (idx === items.length - 1) return 0;
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

   console.log(items);

   return (
      <ViewPort>
         <Heading2>Nos Albums</Heading2>
         <AlbumContainer>
            <NavigationButton className={"left-12"} handler={slideBackward}>{'<'} Back</NavigationButton>
            <AlbumCard
               idx={previousIdx}
               album={items[previousIdx].x!}
            />
            <AlbumCard
               center
               idx={currentIdx}
               album={items[currentIdx].x!}
            />
            <AlbumCard
               idx={nextIdx}
               album={items[nextIdx].x!}
            />
            <NavigationButton className={"right-12"} handler={slideForward}>Next {'>'}</NavigationButton>
         </AlbumContainer>
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
         className={cn('absolute top-1/2 btn btn-lg btn-outline z-45',
                className)}>
         {children}
      </button>
   );
}

//////////////////// ALbum Component //////////////////////////
function AlbumCard({
   album,
   idx,
   center = false,
}: {
   album: Item['x'];
   idx: number;

   center?: boolean;
}) {
   return (
        <div key={idx}
            className={cn(
                'reltive aspect-square w-1/3 bg-base-100 rounded-lg',
                center ? 'scale-125 shadow-[0_3px_8px_#333333]' : 'shadow-[0_8px_10px_#333333]',
                'flex items-center justify-center text-6xl', 
            )}>
         {album}
      </div>
   );
}
