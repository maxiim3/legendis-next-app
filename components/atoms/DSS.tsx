import {ComponentPropsWithoutRef} from 'react';

export default function DSS(props: ComponentPropsWithoutRef<'svg'>) {
   return (
      <svg
         version='1.0'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 105.000000 102.000000'
         preserveAspectRatio='xMidYMid meet'
         {...props}>
         <g
            transform='translate(0.000000,102.000000) scale(0.100000,-0.100000)'
            stroke='none'>
            <path
               d='M0 721 l0 -299 322 155 c315 151 322 154 340 135 19 -18 12 -22 -322
      -201 l-340 -183 0 -114 c0 -63 3 -114 6 -114 4 0 401 301 701 532 8 6 15 3 21
   -9 9 -15 -39 -61 -335 -318 l-345 -300 288 -3 c264 -2 295 -1 354 17 156 48
   279 169 337 331 28 80 31 218 7 301 -42 143 -144 261 -281 327 l-78 37 -337 3
   -338 3 0 -300z m535 60 c15 -6 0 -14 -70 -35 -49 -15 -103 -31 -119 -36 -44
   -15 -46 -13 -46 35 l0 45 108 -1 c59 0 116 -4 127 -8z m194 -380 c-12 -28 -39
   -67 -61 -87 -38 -34 -125 -81 -134 -71 -2 2 44 63 103 136 102 124 108 130
   111 102 2 -16 -7 -52 -19 -80z'
            />
         </g>
      </svg>
   );
}
