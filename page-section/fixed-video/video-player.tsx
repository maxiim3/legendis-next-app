'use client';

import {cn} from '@/lib/utils';
import {useClientWindowWidth} from '@/page-section/fixed-video/hooks/useClientWindowWidth';
import {useHandleVideoProps} from '@/page-section/fixed-video/hooks/useHandleVideoProps';
import {useHandleVideoSource} from '@/page-section/fixed-video/hooks/useHandleVideoSource';
import {useResetVideoPosition} from '@/page-section/fixed-video/hooks/useResetVideoPosition';
import {OT_VideoSource} from '@/page-section/fixed-video/video-source-options';
import {motion} from 'framer-motion';
import {CldVideoPlayer, CloudinaryVideoPlayer} from 'next-cloudinary';
import React, {Suspense, useEffect, useRef, useState} from 'react';

/**
 * Master hook that commands all the utility hooks
 * to compose and handle the video source
 * @returns {{videoRef: React.MutableRefObject<HTMLVideoElement | null>, playerRef: React.MutableRefObject<CloudinaryVideoPlayer | null>, videoSrc: string | null, problematicVideoElement: HTMLVideoElement | null}}
 */
function useVideoPlayer(): {
   videoRef: React.MutableRefObject<HTMLVideoElement | null>;
   playerRef: React.MutableRefObject<CloudinaryVideoPlayer | null>;
   videoSrc: string | null;
   problematicVideoElement: HTMLVideoElement | null;
} {
   const videoRef = useRef<HTMLVideoElement | null>(null);

   const playerRef = useRef<CloudinaryVideoPlayer | null>(null);

   const {width} = useClientWindowWidth();
   const {computedVideoSource} = useHandleVideoSource(width);
   useHandleVideoProps(width, videoRef.current);
   const {problematicVideoElement} = useResetVideoPosition();

   const [videoSrc, setVideoSrc] = useState<OT_VideoSource | null>(null);

   useEffect(() => {
      if (computedVideoSource) {
         setVideoSrc(computedVideoSource);
      }
   }, [computedVideoSource]);

   return {problematicVideoElement, videoSrc, videoRef, playerRef};
}

export default function VideoPlayer() {
   const {problematicVideoElement, videoSrc, videoRef, playerRef} = useVideoPlayer();

   if (!videoSrc) {
      return <VideoSkeleton />;
   }

   return (
      <Suspense fallback={<VideoSkeleton />}>
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 4, delay: 0.5}}
            className={'h-screen w-screen overflow-hidden'}>
            <CldVideoPlayer
               width={720}
               height={480}
               autoPlay={'always'}
               data-test='video-player'
               loop={true}
               muted={true}
               onError={() => <p>Something went wrong</p>}
               onMetadataLoad={({
                  video,
               }: {
                  player: CloudinaryVideoPlayer;
                  video: HTMLVideoElement;
               }) => {
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
               src={videoSrc}
               className={cn(
                  'h-screen w-screen object-contain object-center p-0',
                  problematicVideoElement && '![&_*]:p-0 ![&>[aria-label="Video_Player]:p-0 '
               )}
            />
         </motion.div>
      </Suspense>
   );
}

function VideoSkeleton() {
   return (
      <div
         className={
            'flex h-full w-full animate-pulse flex-col items-center justify-center bg-base-100/70'
         }>
         <span className='loading loading-spinner loading-lg text-primary' />
         Legendis
      </div>
   );
}
