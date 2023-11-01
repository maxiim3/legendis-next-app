'use client';

import { cn } from '@/lib/utils';
import { useI18nContext } from '@/stores/i18n.store';
import Image from 'next/image';
import Link from 'next/link';
import React,{ ComponentPropsWithoutRef,useEffect,useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TabType = Record<
   string,
   {
      title: {en: string; fr: string};
      description: {en: string; fr: string};
      Icon?: any;
      source?: string;
   }
>;

export const useTabs = (Tabs: TabType) => {
   const defaultTab = Object.keys(Tabs)[0]; // first tab
   const [activeTab, setActiveTab] = useState<keyof typeof Tabs>(defaultTab);
   useEffect(() => {
      console.log(Tabs);
      setActiveTab(defaultTab);
   }, [Tabs, defaultTab]);
   return {activeTab, setActiveTab};
};

const membersCollection = {
   Jerome: {
      title: {
         fr: 'Jérôme Kuhn',
         en: 'Jérôme Kuhn',
      },
      description: {
         fr: "Jérôme Kuhn est directeur artistique du NOF Nouvel Opéra Fribourg, du Prague Symphonic Ensemble et de l'Ensemble Vocal de Villars-sur-Glâne. Jérôme Kuhn a collaboré en Suisse, en France, en Angleterre, en Allemagne et en République Tchèque avec de nombreux ensembles, comme l'Academy of Ancient Music, l'Orchestre de Chambre fribourgeois, le Nouvel Ensemble Contemporain NEC de la Chaux-de- Fonds et l'Orchestre philharmonique de Prague, l'Estonian Philharmonic Chamber Choir. Actif dans le domaine de l'enregistrement, il collabore pour des productions de Netflix et HBO dans les studios de la Seine Musicale à Paris, AIR Studios à Londres et Smecky Music Studios à Prague. I1 collabore également avec de nombreux artistes de renom comme Mireille Mathieu (Mes Classiques).",
         en: 'Jérôme Kuhn is the artistic director of NOF Nouvel Opéra Fribourg, the Prague Symphonic Ensemble, and the Ensemble Vocal de Villars-sur-Glâne. Jérôme Kuhn has collaborated in Switzerland, France, England, Germany, and the Czech Republic with numerous ensembles, including the Academy of Ancient Music, the Fribourg Chamber Orchestra, the Nouvel Ensemble Contemporain NEC de la Chaux-de-Fonds, and the Prague Philharmonic Orchestra, the Estonian Philharmonic Chamber Choir. Active in the field of recording, he collaborates on productions for Netflix and HBO in studios such as Seine Musicale in Paris, AIR Studios in London, and Smecky Music Studios in Prague. He also collaborates with renowned artists like Mireille Mathieu (Mes Classiques).',
      },
   },
   Nathan: {
      title: {
         fr: 'Nathan Stornetta',
         en: 'Nathan Stornetta',
      },
      description: {
         fr: 'Né en Suisse, Nathan Stornetta est un compositeur, producteur et arrangeur. Il débute sa carrière professionnelle à Londres en travaillant pour Lorne Balfe (Remote Control Productions). Ce dernier l’implique dans le blockbuster “Fast and Furious 6” et la série épique “The Bible”. 2014 et 2015, Nathan vit à Los Angeles, où il travaille comme compositeur additionnel du célèbre Hans Zimmer, collaborant sur des films tels que “Chappie” (Neil Blomkamp), “Premiere Boxing Champions” (NBC) ainsi que “Le Petit Prince” de Mark Osbourne. Une collaboration toujours actuelle puisque Zimmer l’invite à intégrer son groupe de musicien en tant que percussionniste pour partir en tournée avec le “Hans Zimmer Live” (2016-2017) et enregistrer la musique du film “Le Roi Lion” (2019). En 2018, Nathan arrange trois pistes à l’album hommage de Sony Classical “James Horner - The Classics” et participe au projet “Rock the Pops”, mettant en scène Alfie Boe et le Boston Pops Philharmonic. Le court-métrage promotionnel “Éternels” (2019) de Bruno Aveillan, commandé par le Puy du Fou est sa composition la plus récente dans le domaine de la publicité. Depuis 2013, il est le principal compositeur du Puy du Fou, s’exprimant musicalement dans un éventail de genres, travaillant ainsi en étroite collaboration avec les équipes artistiques du Grand Parc. On lui doit notamment la musique des spectacles “Le Dernier Panache”, “Le Ballet des Sapeurs” et “El Sueño de Toledo” (Puy du Fou España), créées depuis son studio de Zurich.',
         en: 'Born in Switzerland, Nathan Stornetta is a composer, producer, and arranger. He began his professional career in London, working for Lorne Balfe (Remote Control Productions). Balfe involved him in the blockbuster "Fast and Furious 6" and the epic series "The Bible". In 2014 and 2015, Nathan lived in Los Angeles, where he worked as an additional composer for the renowned Hans Zimmer, collaborating on films such as "Chappie" (Neil Blomkamp), "Premiere Boxing Champions" (NBC), and Mark Osbourne\'s "Le Petit Prince." This collaboration continues as Zimmer invites him to join his group of musicians as a percussionist for the "Hans Zimmer Live" tour (2016-2017) and to record the music for "The Lion King" (2019). In 2018, Nathan arranged three tracks for Sony Classical\'s tribute album "James Horner - The Classics" and participated in the "Rock the Pops" project featuring Alfie Boe and the Boston Pops Philharmonic. His most recent composition in the advertising field is the promotional short film "Éternels" (2019) directed by Bruno Aveillan and commissioned by Puy du Fou. Since 2013, he has been the principal composer for Puy du Fou, expressing himself musically in a range of genres and working closely with the artistic teams of the Grand Parc. He is responsible for the music of shows such as "Le Dernier Panache," "Le Ballet des Sapeurs," and "El Sueño de Toledo" (Puy du Fou España), created from his studio in Zurich.',
      },
   },
   Sam: {
      title: {
         fr: 'Samuel Briand',
         en: 'Samuel Briand',
      },
      description: {
         fr: 'Samuel Briand est ingénieur du son, superviseur musical et réalisateur artistique. Depuis une dizaine d’année, il travaille comme ingénieur du son au Puy du Fou où il réalise les bandes-sonores des spectacles et enregistre les orchestres les plus prestigieux d’Europe. En parallèle, il se forme au mixage de la musique de film auprès d’ingénieurs du son du cinéma, côtoyant des professionnels hollywoodiens tel qu’Alan Meyerson, ingénieur du son de Hans Zimmer (Gladiator, Pirates des Caraïbes, Inception...) et Nick Wollage (Solo: A Star Wars Story, V for Vendetta, Harry Potter...). Plus récemment, il se lance dans le domaine de la publicité et collabore à la production musicale de films publicitaires pour Coca-Cola, Disneyland Paris et, dernièrement, Canal+.',
         en: 'Samuel Briand is a sound engineer, music supervisor, and artistic director. For the past decade, he has worked as a sound engineer at Puy du Fou, where he creates soundtracks for shows and records the most prestigious orchestras in Europe. In parallel, he has been training in film music mixing with cinema sound engineers, rubbing shoulders with Hollywood professionals like Alan Meyerson, sound engineer for Hans Zimmer (Gladiator, Pirates of the Caribbean, Inception...), and Nick Wollage (Solo: A Star Wars Story, V for Vendetta, Harry Potter...). More recently, he has ventured into the field of advertising and has collaborated on the music production of advertising films for Coca-Cola, Disneyland Paris, and, most recently, Canal+.',
      },
   },
};


export default function SectionFounders({className}: ComponentPropsWithoutRef<'section'>) {
   const tabs: TabType = membersCollection;
   const {activeTab, setActiveTab} = useTabs(tabs);
   let currentLanguage = useI18nContext(store => store.currentLanguage);


   type ImageComponentProps = {
      li?: ComponentPropsWithoutRef<'li'>;
      figure?: ComponentPropsWithoutRef<'figure'>;
      img: ComponentPropsWithoutRef<'img'>;
      name: string;
      tabIndex: number;
      isActive: boolean;
      handleSelection: () => void;
   };
   const ImageComponent = ({
      li,
      tabIndex,
      img,
      name,
      figure,
      handleSelection,
      isActive,
   }: ImageComponentProps) => {
      // console.log(tabIndex, activeTab === Object.keys(tabs)[tabIndex])
      return (
         <li
            className={'group hover:cursor-pointer'}
            data-selected={activeTab === Object.keys(tabs)[tabIndex]}
            onClick={handleSelection}
            {...li}>
            <figure // todo Error cn not working
               className={cn('h-full w-full overflow-hidden', figure?.className)}
               {...figure}>
               <Image
                  data-selected={isActive}
                  className={cn(
                     'group:transition-all h-full w-full scale-100 object-cover saturate-50 group-hover:scale-110 motion-safe:duration-700',
                     isActive && 'scale-110 saturate-100',
                     img.className
                  )}
                  width={'187'}
                  height={'404'}
                  src={img.src!}
                  alt={img.alt!}
               />
               <figcaption>{name}</figcaption>
            </figure>
         </li>
      );
   };

   return (
      <section
         className={twMerge(
            'relative flex w-full max-w-[1440px] flex-col lg:grid lg:grid-cols-2 mx-auto',
            className
         )}>
         <ul
            className={twMerge(
               'flex aspect-video w-full justify-center',
               'lg:mt-8 lg:aspect-video lg:max-h-[700px] lg:min-h-[400px] lg:w-full'
            )}>
            <ImageComponent
               tabIndex={0}
               name={'Jérome'}
               isActive={activeTab === Object.keys(tabs)[0]}
               handleSelection={() => setActiveTab(Object.keys(tabs)[0])}
               img={{src: '/assets/fondateurs/fondateurs-01-min.webp', alt: ''}}
            />
            <ImageComponent
               isActive={activeTab === Object.keys(tabs)[1]}
               tabIndex={1}
               handleSelection={() => setActiveTab(Object.keys(tabs)[1])}
               name={'Nathan'}
               img={{src: '/assets/fondateurs/fondateurs-02-min.webp', alt: ''}}
            />
            <ImageComponent
               tabIndex={2}
               isActive={activeTab === Object.keys(tabs)[2]}
               name={'Sam'}
               handleSelection={() => setActiveTab(Object.keys(tabs)[2])}
               img={{src: '/assets/fondateurs/fondateurs-03-min.webp', alt: ''}}
            />
         </ul>
         <article
            className={
               'relative z-50 min-h-fit space-y-4 bg-base-100/90 md:m-0 md:space-y-8  md:rounded-lg md:p-0 '
            }>
            <header
               className='font-poppins pt-4 text-center text-sm font-medium text-base-content
               '>
               <ul className='flex flex-wrap items-center justify-between border-b border-gray-700 xs:flex-row md:items-end md:justify-center md:gap-1.5 '>
                  {Object.entries(tabs).map(([key, value], index) => (
                     <TabTitle
                        key={`tab-${index}-${key}`}
                        active={key === activeTab}
                        onClick={() => setActiveTab(key)}
                        className={cn(
                           'flex flex-1 items-center justify-center py-1 text-center text-xs xs:text-sm sm:tracking-wide md:py-3 md:text-base',
                           'hover:bg-base-200'
                        )}>
                        <p>{value.title[currentLanguage]}</p>
                     </TabTitle>
                  ))}
               </ul>
            </header>
            <main className={' flex flex-col items-center justify-center gap-2 px-2 md:px-6 pb-8'}>
               {tabs[activeTab]?.description[currentLanguage].split('. ').map((content, index) => (
                  <TabText
                     className={
                        'font-poppins prose m-0 w-full max-w-[80ch] font-light !text-base-content text-balance'
                     }
                     key={`tab-content-${index}`}>
                     {content}
                     {tabs[activeTab]?.description[currentLanguage].split('. ').length - 1 === index ? '' : '.'}
                  </TabText>
               ))}
               <aside className={'w-full'}>
                  <Tooltip
                     className={
                        'text-base-content-content tooltip-bottom tooltip-primary font-normal'
                     }
                     message={currentLanguage === 'en' ? 'Open in a new tab' : 'Ouvrir dans un nouvel onglet'}>
                     {activeTab === 'Jerome' && (
                        <TabText
                           className={
                              'flex w-fit items-center justify-start gap-1 text-base-content'
                           }>
                           <span>
                              <svg
                                 width='15'
                                 height='15'
                                 viewBox='0 0 15 15'
                                 fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                 <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738'
                                    fill='currentColor'></path>
                              </svg>
                           </span>
                           <Link
                              title={
                                 currentLanguage === 'en'
                                    ? 'Open in a new tab'
                                    : 'Ouvrir dans un nouvel onglet'
                              }
                              target='_blank'
                              rel='noopener noreferrer'
                              type={'external'}
                              className={
                                 'font-poppins prose m-0 w-full text-sm font-normal tracking-wide !text-base-content text-balance visited:opacity-70 visited:hover:opacity-100'
                              }
                              href={'https://www.jeromekuhn.com/fr/medias/'}>
                              {currentLanguage === 'en'
                                 ? "Jérôme Khun's Official website"
                                 : 'Site officiel de Jérôme Khun'}
                           </Link>
                        </TabText>
                     )}
                     {activeTab === 'Nathan' && (
                        <TabText
                           className={
                              'flex w-fit items-center justify-start gap-1 text-base-content'
                           }>
                           <span>
                              <svg
                                 width='15'
                                 height='15'
                                 viewBox='0 0 15 15'
                                 fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                 <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738'
                                    fill='currentColor'></path>
                              </svg>
                           </span>
                           <Link
                              title={
                                 currentLanguage === 'en'
                                    ? 'Open in a new tab'
                                    : 'Ouvrir dans un nouvel onglet'
                              }
                              className={
                                 'font-poppins prose m-0 w-full text-sm font-normal tracking-wide text-base-content text-balance visited:opacity-70 visited:hover:opacity-100'
                              }
                              target='_blank'
                              rel='noopener noreferrer'
                              type={'external'}
                              href={'https://nathanstornetta.com/'}>
                              {currentLanguage === 'en'
                                 ? "Nathan Stornetta's Official website"
                                 : 'Site officiel de Nathan Stornetta'}
                           </Link>
                        </TabText>
                     )}
                  </Tooltip>
               </aside>
            </main>
         </article>
      </section>
   );
}
type T_TabItemProps = {
   active?: boolean;
   disabled?: boolean;
   onClick?: () => void;
} & ComponentPropsWithoutRef<'li'>;
export const TabTitle = ({className, children, active, disabled, onClick}: T_TabItemProps) => {
   return (
      <li
         aria-current={active ? 'page' : undefined}
         onClick={disabled ? undefined : onClick}
         tabIndex={0}
         onKeyDown={e => {
            if (e.key === 'Enter' && !disabled) onClick?.();
         }}
         className={cn(
            'border-b border-transparent text-base-content hover:cursor-pointer hover:opacity-75',
            active ? 'active border-primary/80 font-semibold text-white' : 'font-normal',
            disabled && 'cursor-not-allowed opacity-75',
            className
         )}>
         {children}
      </li>
   );
};

export const TabText = ({className, children}: ComponentPropsWithoutRef<'p'>) => {
   return <p className={cn(' text-sm font-normal tracking-wide ', className)}>{children}</p>;
};

export const Tooltip = ({
   children,
   className,
   message,
}: ComponentPropsWithoutRef<'span'> & {message: string}) => {
   return (
      <span
         data-tip={message}
         className={cn('tooltip', className)}>
         {children}
      </span>
   );
};
