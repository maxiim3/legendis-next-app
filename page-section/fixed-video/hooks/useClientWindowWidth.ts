import React,{ useEffect } from 'react';

/**
 * Custom hook to determine the most appropriate video source based on network and screen size.
 * Function to set the most suitable video source.
 * This function should be called in your component to actually apply the changes to the video element.
 */
export function useClientWindowWidth() {
   const [width, setWidth] = React.useState<number>((window && window.innerWidth) || 0);

   useEffect(() => {
      function updateWindowWidth() {
         setWidth(window.innerWidth);
         console.log('width', width);
      }

      updateWindowWidth();
      window.addEventListener('resize', updateWindowWidth);

      return () => window.removeEventListener('resize', updateWindowWidth);
   }, [width]);

   return {width};
}
