'use client';

import {SectionTemplateWrapper} from '@/page-section/section-template';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import TextBlock from '@/components/atoms/text-block';

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';
import {useNavigationStore} from '@/shared/globalNavigation/navigation.store';
import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';
import {useAppLanguage} from '@/shared/i18n/useAppLanguage';
import React from 'react';

import {AccordionData} from './accordion-data';

function useSectionData() {
   const {currentLanguage} = useAppLanguage(store => store);
   const presentationData = useNavigationStore(store => store.sections.presentation);

   const PageTitle = MultiLanguageContentFactory.create({
      fr: 'Bienvenus',
      en: 'Welcome',
   });
   const PageDescription = MultiLanguageContentFactory.create({
      fr: "Bienvenus dans le monde de Legendis, un label musical dédié à la musique symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de musique - Jérôme Kuhn, chef d'orchestre, Nathan Stornetta, compositeur, et Samuel Briand, ingénieur du son - Legendis s'efforce de repousser les limites de l'expression musicale.",
      en: ' Welcome to the world of Legendis, a record label dedicated to symphonic and romantic music. Founded in October 2021 by three friends passionate about music - Jérôme Kuhn, conductor, Nathan Stornetta, composer, and Samuel Briand, sound engineer - Legendis strives to push the boundaries of musical expression.',
   });

   return {
      currentLanguage,
      sectionSlug: presentationData.slug,
      sectionId: presentationData.id,
      sectionTitle: PageTitle.get(currentLanguage),
      sectionDesc: PageDescription.get(currentLanguage),
   };
}

export default function LegendisPresentation() {
   const {currentLanguage, sectionSlug, sectionId, sectionTitle, sectionDesc} = useSectionData();

   return (
      <SectionTemplateWrapper
         slug={sectionSlug}
         className={'mt-4  rounded-t-xl p-2  px-1 sm:px-3'}
         id={sectionId}>
         <TextBlock className={'mx-auto px-2 pb-8 pt-48 text-center'}>
            <Heading2>{sectionTitle}</Heading2>
            <Text>{sectionDesc}</Text>
            <Accordion
               type='single'
               collapsible
               className='w-full'>
               {AccordionData.Collection.map(({title, content}, index) => (
                  <AccordionItem
                     value={`item-${index + 1}`}
                     key={index}>
                     <AccordionTrigger>{title.get(currentLanguage)}</AccordionTrigger>
                     <AccordionContent>
                        <Text>{content.get(currentLanguage)}</Text>
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </TextBlock>
      </SectionTemplateWrapper>
   );
}
