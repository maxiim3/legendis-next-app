import { CarouselNavigation } from '@/app/carouselNavigation';
import { AlbumFactory } from '@/lib/sanity/album';
import ImageBuilder from '@/lib/sanity/image.builder';
import { getAllAlbums } from '@/lib/sanity/service';
import { cn } from '@/lib/utils';
import React,{ Suspense,type ComponentPropsWithoutRef } from 'react';

export default async function HomePage() {
   const albums: Awaited<ReturnType<typeof AlbumFactory>[]> = await getAllAlbums();
   return (
      // <main className='mt-24'>
      <main>
         <AlbumSlideShow albums={albums} />
         <ArtistPresentation />
         <ContactCTA />
      </main>
   );
}

function PageSection({children, className, id}: ComponentPropsWithoutRef<'section'>) {
   return (
      <section
         id={id}
         className={cn('min-h-screen w-screen bg-base-200', className)}>
         {children}
      </section>
   );
}

function AlbumSlideShow({albums}: {albums: ReturnType<typeof AlbumFactory>[]}) {
   return (
      <PageSection
         className={'relative'}
         id='albums'>
         {/* <header className=' absolute top-0 flex w-full justify-center'> */}
         {/*    <Heading2>ALBUMS</Heading2> */}
         {/* </header> */}
         {/*<div className='carousel h-[calc(100vh-96px)] w-screen border bg-base-300'>*/}
         <div className='carousel h-screen w-screen border bg-base-300'>
            <Suspense
               fallback={
                  <>
                     <AlbumSkeleton />
                     <AlbumSkeleton />
                     <AlbumSkeleton />
                  </>
               }>
               {albums.map((album, index) => {
                  const date = album.releaseDate && new Date(album?.releaseDate);
                  const year = date && date.getFullYear();
                  const imageSource = ImageBuilder(album.album_cover).url();

                  return (
                     <AlbumCardWrapper
                        id={`album-${index}`}
                        key={index}>
                        <img
                           className=' top-0 flex h-full w-full object-cover'
                           src={imageSource}
                        />
                        <AlbumDetailsWrapper>
                           {album.interprete && <Interpreters interpreters={album.interprete} />}
                           <AlbumTitle>{album.title!.fr}</AlbumTitle>
                           {/*<ListDetails*/}
                           {/*   items={album?.compositeur}*/}
                           {/*   title={'Compositeur'}*/}
                           {/*/>*/}
                           {year && <DisplayYear year={year} />}
                        </AlbumDetailsWrapper>
                     </AlbumCardWrapper>
                  );
               })}
               <CarouselNavigation len={albums.length - 1} />
            </Suspense>
         </div>
      </PageSection>
   );
}

function AlbumCardWrapper({children, id}: ComponentPropsWithoutRef<'div'>) {
   return (
      <div
         id={id}
         className=' carousel-item relative mx-auto h-full w-full rounded-box'>
         {children}
      </div>
   );
}

const AlbumSkeleton = () => <AlbumCardWrapper />;

function AlbumDetailsWrapper({children}: ComponentPropsWithoutRef<'article'>) {
   return (
      <article className='absolute bottom-0 flex w-full flex-col  items-center gap-2 px-2 py-12 '>
         {children}
      </article>
   );
}

function AlbumTitle({children}: ComponentPropsWithoutRef<'p'>) {
   return <h3 className={'text-center text-xl uppercase text-balance md:text-2xl'}>{children}</h3>;
}

function Interpreters({interpreters}: {interpreters: string[]}) {
   return (
      <ListDetails
         items={interpreters}
         title={null}
      />
   );
}

function ListDetails({items, title}: {items: string[] | undefined; title: string | null}) {
   return (
      items && (
         <>
            {title && <h4 className={'m-1 p-0 text-lg uppercase md:text-xl'}>{title}</h4>}
            <ul className={'prose m-1 flex flex-col items-center justify-center p-0'}>
               {items
                  .filter(item => item.length)
                  .map((item, idx) => (
                     <li
                        key={idx}
                        className={'m-0 list-none p-0'}>
                        {item}
                     </li>
                  ))}
            </ul>
         </>
      )
   );
}

const DisplayYear = ({year}: {year: number}) => <p>{year}</p>;

function ArtistPresentation() {
   return <PageSection id='team'>ARTISTS</PageSection>;
}

function ContactCTA() {
   return <PageSection>CONTACT</PageSection>;
}
