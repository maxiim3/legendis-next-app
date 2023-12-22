import LogoHeader from "./LogoTitle";
import {CarouselNavigation} from "@/app/carouselNavigation";
import CarouselWidget from "@/components/organisms/carousel-widget";
import Presentation from "@/components/organisms/presentation.client";
import {AlbumFactory} from "@/lib/sanity/album";

import {getAllAlbums} from "@/lib/sanity/service";
import {cn} from "@/lib/utils";
import React, {Suspense, type ComponentPropsWithoutRef} from "react";

export default async function HomePage() {
    const albums: Awaited<ReturnType<typeof AlbumFactory>[]> =
        await getAllAlbums();
    return (
        <main>
            <header className='absolute left-0 top-3 z-30 w-full pt-8 text-4xl text-primary'>
         <LogoHeader />
            </header>
            <Presentation />
            <CarouselWidget albums={albums} />
            <ArtistPresentation />
            <ContactCTA />
        </main>
    );
}

function PageSection({
    children,
    className,
    id,
}: ComponentPropsWithoutRef<"section">) {
    return (
        <section
            id={id}
            className={cn("min-h-screen w-screen bg-base-200", className)}>
            {children}
        </section>
    );
}

function ArtistPresentation() {
    return <PageSection id='team'>COUCOU</PageSection>;
}

function ContactCTA() {
    return <PageSection>CONTACT</PageSection>;
}
