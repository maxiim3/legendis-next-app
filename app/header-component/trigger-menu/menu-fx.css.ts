import {screens, vars} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const menuFx = {
   initialState: style({
      position: 'fixed',
      bottom: 16,
      right: 16,
      zIndex: 900,
      height: 48,
      width: 48,
      borderRadius: '100%',
      backgroundColor: vars.color['base-100'],
      transition: 'all 200ms ease-in',
   }),
   openState: style({
      scale: '5000%',
      '@media': {
         [`screen and (min-width: ${screens.md})`]: {
            scale: '10000%',
         },
         [`screen and (min-width: ${screens['2xl']})`]: {
            scale: '30000%',
         },
      },
   }),
};
