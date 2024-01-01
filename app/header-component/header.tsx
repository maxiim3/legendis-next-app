import {headerStyle} from '@/app/header-component/header.css';
import {MenuContextProvider} from '@/app/header-component/menu-ctx/menu-context-provider';
import {MenuTrigger} from '@/app/header-component/menu-trigger';
import {NavigationMenu} from '@/app/header-component/navigation-menu';
import {srOnly} from '@/app/shared.css';
import React from 'react';

export default function Header() {
   return (
      <header className={headerStyle}>
         <p className={srOnly}>Legendis.fr</p>
         <MenuContextProvider>
            <MenuTrigger />
            <NavigationMenu />
         </MenuContextProvider>
      </header>
   );
}
