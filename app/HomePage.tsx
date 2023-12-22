import { ContactRedirection } from "@/components/organisms/contact.client";
import HeroBanner from "@/components/organisms/hero-banner";
import Members from "@/components/organisms/members.client";
import Presentation from "@/components/organisms/presentation.client";
import React from "react";


export default function HomePage() {
    return (
        <main
            className={"h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance "}>
            {/*<VideoHero />*/}
            <HeroBanner />
            <div>
                <Presentation />
                <Members />
                {/*  <Prose className={'mx-auto text-center pb-16 '}>
              <Heading2>Contact</Heading2>
           </Prose>*/}
                <ContactRedirection />/
            </div>
            {/*<SpotifyGrid />*/}
        </main>
    );
}

