'use client'

import {usePageSectionCtx} from '@/app/page-navigation-ctx/page-navigation-ctx';
import * as React from 'react';

// export the React Wrapper

export function ButtonLink() {
   const{pageSection, scrollTo} = usePageSectionCtx()

   return (
      <a
         onClick={()=> scrollTo('albums')}
         href={'#albums'}
         className={'animate-bounce rounded-lg bg-base-100/10 transition hover:bg-base-100/60'}>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-12 w-12 stroke-base-content/60'>
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
         </svg>
      </a>
   );
}
