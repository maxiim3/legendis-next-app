import Footer from '@/app/footer';
import Header from '@/app/header';
import VideoPlayer from '@/page-section/fixed-video/video-player';
import { italianno,roboto,tangerine } from '@/shared/fonts';
import { Video } from 'lucide-react';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
   title: 'Legendis',
   description: 'Un label Jamais 203 Productions',
};

// const LazyVideo = React.lazy(() => import ('@/components/organisms/video-hero.client'))

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html
         data-theme={'legendisTheme'}
         lang='en'>
         <body
            className={`relative ${roboto.className} ${italianno.className} ${tangerine.className}`}>
            <div className={'fixed left-0 top-0 h-screen w-screen '}>{/*<LazyVideo/>*/}</div>
            <Header />

            <figure className={'fixed left-0 top-0 -z-[50] h-screen w-screen'}>
               {/* <img */}
               {/*    src={'/orchestra.png'} */}
               {/*    className={'object-cover size-full md:object-cover object-center'} */}
               {/*    alt={''} */}
               {/* /> */}
               <VideoPlayer />
            </figure>
            {children}
            <Footer />
         </body>
      </html>
   );
}
