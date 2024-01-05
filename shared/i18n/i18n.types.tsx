import {z} from 'zod';


export namespace AvailableLanguages {
   const languageEnum = z.enum(['en', 'fr']);
   export type Type = z.infer<typeof languageEnum>;
   export const parse = languageEnum.parse;
   export const get = () => languageEnum.Values;
}

export namespace MultiLanguageContent {
   const ZOD = z.object({
      en: z.string(),
      fr: z.string(),
   });
   export const parse = ZOD.parse;
   export type Type = z.infer<typeof ZOD>;
}



