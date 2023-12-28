import {OT_AlbumFromSanity} from '@/page-section/hero-section/albums/album.types';

export const AlbumFactory = (props: OT_AlbumFromSanity) => {
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
   } as Omit<OT_AlbumFromSanity, '_createdAt' & '_rev' & '_updatedAt' & '_type'>;
};
export type OT_Album = ReturnType<typeof AlbumFactory>;
