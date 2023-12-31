import {screens, vars} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const textHeading2 = style({
   fontFamily: 'Roboto, sans-serif',
   fontSize: 30,
   fontWeight: 'normal',
   color: vars.color.primary,
   '@media': {
      [`screen and (min-width: ${screens.sm})`]: {
         fontSize: 36,
      },
   },
});
