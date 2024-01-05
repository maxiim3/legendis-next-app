import {flexColCenterCenter, flexColEvenlyCenter, fullViewPort} from '@/app/shared.css';
import {screens} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const cardContainer = style([
   flexColEvenlyCenter,
   {
      position: 'relative',
      zIndex: 880,
      width: '100vw',
      minHeight: '80vh',
      backgroundColor: 'rgba(10,10,10,0.95)',
      paddingBlock: 8,
      boxShadow: '0 4px 20px 8px rgba(0,0,0,0.7),0 4px 90px 30px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      '@media': {
         [`screen and (min-width : ${screens.sm})`]: {
            width: '80vw',
         },
         [`screen and (min-width : ${screens.md})`]: {
            height: 'auto',
            //            maxHeight: '95vh',
            maxWidth: '90vw',
            gap: 8,
            border: `1px solid rgba(10,10,10,0.3)`,
            paddingBlock: 32,
            borderRadius: 12,
         },
      },
   },
]);
export const screenStack = style([
   flexColCenterCenter,
   {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      zIndex: 800,
   },
]);
