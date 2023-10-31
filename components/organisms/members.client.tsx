'use client';

import {I18nContent} from '@/business/contracts/I18nContent';
import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import MemberCard from '@/components/organisms/member-card';
import {useI18nContext} from '@/stores/i18n.store';
import {useNavigationStore} from '@/stores/navigation.store';
import React from 'react';

export default function Members() {
   const {team} = useNavigationStore(store => store.sections);
   const currentLanguage = useI18nContext(store => store.currentLanguage);
   return (
      <SectionTemplateWrapper
         className={'pb-24 rounded-b-xl mb-12'}
         slug={team.slug}
         id={team.id}>
         <Prose className={'mx-auto text-center pb-16 '}>
            <Heading2>{SectionTitle.get(currentLanguage)}</Heading2>

         </Prose>
         <div className='flex w-full '>
            <MemberCard />
         </div>
      </SectionTemplateWrapper>
   );
}

const SectionTitle = I18nContent.create({
   fr: 'L\'Équipe',
   en: 'Team',
});

