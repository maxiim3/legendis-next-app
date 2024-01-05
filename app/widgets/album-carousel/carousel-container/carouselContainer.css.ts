import {screens} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const widgetContainer = style({
   position: 'relative',
   width: '100%',
   height: '100%',
   maxHeight: '100vh',
   overflow: 'hidden',
   '@media': {
      [`screen and (min-width: ${screens.sm})`]: {
         borderRadius: 12,
      },
   },
});
export const carouselContainer = style({
   marginInline: 'auto',
   //   height: '50%',
   width: '100%',
   //     background: 'rgba(120, 12, 129, 0.6)',
   padding: 4,
   '@media': {
      [`screen and (min-width:${screens.md})`]: {
         width: '75%',
      },
   },
});
// 'mx-auto w-full lg:w-2/3'
export const carouselContent = style({
   marginInline: 'auto',
   // background: 'rgba(20, 120, 199, 0.6)',
   width: '100%',
   position: 'relative',
   mask: 'circle(50px)',
});

export const carouselItem = style({
   //   border: '1px solid pink',
   flexBasis: '100%',
   position: 'relative',
   height: '80vh',
   '@media': {
      [`screen and (min-width: ${screens.xs})`]: {
         flexBasis: '75%',
         height: '66vh',
      },
      [`screen and (min-width: ${screens.sm})`]: {
         flexBasis: '66%',
         minHeight: '50vh',
         height: 'auto',
      },
      [`screen and (min-width: ${screens.md})`]: {
         flexBasis: '50%',
      },
      [`screen and (min-width: ${screens.lg})`]: {
         flexBasis: '33%',
      },
      [`screen and (min-width: ${screens.xl})`]: {
         flexBasis: '30%',
      },
   },
});
