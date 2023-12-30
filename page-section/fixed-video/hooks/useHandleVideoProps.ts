import { useEffect } from 'react';

/**
 useHandleVideoProps is a hook that handles setting the styles and playback
 of a video element.

 It takes in:

 - width - the width of the video's container
 - videoElement - the video DOM element

 On mount, it sets the following styles if width and videoElement exist:

 - width/height to 100vw/100vh
 - objectFit to 'cover'

 It also attempts to play the video, logging success/errors.

 The hook runs on mount and when width or videoElement update.

 This handles setting the video to fill the screen responsively, and auto-playing
 on load.
 **/

export function useHandleVideoProps(width: number | null, videoElement: HTMLVideoElement | null) {
   useEffect(() => {
      if (!width || !videoElement) return;

      videoElement.style.width = '100vw';
      videoElement.style.height = '100vh';
      videoElement.style.objectFit = 'cover';

      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
         playPromise.then(e => console.log(e)).catch(error => console.error(error));
      }
   }, [videoElement, width]);
}
