import {revealFromBottom} from '@/app/shared.css';
import {screens, vars} from '@/app/theme.css';
import {keyframes, style} from '@vanilla-extract/css';

export const navContainer = {
   base: style({
      maxHeight: 1200,
      transition: 'all 200ms 200ms',
   }),
   state: {
      visible: style({
         visibility: 'visible',
         position: 'fixed',
         top: 0,
         zIndex: 990,
         display: 'flex',
         flexDirection: 'column',
         height: '100vh',
         width: 'clamp(200px, 100vw, 1200px)',
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
   cursor: 'pointer',
   userSelect: 'none',
   transition: 'all 150ms ease',
   ':hover': {
      filter: 'grayscale(0)',
      opacity: 1,
   },
});
export const navLink = {
   li: style({
      listStyle: 'none',
      animation: `${revealFromBottom} 250ms 400ms ease both`,
   }),
   a: style({
      fontSize: 16,
      fontWeight: 'normal',
      textTransform: 'uppercase',
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
export const logoTitle = {
   container: style({
      position: 'absolute',
      top: 48,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   }),
   logo: style({
      height: 96,
      width: 96,
      fill: vars.color.primary,
      animation: `${revealFromBottom} 350ms 220ms ease-in both`,
   }),
   title: style({
      fontSize: 16,
      color: vars.color.primary,
      opacity: 0.8,
      animation: `${revealFromBottom} 150ms 175ms ease-in both`,
   }),
};
