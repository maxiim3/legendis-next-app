'use client';

import {useMenuCtx} from '@/app/header-component/menu-ctx/use-menu-ctx';
import {
   logoTitle,
   navContainer,
   navLink,
   switchLanguage,
} from '@/app/header-component/menu-modal.css';
import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import Legendis from '@/components/atoms/Legendis';
import Text from '@/components/atoms/text';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {cn} from '@/lib/utils';
import {AvailableLanguages, MultiLanguageContent} from '@/shared/i18n/i18n.types';
import React from 'react';

export function MenuModal() {
   const {isVisible, closeMenu} = useMenuCtx();
   const {language, toggleLanguage} = useLanguageCtx();

   return (
      <nav
         className={cn(
            navContainer.base,
            isVisible ? navContainer.state.visible : navContainer.state.hidden
         )}>
         <span className={logoTitle.container}>
            <Legendis className={logoTitle.logo} />
            <Text className={logoTitle.title}>LEGENDIS</Text>
         </span>
         <li className={navLink.li}>
            <a
               onClick={closeMenu}
               href={'#'}
               className={navLink.a}>
               Albums
            </a>
         </li>
         {navigationData.map(link => {
            return (
               <li
                  key={link.en.toLowerCase()}
                  className={navLink.li}>
                  <a
                     onClick={closeMenu}
                     href={`#${link.en.toLowerCase()}`}
                     className={navLink.a}>
                     {link[language]}
                  </a>
               </li>
            );
         })}
         <li className={navLink.li}>
            <a
               onClick={closeMenu}
               href={`https://prod203.com/${language}/contact`}
               className={navLink.a}>
               Contact
            </a>
         </li>
         <div
            className={switchLanguage}
            data-language={language}>
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
      </nav>
   );
}

export const navigationData: MultiLanguageContent.Type[] = [
   {fr: "L'équipe", en: 'Team'},
   {fr: 'Compositeurs', en: 'Compositors'},
   {fr: 'Interprêtes', en: 'Interpreters'},
];
