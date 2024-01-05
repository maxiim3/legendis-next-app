import {MultiLanguageContentFactory} from '@/shared/i18n/MultiLanguageContentFactory';

namespace Titles {
   export const EngagementTitle = MultiLanguageContentFactory.create({
      fr: 'Engagements',
      en: 'Commitments',
   });
   export const CreationTitle = MultiLanguageContentFactory.create({
      fr: 'Création',
      en: 'Creation',
   });
   export const StrategyTitle = MultiLanguageContentFactory.create({
      fr: 'Stratégie',
      en: 'Strategy',
   });
   export const ValuesTitle = MultiLanguageContentFactory.create({
      fr: 'Valeurs',
      en: 'Values',
   });
}

namespace Contents {
   export const StrategyContent = MultiLanguageContentFactory.create({
      fr: `Notre stratégie consiste à produire des albums ambitieux, captivant l'essence même de la musique de film, des opéras et de la musique classique. Nous croyons fermement que ces genres intemporels méritent une place de choix dans le paysage musical contemporain.`,
      en: `Our strategy is to produce ambitious albums, capturing the very essence of film music, operas, and classical music. We strongly believe that these timeless genres deserve a special place in the contemporary musical landscape.`,
   });

   export const CreationContent = MultiLanguageContentFactory.create({
      fr: `Chez Legendis, nous aimons également explorer de nouvelles avenues et embrasser l'innovation musicale. Nous avons à cœur de créer des albums featuring, fusionnant la musique électronique ou le rap par exemple, avec les riches sonorités de l'orchestre symphonique. Cette démarche audacieuse nous permet de créer des expériences musicales uniques, mêlant les genres et attirant un public varié.`,
      en: `At Legendis, we also love to explore new avenues and embrace musical innovation. We are committed to creating feature albums, blending electronic music or rap for instance, with the rich tones of the symphony orchestra. This daring approach allows us to create unique musical experiences, mixing genres and attracting a diverse audience.`,
   });

   export const EngagementContent = MultiLanguageContentFactory.create({
      fr: `Nous mettons un point d'honneur à travailler avec des artistes talentueux, des solistes émérites et des compositeurs émergents, afin de donner vie à des projets musicaux d'une grande envergure. Notre équipe s'engage à garantir une qualité sonore exceptionnelle dans chaque enregistrement, grâce à notre expertise technique et à notre passion pour le son.`,
      en: `We take pride in working with talented artists, outstanding soloists, and emerging composers to bring to life large-scale musical projects. Our team is committed to ensuring exceptional sound quality in every recording, thanks to our technical expertise and passion for sound.`,
   });

   export const ValuesContent = MultiLanguageContentFactory.create({
      fr: `Chez Legendis, nous croyons que la musique est un langage universel qui transcende les frontières et les époques. Nous aspirons à émouvoir, à inspirer et à toucher les cœurs de notre public à travers nos productions musicales. Bienvenue dans l'univers sonore de Legendis.`,
      en: `At Legendis, we believe that music is a universal language that transcends borders and times. We strive to move, inspire, and touch the hearts of our audience through our musical productions. Welcome to the sound universe of Legendis.`,
   });
}

export namespace AccordionData {
   export type AccordionSchema<K> = Array<{title: K; content: K}>;
   export type MultiLanguageContent = ReturnType<typeof MultiLanguageContentFactory.create<string>>;

   export const Collection: AccordionSchema<MultiLanguageContent> = [
      {title: Titles.StrategyTitle, content: Contents.StrategyContent},
      {title: Titles.CreationTitle, content: Contents.CreationContent},
      {title: Titles.EngagementTitle, content: Contents.EngagementContent},
      {title: Titles.ValuesTitle, content: Contents.ValuesContent},
   ];
}
