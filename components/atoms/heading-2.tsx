import {cn} from '@/lib/utils';
import {createComponent} from '@lit/react';
import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import React, {ComponentPropsWithoutRef} from 'react';

function Heading2React({children, className, ...props}: ComponentPropsWithoutRef<'h2'>) {
   return (
      <h2
         className={cn(
            'font-roboto text-3xl font-normal uppercase text-primary sm:text-4xl',
            className
         )}
         {...props}>
         {children}
      </h2>
   );
}

@customElement('custom-heading2')
export class CustomHeading2 extends LitElement {
   static styles = css`
      :host {
         font-size: 1.5rem; /* Equivalent to text-3xl */
         font-weight: normal;
         text-transform: uppercase;
         color: white;
      }

      @media (min-width: 640px) {
         :host {
            font-size: 1.75rem; /* Equivalent to sm:text-4xl */
         }
      }
   `;

   render() {
      return html` <h2>
         <slot></slot>
      </h2>`;
   }
}

export default createComponent({
   tagName: 'custom-heading2',
   elementClass: CustomHeading2,
   react: React,
});
