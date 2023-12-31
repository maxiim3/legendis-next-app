import Footer from '@/app/footer-component/footer';
import Header from '@/app/header-component/header';
import {BackgroundVideo} from '@/page-section/fixed-video/video-component';
import {italianno, roboto, tangerine} from '@/shared/fonts';
import type {Metadata} from 'next';
import React from 'react';
import './globals.css';
import {body} from './layout.css';
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
            <BackgroundVideo />
            {children}
            <Footer />
         </body>
      </html>
   );
}
