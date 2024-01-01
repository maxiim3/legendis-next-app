'use client';

import {INITIAL_MENU_STATE} from '@/app/header-component/menu-ctx/initial-menu-state.constant';
import {MenuCtxReducer, MenuStateCtx} from '@/app/header-component/menu-ctx/menu-ctx.types';
import {Dispatch, PropsWithChildren, createContext, useReducer} from 'react';

export const MenuCtx = createContext<MenuStateCtx | null>(null);
export const MenuCtxDispatcher = createContext<Dispatch<MenuCtxReducer> | null>(null);

function menuCtxReducer(menuState: MenuStateCtx, action: MenuCtxReducer) {
   switch (action.type) {
      case 'OPEN':
         return true;
      case 'CLOSE':
         return false;
      case 'TOGGLE':
         return !menuState;
   }
}

export function MenuContextProvider({children}: PropsWithChildren) {
   const [isVisible, menuDispatcher] = useReducer(menuCtxReducer, INITIAL_MENU_STATE);

   return (
      <MenuCtx.Provider value={isVisible}>
         <MenuCtxDispatcher.Provider value={menuDispatcher}>{children}</MenuCtxDispatcher.Provider>
      </MenuCtx.Provider>
   );
}
