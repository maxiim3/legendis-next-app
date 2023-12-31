'use client';

import {useMenuCtx} from '@/app/header-component/menu-context-provider';
import {menuFx} from '@/app/header-component/trigger-menu/menu-fx.css';
import {cn} from '@/lib/utils';
import React from 'react';

export function RevealMenuFx() {
   const {menuState} = useMenuCtx();
   return <div className={cn(menuFx.initialState, menuState && menuFx.openState)} />;
}
