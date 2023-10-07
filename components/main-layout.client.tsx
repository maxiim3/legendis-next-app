'use client';

import Legendis from '@/components/Legendis';
import {useNavigationStore} from '@/lib/navigation.store';
import {cn} from '@/lib/utils';
import {ComponentPropsWithoutRef, useState} from 'react';

export function MainLayoutClient({children}: ComponentPropsWithoutRef<'main'>) {
   return (
      <>
         <header
            className={cn(
               // Bottom Navigation
               'fixed bottom-0 left-0 z-50  w-screen bg-base-100/50 py-6 backdrop-blur-md',

               // Top Navigation
               'md:top-0',

               // Side Navigation
               'border-amber-50/30 px-3 xl:h-screen xl:w-auto xl:border-r'
            )}>
            <BottomNavigation />
            <TopNavigation />
            <SideNavigation />
         </header>
         {children}
         <footer className={'w-screen px-3 py-12 md:px-12 '}>
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
   const [isOpen, setIsOpen] = useState(true);
   const toggleIsOpen = () => setIsOpen(!isOpen);

   return (
      <section className={cn('relatives flex w-full items-center justify-center gap-2 md:hidden', isOpen ?'h-full' :'h-12')}>
         <nav className={cn('pb-16 transition duration-200 flex flex-col ', isOpen ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-full')}>
            <NavigationItems />
         </nav>
         <button className={'bottom-2 absolute'} onClick={toggleIsOpen}>
            <Legendis className={'h-8 w-16 fill-primary'} />
         </button>
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
