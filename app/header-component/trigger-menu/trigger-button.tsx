'use client';

import {useMenuCtx} from '@/app/header-component/menu-context-provider';
import React from 'react';

export function ToggleButton() {
   const {menuState, setMenuState} = useMenuCtx();
   return (
      <button
         className={'btn fixed bottom-4 right-4 z-[1000] bg-base-100 transition'}
         onClick={() => setMenuState(prev => !menuState)}>
         {menuState ? 'X' : 'Menu'}
      </button>
   );
}
