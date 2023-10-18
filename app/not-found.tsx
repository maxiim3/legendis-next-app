import Link from 'next/link';
import React from 'react';

export default function NotFound() {
   return (
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
         <div className='text-center'>
            <p className='text-base font-semibold text-indigo-600'>404</p>
            <h1 className='mt-4 text-3xl font-bold tracking-tight  sm:text-5xl'>
               La page que vous recherchez n&apos;existe pas...
            </h1>

            <div className='mt-10 flex items-center justify-center gap-x-6'>
               <Link
                  href='/'
                  className={'btn btn-accent'}>
                  Go back home
               </Link>
            </div>
         </div>
      </main>
   );
}
