import {Item} from '@/app/footer-component/footer-item';
import {useFooterData} from '@/app/footer-component/use-footer-data';
import DigitalSolutionStudioLogo from '@/components/atoms/DSS-logo';
import Legendis from '@/components/atoms/Legendis';
import Text from '@/components/atoms/text';
import {cn} from '@/lib/utils';
import {ExternalLink, Github} from 'lucide-react';
import React from 'react';
import {
   atomic,
   footer,
   icons,
   innerStack,
   linkToProd203,
   logo,
   overrideLegalText,
   section,
   title,
} from './footer.css';

export default function Footer() {
   const {links, legals} = useFooterData();
   return (
      <footer className={footer}>
         <div className={innerStack}>
            <div className={logo.container}>
               <Legendis className={logo.component} />
            </div>
            <div className={section.stack}>
               <section className={section.section}>
                  <h3 className={cn(title, atomic.marginBottom)}>Links</h3>
                  <Item href={links.prod203.link}>
                     <ExternalLink className={linkToProd203} />
                     {links.prod203.label}
                  </Item>
               </section>
               <section className={section.section}>
                  <h3 className={cn(title, atomic.marginBottom)}>Site Conception</h3>
                  <Item href={links.github.link}>
                     <Github className={icons.github} />
                     {links.github.label}
                  </Item>
                  <Item href={links.dss.link}>
                     <DigitalSolutionStudioLogo className={icons.dss} />
                     {links.dss.label}
                  </Item>
               </section>
               <Text className={overrideLegalText}>{legals}</Text>
            </div>
         </div>
      </footer>
   );
}
