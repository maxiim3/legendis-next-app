import {MenuContextProvider} from '@/app/header-component/menu-context-provider';
import {HandleMenuVisibility} from '@/app/header-component/menu-modal/handle-menu-visibility';
import {MenuModal} from '@/app/header-component/menu-modal/menu-modal';
import {MenuTrigger} from '@/app/header-component/trigger-menu/menu-trigger';
import {srOnly} from '@/app/shared.css';
import React from 'react';

export default function Header() {
   return (
      <header>
         <p className={srOnly}>Legendis.fr</p>
         <MenuContextProvider>
            <MenuTrigger />
            <HandleMenuVisibility>
               <MenuModal />
            </HandleMenuVisibility>
         </MenuContextProvider>
      </header>
   );
}
