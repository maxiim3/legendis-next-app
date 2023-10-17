import {z} from 'zod';
import {create} from 'zustand';

export const OZ_AvailableLanguages = z.enum(['en', 'fr']);
export type OT_AvailableLanguages = z.infer<typeof OZ_AvailableLanguages>;

export type OT_I18N_Getters = {
   currentLanguage: OT_AvailableLanguages;
};

export type OT_I18N_Setters = {
   setCurrentLanguage: (value: OT_AvailableLanguages) => void;
   toggleLanguage: () => void;
};

export const default_language: OT_AvailableLanguages = OZ_AvailableLanguages.Values.fr;

export const useI18nContext = create<OT_I18N_Setters & OT_I18N_Getters>(set => ({
   currentLanguage: default_language,
   setCurrentLanguage: value => set({currentLanguage: value}),
   toggleLanguage: () =>
      set(state => ({
         currentLanguage:
            state.currentLanguage === OZ_AvailableLanguages.Values.en
               ? OZ_AvailableLanguages.Values.fr
               : OZ_AvailableLanguages.Values.en,
      })),
}));

export const OZ_I18NContent = z.object({
   en: z.string(),
   fr: z.string(),
});
export type OT_I18NContent = z.infer<typeof OZ_I18NContent>;
