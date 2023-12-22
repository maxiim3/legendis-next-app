import {z} from 'zod';

// Define the schema for a single span within a block
export const Z_Span = z.object({
   _key: z.string(),
   _type: z.string(),
   marks: z.array(z.any()), // 👈 no change here, but you may refine this later
   text: z.string(),
});

// Define the schema for a block, containing multiple spans
export const Z_Block = z.object({
   _key: z.string(),
   _type: z
      .string()
      .refine(value => value === 'block', {message: 'Block element must be of type `block`'}),
   children: z.array(Z_Span), // 👈 using the Z_Span schema here
   markDefs: z.array(z.any()), // 👈 no change here, but you may refine this later
   style: z.string(),
});

// Define the schema for the album description, accommodating multiple languages
export const Z_AlbumDescription = z.object({
   _key: z.string(),
   _type: z.string(),
   en: z.array(Z_Block), // 👈 using Z_Lang here
   fr: z.array(Z_Block), // 👈 using Z_Lang here
});

const Zod_Interprete = z.array(z.string());

const Zod_Compositeur = z.array(z.string());

const Zod_Title = z.object({
   _type: z
      .string()
      .refine(val => val === 'localizedString', {
         message: 'Title type must be of type `localizedString`',
      })
      .optional(),
   en: z.string(),
   fr: z.string(),
});

const Zod_Gallery = z.array(
   z.object({
      _key: z.string(),
      _type: z.string(),
      asset: z.object({
         _ref: z.string(),
         _type: z.string(),
      }),
      credits: z.string().optional(),
      description: z.string().optional(),
   })
);

const Zod_Slug = z.object({
   _type: z.string().refine(val => val === 'slug', {message: 'Album slug must be of type `slug`'}),
   current: z.string(),
});

const Zod_ArrayOfString = z.array(z.string());

const Zod_Type = z
   .string()
   .refine(val => val === 'album', {message: 'Album type must be of type `album`'});

const Zod_AlbumCover = z.object({
   _type: z
      .string()
      .refine(value => value === 'image', {message: 'Block element must be of type `image`'}),
   asset: z.object({
      _ref: z.string(),
      _type: z.string(),
   }),
});

export const Z_Album = z.object({
   title: Zod_Title.optional(),
   youtubeVideoURL: z.string().optional(),
   _updatedAt: z.string().optional(),
   gallery: Zod_Gallery.optional(),
   awards: Zod_ArrayOfString.optional(),
   description: Z_AlbumDescription.optional(),
   compositeur: Zod_Compositeur.optional(),
   interprete: Zod_Interprete.optional(),
   album_cover: Zod_AlbumCover.optional(),
   marque: z.string().optional(),
   releaseDate: z.string().optional(),
   slug: Zod_Slug.optional(),
   _id: z.string().optional(),
   _createdAt: z.string().optional(),
   _rev: z.string().optional(),
   _type: Zod_Type.optional(),
});
//endregion

//region TypeScript Types
export type T_Span = z.infer<typeof Z_Span>;
export type T_Block = z.infer<typeof Z_Block>;
export type T_AlbumDescription = z.infer<typeof Z_AlbumDescription>;
export type T_Album = z.infer<typeof Z_Album>;
//endregion

export const AlbumFactory = (props: T_Album) => {
   const {
      _id,
      awards,
      description,
      gallery,
      interprete,
      compositeur,
      marque,
      releaseDate,
      slug,
      title,
      youtubeVideoURL,
      album_cover,
   } = props;

   return {
      _id,
      awards,
      interprete,
      compositeur,
      description,
      gallery,
      marque,
      releaseDate,
      slug,
      title,
      youtubeVideoURL,
      album_cover,
   } as Omit<T_Album, '_createdAt' & '_rev' & '_updatedAt' & '_type'>;
};
