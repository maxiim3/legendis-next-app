import {flexColCenterCenter, fullViewPort} from '@/app/shared.css';
import {vars} from '@/app/theme.css';
import {keyframes, style} from '@vanilla-extract/css';

const fadeOut = keyframes({
      to: {
         opacity: 0,
         visibility:'hidden'
      },
});

export const loader = style([
   fullViewPort,
   flexColCenterCenter,
   {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 999,
      background: vars.color['base-100'],
      animation: `${fadeOut} 800ms 900ms linear both`,
      overflow: 'clip',
   },
]);

////////////////////////////////
const logoAnimation = keyframes({
   '0%': {
      opacity: 0.8,
      scale: 0.8
   },
   "30%":{
      opacity:1,
   },
   "70%":{
      scale:1,
   },
   '100%': {
      opacity: 0,
      scale: 2,
   },
});
export const loaderLogo = style({
   width: 'clamp(220px, 50vw, 880px)',
   height: 'min-content',
   fill: vars.color.primary,
   animation: `${logoAnimation} 1.2s linear both`,
});
