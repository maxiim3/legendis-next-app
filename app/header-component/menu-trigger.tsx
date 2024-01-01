'use client';

import {useMenuCtx} from '@/app/header-component/menu-ctx/use-menu-ctx';
import {
   animateMenuClosed,
   button,
   buttonState,
   animateOpenMenu,
   fxContainerCircle,
   fxContainerFullScreen,
} from '@/app/header-component/menu-trigger.css';
import {cn} from '@/lib/utils';
import React from 'react';

export function MenuTrigger() {
   const {isVisible, toggleMenu} = useMenuCtx();

   return (
      <>
         <div className={cn(isVisible ? fxContainerFullScreen : fxContainerCircle)}>
            <div className={cn(isVisible ? animateOpenMenu : animateMenuClosed)}></div>
         </div>

         <button
            className={cn(button, isVisible ? buttonState.menuOpen : buttonState.menuClose)}
            onClick={toggleMenu}>
            {isVisible ? 'X' : 'Menu'}
         </button>
      </>
   );
}
