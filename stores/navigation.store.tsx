import SectionReferenceFactory from '@/builders/section-reference.builder';
import {create} from 'zustand';

export type SectionKeys = 'presentation' | 'team';
// export type SectionKeys = 'presentation' | 'team' | 'artists' | 'projects';
export type NavigationStore = {
   // GETTERS
   sections: Record<SectionKeys, SectionReferenceFactory>;
   activeSection: SectionReferenceFactory['slug'] | null;

   // SETTERS
   setActiveSection: (slug: SectionReferenceFactory['slug']) => void;
   scrollToSection: (section: SectionReferenceFactory) => void;
};
export const useNavigationStore = create<NavigationStore>(set => ({
   // Getters
   sections: {
      presentation: SectionReferenceFactory.createSection({
         id: '1',
         title: {
            en: 'Presentation',
            fr: 'Présentation',
         },
         slug: 'presentation',
      }),
      team: SectionReferenceFactory.createSection({
         id: '2',
         title: {fr: "L'équipe", en: 'Team'},
         slug: 'team',
      }),
      // artists: SectionReferenceFactory.createSection({
      //    id: '3',
      //    title: {fr: 'Les artistes', en: 'Artists'},
      //    slug: 'artists',
      // }),
      // projects: SectionReferenceFactory.createSection({
      //    id: '4',
      //    title: {fr: 'Projets', en: 'Projects'},
      //    slug: 'projects',
      // }),
   },

   activeSection: null,
   // Setters
   setActiveSection: (slug: SectionReferenceFactory['slug']) => set(() => ({activeSection: slug})),
   scrollToSection: (section: SectionReferenceFactory) => {
      set(() => ({activeSection: section.slug}));
      const element = document.getElementById(section.id);
      if (element) element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
   },
}));
