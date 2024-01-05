import {LanguageCtxProvider} from '@/app/language-ctx/language-ctx-provider';
import {loader, loaderLogo} from '@/app/loader.css';
import {PageSectionCtxProvider} from '@/app/page-navigation-ctx/page-navigation-ctx';
import Legendis from '@/components/atoms/Legendis';
import {LegendisLogo} from '@/components/organisms/legendis-logo';
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
         <div className={loader}>
            <Legendis className={loaderLogo}/>
         </div>
            <LanguageCtxProvider>
               <PageSectionCtxProvider>
                  {children}
               </PageSectionCtxProvider>
            </LanguageCtxProvider>
         </body>
      </html>
   );
}
