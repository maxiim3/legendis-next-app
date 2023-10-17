'use client';

import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import MemberCard from '@/components/member-card';
import {SectionTemplateWrapper} from '@/components/section-template-wrapper.client';
import {useNavigationStore} from '@/stores/navigation.store';
import React from 'react';

export default function Members() {
   const {team} = useNavigationStore(store => store.sections);
   return (
      <SectionTemplateWrapper
         slug={team.slug}
         id={team.id}>
         <Prose className={'mx-auto text-center'}>
            <Heading2>Les membres</Heading2>
            <Text className='mx-auto pb-6 text-center text-3xl font-extrabold text-base-content/80 xl:text-4xl'>
               Les membres de notre équipe talentueuse
            </Text>
         </Prose>
         <div className='flex w-full '>
            <MemberCard />
         </div>
      </SectionTemplateWrapper>
   );
}
