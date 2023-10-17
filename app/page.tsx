import HeroBanner from '@/components/organisms/hero-banner';
import Members from '@/components/organisms/members.client';
import {default as Presentation} from '@/components/organisms/presentation.client';
import SpotifyGrid from '@/components/organisms/spotify-grid.client';
import VideoHero from '@/components/organisms/video-hero.client';
import React from 'react';

export default function HomePage() {
   return (
      <main
         className={
            'h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance '
         }>
         {/*<VideoHero />*/}
         <HeroBanner />
         <Presentation />
         {/*<Members />*/}
         {/*<SpotifyGrid />*/}
      </main>
   );
}
