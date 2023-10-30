import {Header} from '@/components/organisms/header';
import {type ReactNode} from 'react';

function Footer() {
   return <footer></footer>;
}

export function GlobalLayout(props: {children: ReactNode}) {
   return (
      <>
         {/*<Header />*/}
         {props.children}
         <Footer />
      </>
   );
}
