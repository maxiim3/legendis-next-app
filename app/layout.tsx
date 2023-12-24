import Footer from '@/components/organisms/footer.client';
import { italianno,roboto,tangerine } from '@/styles/fonts';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import Header from '@/app/header';

export const metadata: Metadata = {
   title: 'Legendis',
   description: 'Un label Jamais 203 Productions',
};

const LazyVideo = React.lazy(() => import ('@/components/organisms/video-hero.client'))

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html
         data-theme={'legendisTheme'}
         lang='en'>
         <body
            className={`relative ${roboto.className} ${italianno.className} ${tangerine.className}`}>
            <div className={'fixed left-0 top-0 h-screen w-screen '}>
                <LazyVideo/>
            </div>
            <Header />

            {children}
            <Footer />
         </body>
      </html>
   );
}
