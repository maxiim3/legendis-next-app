import {AccordionWidget} from '@/app/accordion-presentation/accordion-widget';
import Footer from '@/app/footer-component/footer';
import Header from '@/app/header-component/header';

import {ButtonLink} from '@/app/hero-section/components/buttons';
import {cardContainer, screenStack} from '@/app/hero-section/hero-section.css';
import {MultiLangH2} from '@/app/multi-lang-h2';
import {MultiLangText} from '@/app/multi-lang-text';
import {SectionInViewObserver} from '@/app/section-in-view-observer';
import {mainPageStack, offsetScreen} from '@/app/shared.css';
import {OT_AlbumFromSanity} from '@/app/widgets/album-carousel/album-component/album-types-extrator.sanity';
import {AlbumFactory} from '@/app/widgets/album-carousel/album-component/album.factory';
import {CarouselWidget} from '@/app/widgets/album-carousel/carousel-container/carousel-container';
import TextBlock from '@/components/atoms/text-block';
import {LegendisLogo} from '@/components/organisms/legendis-logo';
import sanityClient from '@/lib/singleton-sanity-client';
import {ContactRedirection} from '@/page-section/contact-redirection/contact-redirection';
import {BackgroundVideo} from '@/page-section/fixed-video/video-component';
import React from 'react';

async function getAllAlbums() {
   const albumsResponses: OT_AlbumFromSanity[] = await sanityClient.fetch(`*[_type == "album"]`);
   const albums: ReturnType<typeof AlbumFactory>[] = albumsResponses.map(albumRes =>
      AlbumFactory(albumRes)
   );
   return albums;
}

export default async function Page() {
   const albums: Awaited<ReturnType<typeof AlbumFactory>[]> = await getAllAlbums();
   return (
      <>
         <Header />
         <BackgroundVideo />
         <main className={mainPageStack}>
            <section className={screenStack}>
               <article className={cardContainer}>
                  <LegendisLogo />
                  <MultiLangText text={{fr: 'Découvrez nos albums', en: 'Our Albums'}} />
                  <ButtonLink />
               </article>
            </section>
            <div className={offsetScreen}>
               <SectionInViewObserver
                  id={'albums'}
                  slug={'albums'}>
                  <CarouselWidget albums={albums} />
               </SectionInViewObserver>
               <SectionInViewObserver
                  slug={'presentation'}
                  className={'mt-4  flex flex-col  items-center rounded-t-xl p-2 px-1 sm:px-3'}
                  id={'presentation'}>
                  <TextBlock className={'mx-auto px-2 pb-8 pt-48 text-center'}>
                     <MultiLangH2 labels={{en: 'Welcome', fr: 'Bienvenus'}} />
                     <MultiLangText text={PageData.welcome} />
                  </TextBlock>
                  <AccordionWidget />
               </SectionInViewObserver>

               {/* <Members /> */}
               <ContactRedirection />
               <Footer />
            </div>
         </main>
      </>
   );
}

const PageData = {
   welcome: {
      en: 'Welcome to the world of Legendis, a record label dedicated to symphonic and romantic music. Founded in October 2021 by three friends passionate about music - Jérôme Kuhn, conductor, Nathan Stornetta, composer, and Samuel Briand, sound engineer - Legendis strives to push the boundaries of musical expression.',
      fr: "Bienvenus dans le monde de Legendis, un label musical dédié à la musique symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de musique - Jérôme Kuhn, chef d'orchestre, Nathan Stornetta, compositeur, et Samuel Briand, ingénieur du son - Legendis s'efforce de repousser les limites de l'expression musicale.",
   },
};
