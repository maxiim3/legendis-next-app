"use client";

import SectionReferenceFactory from "@/builders/section-reference.builder";
import {cn} from "@/lib/utils";
import {NavigationStore, useNavigationStore} from "@/stores/navigation.store";
import {motion, useInView} from "framer-motion";
import {ComponentPropsWithoutRef, useEffect, useRef} from "react";

export function SectionTemplateWrapper({
    className,
    id,
    children,
    slug,
}: ComponentPropsWithoutRef<"section"> & {
    slug: SectionReferenceFactory["slug"];
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const {setActiveSection} = useNavigationStore(
        (store: NavigationStore) => store
    );

    const inView = useInView(sectionRef, {
        amount: 0.3, // 0  = 'some', 1 = 'all'
        margin: "0px 0px 200px",
    });
    useEffect(() => {
        if (inView) {
            setActiveSection(slug);
        }
    }, [inView, setActiveSection, slug, sectionRef]);

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, once: true, staggerChildren: 0.2}}
            ref={sectionRef}
            id={id}
            className={cn(
                `mx-auto w-full bg-base-100/75 px-3 py-24 backdrop-blur-sm`,
                className
            )}>
            {children}
        </motion.section>
    );
}
