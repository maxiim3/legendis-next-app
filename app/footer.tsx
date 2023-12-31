import DigitalSolutionStudioLogo from '@/components/atoms/DSS-logo';
import Legendis from '@/components/atoms/Legendis';
import Text from '@/components/atoms/text';
import {cn} from '@/lib/utils';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import {ExternalLink, Github} from 'lucide-react';
import Link from 'next/link';
import React, {ComponentPropsWithoutRef} from 'react';
import {section} from './footer.css';

export default function Footer() {
   const {links, legals} = useFooterData();
   return (
      <footer className={'relative bg-gradient-to-b from-base-100 from-40% to-base-200'}>
         <div className='space-opacity-8 lg:space-opacity-16 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:justify-between'>
               <Legendis className={'h-12 w-12 fill-primary'} />
            </div>
            <div className='grid grid-cols-1 gap-8 border-t border-primary/80 pt-8 sm:grid-cols-2 lg:pt-16'>
               <section className={section}>
                  <Foo.Title className={'mb-3'}>Links</Foo.Title>
                  <Foo.Item href={links.prod203.link}>
                     <ExternalLink className={'w-4 opacity-50'} />
                     {links.prod203.label}
                  </Foo.Item>
               </section>
               {/*                <section className={section}> */}
               <Foo.Title>Design & Developpement</Foo.Title>
               <Foo.Item href={links.github.link}>
                  <Github className={'w-4'} />
                  {links.github.label}
               </Foo.Item>
               <Foo.Item href={links.dss.link}>
                  <DigitalSolutionStudioLogo className={'h-6 w-6 fill-neutral-50 opacity-70'} />
                  {links.dss.label}
               </Foo.Item>
               {/*                </section> */}
               <Text className='text-xs text-primary/70'>{legals}</Text>
            </div>
         </div>
      </footer>
   );
}

function useFooterData() {
   //   const currentLanguage = useAppLanguage(store => store.currentLanguage);
   const currentLanguage = 'fr';

   const linkToProd203 = MultiLanguageContentFactory.create({
      fr: 'Our site Jamais203 Productions',
      en: 'Notre site Jamais 203 Productions',
   });

   const legals = MultiLanguageContentFactory.create({
      en: ' &copy; 2023. Jamais 203 Productions. All rights reserved. ',
      fr: ' &copy; 2023. Jamais 203 Productions. Tous droits réservés. ',
   });

   return {
      links: {
         prod203: {
            label: linkToProd203.get(currentLanguage),
            link: `https://prod203.com/${currentLanguage}`,
         },
         github: {
            label: 'Maxime Tamburrini',
            link: 'https://github.com/maxiim3/prod203-next-app',
         },
         dss: {
            label: 'Digital Solution Studio',
            link: 'https://digitalsolution.studio',
         },
      },
      legals: legals.get(currentLanguage),
   };
}

namespace Foo {
   export function Item({
      className,
      children,
      href,
      ...props
   }: ComponentPropsWithoutRef<'a'> & {
      href: string;
   }) {
      return (
         <li
            className={cn(
               'font-regular list-none text-base leading-loose tracking-wider text-primary',
               'hover:text-primary'
            )}>
            <Link
               prefetch={false}
               href={href}
               className={cn('link flex items-center gap-1 text-sm text-neutral-50/80', className)}
               {...props}>
               {children}
            </Link>
         </li>
      );
   }

   //   export function Group({children, className}: ComponentPropsWithoutRef<'section'>) {
   //      return (
   //         <section className={cn('w-41 flex flex-col items-start text-left', className)}>
   //            {children}
   //         </section>
   //      );
   //   }
   //
   export function Title({children, className}: ComponentPropsWithoutRef<'h3'>) {
      return (
         <h3
            className={cn(
               'font-regular tracking-wides,t w-full text-base font-semibold uppercase text-primary',
               className
            )}>
            {children}
         </h3>
      );
   }
}
