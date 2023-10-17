'use client';

import Legendis from '@/components/atoms/Legendis';
import {cn} from '@/lib/utils';
import {useI18nContext} from '@/stores/i18n.store';
import {useNavigationStore} from '@/stores/navigation.store';
import React, {ComponentPropsWithoutRef} from 'react';
import {create} from 'zustand';

const useMobileNavigation = create<{isOpen: boolean; setIsOpen: (value: boolean) => void}>(set => ({
   isOpen: false,
   setIsOpen: (value: boolean) => set({isOpen: value}),
}));
const MobileNavigation = () => {
   const {isOpen, setIsOpen} = useMobileNavigation(store => store);
   const toggleIsOpen = () => setIsOpen(!isOpen);

   return (
      <section
         className={cn(
            'relatives flex w-full items-center justify-center gap-2 md:hidden',
            isOpen ? 'h-full px-2' : 'h-8'
         )}>
         <nav
            className={cn(
               'flex flex-col pb-16 transition duration-200',
               isOpen
                  ? 'opacity-1 mx-auto w-full translate-y-0 gap-2'
                  : 'translate-y-full opacity-0'
            )}>
            <NavigationItems />
         </nav>
         <label
            className={cn('swap swap-flip absolute bottom-6 ', isOpen && 'swap-active')}
            onClick={toggleIsOpen}>
            {/*<input*/}
            {/*   onClick={toggleIsOpen}*/}
            {/*   type='checkbox'*/}
            {/*/>*/}
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
const DesktopNavigation = () => (
   <section className={'hidden md:flex md:items-center md:justify-around md:gap-4 xl:hidden'}>
      <Legendis className={'h-8 w-16 fill-primary'} />
      <nav className={'flex gap-5'}>
         <NavigationItems />
      </nav>
   </section>
);
const LargeScreenNavigation = () => (
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
   const currentLanguage = useI18nContext(store => store.currentLanguage);

   const {isOpen, setIsOpen} = useMobileNavigation(store => store);

   return Object.values(sections).map(section => (
      <a
         onClick={() => {
            scrollToSection(section);
            setIsOpen(false);
         }}
         key={`nav-item-${section.slug}`}
         className={cn(
            'btn rounded bg-base-200 px-4 py-2 text-primary',
            activeSection === section.slug && 'bg-primary text-primary-content',
            className
         )}
         href={`#${section.id}`}>
         {section.title[currentLanguage]}
      </a>
   ));
};

export { DesktopNavigation,LargeScreenNavigation,MobileNavigation };
