import {screens, vars} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const legendisLogoStyles = {
   logo: style({
      marginInline: 'auto',
      width: 'clamp(96px, 40vw, 240px)',
      aspectRatio: '3/2',
      height: 'min-content',
      margin: 0,
      transform: 'translateY(5px)',
      fill: vars.color.primary,
   }),

   overrideH2: style({
      marginBlock: 4,
      textAlign: 'center',
      fontSize: 'clamp(32px, 8vw, 48px)',
      color: vars.color['base-content'],
      textTransform: 'capitalize',
      margin: 0,
   }),
   overrideSubTitle: style({
      fontSize: 'clamp(8px, 1.2vw, 16px)',
      textAlign: 'center',
      textTransform: 'capitalize',
      color: vars.color['base-content'],
   }),
};
