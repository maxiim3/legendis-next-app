'use client';

// import useLangParamsHook from '@/app/[lang]/use-lang-params.hook'
import { cn } from '@/lib/utils';
// import routes, {Route} from '@/static-content/route.static.content'
import DSS from '@/components/atoms/DSS-logo';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React,{ type ComponentPropsWithoutRef,type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Footer() {
   // const {
   //    lang,
   //    options: {pathname},
   // } = useLangParamsHook()
   const Section = (
      props: PropsWithChildren<{
         className?: string;
      }>
   ) => (
      <section className={twMerge('w-41 flex flex-col  items-start text-left', props.className)}>
         {props.children}
      </section>
   );

   const SectionTitle = (
      props: PropsWithChildren<{
         className?: string;
      }>
   ) => {
      return (
         <h3
            className={twMerge(
               'font-regular w-full text-base font-semibold uppercase tracking-widest text-primary',
               props.className
            )}>
            {props.children}
         </h3>
      );
   };
   const Item = ({className, children}: ComponentPropsWithoutRef<'li'>) => (
      <li
         className={cn(
            'font-regular list-none text-base leading-loose tracking-wider text-primary',
            'hover:text-primary',
            className
         )}>
         {children}
      </li>
   );

   return (
      <footer className={'relative bg-gradient-to-b from-base-100 from-40% to-base-200'}>
         <div className='space-opacity-8 lg:space-opacity-16 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
            {/*<div className='sm:flex sm:justify-between'>*/}
            {/*   <Image*/}
            {/*      width={260}*/}
            {/*      height={80}*/}
            {/*      className='w-48 -translate-x-6 select-none object-contain object-left'*/}
            {/*      src={'/assets/logo/prod203-white.webp'}*/}
            {/*      alt={'Prod 203'}*/}
            {/*   />*/}

            {/*   <ul className='mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end'>*/}
            {/*      <li>*/}
            {/*         <Link*/}
            {/*            aria-label='Ouvrir notre page Linkedin'*/}
            {/*            title='Ouvrir notre page Linkedin'*/}
            {/*            aria-description='Cliquez pour être redirigé vers notre page Linkedin'*/}
            {/*            href={'https://www.linkedin.com/company/jamais-203-productions/'}>*/}
            {/*            <svg*/}
            {/*               width='24'*/}
            {/*               height='24'*/}
            {/*               viewBox='0 0 24 24'*/}
            {/*               xmlns='http://www.w3.org/2000/svg'>*/}
            {/*               <path*/}
            {/*                  fill='currentColor'*/}
            {/*                  d='M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z'*/}
            {/*               />*/}
            {/*            </svg>*/}
            {/*         </Link>*/}
            {/*      </li>*/}
            {/*   </ul>*/}
            {/*</div>*/}

            <div className='grid grid-cols-1 gap-8 border-t border-primary/80 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16'>
               {/*<Section>*/}
               {/*   /!*<SectionTitle>Liens rapides</SectionTitle>*!/*/}
               {/*   /!*{routes.map(route => {*!/*/}
               {/*   /!*   const {name, path}: Route = route*!/*/}
               {/*   /!*   const title = name[lang]!*!/*/}

               {/*   /!*   return (*!/*/}
               {/*   /!*      <Item*!/*/}
               {/*   /!*         className={cn(pathname === path && 'font-semibold')}*!/*/}
               {/*   /!*         key={`footer-nav${path}`}>*!/*/}
               {/*   /!*         <Link href={`/${lang}${path}`}>{title}</Link>*!/*/}
               {/*   /!*      </Item>*!/*/}
               {/*   /!*   )*!/*/}
               {/*   /!*})}*!/*/}
               {/*</Section>*/}
               {/*<Section>*/}
               {/*   <SectionTitle>Légal</SectionTitle>*/}
               {/*   <Item>*/}
               {/*      /!*<Link href={`/${lang}/legal`}>*!/*/}
               {/*      /!*   {lang === 'en' ? 'Legal Notice' : 'Mentions Légales'}*!/*/}
               {/*      /!*</Link>*!/*/}
               {/*   </Item>*/}
               {/*</Section>*/}
               <p className='text-xs text-primary/70'>
                  &copy; 2023. Jamais 203 Productions. All rights reserved.
               </p>
               <Section>
                  <SectionTitle>Design & Developpement</SectionTitle>
                  <Item>
                     <Link
                        className={'flex items-center gap-1'}
                        href={'https://github.com/maxiim3/prod203-next-app'}>
                        <Github className={'w-4'} />
                        Maxime Tamburrini
                     </Link>
                  </Item>
                  <Item className={'flex items-center gap-1'}>
                     <Link
                        className={'flex items-center gap-1'}
                        href={'https://digitalsolution.studio'}>
                        <DSS className={'h-6 w-6 fill-primary opacity-80'} />
                        Digital Solution Studio
                     </Link>
                  </Item>
               </Section>
            </div>
         </div>
      </footer>
   );
}
