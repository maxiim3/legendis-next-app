'use client';

import {I18nContent} from '@/business/contracts/I18nContent';
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
import {useI18nContext} from '@/stores/i18n.store';
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
               {AccordionContentCollection.map(({title, content}, index) => (
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
         </Prose>
      </SectionTemplateWrapper>
   );
}

const PageTitle = I18nContent.create({fr: 'Bienvenus', en: 'Welcome'});
const PageDescription = I18nContent.create({
   fr: "Bienvenus dans le monde de Legendis, un label musical dédié à la musique symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de musique - Jérôme Kuhn, chef d'orchestre, Nathan Stornetta, compositeur, et Samuel Briand, ingénieur du son - Legendis s'efforce de repousser les limites de l'expression musicale.",
   en: ' Welcome to the world of Legendis, a record label dedicated to symphonic and romantic music. Founded in October 2021 by three friends passionate about music - Jérôme Kuhn, conductor, Nathan Stornetta, composer, and Samuel Briand, sound engineer - Legendis strives to push the boundaries of musical expression.',
});

// Define your I18nContent for Strategy
const StrategyTitle = I18nContent.create({
   fr: 'Stratégie',
   en: 'Strategy',
});
const StrategyContent = I18nContent.create({
   fr: `Notre stratégie consiste à produire des albums ambitieux, captivant l'essence même de la musique de film, des opéras et de la musique classique. Nous croyons fermement que ces genres intemporels méritent une place de choix dans le paysage musical contemporain.`,
   en: `Our strategy is to produce ambitious albums, capturing the very essence of film music, operas, and classical music. We strongly believe that these timeless genres deserve a special place in the contemporary musical landscape.`,
});

// Define your I18nContent for Creation
const CreationTitle = I18nContent.create({
   fr: 'Création',
   en: 'Creation',
});
const CreationContent = I18nContent.create({
   fr: `Chez Legendis, nous aimons également explorer de nouvelles avenues et embrasser l'innovation musicale. Nous avons à cœur de créer des albums featuring, fusionnant la musique électronique ou le rap par exemple, avec les riches sonorités de l'orchestre symphonique. Cette démarche audacieuse nous permet de créer des expériences musicales uniques, mêlant les genres et attirant un public varié.`,
   en: `At Legendis, we also love to explore new avenues and embrace musical innovation. We are committed to creating feature albums, blending electronic music or rap for instance, with the rich tones of the symphony orchestra. This daring approach allows us to create unique musical experiences, mixing genres and attracting a diverse audience.`,
});

// Define your I18nContent for Engagements
const EngagementTitle = I18nContent.create({
   fr: 'Engagements',
   en: 'Commitments',
});
const EngagementContent = I18nContent.create({
   fr: `Nous mettons un point d'honneur à travailler avec des artistes talentueux, des solistes émérites et des compositeurs émergents, afin de donner vie à des projets musicaux d'une grande envergure. Notre équipe s'engage à garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce à notre expertise technique et à notre passion pour le son.`,
   en: `We take pride in working with talented artists, outstanding soloists, and emerging composers to bring to life large-scale musical projects. Our team is committed to ensuring exceptional sound quality in every recording, thanks to our technical expertise and passion for sound.`,
});

// Define your I18nContent for Values
const ValuesTitle = I18nContent.create({
   fr: 'Valeurs',
   en: 'Values',
});
const ValuesContent = I18nContent.create({
   fr: `Chez Legendis, nous croyons que la musique est un langage universel qui transcende les frontières et les époques. Nous aspirons à émouvoir, à inspirer et à toucher les cœurs de notre public à travers nos productions musicales. Bienvenue dans l'univers sonore de Legendis.`,
   en: `At Legendis, we believe that music is a universal language that transcends borders and times. We strive to move, inspire, and touch the hearts of our audience through our musical productions. Welcome to the sound universe of Legendis.`,
});
type AccordionContentType<K> = Array<{title: K; content: K}>;

const AccordionContentCollection: AccordionContentType<
   ReturnType<typeof I18nContent.create<string>>
> = [
   {title: StrategyTitle, content: StrategyContent},
   {title: CreationTitle, content: CreationContent},
   {title: EngagementTitle, content: EngagementContent},
   {title: ValuesTitle, content: ValuesContent},
];
