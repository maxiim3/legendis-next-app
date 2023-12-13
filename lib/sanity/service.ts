import {CategoryFactory, type T_Category} from '@/lib/sanity/category'
import {ProjectFactory, type T_Project} from '@/lib/sanity/project'
import {AlbumFactory, type T_Album} from '@/lib/sanity/album'
import sanityClient from '@/lib/sanity/sanity-client'


export const getAllAlbums = async () => {
   const albumsResponses: T_Album[] = await sanityClient.fetch(`*[_type == "album"]`)
   const albums: ReturnType<typeof AlbumFactory>[] = albumsResponses.map(albumRes =>
      AlbumFactory(albumRes)
   )
   return albums
}
export const getProjectBySlug = async (slug: string) => {
   const projectsResponses = await sanityClient.fetch(
      `*[_type == "project" && slug.current =="${slug}"]`
   )
   return ProjectFactory(projectsResponses[0])
}
