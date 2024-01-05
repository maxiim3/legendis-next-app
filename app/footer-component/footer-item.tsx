import {link, linkItem} from '@/app/footer-component/footer.css';
import Link from 'next/link';
import React, {ComponentPropsWithoutRef} from 'react';

export function Item({
                        className,
                        children,
                        href,
                        ...props
                     }: ComponentPropsWithoutRef<'a'> & {
   href: string;
}) {
   return (
      <li className={linkItem}>
         <Link
            className={link}
            prefetch={false}
            href={href}
            {...props}>
            {children}
         </Link>
      </li>
   );
}
