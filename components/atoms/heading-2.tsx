import {textHeading2} from '@/components/atoms/text-heading2.css';
import React, {ComponentPropsWithoutRef} from 'react';

export default function Heading2({children, className, ...props}: ComponentPropsWithoutRef<'h2'>) {
   return (
      <h2
         className={textHeading2}
         {...props}>
         {children}
      </h2>
   );
}

//@customElement('custom-heading2')
//export class CustomHeading2 extends LitElement {
//   static styles = css`
//      :host {
//         font-size: 1.5rem; /* Equivalent to text-3xl */
//         font-weight: normal;
//         text-transform: uppercase;
//         color: white;
//      }
//
//      @media (min-width: 640px) {
//         :host {
//            font-size: 1.75rem; /* Equivalent to sm:text-4xl */
//         }
//      }
//   `;
//
//   render() {
//      return html` <h2>
//         <slot></slot>
//      </h2>`;
//   }
//}
//
//export default createComponent({
//   tagName: 'custom-heading2',
//   elementClass: CustomHeading2,
//   react: React,
//});
