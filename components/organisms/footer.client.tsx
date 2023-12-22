"use client";

// import useLangParamsHook from '@/app/[lang]/use-lang-params.hook'
import {cn} from "@/lib/utils";
// import routes, {Route} from '@/static-content/route.static.content'
import DSS from "@/components/atoms/DSS-logo";
import Legendis from "@/components/atoms/Legendis";
import Text from "@/components/atoms/text";
import {useI18nContext} from "@/stores/i18n.store";
import {ExternalLink, Github, Mail} from "lucide-react";
import Link from "next/link";
import React, {
    type ComponentPropsWithoutRef,
    type PropsWithChildren,
} from "react";
import {twMerge} from "tailwind-merge";

export default function Footer() {
    const currentLanguage = useI18nContext(store => store.currentLanguage);

    return (
        <footer
            className={
                "relative bg-gradient-to-b from-base-100 from-40% to-base-200"
            }>
            <div className='space-opacity-8 lg:space-opacity-16 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='sm:flex sm:justify-between'>
                    <Legendis className={"h-12 w-12 fill-primary"} />
                </div>

                <div className='grid grid-cols-1 gap-8 border-t border-primary/80 pt-8 sm:grid-cols-2 lg:pt-16'>
                    <FooterSection>
                        <SectionTitle className={"mb-3"}>Links</SectionTitle>
                        <FooterItemWithLink
                            href={`https://prod203.com/${currentLanguage}`}>
                            <ExternalLink className={"w-4 opacity-50"} />
                            <>
                                {currentLanguage === "en"
                                    ? "Our site Jamais203 Productions"
                                    : "Notre site Jamais 203 Productions"}
                            </>
                        </FooterItemWithLink>
                        <FooterItemWithLink href={"mailto:samuel@legendis.fr"}>
                            <Mail className={"w-4 opacity-50"} />
                            <>Samuel Briand</>
                        </FooterItemWithLink>
                    </FooterSection>
                    <FooterSection>
                        <SectionTitle>Design & Developpement</SectionTitle>
                        <FooterItemWithLink
                            href={
                                "https://github.com/maxiim3/prod203-next-app"
                            }>
                            <Github className={"w-4"} />
                            Maxime Tamburrini
                        </FooterItemWithLink>
                        <FooterItemWithLink
                            href={"https://digitalsolution.studio"}>
                            <DSS
                                className={"h-6 w-6 fill-neutral-50 opacity-70"}
                            />
                            Digital Solution Studio
                        </FooterItemWithLink>
                    </FooterSection>
                    <Text className='text-xs text-primary/70'>
                        &copy; 2023. Jamais 203 Productions. All rights
                        reserved.
                    </Text>
                </div>
            </div>
        </footer>
    );
}

const FooterItemWithLink = ({
    className,
    children,
    href,
    ...props
}: ComponentPropsWithoutRef<"a"> & {
    href: string;
}) => (
    <li
        className={cn(
            "font-regular list-none text-base leading-loose tracking-wider text-primary",
            "hover:text-primary"
        )}>
        <Link
            href={href}
            className={cn(
                "link flex items-center gap-1 text-sm text-neutral-50/80",
                className
            )}
            {...props}>
            {children}
        </Link>
    </li>
);

const FooterSection = (
    props: PropsWithChildren<{
        className?: string;
    }>
) => (
    <section
        className={twMerge(
            "w-41 flex flex-col items-start text-left",
            props.className
        )}>
        {props.children}
    </section>
);

const SectionTitle = (
    props: PropsWithChildren<{
        className?: string;
    }>
) => {
    return (
        <h3
            className={twMerge(
                "font-regular tracking-wides,t w-full text-base font-semibold uppercase text-primary",
                props.className
            )}>
            {props.children}
        </h3>
    );
};
