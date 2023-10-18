import {Inter, Palanquin_Dark} from 'next/font/google';

const inter = Inter({subsets: ['latin'], variable: '--inter'});
const palanquin = Palanquin_Dark({
   adjustFontFallback: false,
   display: 'auto',
   fallback: ['inter'],
   preload: false,
   style: 'normal',
   subsets: ['latin'],
   variable: '--palanquin',
   weight: ['400', '500', '600', '700'],
});
export {inter, palanquin};
