'use client';

import Legendis from '@/components/atoms/Legendis';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { OT_I18NContent, OZ_AvailableLanguages, useI18nContext } from '@/stores/i18n.store';
import React, { useState, type ComponentPropsWithoutRef } from 'react';

function RevealEffect(props: { open: boolean }) {
    return (
        <div
            className={cn(
                'fixed bottom-4 right-4 z-[900] h-12 w-12 rounded-full bg-base-100  transition-all duration-200 ease-in  ',
                props.open && 'scale-[5000%] md:scale-[10000%] 2xl:scale-[30000%]'
            )}
        />
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = useI18nContext(store => store.currentLanguage);
    return (
        <>
            <p className='sr-only'>Legendis.fr</p>

            <RevealEffect open={isOpen} />
            <button
                className={'btn fixed bottom-4 right-4 z-[1000] bg-base-100 transition'}
                onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? 'X' : 'Menu'}
            </button>
            {isOpen && (
                <nav
                    className={cn(
                        'max-h-[1200px] transition-all delay-200 duration-200',
                        isOpen
                            ? 'visible fixed top-0 z-[990] flex h-screen w-screen flex-col items-center  justify-center gap-3 opacity-100 md:gap-8 lg:gap-12'
                            : 'hidden opacity-80'
                    )}>
                    <span className={'absolute top-12 flex flex-col items-center justify-center'}>
                        <Legendis className={'h-24 w-24 fill-primary'} />
                        <p className={'text-md text-primary opacity-80'}>LEGENDIS</p>
                    </span>

                    <NavigationLink
                        onClick={() => setIsOpen(false)}
                        href={'#'}>
                        Albums
                    </NavigationLink>
                    {subLinks.map(link => {
                        return (
                            <NavigationLink
                                onClick={() => setIsOpen(false)}
                                key={link.en.toLowerCase()}
                                href={`#${link.en.toLowerCase()}`}>
                                {link[currentLanguage]}
                            </NavigationLink>
                        );
                    })}
                    <NavigationLink
                        onClick={() => setIsOpen(false)}
                        href={`https://prod203.com/${currentLanguage}/contact`}>
                        Contact
                    </NavigationLink>
                    <SwitchLanguage />
                </nav>
            )}
        </>
    );
}

function NavigationLink({ children, href, className, onClick }: ComponentPropsWithoutRef<'a'>) {
    return (
        <li className={'list-none'}>
            <a
                onClick={onClick}
                href={href}
                className={cn('text-md font-normal uppercase text-amber-50 ', className)}>
                {children}
            </a>
        </li>
    );
}

// !Todo : Add subLinks and Contact redirects to Prod203
const subLinks: OT_I18NContent[] = [
    { fr: "L'équipe", en: 'Team' },
    { fr: 'Compositeurs', en: 'Compositors' },
    { fr: 'Interprêtes', en: 'Interpreters' },
];

function SwitchLanguage() {
    const { toggleLanguage, currentLanguage } = useI18nContext(store => store);

    return (
        <div
            className='absolute bottom-8 flex items-center space-x-2 '
            data-language={currentLanguage}>
            <Label
                className={'uppercase'}
                htmlFor='language'>
                {OZ_AvailableLanguages.Values.fr}
            </Label>
            <Switch
                onClick={toggleLanguage}
                id='language'
            />
            <Label
                className={'uppercase'}
                htmlFor='language'>
                {OZ_AvailableLanguages.Values.en}
            </Label>
        </div>
    );
}
