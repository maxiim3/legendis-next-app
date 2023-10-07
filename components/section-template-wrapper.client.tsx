'use client'

import {ComponentPropsWithoutRef, useEffect, useRef} from 'react'
import {useNavigationStore} from '@/lib/navigation.store'
import {useInView} from 'framer-motion'
import {cn} from '@/lib/utils'
import SectionReferenceFactory from '@/lib/section-reference-factory.class'

export function SectionTemplateWrapper({className, id, children, slug}: ComponentPropsWithoutRef<'section'> & {
   slug: SectionReferenceFactory['slug']
}) {
   const sectionRef = useRef<HTMLDivElement>(null)

   const {setActiveSection, activeSection} = useNavigationStore(store => store)
   const inView = useInView(sectionRef, {
      amount: 'all',
      margin: '200px',
   })
   useEffect(() => {
      console.log(inView, activeSection, slug)
      if (inView) {
         setActiveSection(slug)
      }
   }, [inView, setActiveSection, slug])


   return (
      <section id={id}
               className={cn(`w-full aspect-portrait bg-base-100/10 border border-primary backdrop-blur-sm pt-32`, className)}>{children}</section>
   )
}
