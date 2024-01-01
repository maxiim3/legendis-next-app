import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname,useRouter,useSearchParams } from 'next/navigation';
import { LanguageOptions,SearchParamKey } from './language-ctx.types';

export function useUrlProps() {
   const readOnlySearchParams = useSearchParams();
   const searchParams = new URLSearchParams(readOnlySearchParams);
   const pathname = usePathname();
   const router = useRouter();

   const searchKey: SearchParamKey = 'lang';

   return {router, pathname, searchParams, searchKey};
}

export function setNewURLSearchParams(searchKey: SearchParamKey, updatedVal: LanguageOptions) {
   const updatedParams = new URLSearchParams();
   updatedParams.set(searchKey, updatedVal);

   return updatedParams;
}

export function getLanguageInSearchParams(
   searchParam: URLSearchParams,
   key: SearchParamKey
): LanguageOptions {
   return searchParam.get(key)! as LanguageOptions;
}

export function updateRouter(router: AppRouterInstance, basePath: string, query: URLSearchParams) {
   router.push(basePath + '?' + query.toString());
}
