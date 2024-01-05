'use client';

import {sharedSectionTemplate} from '@/app/shared.css';
import {cn} from '@/lib/utils';
import SectionReferenceFactory from '@/shared/globalNavigation/section-reference.builder';
import {motion, useInView} from 'framer-motion';
import * as React from 'react';
import {ComponentPropsWithoutRef, useEffect, useRef} from 'react';

export function SectionInViewObserver({
   className,
   id,
   children,
   slug,
}: ComponentPropsWithoutRef<'section'> & {
   slug: SectionReferenceFactory['slug'];
}) {
   const sectionRef = useRef<HTMLDivElement>(null);

   //   const {setActiveSection, activeSection} = useNavigationStore(store => store);

   const inView = useInView(sectionRef, {
      amount: 0.3, // 0  = 'some', 1 = 'all'
      margin: '0px 0px 200px',
   });
   useEffect(() => {
      console.log('Section Observer Component Mounted');
      if (inView) {
         console.log('Section Observer : Active Section updated');
         //         setActiveSection(slug);
      }

      return () => {
         console.log('Section Observer Component Unmounted');
      };
   }, [inView, slug, sectionRef]);

   return (
      <motion.section
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 0.4, once: true, staggerChildren: 0.2}}
         ref={sectionRef}
         id={id}
         className={cn(sharedSectionTemplate, className)}>
         {children}
      </motion.section>
   );
}
