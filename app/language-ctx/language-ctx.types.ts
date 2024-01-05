export type LanguageOptions = 'fr' | 'en';
export type SearchParamKey = 'lang';
export type LanguageReducer =
   | {
        type: 'UPDATE';
        payload: LanguageOptions;
     }
   | {
        type: 'TOGGLE';
     };
