import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';

export function useFooterData() {
   //   const currentLanguage = useAppLanguage(store => store.currentLanguage);
   const currentLanguage = 'fr';

   const linkToProd203 = MultiLanguageContentFactory.create({
      fr: 'Our site Jamais203 Productions',
      en: 'Notre site Jamais 203 Productions',
   });

   const legals = MultiLanguageContentFactory.create({
      en: ' © 2023. Jamais 203 Productions. All rights reserved. ',
      fr: ' © 2023. Jamais 203 Productions. Tous droits réservés. ',
   });

   return {
      links: {
         prod203: {
            label: linkToProd203.get(currentLanguage),
            link: `https://prod203.com/${currentLanguage}`,
         },
         github: {
            label: 'Maxime Tamburrini',
            link: 'https://github.com/maxiim3/prod203-next-app',
         },
         dss: {
            label: 'Digital Solution Studio',
            link: 'https://digitalsolution.studio',
         },
      },
      legals: legals.get(currentLanguage),
   };
}
