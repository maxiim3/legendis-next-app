import HomeSections from '@/components/home-sections.client';
import VideoPlayer from '@/components/video-player';
import React, {Suspense} from 'react';

export default function LandingPage() {
   return (
      <main
         className={
            'h-min-screen mx-auto  flex w-screen flex-col items-center justify-center bg-transparent font-roboto text-balance '
         }>
         <div className='relative  h-screen w-screen overflow-hidden'>
            <Suspense>
               <VideoPlayer />
            </Suspense>
         </div>

         <h1 className={'sr-only text-xl font-light uppercase text-primary'}>Legendis</h1>
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
