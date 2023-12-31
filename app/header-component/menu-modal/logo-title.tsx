import Legendis from '@/components/atoms/Legendis';
import Text from '@/components/atoms/text';
import React from 'react';

export function LogoTitle() {
   return (
      <span className={'absolute top-12 flex flex-col items-center justify-center'}>
         <Legendis className={'h-24 w-24 fill-primary'} />
         <Text className={'text-md text-primary opacity-80'}>LEGENDIS</Text>
      </span>
   );
}
