'use client';

import {useMenuCtx} from '@/app/header-component/menu-ctx/use-menu-ctx';
import {
   absoluteContainer,
   navContainer,
   navLink,
   switchLanguage,
   underline,
} from '@/app/header-component/navigation-menu.css';
import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import {PageSection, usePageSectionCtx} from '@/app/page-navigation-ctx/page-navigation-ctx';
import {LegendisLogo} from '@/components/organisms/legendis-logo';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {cn} from '@/lib/utils';
import {AvailableLanguages, MultiLanguageContent} from '@/shared/i18n/i18n.types';
import React from 'react';

export function NavigationMenu() {
   const {isVisible} = useMenuCtx();

   return isVisible && <MenuModal />;
}

export const navigationData: MultiLanguageContent.Type[] = [
   {fr: "L'équipe", en: 'Team'},
   {fr: "présentation", en: 'presentation'},
   {
      fr: 'Compositeurs',
      en: 'Compositors',
   },
   {fr: 'Interprêtes', en: 'Interpreters'},
];

export function MenuModal() {
   const {isVisible, closeMenu} = useMenuCtx();
   const {language, toggleLanguage} = useLanguageCtx();
   const {pageSection, scrollTo} = usePageSectionCtx();
   const closeAndScroll = (section: PageSection) => {
      if (pageSection !== section) {
         scrollTo(section);
         closeMenu();
      }
   };
   return (
      <nav
         className={cn(
            navContainer.base,
            isVisible ? navContainer.state.visible : navContainer.state.hidden
         )}>
         <span className={absoluteContainer}>
            <LegendisLogo />
         </span>
         <li className={navLink.li}>
            <a
               onClick={() => closeAndScroll('album')}
               href={'#albums'}
               className={navLink.a}>
               Albums
            </a>
            <span className={underline} />
         </li>
         {navigationData.map(link => {
            return (
               <li
                  key={link.en.toLowerCase()}
                  className={navLink.li}>
                  <a
                     onClick={() => closeAndScroll(link.en.toLowerCase())}
                     href={`#${link.en.toLowerCase()}`}
                     className={navLink.a}>
                     {link[language]}
                  </a>
                  <span className={underline} />
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
            <span className={underline} />
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
               checked={language === 'en'}
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
