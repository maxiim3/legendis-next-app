'use client';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import Prose from '@/components/atoms/Prose';
import Text from '@/components/atoms/text';
import {SectionTemplateWrapper} from '@/components/section-template-wrapper.client';
import {useNavigationStore} from '@/stores/navigation.store';
import React, {ComponentPropsWithoutRef} from 'react';

export default function Presentation() {
   const {presentation} = useNavigationStore(store => store.sections);

   return (
         <SectionTemplateWrapper
            slug={presentation.slug}
            className={'mt-4  p-2 px-1  sm:px-3 '}
            id={presentation.id}>
            <Prose className={'mx-auto pb-8 px-2 pt-48 text-center'}>
               {/*<Heading2>Bienvenus...</Heading2>*/}
               <Text>
                  Bienvenus dans le monde de Legendis, un label musical dédié à la musique
                  symphonique et romantique. Fondé en octobre 2021 par trois amis passionnés de
                  musique - Jérôme Kuhn, chef d&apos;orchestre, Nathan Stornetta, compositeur, et
                  Samuel Briand, ingénieur du son - Legendis s&apos;efforce de repousser les limites
                  de l&apos;expression musicale.
               </Text>
            <Accordion type='single' collapsible className='w-full'>
               <AccordionItem value='item-1'>
                  <AccordionTrigger>Strat&eacute;gie</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Notre stratégie consiste à produire des albums ambitieux, captivant l&apos;essence
                        même de la musique de film, des opéras et de la musique classique. Nous croyons
                        fermement que ces genres intemporels méritent une place de choix dans le paysage
                        musical contemporain.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-2'>
                  <AccordionTrigger>Cr&eacute;ation</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Chez <strong>Legendis</strong>, nous aimons également explorer de nouvelles
                        avenues et embrasser l&apos;innovation musicale. Nous avons à cœur de créer des
                        albums featuring, fusionnant la musique électronique ou le rap par exemple, avec
                        les riches sonorités de l&apos;orchestre symphonique. Cette démarche audacieuse
                        nous permet de créer des expériences musicales uniques, mêlant les genres et
                        attirant un public varié.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-3'>
                  <AccordionTrigger>Engagements</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Nous mettons un point d&apos;honneur à travailler avec des artistes talentueux,
                        des solistes émérites et des compositeurs émergents, afin de donner vie à des
                        projets musicaux d&apos;une grande envergure. Notre équipe s&apos;engage à
                        garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce à
                        notre expertise technique et à notre passion pour le son.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value='item-4'>
                  <AccordionTrigger>Valeurs</AccordionTrigger>
                  <AccordionContent>
                     <Text>
                        Chez <strong>Legendis</strong>, nous croyons que la musique est un langage
                        universel qui transcende les frontières et les époques. Nous aspirons à émouvoir,
                        à inspirer et à toucher les cœurs de notre public à travers nos productions
                        musicales. Bienvenue dans l&apos;univers sonore de Legendis.
                     </Text>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
            </Prose>
         </SectionTemplateWrapper>
   );
}

