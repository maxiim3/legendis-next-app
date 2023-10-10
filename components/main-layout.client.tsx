'use client';

import Legendis from '@/components/Legendis';
import VideoPlayer from '@/components/video-player';
import {useNavigationStore} from '@/lib/navigation.store';
import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef, Suspense, useState} from 'react';

export function MainLayoutClient({children}: ComponentPropsWithoutRef<'main'>) {
   return (
      <>

         <header
            className={cn(
               // Bottom Navigation
               'fixed bottom-0 left-0 z-50  w-screen bg-base-100/30 py-6 backdrop-blur-md',

               // Top Navigation
               'md:top-0 md:h-min',

               // Side Navigation
               'border-amber-50/30 px-3 xl:h-screen xl:w-auto xl:border-r'
            )}>
            <BottomNavigation />
            <TopNavigation />
            <SideNavigation />
         </header>
         {children}
         <footer className={'w-screen bg-base-100 px-3 py-12 md:px-12'}>
            <ul className={'flex w-full flex-wrap items-center justify-center gap-12'}>
               {Array.from({length: 6}).map((_, i) => (
                  <li
                     key={`footer-item-${i}`}
                     className={
                        'aspect-video w-72 animate-pulse bg-neutral-800 text-center text-base-content'
                     }></li>
               ))}
            </ul>
         </footer>
         ;
      </>
   );
}

const BottomNavigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleIsOpen = () => setIsOpen(!isOpen);

   return (
      <section
         className={cn(
            'relatives flex w-full items-center justify-center gap-2 md:hidden',
            isOpen ? 'h-full' : 'h-12'
         )}>
         <nav
            className={cn(
               'flex flex-col pb-16 transition duration-200',
               isOpen ? 'opacity-1 translate-y-0' : 'translate-y-full opacity-0'
            )}>
            <NavigationItems />
         </nav>
         <label className={'swap swap-flip absolute bottom-2 '}>
            <input
               onClick={toggleIsOpen}
               type='checkbox'
            />
            <Legendis className={cn('h-8 w-16 fill-primary', 'swap-off')} />
            <svg
               className={cn('h-8 w-16 fill-primary', 'swap-on')}
               width={64}
               height={64}
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'>
               <path d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z' />
            </svg>
         </label>
      </section>
   );
};
const TopNavigation = () => (
   <section className={'hidden md:flex md:items-center md:justify-around md:gap-4 xl:hidden'}>
      <Legendis className={'h-8 w-16 fill-primary'} />
      <nav className={'flex gap-5'}>
         <NavigationItems />
      </nav>
   </section>
);
const SideNavigation = () => (
   <aside
      className={'hidden xl:flex xl:h-full xl:flex-col xl:items-center xl:justify-around xl:gap-5'}>
      <Legendis className={'h-8 w-16 fill-primary'} />
      <nav className={'flex h-full flex-col justify-center gap-5'}>
         <NavigationItems />
      </nav>
   </aside>
);
const NavigationItems = ({className}: ComponentPropsWithoutRef<'a'>) => {
   const {sections, scrollToSection, setActiveSection, activeSection} = useNavigationStore(
      store => store
   );

   return Object.values(sections).map(section => (
      <a
         onClick={() => scrollToSection(section)}
         key={`nav-item-${section.slug}`}
         className={cn(
            'btn rounded bg-base-200 px-4 py-2 text-primary',
            activeSection === section.slug && 'bg-primary text-primary-content',
            className
         )}
         href={`#${section.id}`}>
         {section.title}
      </a>
   ));
};
