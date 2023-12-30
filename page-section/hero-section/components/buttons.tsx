import {useNavigationStore} from '@/shared/globalNavigation/navigation.store';
import React from 'react';

   export function ScrollToPresentation() {
//      const {id: presentationId} = useNavigationStore(store => store.sections.presentation);
      return (
         <a
            className={'animate-bounce rounded-lg bg-base-100/10 transition hover:bg-base-100/60'}
            href={`#${presentationId}`}>
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
