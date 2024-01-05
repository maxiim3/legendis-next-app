import {z} from 'zod';

export type OT_AlbumFromSanity = z.infer<typeof Local.Album>;

namespace zod_Sanity {
   export const String = z.string();
   export const ArrayOfString = z.array(String);
   export const Span = z.object({
      _key: String,
      _type: String,
      marks: z.array(z.any()), // 👈 no change here, but you may refine this later
      text: String,
   });
   export const Block = z.object({
      _key: String,
      _type: String.refine(value => value === 'block', {
         message: 'Block element must be of type `block`',
      }),
      children: z.array(Span), // 👈 using the Span schema here
      markDefs: z.array(z.any()), // 👈 no change here, but you may refine this later
      style: String,
   });
   export const Slug = z.object({
      _type: String.refine(val => val === 'slug', {message: 'Album slug must be of type `slug`'}),
      current: String,
   });
   export const Type = String.refine(val => val === 'album', {
      message: 'Album type must be of type `album`',
   });
}

namespace Local {
   const Interpret = zod_Sanity.ArrayOfString;

   const Compositeur = zod_Sanity.ArrayOfString;

   const Title = z.object({
      _type: zod_Sanity.String.refine(val => val === 'localizedString', {
         message: 'Title type must be of type `localizedString`',
      }).optional(),
      en: zod_Sanity.String,
      fr: zod_Sanity.String,
   });

   const Gallery = z.array(
      z.object({
         _key: zod_Sanity.String,
         _type: zod_Sanity.String,
         asset: z.object({
            _ref: zod_Sanity.String,
            _type: zod_Sanity.String,
         }),
         credits: zod_Sanity.String.optional(),
         description: zod_Sanity.String.optional(),
      })
   );

   const Description = z.object({
      _key: zod_Sanity.String,
      _type: zod_Sanity.String,
      en: z.array(zod_Sanity.Block), // 👈 using Z_Lang here
      fr: z.array(zod_Sanity.Block), // 👈 using Z_Lang here
   });
   const Cover = z.object({
      _type: zod_Sanity.String.refine(value => value === 'image', {
         message: 'Block element must be of type `image`',
      }),
      asset: z.object({
         _ref: zod_Sanity.String,
         _type: zod_Sanity.String,
      }),
   });
   export const Album = z.object({
      title: Title.optional(),
      youtubeVideoURL: zod_Sanity.String.optional(),
      spotifyURL: zod_Sanity.String.optional(),
      _updatedAt: zod_Sanity.String.optional(),
      gallery: Gallery.optional(),
      awards: zod_Sanity.ArrayOfString.optional(),
      description: Description.optional(),
      compositeur: Compositeur.optional(),
      interprete: Interpret.optional(),
      album_cover: Cover.optional(),
      marque: zod_Sanity.String.optional(),
      releaseDate: zod_Sanity.String.optional(),
      slug: zod_Sanity.Slug.optional(),
      _id: zod_Sanity.String.optional(),
      _createdAt: zod_Sanity.String.optional(),
      _rev: zod_Sanity.String.optional(),
      _type: zod_Sanity.Type.optional(),
   });
}
