import {
   canUseHighRes,
   isFastConnection,
   NetworkInformation,
} from '@/page-section/fixed-video/network-information';
import {getSourceByWidth} from '@/page-section/fixed-video/screen-sizes';
import {
   OT_VideoSource,
   VIDEO_SOURCE_OPTIONS,
} from '@/page-section/fixed-video/video-source-options';
import React, {useEffect} from 'react';

export function useHandleVideoSource(width: number) {
   const [computedVideoSource, setComputedVideoSource] = React.useState<OT_VideoSource | null>(
      null
   );

   useEffect(() => {
      if (!width) return;

      const networkInfo: NetworkInformation | null = (navigator as any)?.connection || null;
      const networkInfoNotAvailable = !networkInfo;
      const isSlowConnection = networkInfo?.saveData || !isFastConnection(networkInfo);

      if (networkInfoNotAvailable) {
         setComputedVideoSource(VIDEO_SOURCE_OPTIONS.LOW);
      } else if (isSlowConnection) {
         setComputedVideoSource(VIDEO_SOURCE_OPTIONS.MEDIUM);
      } else if (canUseHighRes(networkInfo)) {
         const compoundWidth = getSourceByWidth(width, VIDEO_SOURCE_OPTIONS);
         setComputedVideoSource(compoundWidth);
      }
   }, [width]);

   console.log('useVideoSource | getSourceByWidth ', computedVideoSource);
   return {computedVideoSource};
}
