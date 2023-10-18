export default function Announcement() {
   return (
      <header className='hidden sm:mb-8 sm:flex sm:justify-center'>
         <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-200/10 hover:ring-gray-200/20'>
            Announcing our next round of funding.{' '}
            <a
               href='#'
               className='font-semibold text-indigo-300'>
               <span
                  className='absolute inset-0'
                  aria-hidden='true'
               />
               Read more <span aria-hidden='true'>&rarr;</span>
            </a>
         </div>
      </header>
   );
}
