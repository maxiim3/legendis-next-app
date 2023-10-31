import Prose from '@/components/atoms/Prose';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import HeroBanner from '@/components/organisms/hero-banner';
import Members from '@/components/organisms/members.client';
import Presentation from '@/components/organisms/presentation.client';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
   return (
      <main
         className={
            'h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance '
         }>
         {/*<VideoHero />*/}
         <HeroBanner />
         <div>
            <Presentation />
            <Members />
            <SectionTemplateWrapper
               className={'mb-12 rounded-b-xl pb-24'}
               slug={'contact'}
               id={'contact'}>
               <Prose className={'mx-auto'}>
                  <Link
                     target='_blank'
                     rel='noopener noreferrer'
                     type={'external'}
                     href={'https://prod203.com/contact'}
                     className={'btn btn-primary'}>
                     Nous contacter
                  </Link>
               </Prose>
               {/*  <Prose className={'mx-auto text-center pb-16 '}>
                  <Heading2>Contact</Heading2>
               </Prose>
               <ContactForm />*/}
            </SectionTemplateWrapper>
            /
         </div>
         {/*<SpotifyGrid />*/}
      </main>
   );
}
