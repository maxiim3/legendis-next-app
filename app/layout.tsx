import Footer from '@/app/footer';
import Header from '@/app/header';
import VideoPlayer from '@/page-section/fixed-video/video-player';
import {italianno, roboto, tangerine} from '@/shared/fonts';
import type {Metadata} from 'next';
import React from 'react';
import './globals.css';
import {body, videoWrapper} from './layout.css';
import './theme.css';

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
            className={`${body} ${roboto.className} ${italianno.className} ${tangerine.className}`}>
            <Header />
            <figure className={videoWrapper}>
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
