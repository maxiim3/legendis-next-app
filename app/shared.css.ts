import { keyframes,style } from '@vanilla-extract/css';

export const srOnly = style({
   position: 'absolute',
   width: 1,
   height: 1,
   padding: 0,
   margin: -1,
   overflow: 'hidden',
   clip: 'rect(0, 0, 0, 0)',
   whiteSpace: 'nowrap',
   borderWidth: 0,
});
export const revealFromBottom = keyframes({
   from: {
      opacity: 0,
      transform: 'translateY(8px)',
   },
   to: {
      opacity: 1,
      transform: 'translateY(0)',
   },
});
