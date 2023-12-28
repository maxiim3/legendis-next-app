import {useEffect} from 'react';

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
