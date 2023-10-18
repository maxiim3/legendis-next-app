'use client';

import Link from 'next/link';
import React from 'react';

export default function Error({error, reset}: {error: Error; reset: () => void}) {
   return (
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
         <div className='text-center'>
            <p className='text-base font-semibold text-indigo-600'>404</p>
            <h1 className='mt-4 text-3xl font-bold tracking-tight  sm:text-5xl'>Page not found</h1>
            <p className='mt-6 text-base leading-7 text-gray-600'>
               {error.message || 'Sorry, we couldn’t find the page you’re looking for.'}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
               <Link
                  href='/'
                  className={'btn btn-accent'}>
                  Go back home
               </Link>
               <button
                  onClick={reset}
                  className={'btn-outlined btn'}>
                  Retry{' '}
                  <>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-6 w-6'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                        />
                     </svg>
                  </>
               </button>
            </div>
         </div>
      </main>
   );
}
