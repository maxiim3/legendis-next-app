
import {OZ_AvailableLanguages, type OT_AvailableLanguages} from '@/stores/i18n.store';

export  class I18nContent<T> {
   private readonly fr: T;
   private readonly en: T;

   private constructor({fr, en}: {fr: T; en: T}) {
      this.fr = fr;
      this.en = en;
   }

   public static create<K>({fr, en}: {fr: K; en: K}) {
      return new I18nContent({fr, en});
   }

   public get(lang: OT_AvailableLanguages):T {
      return lang === OZ_AvailableLanguages.Values.en ? this.en : this.fr;
   }
}
