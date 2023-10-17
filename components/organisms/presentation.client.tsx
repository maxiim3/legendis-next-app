'use client';

import Prose from '@/components/atoms/Prose';
import Heading2 from '@/components/atoms/heading-2';
import Text from '@/components/atoms/text';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';
import {OT_AvailableLanguages, OZ_AvailableLanguages, useI18nContext} from '@/stores/i18n.store';
import {useNavigationStore} from '@/stores/navigation.store';
import React from 'react';

export default function Presentation() {
   const {currentLanguage} = useI18nContext(store => store);
   const {presentation} = useNavigationStore(store => store.sections);

   return (
      <SectionTemplateWrapper
         slug={presentation.slug}
         className={'mt-4  p-2 px-1  sm:px-3 '}
         id={presentation.id}>
         <Prose className={'mx-auto px-2 pb-8 pt-48 text-center'}>
            <Heading2>{PageTitle.get(currentLanguage)}</Heading2>
            <Text>{PageDescription.get(currentLanguage)}</Text>
            <Accordion
               type='single'
               collapsible
               className='w-full'>
               <AccordionItem value='item-1'>
                  <AccordionTrigger>Stratégie</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Notre stratégie consiste à produire des albums ambitieux, captivant
                        l\'essence même de la musique de film, des opéras et de la musique
                        classique. Nous croyons fermement que ces genres intemporels méritent une
                        place de choix dans le paysage musical contemporain.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-2'>
                  <AccordionTrigger>Création</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Chez <strong>Legendis</strong>, nous aimons également explorer de nouvelles
                        avenues et embrasser l\'innovation musicale. Nous avons à cœur de créer des
                        albums featuring, fusionnant la musique électronique ou le rap par exemple,
                        avec les riches sonorités de l\'orchestre symphonique. Cette démarche
                        audacieuse nous permet de créer des expériences musicales uniques, mêlant
                        les genres et attirant un public varié.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-3'>
                  <AccordionTrigger>Engagements</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Nous mettons un point d\'honneur à travailler avec des artistes talentueux,
                        des solistes émérites et des compositeurs émergents, afin de donner vie à
                        des projets musicaux d\'une grande envergure. Notre équipe s\'engage à
                        garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce
                        à notre expertise technique et à notre passion pour le son.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-4'>
                  <AccordionTrigger>Valeurs</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Chez <strong>Legendis</strong>, nous croyons que la musique est un langage
                        universel qui transcende les frontières et les époques. Nous aspirons à
                        émouvoir, à inspirer et à toucher les cœurs de notre public à travers nos
                        productions musicales. Bienvenue dans l\'univers sonore de Legendis.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </Prose>
      </SectionTemplateWrapper>
   );
}

class I18nContent {
   private fr: string;
   private en: string;

   private constructor({fr, en}: {fr: string; en: string}) {
      this.fr = fr;
      this.en = en;
   }

   static create({fr, en}: {fr: string; en: string}) {
      return new I18nContent({fr, en});
   }

   get(lang: OT_AvailableLanguages) {
      return lang === OZ_AvailableLanguages.Values.en ? this.en : this.fr;
   }
}

const PageTitle = I18nContent.create({fr: 'Bienvenus', en: 'Welcome'});
const PageDescription = I18nContent.create({
   fr: "Bienvenus dans le monde de Legendis, un label musical dédié à la musique symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de musique - Jérôme Kuhn, chef d'orchestre, Nathan Stornetta, compositeur, et Samuel Briand, ingénieur du son - Legendis s'efforce de repousser les limites de l'expression musicale.",
   en: ' Welcome to the world of Legendis, a record label dedicated to symphonic and romantic music. Founded in October 2021 by three friends passionate about music - Jérôme Kuhn, conductor, Nathan Stornetta, composer, and Samuel Briand, sound engineer - Legendis strives to push the boundaries of musical expression.',
});
