export default class Artist {
   private readonly _artist: string;
   private readonly _link: string;
   private readonly _image?: string;

   private constructor(artist: string, link: string, image?: string) {
      this._artist = artist;
      this._link = link;
      this._image = image;
   }

   static from(artist: string, link: string, image?: string) {
      return new Artist(artist, link, image);
   }

   get artist(): string {
      return this._artist;
   }

   get link(): string {
      return this._link;
   }

   get image(): string | null {
      return this._image || null;
   }
}
