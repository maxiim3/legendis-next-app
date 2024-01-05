'use client'

import {

   PropsWithChildren,
   createContext,
   useCallback,
   useContext,
   useEffect,
   useReducer,
   type Dispatch,
} from 'react';

const DEFAULT_PAGE_SECTION = '#';

export type PageSection = string;

type PageSectionReducer = {
   type: 'SCROLL_TO';
   payload: PageSection;
};

function pageSectionReducer(pageSection: PageSection, action: PageSectionReducer) {
   switch (action.type) {
      case 'SCROLL_TO':
         return action.payload;
      default:
         return pageSection;
   }
}

const PageSectionCtx = createContext<PageSection | null>(null);

const PageSectionDispatcher = createContext<Dispatch<PageSectionReducer> | null>(null);

export function PageSectionCtxProvider({children}: PropsWithChildren) {
   const [pageSection, dispatchPageSection] = useReducer(pageSectionReducer, DEFAULT_PAGE_SECTION);

   return (
      <PageSectionCtx.Provider value={pageSection}>
         <PageSectionDispatcher.Provider value={dispatchPageSection}>
            {children}
         </PageSectionDispatcher.Provider>
      </PageSectionCtx.Provider>
   );
}

export function usePageSectionCtx() {
   const pageSection = useContext(PageSectionCtx)!;
   const pageSectionDispatcher = useContext(PageSectionDispatcher)!;

   const scrollTo = useCallback(
      (section: PageSection) => {
         pageSectionDispatcher({type: 'SCROLL_TO', payload: section});
      },
      [pageSectionDispatcher]
   );

   useEffect(() => {
      // Scroll to current pageSection when value updates
      if (!window) return;

      const element = document.getElementById(pageSection);

      if (element) {
         element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
   }, [pageSection]);

   return {pageSection, scrollTo};
}
