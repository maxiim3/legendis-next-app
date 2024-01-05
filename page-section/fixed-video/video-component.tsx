import { videoWrapper } from '@/app/layout.css';
import VideoPlayer from '@/page-section/fixed-video/video-player';
import React from 'react';

export function BackgroundVideo() {
   return (
      <figure className={videoWrapper}>
         {/* <img */}
         {/*    src={'/orchestra.png'} */}
         {/*    className={'object-cover size-full md:object-cover object-center'} */}
         {/*    alt={''} */}
         {/* /> */}
         <VideoPlayer />
      </figure>
   );
}
