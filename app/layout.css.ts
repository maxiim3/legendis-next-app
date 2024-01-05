import {style} from '@vanilla-extract/css';

export const body = style([
   {
      position: 'relative',
   },
]);

export const videoWrapper = style({
   position: 'fixed',
   left: 0,
   top: 0,
   zIndex: -50,
   height: '100vh',
   width: '100vw',
});
