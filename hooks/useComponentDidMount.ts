import {useEffect, useState} from 'react';

export function useComponentDidMount() {
   const [componentDidMount, setComponentDidMount] = useState<boolean>(false);

   useEffect(() => {
      setComponentDidMount(true);
   }, []);

   return componentDidMount;
}
