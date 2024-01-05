import sanityClient from '@/lib/singleton-sanity-client';
import imageUrlBuilder from '@sanity/image-url';

export default function SanityImageBuilder(image: any) {
   const builder = imageUrlBuilder(sanityClient);

   return builder.image(image);
}
