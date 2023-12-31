'use client';

import { createContext,PropsWithChildren,useContext,useState } from 'react';


namespace Private {
   type MenuState = boolean;
   const initialMenuState: MenuState = false;

   export function useSetupMenuCtx() {
      const [menuState, setMenuState] = useState<MenuState>(initialMenuState);

      return {menuState, setMenuState};
   }

   export type MenuContextInterface = ReturnType<typeof useSetupMenuCtx>;
   export const MenuCtx = createContext<MenuContextInterface | null>(null);
}

export function useMenuCtx(): Private.MenuContextInterface {
   const context = useContext(Private.MenuCtx)!;

   const {menuState, setMenuState} = context;
   return {menuState, setMenuState};
}

export function MenuContextProvider({children}: PropsWithChildren) {
   return <Private.MenuCtx.Provider value={Private.useSetupMenuCtx()}>{children}</Private.MenuCtx.Provider>;
}
