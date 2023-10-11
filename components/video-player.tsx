'use client';

import Text from '@/components/atoms/text';
import {useVideoSource, VideoSource} from '@/hooks/useVideoSource';
import {cn} from '@/lib/utils';
import {motion, useScroll, useTransform} from 'framer-motion';
import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary';
import React, {Suspense, useEffect, useRef} from 'react';
import {create} from 'zustand';

export type AppState = {
   // getters
   componentMounted: boolean;
   isVideoLoaded: boolean;

   // setters
   setComponentMounted: () => void;
   setIsVideoLoaded: () => void;
};
export const useAppState = create<AppState>(set => ({
   componentMounted: false,
   isVideoLoaded: false,
   setComponentMounted: () => set({componentMounted: true}),
   setIsVideoLoaded: () => set({isVideoLoaded: true}),
}));

export function HeaderBanner() {
   let {scrollYProgress} = useScroll();

   let scale = useTransform(scrollYProgress, [0, 1], ['100%', '300%']);
   let opacity = useTransform(scrollYProgress, [0, 1], ['100%', '40%']);

   console.log();
   return (
      <>
         <motion.section
            id={'hero'}
            style={{
               scale,
               opacity,
            }}
            aria-label={'Video hero banner'}
            className={cn(
               'fixed top-0 mx-auto h-screen w-screen overflow-hidden'
               // 'lg:aspect-video lg:h-auto '
            )}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Suspense>
               <VideoPlayer />
            </Suspense>
         </motion.section>
      </>
   );
}

export default function VideoPlayer() {
   const {isVideoLoaded, setIsVideoLoaded, setComponentMounted, componentMounted} = useAppState(
      state => state
   );

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
   const {setVideoSource} = useVideoSource(VIDEO_SOURCE, videoRef);

   // div region added by cloudinary unexpectedly, this is a workaround to remove the padding top
   let problematicAddedElement: HTMLDivElement | null = null;
   if (componentMounted) {
      problematicAddedElement = document.querySelector('[aria-label="Video Player"]');
   }
   useEffect(() => {
      if (!componentMounted) {
         setComponentMounted();
      }
      setVideoSource();
      if (!isVideoLoaded) {
         setIsVideoLoaded();
      }

      if (problematicAddedElement) {
         problematicAddedElement.style.paddingTop = '0px !important';
      }
   }, [
      componentMounted,
      isVideoLoaded,
      problematicAddedElement,
      setComponentMounted,
      setIsVideoLoaded,
      setVideoSource,
   ]);

   /*Handle Load Failed on no internet : Display an image placeholder instead of the video*/
   if (!componentMounted) {
      return (
         <div
            className={
               'flex h-full w-full animate-pulse flex-col items-center justify-center bg-base-100/70'
            }>
            <Text className={'space-x-3'}>
               <span className='loading loading-spinner loading-lg text-primary' />
               Legendis
            </Text>
         </div>
      );
   }
   return (
      <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 4, delay: 0.5}}>
         <CldVideoPlayer
            width={1920}
            height={1080}
            autoPlay={'always'}
            data-test='video-player'
            loop={true}
            muted={true}
            onError={() => <p>Something went wrong</p>}
            onMetadataLoad={({video}: {player: CloudinaryVideoPlayer; video: HTMLVideoElement}) => {
               video.playsInline = true;
               // video.style.height = `${window.innerHeight}px`;
               video.style.paddingBlock = '0px';
               video.parentElement!.style.paddingTop = '0px';
               video.style.objectFit = 'cover';
               video.style.objectPosition = 'center';
            }}
            playerRef={playerRef}
            controls={false}
            videoRef={videoRef}
            src={VIDEO_SOURCE.VERY_HIGH}
            className={cn(
               'absolute top-0 m-0 mx-auto object-contain object-center p-0',
               problematicAddedElement && '![&_*]:p-0 ![&>[aria-label="Video_Player]:p-0 '
            )}
         />
      </motion.div>
   );
}
