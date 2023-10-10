'use client';

import {useComponentDidMount} from '@/hooks/useComponentDidMount';
import {useVideoSource, VideoSource} from '@/hooks/useVideoSource';
import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary';
import React, {useEffect, useRef} from 'react';

export default function VideoPlayer() {
   const BASE_URL = 'https://res.cloudinary.com';
   const CLOUDINARY_ENV = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

   const VIDEO_SOURCE: VideoSource = Object.freeze({
      LOW: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/231005_CAPSULE_WEB_SD.webp`,
      MEDIUM: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/231005_CAPSULE_WEB_HD.webm`,
      HIGH: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/231005_CAPSULE_WEB_FHD.webm`,
      VERY_HIGH: `${BASE_URL}/${CLOUDINARY_ENV}/video/upload/v1693588665/prod203/231005_CAPSULE_WEB_UHD.webm`,
   });
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const playerRef = useRef<CloudinaryVideoPlayer | null>(null);
   const componentDidMount = useComponentDidMount();
   const {setVideoSource} = useVideoSource(VIDEO_SOURCE, videoRef);

   useEffect(() => {
      componentDidMount && setVideoSource();
   }, [componentDidMount, setVideoSource]);

   /*Handle Load Failed on no internet : Display an image placeholder instead of the video*/
   if (!componentDidMount) {
      return (
         <>
            <h1>Waiting....</h1>
         </>
      );
   }
   return (
      <CldVideoPlayer
         width={1920}
         height={1080}
         autoPlay={'always'}
         loop={true}
         muted={true}
         onError={() => <p>Something went wrong</p>}
         onMetadataLoad={({video}: {player: CloudinaryVideoPlayer; video: HTMLVideoElement}) => {
            video.playsInline = true;
            // video.style.height = `${window.innerHeight}px`;
            video.style.objectFit = 'cover';
            video.style.objectPosition = 'center';
         }}
         playerRef={playerRef}
         controls={false}
         videoRef={videoRef}
         src={VIDEO_SOURCE.VERY_HIGH}
         className={'mx-auto h-screen w-screen object-contain object-center'}
      />
   );
}
