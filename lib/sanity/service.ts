import {AlbumFactory, type T_Album} from '@/lib/sanity/album'
import sanityClient from '@/lib/sanity/sanity-client'


export const getAllAlbums = async () => {
   const albumsResponses: T_Album[] = await sanityClient.fetch(`*[_type == "album"]`)
   const albums: ReturnType<typeof AlbumFactory>[] = albumsResponses.map(albumRes =>
      AlbumFactory(albumRes)
   )
   return albums
}
