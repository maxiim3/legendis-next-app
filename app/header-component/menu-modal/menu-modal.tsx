'use client';

import {useMenuCtx} from '@/app/header-component/menu-context-provider';
import {LogoTitle} from '@/app/header-component/menu-modal/logo-title';
import {
   NavigationContainer,
   NavLink,
} from '@/app/header-component/menu-modal/navigation-components';
import {SwitchLanguage} from '@/app/header-component/menu-modal/switch-language';
import {navigationData} from '@/app/header-component/navigation-data';
import React from 'react';

export function MenuModal() {
   const currentLanguage = 'fr';
   const {setMenuState, menuState} = useMenuCtx();

   function closeMenu() {
      return setMenuState(false);
   }

   return (
      <NavigationContainer visibilityState={menuState}>
         <LogoTitle />
         <NavLink
            onClick={closeMenu}
            href={'#'}>
            Albums
         </NavLink>
         {navigationData.map(link => {
            return (
               <NavLink
                  onClick={closeMenu}
                  key={link.en.toLowerCase()}
                  href={`#${link.en.toLowerCase()}`}>
                  {link[currentLanguage]}
               </NavLink>
            );
         })}
         <NavLink
            onClick={closeMenu}
            href={`https://prod203.com/${currentLanguage}/contact`}>
            Contact
         </NavLink>
         <SwitchLanguage />
      </NavigationContainer>
   );
}
