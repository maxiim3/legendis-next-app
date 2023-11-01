import Footer from '@/components/organisms/footer.client';
import Header from '@/components/organisms/header';
import { italianno,roboto,tangerine } from '@/styles/fonts';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
   title: 'Legendis',
   description: 'Un label Jamais 203 Productions',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html
         data-theme={'legendisTheme'}
         lang='en'>
         <body
            className={`relative ${roboto.className} ${italianno.className} ${tangerine.className}`}>
            <div className={'fixed left-0 top-0 h-screen w-screen '}>
               <Image
                  src={'/assets/orchestra02.webp'}
                  fill
                  sizes={'100vw'}
                  objectFit={'cover'}
                  layout={'fill'}
                  quality={100}
                  className={'blur-[2px]'}
                  alt={'Legendis Orchestra'}
               />
            </div>
            <Header />

            {children}
            <Footer />
         </body>
      </html>
   );
}
