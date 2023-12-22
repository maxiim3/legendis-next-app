"use client"
import React from "react"
import { useI18nContext } from "@/stores/i18n.store";
import Legendis from "@/components/atoms/Legendis";
import Prose from "@/components/atoms/Prose";
import Heading2 from "@/components/atoms/heading-2";
import Text from "@/components/atoms/text";

export default function LogoHeader() {
    const currentLang = useI18nContext(store => store.currentLanguage);
    return (
        <Prose>
            <h1
                className={
                    "sr-only text-center text-xl font-light uppercase text-primary"
                }>
                Legendis
            </h1>
            <Legendis
                className={"mx-auto h-16 w-24 fill-primary md:h-24 md:w-48"}
            />
            <Heading2
                className={
                    "my-1 text-center text-4xl text-base-content md:mb-0"
                }>
                Legendis
            </Heading2>
            <small className={"text-center text-primary/80"}>
                {currentLang === "fr"
                    ? "Un label Jamais 203 Productions"
                    : "A Jamais 203 Productions Label"}
            </small>
        </Prose>
    );
}
