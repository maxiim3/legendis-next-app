'use client'

import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import Text from '@/components/atoms/text';
import {MultiLanguageContent} from '@/shared/i18n/i18n.types';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import React from 'react';

export function MultiLangText({text}: {text: MultiLanguageContent.Type}) {
   const multiText = MultiLanguageContentFactory.create({fr: text.fr, en: text.en});
   const {language} = useLanguageCtx();
   return <Text>{multiText.get(language)}</Text>;
}
