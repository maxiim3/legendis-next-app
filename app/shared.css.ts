import {keyframes, style} from '@vanilla-extract/css';
import {screens} from './theme.css';

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

export const fullViewPort = style({
   width: '100vw',
   height: '100vh',
});

export const flexColCenterCenter = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
});
export const flexColTopCenter = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'center',

});
export const flexColEvenlyCenter = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-evenly',
   alignItems: 'center',
});
export const sharedSectionTemplate = style({
   marginInline: 'auto',
   width: '100%',
   paddingBlock: 96,
   backdropFilter: 'blur(10px)',
   '@media': {
      [`screen and (in-width: ${screens.md})`]: {
         paddingInline: 12,
      },
   },
});
export const mainPageStack = style([
   flexColCenterCenter,
   {
      minHeight: '100vh',
      position: 'absolute',
      backgroundColor: 'transparent',
      top: '0',
      left: 0,
      width: '100vw',
      overflowX: 'hidden',
      fontFamily: 'Roboto, sans-serif',
   },
]);

export const offsetScreen = style([
   flexColCenterCenter,
   {
      position: 'relative',
      width: '100%',
      //      minHeight: '100vh',
      top: 80,
      //      left: 0,
      backgroundColor: 'rgb(10, 10, 10, 0.95)',
   },
]);
