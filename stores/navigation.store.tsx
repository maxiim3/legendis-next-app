import {create} from 'zustand'
import SectionReferenceFactory from '@/builders/section-reference.builder'

export type SectionKeys = 'presentation' | 'team' | 'artists' | 'projects'
export type NavigationStore = {
   // GETTERS
   sections: Record<SectionKeys, SectionReferenceFactory>
   activeSection: SectionReferenceFactory['slug'] | null,

   // SETTERS
   setActiveSection: (slug: SectionReferenceFactory['slug']) => void,
   scrollToSection: (section: SectionReferenceFactory) => void,
}
export const useNavigationStore = create<NavigationStore>((set) => ({
   // Getters
   sections: {
      presentation: SectionReferenceFactory.createSection('1', 'Présentation', 'presentation'),
      team: SectionReferenceFactory.createSection('2', 'L\'équipe', 'team'),
      artists: SectionReferenceFactory.createSection('3', 'Les artistes', 'artists'),
      projects: SectionReferenceFactory.createSection('4', 'Projets', 'projects'),
   },

   activeSection: null,
   // Setters
   setActiveSection: (slug: SectionReferenceFactory['slug']) => set(() => ({activeSection: slug})),
   scrollToSection: (section: SectionReferenceFactory) => {
      set(() => ({activeSection: section.slug}))
      const element = document.getElementById(section.id)
      if (element) element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
   },

}))

