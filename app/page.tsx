import {HeaderBanner} from '@/components/video-player';
import React from 'react';
import HomeSections from '@/components/home-sections.client';

export default function LandingPage() {
   return (
      <main
         className={
            'h-min-screen relative mx-auto overflow-x-hidden flex w-screen flex-col items-center justify-center bg-transparent font-roboto text-balance '
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
