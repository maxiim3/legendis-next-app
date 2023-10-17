import {ObserverBtn} from '@/app/observerBtn';
import HomeSections from '@/components/home-sections.client';
import {HeaderBanner} from '@/components/video-player';
import React from 'react';

export default function LandingPage() {
   return (
      <main
         className={
            'h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance '
         }>
         <HeaderBanner />
         <HomeSections />

      </main>
   );
}
// <main className={"relative "}>
// 	<div className="fixed left-0 top-0 z-30 m-0 aspect-auto h-screen w-screen overflow-hidden p-0 [&_*]:aspect-auto [&_*]:p-0">
// 		{/*<Suspense fallback={<p>Loading</p>}>*/}
// 		{/*	<VideoPlayer />*/}
// 		{/*</Suspense>*/}
// 	</div>
// 	<Hero />
// </main>
