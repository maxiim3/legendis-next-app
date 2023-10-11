import {
   DesktopNavigation,
   LargeScreenNavigation,
   MobileNavigation,
} from '@/components/molecules/navigation';
import {cn} from '@/lib/utils';
import React from 'react';

export default function Header() {
   return (
      <header
         className={cn(
            //Commons
            'fixed left-0 z-50 w-screen bg-base-100/60 py-6 drop-shadow-xl backdrop-blur-md',

            // Bottom Navigation
            'bottom-0  shadow-[0_-4px_10px_1px_rgba(0,0,0,0.6)]',

            // Top Navigation
            'md:top-0 md:h-min md:shadow-none',

            // Side Navigation
            'xl:h-screen xl:w-auto xl:border-r xl:border-amber-50/30 xl:px-3'
         )}>
         <MobileNavigation />
         <DesktopNavigation />
         <LargeScreenNavigation />
      </header>
   );
}
