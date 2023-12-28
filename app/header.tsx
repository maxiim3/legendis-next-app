'use client';

import Legendis from '@/components/atoms/Legendis';
import Text from '@/components/atoms/text';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {AvailableLanguages, MultiLanguageContent} from '@/shared/i18n/i18n.types';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import {cn} from '@/lib/utils';
import React, {useCallback, useState, type ComponentPropsWithoutRef} from 'react';

export default function Header() {
   const {closeMenu, toggleMenu, currentLanguage, isOpen} = useMenu();
   return (
      <>
         <p className='sr-only'>Legendis.fr</p>

         <Menu.RevealMenuFx open={isOpen} />
         <Menu.ToggleButton
            onClick={toggleMenu}
            open={isOpen}
         />
         {isOpen && (
            <Navigation.Group visibilityState={isOpen}>
               <Menu.LogoTitle />
               <Navigation.Link
                  onClick={closeMenu}
                  href={'#'}>
                  Albums
               </Navigation.Link>
               {Navigation.data.map(link => {
                  return (
                     <Navigation.Link
                        onClick={closeMenu}
                        key={link.en.toLowerCase()}
                        href={`#${link.en.toLowerCase()}`}>
                        {link[currentLanguage]}
                     </Navigation.Link>
                  );
               })}
               <Navigation.Link
                  onClick={closeMenu}
                  href={`https://prod203.com/${currentLanguage}/contact`}>
                  Contact
               </Navigation.Link>
               <Menu.SwitchLanguage />
            </Navigation.Group>
         )}
      </>
   );
}

function useMenu() {
   const currentLanguage = useAppLanguage(store => store.currentLanguage);

   const [isOpen, setIsOpen] = useState(false);
   const closeMenu = useCallback(() => setIsOpen(false), []);
   const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

   return {
      isOpen,
      closeMenu,
      toggleMenu,
      currentLanguage,
   };
}

namespace Menu {
   export function RevealMenuFx(props: {open: boolean}) {
      return (
         <div
            className={cn(
               'fixed bottom-4 right-4 z-[900] h-12 w-12 rounded-full bg-base-100  transition-all duration-200 ease-in  ',
               props.open && 'scale-[5000%] md:scale-[10000%] 2xl:scale-[30000%]'
            )}
         />
      );
   }

   export function SwitchLanguage() {
      const {toggleLanguage, currentLanguage} = useAppLanguage(store => store);

      return (
         <div
            className='absolute bottom-8 flex items-center space-x-2 '
            data-language={currentLanguage}>
            <Label
               className={'uppercase'}
               htmlFor='language'>
               {AvailableLanguages.get().fr}
            </Label>
            <Switch
               onClick={toggleLanguage}
               id='language'
            />
            <Label
               className={'uppercase'}
               htmlFor='language'>
               {AvailableLanguages.get().en}
            </Label>
         </div>
      );
   }

   export function ToggleButton(props: {onClick: () => void; open: boolean}) {
      return (
         <button
            className={'btn fixed bottom-4 right-4 z-[1000] bg-base-100 transition'}
            onClick={props.onClick}>
            {props.open ? 'X' : 'Menu'}
         </button>
      );
   }

   export function LogoTitle() {
      return (
         <span className={'absolute top-12 flex flex-col items-center justify-center'}>
            <Legendis className={'h-24 w-24 fill-primary'} />
            <Text className={'text-md text-primary opacity-80'}>LEGENDIS</Text>
         </span>
      );
   }
}

namespace Navigation {
   export function Link({children, href, className, onClick}: ComponentPropsWithoutRef<'a'>) {
      return (
         <li className={'list-none'}>
            <a
               onClick={onClick}
               href={href}
               className={cn('text-md font-normal uppercase text-amber-50 ', className)}>
               {children}
            </a>
         </li>
      );
   }

   export function Group({
      children,
      visibilityState,
   }: ComponentPropsWithoutRef<'nav'> & {
      visibilityState: boolean;
   }) {
      return (
         <nav
            className={cn(
               'max-h-[1200px] transition-all delay-200 duration-200',
               visibilityState
                  ? 'visible fixed top-0 z-[990] flex h-screen w-screen flex-col items-center  justify-center gap-3 opacity-100 md:gap-8 lg:gap-12'
                  : 'hidden opacity-80'
            )}>
            {children}
         </nav>
      );
   }

   export const data: MultiLanguageContent.Type[] = [
      {fr: "L'équipe", en: 'Team'},
      {fr: 'Compositeurs', en: 'Compositors'},
      {fr: 'Interprêtes', en: 'Interpreters'},
   ];
}
