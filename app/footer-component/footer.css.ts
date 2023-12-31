import {screens, vars} from '@/app/theme.css';
import {style} from '@vanilla-extract/css';

export const footer = style({
   position: 'relative',
   background: `linear-gradient(to bottom, ${vars.color['base-100']} 0%, ${vars.color['base-100']}  40%, ${vars.color['base-300']} 100%)`,
});

export const title = style({
   letterSpacing: '0.1em',
   width: '100%',
   fontSize: '1rem',
   fontWeight: 600,
   textTransform: 'uppercase',
   color: `${vars.color.primary}`,
});

export const atomic = {
   marginBottom: style({
      marginBottom: 12,
   }),
};

export const link = style({
   display: 'flex',
   alignItems: 'center',
   gap: 4,
   fontSize: 14,
   listStyle: 'none',
   lineHeight: 1.75,
   letterSpacing: '0.05em',
   color: `${vars.color['base-content']}`,
   opacity: 0.9,
   [':hover']: {
      color: vars.color.primaryContent,
      opacity: 1,
   },
});
export const linkItem = style({
   listStyle: 'none',
   margin: 0,
   padding: 0,
});

export const innerStack = style({
   marginInline: 'auto',
   maxWidth: screens.xl,
   paddingInline: 16,
   paddingBlock: 64,
   '@media': {
      [`screen and (min-width: ${screens.lg})`]: {
         padding: 32,
      },
      [`screen and (min-width: ${screens.sm})`]: {
         paddingInline: 48,
      },
   },
});

export const logo = {
   container: style({
      '@media': {
         [`screen and (min-width: ${screens.sm})`]: {
            display: 'flex',
            justifyContent: 'between',
         },
      },
   }),
   component: style({
      height: 48,
      width: 48,
      fill: vars.color.primary,
   }),
};

export const section = {
   stack: style({
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: 32,
      borderTop: `1px solid ${vars.color.primary}`,
      paddingTop: 32,
      '@media': {
         [`screen and (min-width: ${screens.sm})`]: {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
         },
         [`screen and (min-width: ${screens.lg})`]: {
            paddingTop: 64,
         },
      },
   }),
   section: style({
      flexDirection: 'column',
      display: 'flex',
      gap: 4,
   }),
};

export const linkToProd203 = style({
   width: 32,
   opacity: 0.5,
});

export const icons = {
   github: style({
      width: 20,
   }),
   dss: style({
      height: 20,
      width: 20,
      fill: vars.color['base-content'],
      opacity: 0.7,
   }),
};

export const overrideLegalText = style({
   fontSize: 12,
   color: vars.color.primary,
   opacity: 0.7,
});
