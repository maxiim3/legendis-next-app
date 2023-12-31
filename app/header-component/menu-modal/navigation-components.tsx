'use client'

import {cn} from '@/lib/utils';
import React, {ComponentPropsWithoutRef} from 'react';

export function NavLink({children, href, className, onClick}: ComponentPropsWithoutRef<'a'>) {
   return (
      <li className={'list-none'}>
         <a
            onClick={onClick}
            href={href}
            className={cn('text-md font-normal uppercase text-amber-50 ', className)}>
            {children}
         </a>
      </li>
   );
}

export function NavigationContainer({
                                       children,
                                       visibilityState,
                                    }: ComponentPropsWithoutRef<'nav'> & {
   visibilityState: boolean;
}) {
   return (
      <nav
         className={cn(
            'max-h-[1200px] transition-all delay-200 duration-200',
            visibilityState
               ? 'visible fixed top-0 z-[990] flex h-screen w-screen flex-col items-center  justify-center gap-3 opacity-100 md:gap-8 lg:gap-12'
               : 'hidden opacity-80',
         )}>
         {children}
      </nav>
   );
}
