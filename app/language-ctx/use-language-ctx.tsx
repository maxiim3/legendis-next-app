import {LanguageCtx, LanguageCtxDispatcher} from '@/app/language-ctx/language-ctx-provider';
import type {LanguageOptions} from '@/app/language-ctx/language-ctx.types';
import {setNewURLSearchParams, updateRouter, useUrlProps} from '@/app/language-ctx/utils';
import {useCallback, useContext, useEffect} from 'react';

export function useLanguageCtx() {
   const language = useContext(LanguageCtx)!;
   const languageDispatcher = useContext(LanguageCtxDispatcher)!;

   const {searchParams, searchKey, router, pathname} = useUrlProps();

   useEffect(() => {
      const updatedSearchParam = setNewURLSearchParams(searchKey, language);
      updateRouter(router, pathname, updatedSearchParam);
   }, [language, pathname, router, searchKey]);

   const updateLanguage = useCallback(
      (value: LanguageOptions) => {
         languageDispatcher({type: 'UPDATE', payload: value});
      },
      [languageDispatcher]
   );

   const toggleLanguage = useCallback(() => {
      languageDispatcher({type: 'TOGGLE'});
   }, [languageDispatcher]);

   return {language, toggleLanguage, updateLanguage};
}
