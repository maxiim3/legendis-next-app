import {Hero} from '@/app/hero.client';
import VideoPlayer from '@/components/video-player';
import React, {Suspense} from 'react';

export default function LandingPage() {
   return (
      <main className={'relative '}>
         <div className='fixed left-0 top-0 z-30 m-0 aspect-auto h-screen w-screen overflow-hidden p-0 [&_*]:aspect-auto [&_*]:p-0'>
            <Suspense fallback={<p>Loading</p>}>
               <VideoPlayer />
            </Suspense>
         </div>
         <Hero />
      </main>
   );
}
