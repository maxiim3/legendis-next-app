'use client'

import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {cn} from '@/lib/utils';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import {Music} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import {useState} from 'react';
import {
   albumFooter,
   albumTitle,
   closeInfoButton,
   firstCard,
   hideAlbumInfo,
   infoMainSection,
   showAlbumInfo,
   textDescription,
   thumbnail,
   triggerButton,
} from './album.css';
import {OT_Album} from './album.factory';
import SanityImageBuilder from './sanity-image-builder';

export function Album({albumInfo}: {albumInfo: OT_Album}) {
   const [displayInformation, setInformationVisibility] = useState(false);

   const currentLanguage = useAppLanguage(x => x.currentLanguage);

   const description = albumInfo.description?.[currentLanguage][0].children;
   const title = albumInfo.title?.[currentLanguage];
   const artist = albumInfo.compositeur;
   const year = albumInfo.releaseDate && new Date(albumInfo?.releaseDate).getFullYear();
   const albumCover = SanityImageBuilder(albumInfo.album_cover).url();

   return (
      <>
         <Card className={firstCard}>
            <img
               alt={description && description[0].text}
               src={albumCover}
               className={thumbnail}
            />
            <footer className={albumFooter}>
               <Button
                  onClick={() => setInformationVisibility(true)}
                  className={triggerButton}>
                  Plus d&apos;infos
               </Button>
            </footer>
         </Card>

         <Card className={cn(displayInformation ? showAlbumInfo : hideAlbumInfo)}>
            <main className={infoMainSection}>
               <h3 className={albumTitle}>{title && title}</h3>
               <p>{artist?.join(" - ")}</p>
               <article className={textDescription}>
                  {description &&
                     description.map((desc, index) => {
                        return (
                           <p
                              key={index}
                              className='card-side'>
                              {desc.text}
                           </p>
                        );
                     })}
               </article>
               <p>{year}</p>
               {albumInfo.spotifyURL && (
                  <Button asChild>
                     <Link
                        href={albumInfo.spotifyURL}
                        prefetch={false}>
                        <Music />
                     </Link>
                  </Button>
               )}
            </main>
            <footer className={albumFooter}>
               <Button
                  size={'sm'}
                  variant={'outline'}
                  onClick={() => setInformationVisibility(false)}
                  className={closeInfoButton}>
                  X
               </Button>
            </footer>
         </Card>
      </>
   );
}
