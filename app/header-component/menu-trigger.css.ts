import {vars} from '@/app/theme.css';
import {keyframes, style} from '@vanilla-extract/css';

const sharedPosition = style({
   position: 'fixed',
   bottom: 12,
   right: 16,
});
const buttonSize = style({
   width: '10ch',
   aspectRatio: '1/1',
});

const fullScreen = style({
   width: '100vw',
   height: '100vh',
});
const roundedFull = style({
   borderRadius: '100%',
});
const roundedNone = style({
   borderRadius: 'none',
});

export const button = style([
   buttonSize,
   sharedPosition,
   roundedFull,
   {
      transition: 'all 200ms ease',
      padding: '4px 8px',
      zIndex: 999,
      color: vars.color['base-content'],
      cursor: 'pointer',
      border: '1px solid lightgray',
   },
]);

export const buttonState = {
   menuOpen: style({
      background: vars.color['base-100'],
   }),
   menuClose: style({
      background: 'none',
   }),
};

const fxContainerBaseStyle = style({
   zIndex: 900,
});
export const fxContainerCircle = style([
   sharedPosition,
   buttonSize,
   roundedFull,
   fxContainerBaseStyle,
]);
export const fxContainerFullScreen = style([fullScreen, roundedNone, fxContainerBaseStyle]);

const openMenu = keyframes({
   '0%': {
      opacity: 1,
      bottom: 12,
      right: 16,
      borderRadius: '100%',
      width: '10ch',
      aspectRatio: '1/1',
   },
   '100%': {
      borderRadius: '0%',
      opacity: 0.98,
      height: '100vh',
      width: '100vw',
      bottom: 0,
      right: 0,
   },
});
const closeMenu = keyframes({
   from: {
      borderRadius: '0%',
      opacity: 0.98,
      height: '100vh',
      width: '100vw',
      bottom: 0,
      right: 0,
   },
   to: {
      opacity: 1,
      bottom: 12,
      right: 16,
      borderRadius: '100%',
      width: '10ch',
      aspectRatio: '1/1',
   },
});

const bgShared = style({
   zIndex: 910,
   transition: 'all 200ms ease',
   transformOrigin: 'center',
   background: vars.color['base-100'],
});
export const animateMenuClosed = style([
   bgShared,
   sharedPosition,
   buttonSize,
   {
      opacity: 0.98,
      animation: `${closeMenu} 650ms ease both`,
   },
]);
export const animateOpenMenu = style([
   sharedPosition,
   bgShared,
   {
      display: 'block',
      animation: `${openMenu} 550ms 120ms ease both`,
   },
]);
