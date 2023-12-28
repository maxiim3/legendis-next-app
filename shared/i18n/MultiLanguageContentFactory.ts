import {AvailableLanguages} from './i18n.types';

export class MultiLanguageContentFactory<T> {
   private readonly fr: T;
   private readonly en: T;

   private constructor({fr, en}: {fr: T; en: T}) {
      this.fr = fr;
      this.en = en;
   }

   public static create<K>({fr, en}: {fr: K; en: K}) {
      return new MultiLanguageContentFactory({fr, en});
   }

   public get(lang: AvailableLanguages.Type): T {
      return lang === AvailableLanguages.get().en ? this.en : this.fr;
   }
}
