import {MultiLangSubtitle} from '@/app/hero-section/multi-lang-subtitle';
import {srOnly} from '@/app/shared.css';
import Heading2 from '@/components/atoms/heading-2';
import Legendis from '@/components/atoms/Legendis';
import TextBlock from '@/components/atoms/text-block';
import {legendisLogoStyles} from '@/components/organisms/legendis-logo-styles.css';
import React from 'react';

export function LegendisLogo() {
   return (
      <TextBlock>
         <h1 className={srOnly}>Legendis</h1>
         <Legendis className={legendisLogoStyles.logo} />
         <Heading2 className={legendisLogoStyles.overrideH2}>Legendis</Heading2>
         <MultiLangSubtitle className={legendisLogoStyles.overrideSubTitle}/>
      </TextBlock>
   );
}
