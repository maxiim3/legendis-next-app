import {AvailableLanguages} from './i18n.types';
import {create} from 'zustand';

namespace Local {
   /////////// DEFAULT LANGUAGE //////////
   export const default_language: AvailableLanguages.Type = AvailableLanguages.get().fr;

   ///////// CONTEXT TYPE OF GETTERS AND SETTERS //////////
   type OT_I18N_Getters = {
      currentLanguage: AvailableLanguages.Type;
   };
   type OT_I18N_Setters = {
      setCurrentLanguage: (value: AvailableLanguages.Type) => void;
      toggleLanguage: () => void;
   };
   export type OT_UnionGetterSetters = OT_I18N_Getters & OT_I18N_Setters;
}
export const useAppLanguage = create<Local.OT_UnionGetterSetters>(set => ({
   currentLanguage: Local.default_language,
   setCurrentLanguage: value => set({currentLanguage: value}),
   toggleLanguage: () =>
      set(state => ({
         currentLanguage:
            state.currentLanguage === AvailableLanguages.get().en
               ? AvailableLanguages.get().fr
               : AvailableLanguages.get().en,
      })),
}));
