import {Italianno, Roboto, Tangerine} from 'next/font/google';

const tangerine = Tangerine({
   weight: ['400', '700'],
   subsets: ['latin'],
   variable: '--font-tangerine',
});
// const alexBush = Alex_Brush({
//    weight: ['400'],
//    subsets: ['latin-ext'],
//    variable: '--font-alexBush',
// });
const italianno = Italianno({
   weight: ['400'],
   subsets: ['latin'],
   variable: '--font-italianno',
});
const roboto = Roboto({
   weight: ['100', '300', '400', '500', '700'],
   subsets: ['latin'],
   variable: '--font-poppins',
});

export { italianno,roboto,tangerine };
