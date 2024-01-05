'use client';

import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import Heading2 from '@/components/atoms/heading-2';
import {MultiLanguageContent} from '@/shared/i18n/i18n.types';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import React, {ComponentPropsWithoutRef} from 'react';

export function MultiLangH2({
   labels,
   className,
}: {labels: MultiLanguageContent.Type} & ComponentPropsWithoutRef<'h2'>) {
   const multiTitle = MultiLanguageContentFactory.create({fr: labels.fr, en: labels.en});
   const {language} = useLanguageCtx();
   return <Heading2 className={className}>{multiTitle.get(language)}</Heading2>;
}
