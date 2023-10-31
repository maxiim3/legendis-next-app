import {OT_I18NContent} from '@/stores/i18n.store';

export default class SectionReferenceFactory {
   private readonly _id: string;
   private readonly _title: OT_I18NContent;
   private readonly _slug: string;

   // private readonly _View: React.JSX.Element

   private constructor(id: string, title: OT_I18NContent, slug: string) {
      this._id = id;
      this._title = title;
      this._slug = slug;
      // this._View = View
   }

   get id(): string {
      return this._id;
   }

   get title(): OT_I18NContent {
      return this._title;
   }

   get slug(): string {
      return this._slug;
   }

   // get View() {
   //    return () => this._View
   // }

   public static createSection({
      id,
      title,
      slug,
   }: {
      id: string;
      title: OT_I18NContent;
      slug: string;
   }) {
      return new SectionReferenceFactory(id, title, slug);
   }
}
