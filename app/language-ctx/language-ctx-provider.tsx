'use client';

import {useInitLanguageOnFirstLoad} from '@/app/language-ctx/use-init-language-on-first-load';
import React, {Dispatch, createContext, useReducer, type PropsWithChildren} from 'react';
import type {LanguageOptions, LanguageReducer} from './language-ctx.types';

export const LanguageCtx = createContext<LanguageOptions | null>(null);
export const LanguageCtxDispatcher = createContext<Dispatch<LanguageReducer> | null>(null);

function languageReducer(language: LanguageOptions, action: LanguageReducer) {
   switch (action.type) {
      case 'TOGGLE':
         return language === 'en' ? 'fr' : 'en';
      case 'UPDATE':
         return action.payload;
   }
}

export function LanguageCtxProvider(props: PropsWithChildren) {
   const preferredLanguage = useInitLanguageOnFirstLoad();
   const [language, languageDispatcher] = useReducer(languageReducer, preferredLanguage);
   return (
      <LanguageCtx.Provider value={language}>
         <LanguageCtxDispatcher.Provider value={languageDispatcher}>
            {props.children}
         </LanguageCtxDispatcher.Provider>
      </LanguageCtx.Provider>
   );
}
