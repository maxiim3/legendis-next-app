import {MenuCtx, MenuCtxDispatcher} from '@/app/header-component/menu-ctx/menu-context-provider';
import {useCallback, useContext} from 'react';

export function useMenuCtx() {
   const isVisible = useContext(MenuCtx)!;
   const dispatcher = useContext(MenuCtxDispatcher)!;

   const openMenu = useCallback(() => dispatcher({type: 'OPEN'}), [dispatcher]);
   const closeMenu = useCallback(() => dispatcher({type: 'CLOSE'}), [dispatcher]);
   const toggleMenu = useCallback(() => dispatcher({type: 'TOGGLE'}), [dispatcher]);

   return {isVisible, openMenu, closeMenu, toggleMenu};
}
