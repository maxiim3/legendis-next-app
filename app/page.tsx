import DSSMotion from '@/components/atoms/DSS-motion.client';
import {Heading1, Text} from '@/components/atoms/typography';
import FadeInContentMotion from '@/components/layouts/fade-in-content.motion.client';
import {flexStack} from '@/components/layouts/stacks';
import AnimatedHeading from '@/components/molecules/animated-heading.client';
import BlobBackground from '@/components/organisms/blob-background.client';
import cn from '@/lib/utils';

export default function Home() {
   return (
      <main className={cn('relative mx-auto h-screen w-screen overflow-hidden ')}>
         <section className='isolate mx-auto h-full w-full overflow-hidden px-6 pt-14 lg:px-8'>
            <BlobBackground />

            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
               <header className={cn(flexStack({center: true}), 'mb-8')}>
                  <DSSMotion
                     width={256}
                     height={256}
                     withText
                     className={'mx-auto my-8 fill-base-content'}
                  />
                  <FadeInContentMotion>
                     <AnimatedHeading />
                  </FadeInContentMotion>
               </header>
               <article className='prose mx-auto text-center'>
                  <FadeInContentMotion
                     initial={{y: 100}}
                     animate={{y: 0}}
                     duration={0.25}
                     delay={1.25}>
                     <Heading1>Give your brand the visibility it deserves</Heading1>
                  </FadeInContentMotion>
                  <FadeInContentMotion
                     duration={0.5}
                     delay={1.5}>
                     <div className={'space-y-1'}>
                        <Text className='font-brand text-auto m-0 mt-6 text-center text-lg leading-8 text-gray-100 md:text-lg lg:text-xl'>
                           We create custom solutions for your business.
                        </Text>

                        <Text className='font-brand text-auto mt-6 text-center text-lg leading-8 text-gray-100 md:text-lg lg:text-xl'>
                           Out team is ready to help you with your next project.
                        </Text>
                     </div>
                  </FadeInContentMotion>
                  <FadeInContentMotion
                     duration={0.5}
                     delay={1.5}>
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
                           className='btn btn-outline border-accent text-accent hover:border-accent hover:bg-accent hover:text-accent-content'>
                           Our Work
                        </a>
                        <a
                           href='#'
                           className='group btn btn-secondary relative  inline-flex items-center justify-center overflow-hidden border-2 p-4 px-6 py-3 font-medium shadow-md transition duration-300 ease-out hover:border-accent'>
                           <span className='ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent text-white duration-300 group-hover:translate-x-0'>
                              <svg
                                 className='h-6 w-6'
                                 fill='none'
                                 stroke='currentColor'
                                 viewBox='0 0 24 24'
                                 xmlns='http://www.w3.org/2000/svg'>
                                 <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                                 />
                              </svg>
                           </span>
                           <span
                              className={
                                 'ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full'
                              }>
                              Learn more
                              <span aria-hidden='true'>→</span>
                           </span>
                           <span className='invisible relative'>Learn More</span>
                        </a>
                     </section>
                  </FadeInContentMotion>
               </article>
            </div>
            <BlobBackground alt />
         </section>
      </main>
   );
}
