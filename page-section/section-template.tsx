'use client';

import {cn} from '@/lib/utils';
import {useNavigationStore} from '@/shared/globalNavigation/navigation.store';
import SectionReferenceFactory from '@/shared/globalNavigation/section-reference.builder';
import {createComponent} from '@lit/react';
import {motion, useInView} from 'framer-motion';
import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import * as React from 'react';
import {ComponentPropsWithoutRef, useEffect, useRef} from 'react';

export function SectionTemplate({
   className,
   id,
   children,
   slug,
}: ComponentPropsWithoutRef<'section'> & {
   slug: SectionReferenceFactory['slug'];
}) {
   const sectionRef = useRef<HTMLDivElement>(null);

   const {setActiveSection, activeSection} = useNavigationStore(store => store);

   const inView = useInView(sectionRef, {
      amount: 0.3, // 0  = 'some', 1 = 'all'
      margin: '0px 0px 200px',
   });
   useEffect(() => {
      if (inView) {
         setActiveSection(slug);
      }
   }, [inView, setActiveSection, slug, sectionRef]);

   return (
      <motion.section
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 0.4, once: true, staggerChildren: 0.2}}
         ref={sectionRef}
         id={id}
         className={cn(`mx-auto w-full bg-base-100/75 px-3 py-24 backdrop-blur-sm`, className)}>
         {children}
      </motion.section>
   );
}
//
//@customElement('section-template')
//class SectionTemplateWC extends LitElement {
//   // Define scoped styles right with your component, in plain CSS
//   static styles = css`
//      section {
//         width: 100%;
//         margin-inline: auto;
//         background-color: rgba(19, 19, 19, 0.9);
//         backdrop-filter: blur(8px);
//
//         @media (min-width: 720px) {
//            padding-inline: 12px;
//            padding-block: 48px;
//         }
//      }
//   `;
//   @property()
//   id: string = '';
//
//   connectedCallback() {
//      super.connectedCallback();
//      const search = window.location.search
//     const query =  new URLSearchParams(search)
//      console.log(query);
//   }
//   disconnectedCallback() {
//
//      super.disconnectedCallback();
//   }
//   // Render the UI as a function of component state
//   render() {
//      return html`
//         <section id="${this.id}">
//            <slot></slot>
//         </section>
//      `;
//   }
//}
//
//// export the React Wrapper
//export const SectionTemplate = createComponent({
//   tagName: 'section-template',
//   elementClass: SectionTemplateWC,
//   react: React,
//});
