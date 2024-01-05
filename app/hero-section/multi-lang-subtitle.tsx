'use client'

import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import React, {ComponentPropsWithoutRef} from 'react';

export function MultiLangSubtitle({className}: ComponentPropsWithoutRef<'small'>) {
   const {language} = useLanguageCtx();
   const subTitle = MultiLanguageContentFactory.create({
      fr: 'un label jamais 203 productions',
      en: 'a jamais 203 productions label',
   });

   return <small className={className}>{subTitle.get(language)}</small>;
}
