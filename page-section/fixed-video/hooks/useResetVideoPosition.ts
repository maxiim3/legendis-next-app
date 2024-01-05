import {useEffect, useState} from 'react';

export function useResetVideoPosition() {
   const [problematicVideoElement, setProblematicVideoElement] = useState<HTMLVideoElement | null>(
      null,
   );

   useEffect(() => {
      setProblematicVideoElement(
         document.querySelector('[aria-label="Video Player"]') as HTMLVideoElement,
      );

      if (!problematicVideoElement) return;

      problematicVideoElement.style.paddingTop = '0px !important';
   }, [problematicVideoElement]);

   return {problematicVideoElement};
}
