'use client';

import {useMenuCtx} from '@/app/header-component/menu-ctx/use-menu-ctx';
import {MenuModal} from '@/app/header-component/menu-modal';
import React from 'react';

export function NavigationMenu() {
   const {isVisible} = useMenuCtx();

   return isVisible ? <MenuModal /> : null;
}
