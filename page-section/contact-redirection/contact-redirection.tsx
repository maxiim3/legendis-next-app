'use client';

import {SectionTemplateWrapper} from '@/page-section/section-template';
import TextBlock from '@/components/atoms/text-block';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import Link from 'next/link';
import React from 'react';

function useSectionData() {
   const currentLanguage = useAppLanguage(store => store.currentLanguage);
   const buttonLabel = MultiLanguageContentFactory.create({
      en: 'Contact us',
      fr: 'Nous contacter',
   });

   return {
      buttonLabel: buttonLabel.get(currentLanguage),
   };
}

export function ContactRedirection() {
   const {buttonLabel} = useSectionData();

   return (
      <SectionTemplateWrapper
         className={'mb-12 rounded-b-xl pb-24'}
         slug={'contact'}
         id={'contact'}>
         <TextBlock className={'mx-auto'}>
            <Link
               prefetch={false}
               target='_blank'
               rel='noopener noreferrer'
               type={'external'}
               href={'https://prod203.com/contact'}
               className={'btn btn-primary'}>
               {buttonLabel}
            </Link>
         </TextBlock>
      </SectionTemplateWrapper>
   );
}
