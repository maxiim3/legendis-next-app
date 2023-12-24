import {ContactRedirection} from "@/components/organisms/contact.client"
import HeroBanner from "@/components/organisms/hero-banner"
import Members from "@/components/organisms/members.client"
import Presentation from "@/components/organisms/presentation.client"
import React from "react"
import CarouselWidget from "./carousel-widget.client"
import { AlbumFactory } from "@/lib/sanity/album"
import { getAllAlbums } from "@/lib/sanity/service"
import VideoHero from "@/components/organisms/video-hero.client"

const LazyPresentation = React.lazy(() => import("@/components/organisms/presentation.client"))


export default async function HomePage() {
        const albums: Awaited<ReturnType<typeof AlbumFactory>[]> = await getAllAlbums();
	return (
		<main
			className={
				"h-min-screen relative mx-auto flex w-screen flex-col items-center justify-center overflow-x-hidden bg-transparent font-roboto text-balance "
			}>
			<HeroBanner albums={albums} />
			<div>
				<LazyPresentation />
				<Members />
				<ContactRedirection />
                {/* <CarouselWidget albums={albums}/> */}
			</div>
		</main>
	)
}
