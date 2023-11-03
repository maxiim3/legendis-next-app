// 'use client';
//
// import Text from '@/components/atoms/text';
// import {cn} from '@/lib/utils';
// import {useI18nContext} from '@/stores/i18n.store';
// import {ReloadIcon} from '@radix-ui/react-icons';
// import ky from 'ky';
// import Link from 'next/link';
// import React, {ComponentPropsWithoutRef} from 'react';
// import {useForm} from 'react-hook-form';
// import {twMerge} from 'tailwind-merge';
// import {create} from 'zustand';
//
// export interface ContactFormStore {
//    // getters
//    isFormSubmitted: boolean;
//    isSubmittedWithSuccess: boolean;
//
//    // setters
//    setIsFormSubmitted: (value: boolean) => void;
//    setIsSubmittedWithSuccess: (value: boolean) => void;
// }
//
// const useFormStore = create<ContactFormStore>(set => ({
//    isFormSubmitted: false,
//    isSubmittedWithSuccess: false,
//    setIsFormSubmitted: (value: boolean) => set({isFormSubmitted: value}),
//    setIsSubmittedWithSuccess: (value: boolean) => set({isSubmittedWithSuccess: value}),
// }));
//
// function useMounted() {
//    const [isMounted, setIsMounted] = React.useState(false);
//
//    React.useEffect(() => {
//       setIsMounted(true);
//    }, []);
//
//    return isMounted;
// }
//
// function useContactFormStore() {
//    const {
//       register,
//       handleSubmit,
//       formState: {errors},
//       reset,
//    } = useForm();
//
//    const isMounted = useMounted();
//
//    const formStore = useFormStore(state => state);
//
//    return {
//       register,
//       handleSubmit,
//       errors,
//       reset,
//       isMounted,
//       formStore,
//    };
// }
//
// export default function ContactForm() {
//    const {
//       isMounted,
//       handleSubmit,
//       errors,
//       register,
//       formStore,
//    }: ReturnType<typeof useContactFormStore> = useContactFormStore();
//    const {isFormSubmitted, setIsFormSubmitted, setIsSubmittedWithSuccess}: ContactFormStore =
//       formStore;
//
//    const currentLanguage = useI18nContext(store => store.currentLanguage);
//    const onSubmit = async (data: any) => {
//       const response = await ky.post('/api/contact', {
//          json: {data},
//       });
//
//       const json = await response.json();
//       console.log(json);
//       // console.log(response)
//
//       if ([200, 201, 203, 204].includes(response.status)) {
//          setIsSubmittedWithSuccess(true);
//       }
//       if ([400, 401, 402, 404, 500].includes(response.status)) {
//          setIsSubmittedWithSuccess(false);
//       }
//
//       // console.log(data)
//
//       setIsFormSubmitted(true);
//
//       return json;
//    };
//
//    if (!isMounted) return <p className={'mx-auto text-center'}>Loading Form...</p>;
//
//    if (isFormSubmitted) return <UserFeedback />;
//
//    // noinspection SpellCheckingInspection
//    return (
//       <form
//          // @ts-ignore
//          onSubmit={handleSubmit(onSubmit)}
//          className={
//             'prose mx-auto max-h-[640px] w-full bg-base-200 px-2 py-12 text-base-content sm:max-w-[650px] sm:rounded-md sm:px-4 md:px-9'
//          }>
//          <div className={'mb-3 flex w-full flex-col gap-5'}>
//             <section className='form-control flex w-full flex-col'>
//                <label
//                   className={'font-normal hover:cursor-pointer'}
//                   htmlFor={'name'}>
//                   Nom
//                </label>
//                <input
//                   className={
//                      'focus:border-info input border border-base-300/30 bg-base-100/80 text-sm shadow-inner focus:ring-2 focus:ring-primary-focus'
//                   }
//                   id={'name'}
//                   autoComplete={'name'}
//                   {...register('name', {required: true, maxLength: 80, minLength: 3})}
//                   placeholder={'Nom'}
//                   aria-invalid={errors.name ? 'true' : 'false'}
//                />
//                {errors.name && (
//                   <label className={twMerge('label ')}>
//                      <span className={twMerge('label-text-alt text-error')}>
//                         {(() => {
//                            if (errors.name?.type === 'required') return 'Name is required';
//                            if (errors.name?.type === 'maxLength') return 'Name is too long';
//                            if (errors.name?.type === 'minLength') return 'Name is too short';
//                         })()}
//                      </span>
//                   </label>
//                )}
//             </section>
//             <div className='form-control w-full'>
//                <label
//                   className={'font-normal hover:cursor-pointer'}
//                   htmlFor={'email'}>
//                   Email
//                </label>
//                <input
//                   autoComplete={'email'}
//                   className={
//                      'focus:border-info input border border-base-300/30 bg-base-100/80 text-sm shadow-inner focus:ring-2 focus:ring-primary-focus'
//                   }
//                   {...register('email', {
//                      required: true,
//                      maxLength: 80,
//                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   })}
//                   id={'email'}
//                   aria-invalid={errors.email ? 'true' : 'false'}
//                   aria-label={'Adresse email'}
//                   type={'email'}
//                   placeholder={'Adresse email'}
//                />
//                {errors.email && (
//                   <label className={twMerge('label ')}>
//                      <span className={twMerge('label-text-alt text-error')}>
//                         {(() => {
//                            if (errors.email?.type === 'required') return 'Email is required';
//                            if (errors.email?.type === 'maxLength') return 'Name is too long';
//                            if (errors.email?.type === 'pattern') return 'Email is not valid';
//                         })()}
//                      </span>
//                   </label>
//                )}
//             </div>
//             <div className='form-control w-full'>
//                <label
//                   className={'font-normal hover:cursor-pointer'}
//                   htmlFor={'message'}>
//                   Message
//                </label>
//
//                <textarea
//                   {...register('message', {required: true, maxLength: 500})}
//                   id={'message'}
//                   aria-invalid={errors.message ? 'true' : 'false'}
//                   className={
//                      'focus:border-info textarea textarea-bordered textarea-lg border border-base-300/30 bg-base-100/80 text-sm shadow-inner focus:ring-2 focus:ring-primary-focus'
//                   }
//                   aria-label={
//                      currentLanguage === 'en' ? 'Write your message' : 'Écrivez votre messsage'
//                   }
//                   placeholder={
//                      currentLanguage === 'en' ? 'Write your message' : 'Écrivez votre messsage'
//                   }
//                />
//                {errors.message && (
//                   <label className={twMerge('label ')}>
//                      <span className={twMerge('label-text-alt text-error')}>
//                         {(() => {
//                            if (errors.message?.type === 'required') return 'Name is required';
//                            if (errors.message?.type === 'maxLength') return 'Name is too long';
//                         })()}
//                      </span>
//                   </label>
//                )}
//             </div>
//             <button
//                type={'submit'}
//                className={
//                   'btn btn-primary rounded-md hover:shadow-xl focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 focus:ring-offset-primary-focus'
//                }
//                disabled={false}>
//                Submit
//             </button>
//          </div>
//       </form>
//    );
// }
//
// function UserFeedback() {
//    const {reset, formStore}: ReturnType<typeof useContactFormStore> = useContactFormStore();
//    const {setIsFormSubmitted, isSubmittedWithSuccess}: ContactFormStore = formStore;
//
//    function Flex({className, children, ...props}: ComponentPropsWithoutRef<'div'>) {
//       return (
//          <div
//             className={cn(
//                'md-3 bg-clrPrimary-100 mx-auto flex max-h-[640px] w-full flex-col gap-2  rounded-md px-9 py-12 text-base-content sm:max-w-[540px]'
//             )}>
//             {children}
//          </div>
//       );
//    }
//
//    function Button({className, children, ...props}: ComponentPropsWithoutRef<'button'>) {
//       return (
//          <button
//             className={cn(
//                'btn-outlined btn btn-primary rounded-md hover:shadow-xl focus:ring-2 focus:ring-primary-focus focus:ring-offset-2 focus:ring-offset-primary-focus'
//             )}
//             {...props}>
//             {children}
//          </button>
//       );
//    }
//
//    if (!isSubmittedWithSuccess) {
//       return (
//          <Flex>
//             <Text className='mb-4 text-center '>Une erreur est survenue</Text>
//             <Button onClick={() => setIsFormSubmitted(false)}>
//                <ReloadIcon
//                   className={'text-base-200'}
//                   width={24}
//                   height={24}
//                />
//                <Link
//                   href={'/contact'}
//                   onClick={() => setIsFormSubmitted(false)}>
//                   Réessayer
//                </Link>
//             </Button>
//          </Flex>
//       );
//    }
//
//    return (
//       <Flex>
//          <Text className={'text-center'}>Merci pour votre message</Text>
//          <Text className='mb-4 text-center '>Nous vous répondrons dans les plus brefs délais</Text>
//
//          <Button
//             onClick={() => {
//                reset();
//                setIsFormSubmitted(false);
//             }}>
//             <ReloadIcon
//                className={'text-base-200'}
//                width={24}
//                height={24}
//             />
//          </Button>
//       </Flex>
//    );
// }
//
// const Label = ({id, label, className}: {label: string; id: string; className?: string}) => (
//    <label
//       htmlFor={id}
//       className={twMerge(
//          'font-base label label-text font-normal text-base-content/70 hover:cursor-pointer',
//          className
//       )}>
//       {label}
//    </label>
// );
'use client'

import Prose from '@/components/atoms/Prose';
import {SectionTemplateWrapper} from '@/components/layouts/section-template-wrapper.client';
import Link from 'next/link';
import React from 'react';
import {useI18nContext} from '@/stores/i18n.store';
import Text from '@/components/atoms/text';

export function ContactRedirection() {
   const currentLanguage = useI18nContext(store => store.currentLanguage);
   return (
      <SectionTemplateWrapper
         className={'mb-12 rounded-b-xl pb-24'}
         slug={'contact'}
         id={'contact'}>
         <Prose className={'mx-auto'}>
            {/*<Text className={'max-w-[50ch] mx-auto'}>{currentLanguage === 'fr' ?*/}
            {/*   'Pour plus d\'informations, veuillez contacter Samuel Briand : samuel@legendis.fr'*/}
            {/*   : 'For more information, please contact Samuel Briand: samuel@legendis.fr'*/}
            {/*}</Text>*/}
            <Link
               target='_blank'
               rel='noopener noreferrer'
               type={'external'}
               href={'https://prod203.com/contact'}
               className={'btn btn-primary'}>
               {currentLanguage=== 'fr' ? 'Nous contacter' : 'Contact us'}
            </Link>
         </Prose>
      </SectionTemplateWrapper>
   );
}
