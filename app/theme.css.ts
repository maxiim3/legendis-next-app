import {colors as customColors} from '@/shared/colors';
import {createGlobalTheme} from '@vanilla-extract/css';
import twColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export const vars = createGlobalTheme(':root', {
   color: {
      primary: customColors.husk['400'],
      primaryFocus: customColors.husk['500'],
      primaryContent: twColors.neutral['50'],

      // secondary
      secondary: twColors.teal['400'],

      // accent
      accent: twColors.fuchsia['600'],

      // base
      'base-100': twColors.neutral['950'],
      'base-200': twColors.neutral['900'],
      'base-300': twColors.neutral['800'],
      'base-content': twColors.neutral['50'],

      // neutral
      neutral: twColors.neutral['950'],

      // info
      info: customColors.info['400'],

      // success
      success: customColors.success['400'],

      // warning
      warning: customColors.warning['400'],

      // error
      error: customColors.danger['400'],
   },
});

export const screens = {
   xs: '475px',
   ...defaultTheme.screens,
   '2xl': '1400px',
};
