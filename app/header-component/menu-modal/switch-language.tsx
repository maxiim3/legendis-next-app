'use client';

import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {AvailableLanguages} from '@/shared/i18n/i18n.types';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import React from 'react';

export function SwitchLanguage() {
   const {toggleLanguage, currentLanguage} = useAppLanguage(store => store);

   return (
      <div
         className='absolute bottom-8 flex items-center space-x-2 '
         data-language={currentLanguage}>
         <Label
            className={'uppercase'}
            htmlFor='language'>
            {AvailableLanguages.get().fr}
         </Label>
         <Switch
            onClick={toggleLanguage}
            id='language'
         />
         <Label
            className={'uppercase'}
            htmlFor='language'>
            {AvailableLanguages.get().en}
         </Label>
      </div>
   );
}
