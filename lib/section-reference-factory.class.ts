export default class SectionReferenceFactory {
   private readonly _id: string
   private readonly _title: string
   private readonly _slug: string

   // private readonly _View: React.JSX.Element

   private constructor(id: string, title: string, slug: string) {
      this._id = id
      this._title = title
      this._slug = slug
      // this._View = View
   }

   get id(): string {
      return this._id
   }

   get title(): string {
      return this._title
   }

   get slug(): string {
      return this._slug
   }


   // get View() {
   //    return () => this._View
   // }

   public static createSection(id: string, title: string, slug: string) {
      return new SectionReferenceFactory(id, title, slug)
   }
}
