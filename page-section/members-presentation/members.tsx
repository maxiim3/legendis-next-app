'use client';

import MemberCard from '@/page-section/members-presentation/founders-widget';
import {SectionTemplateWrapper} from '@/page-section/section-template';
import Heading2 from '@/components/atoms/heading-2';
import TextBlock from '@/components/atoms/text-block';
import {useNavigationStore} from '@/shared/globalNavigation/navigation.store';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import React from 'react';

function useSectionData() {
   const {team} = useNavigationStore(store => store.sections);
   const currentLanguage = useAppLanguage(store => store.currentLanguage);

   const SectionTitle = MultiLanguageContentFactory.create({
      fr: "L'Équipe",
      en: 'Team',
   });

   return {
      sectionTitle: SectionTitle.get(currentLanguage),
      sectionSlug: team.slug,
      teamId: team.id,
   };
}

export default function Members() {
   const {sectionTitle, sectionSlug, teamId} = useSectionData();

   return (
      <SectionTemplateWrapper
         slug={sectionSlug}
         id={teamId}>
         <TextBlock className={'mx-auto pb-16 text-center '}>
            <Heading2>{sectionTitle}</Heading2>
         </TextBlock>
         <div className='flex w-full '>
            <MemberCard />
         </div>
      </SectionTemplateWrapper>
   );
}
