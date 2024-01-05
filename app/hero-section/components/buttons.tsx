'use client'

import {usePageSectionCtx} from '@/app/page-navigation-ctx/page-navigation-ctx';
import {ComponentPropsWithoutRef} from 'react';
import * as React from 'react';

// export the React Wrapper

export function ButtonLink({children}: ComponentPropsWithoutRef<'a'>) {
   const{ scrollTo} = usePageSectionCtx()

   return (
      <a
         onClick={()=> scrollTo('albums')}
         href={'#albums'}
         className={'underline rounded-lg bg-base-100/10 transition hover:bg-base-100/60'}>
         {children}
      </a>
   );
}
