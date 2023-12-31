'use client';

import {useMenuCtx} from '@/app/header-component/menu-context-provider';
import React, {PropsWithChildren} from 'react';

export function HandleMenuVisibility({children}: PropsWithChildren) {
   const {menuState} = useMenuCtx();

   if (!menuState) {
      return <></>;
   } else {
      return <>{children}</>;
   }
}
