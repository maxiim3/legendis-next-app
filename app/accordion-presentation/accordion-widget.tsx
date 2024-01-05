'use client'

import {useLanguageCtx} from '@/app/language-ctx/use-language-ctx';
import Text from '@/components/atoms/text';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';
import {AccordionData} from '@/app/accordion-presentation/accordion-data';
import React from 'react';

export function AccordionWidget() {
   const {language} = useLanguageCtx();
   return (
      <Accordion
         type='single'
         collapsible
         className='w-full max-w-2xl margin-inline'>
         {AccordionData.Collection.map(({title, content}, index) => (
            <AccordionItem
               value={`item-${index + 1}`}
               key={index}>
               <AccordionTrigger>{title.get(language)}</AccordionTrigger>
               <AccordionContent>
                  <Text>{content.get(language)}</Text>
               </AccordionContent>
            </AccordionItem>
         ))}
      </Accordion>
   );
}
