import DSS from '@/components/atoms/DSS';
import {Heading1, Heading2, Text} from '@/components/atoms/typography';
import {flexStack} from '@/components/layouts/stacks';
import cn from '@/lib/utils';

function BlobBackground({alt = false}: {alt?: boolean}) {
   if (!alt)
      return (
         <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'>
            <div
               className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
               style={{
                  clipPath:
                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
               }}
            />
         </div>
      );

   return (
      <div
         className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
         aria-hidden='true'>
         <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
               clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
         />
      </div>
   );
}

export default function Home() {
   return (
      <main className={cn('relative mx-auto h-screen w-screen overflow-hidden')}>
         <section className='isolate mx-auto h-full w-full overflow-hidden px-6 pt-14 lg:px-8'>
            <BlobBackground />

            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
               <header className={cn(flexStack({center: true}), 'mb-8')}>
                  <DSS
                     width={99}
                     height={99}
                     className={'mx-auto my-8 fill-base-content'}
                  />
                  <Heading2>Digital Solution Studio</Heading2>
               </header>
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
               <article className='prose text-center'>
                  <Heading1>Data to enrich your online business</Heading1>
                  <Text className='mt-6 text-lg leading-8 text-gray-100 md:text-lg lg:text-xl'>
                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                     cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </Text>
                  <section
                     className={cn(
                        flexStack({
                           className: 'mt-10 gap-x-6',
                           direction: 'row',
                           center: true,
                           wrap: true,
                        })
                     )}>
                     <a
                        href='#'
                        className='btn btn-primary'>
                        Get started
                     </a>
                     <a
                        href='#'
                        className='btn btn-secondary'>
                        Learn more <span aria-hidden='true'>→</span>
                     </a>
                  </section>
               </article>
            </div>
            <BlobBackground alt />
         </section>
      </main>
   );
}
