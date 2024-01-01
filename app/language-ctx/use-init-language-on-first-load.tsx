import {DEFAULT_LANG} from '@/app/language-ctx/default-language.constant';
import {
   getLanguageInSearchParams,
   setNewURLSearchParams,
   useUrlProps,
} from '@/app/language-ctx/utils';

export function useInitLanguageOnFirstLoad() {
   const {searchParams, searchKey, router, pathname} = useUrlProps();

   const languageIsNotSet = searchParams.has(searchKey);
   if (languageIsNotSet) {
      const updated = setNewURLSearchParams(searchKey, DEFAULT_LANG);
      const lang = getLanguageInSearchParams(updated, searchKey);
      return lang;
   } else {
      const lang = getLanguageInSearchParams(searchParams, searchKey);
      return lang;
   }
}
