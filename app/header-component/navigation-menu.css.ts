import {flexColCenterCenter, revealFromBottom} from '@/app/shared.css';
import {screens, vars} from '@/app/theme.css';
import {keyframes, style} from '@vanilla-extract/css';

export const navContainer = {
   base: style({
      maxHeight: 1200,
      width: '100vw',
      transition: 'all 200ms 200ms',
      position: 'fixed',
      top: '0%',
      zIndex: 990,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      marginInline: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      opacity: 1,
      '@media': {
         [`screen and (min-width:${screens.sm})`]: {
            gap: 24,
         },
         [`screen and (min-width:${screens.md})`]: {
            gap: 32,
            flexDirection: 'row',
         },
         [`screen and (min-width:${screens.lg})`]: {
            gap: 48,
         },
      },
   }),
   state: {
      visible: style({
         visibility: 'visible',
      }),
      hidden: style({
         visibility: 'hidden',
         opacity: 0.8,
      }),
   },
};
const reveal = keyframes({
   from: {
      translate: '0 100px',
      opacity: 0,
   },
   to: {
      translate: 0,
      opacity: 0.8,
   },
});
export const switchLanguage = style({
   animation: `${reveal} 250ms 500ms ease both`,
   position: 'absolute',
   bottom: 32,
   display: 'flex',
   alignItems: 'center',
   gap: 8,
   filter: 'grayscale(100%)',
   opacity: 0.7,
   userSelect: 'none',
   transition: 'all 150ms ease',
   ':hover': {
      filter: 'grayscale(0)',
      opacity: 1,
      cursor: 'pointer',
   },
});

export const navLink = {
   li: style({
      listStyle: 'none',
      animation: `${revealFromBottom} 250ms 400ms ease both`,
      position: 'relative',
      cursor: 'pointer',
   }),
   a: style({
      fontSize: 16,
      fontWeight: 'normal',
      textTransform: 'capitalize',
      color: vars.color['base-content'],
      '@media': {
         [`screen and (min-width:${screens.md})`]: {
            fontSize: 20,
         },
         [`screen and (min-width:${screens.lg})`]: {
            fontSize: 24,
         },
      },
   }),
};

export const underline = style([
   {
      selectors: {
         '&': {
            position: 'absolute',
            bottom: -3,
            left: 0,
            width: '100%',
            display: 'block',
            background: 'white',
            height: 2,
            scale: '0 1',
            transition: 'all 250ms ease',
            transformOrigin: 'left',
         },
         [`${navLink.li}:hover &`]: {
            scale: '1 1',
         },
      },
   },
]);
//selectors: {
//   [`${parent}:focus &`]: {
//      background: '#fafafa'
//   }
//}

export const absoluteContainer = style([
   flexColCenterCenter,
   {
      position: 'absolute',
      top: 48,
      animation: `${revealFromBottom} 300ms 320ms ease-in both`,
   },
]);
