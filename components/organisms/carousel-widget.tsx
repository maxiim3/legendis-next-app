"use client";

import Heading2 from "@/components/atoms/heading-2";
import {AlbumFactory} from "@/lib/sanity/album";
import ImageBuilder from "@/lib/sanity/image.builder";
import {cn} from "@/lib/utils";
import {motion, useAnimate} from "framer-motion";

import React, {
    ComponentPropsWithoutRef,
    Suspense,
    useEffect,
    useState,
} from "react";

//////////////// !todo Adapt Skeleton
function AlbumCardWrapper({children, id}: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            id={id}
            className=' carousel-item relative mx-auto h-full w-full rounded-box'>
            {children}
        </div>
    );
}

/////////// Main comp
function AlbumSkeleton() {
    return <AlbumCardWrapper />;
}

export default function CarouselWidget({
    albums,
}: {
    albums: ReturnType<typeof AlbumFactory>[];
}) {
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const handlePreviousItem = () => {
        if (currentIdx === 0) setCurrentIdx(albums!.length - 1);
        else setCurrentIdx(currentIdx - 1);
    };
    const handleNextItem = () => {
        if (currentIdx === albums!.length - 1) setCurrentIdx(0);
        else setCurrentIdx(currentIdx + 1);
    };

    if (!albums) {
        return <p>No albumm found...</p>;
    }

    useEffect(() => {
        console.log("INDEX", currentIdx);
    }, [currentIdx]);
    return (
        <CarouselViewPort>
            <Suspense fallback={<p>Fetching albums...</p>}>
                <Heading2>Nos Albums : {albums[currentIdx].title?.fr}</Heading2>
                <AlbumContainer>
                    <NavigationButton
                        className={"left-12"}
                        onClick={handlePreviousItem}>
                        {"<"} Back
                    </NavigationButton>
                    <NavigationButton
                        className={"right-12"}
                        onClick={handleNextItem}>
                        Next {">"}
                    </NavigationButton>
                    {albums.map((album, idx: number) => {
                        const calculateDistance = () => {
                            const distance = currentIdx - idx;
                            return distance < 0 ? distance - 1 : distance + 1;
                        };

                        return (
                            <AlbumCard
                                onClick={() => 
                                    setCurrentIdx(idx)}
                                key={album._id}
                                distance={calculateDistance()}
                                album={album}
                            />
                        );
                    })}
                </AlbumContainer>
            </Suspense>
        </CarouselViewPort>
    );
}

///////////// CarouselViewPort Screen ////////////////
function CarouselViewPort({children}: ComponentPropsWithoutRef<"div">) {
    return <div className='mx-auto m-1 p-2 h-full w-full'>{children}</div>;
}

//////////////// Album Container //////////////
function AlbumContainer({children}: ComponentPropsWithoutRef<"div">) {
    return (
        <div className='relative flex h-128 w-full items-center justify-center gap-12 p-8'>
            {children}
        </div>
    );
}

//////////////// NAVIVATION BUTTON ///////////////////
type NavigationButtonProps = ComponentPropsWithoutRef<"button"> & {};

function NavigationButton({
    children,
    className,
    onClick,
}: NavigationButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "btn btn-outline backdrop-blur-lg btn-lg absolute top-1/2 z-[900]",
                className
            )}>
            {children}
        </button>
    );
}

//////////////////// UTILITIES FOR CARD POSITION ///////////////
    ///////// check is current image is displayed, 
    //would have a distance of one
    function isCurrentImage(distance: number) {
        return distance === 1;
    }

    //// calculate scale
    function calculateScale(distance: number) {
        // the most the distance the lower value 
        // (1, 0.3, 0.25 ...)
        return 1 / Math.abs(distance);
    }
    
    ////  calculate the zindex ratio
    function calculateZIndex(distance: number, defaultVal: number) {
        // the most the distance the lower value 
        // (1, 0.3, 0.25 ...)
        return defaultVal / Math.abs(distance);
    }

    ///// calculate the filter ratio to apply
    function calculateFilter(distance: number) {
        return `blur(${Math.abs(distance) * 3}px) grayscale(${
            1 - 1 / Math.abs(distance)
        })`;
    }

    //// calculate position on X (linear)
    function calculateXPos(distance: number) {
        return `${(window.innerWidth / 10) * distance * -1}px`;
    }

/////////////////////// CARD custom Hook ////////////////
function useCardAnimation(distance : number) {

    ////// Framer motion
    const [scope, animate] = useAnimate();
    
    //// calculate position on X (logarithmic)

    useEffect(() => {
        animate(
            scope.current,
            {
                scale: isCurrentImage(distance)
                    ? 1.3
                    : calculateScale(distance),
                zIndex: isCurrentImage(distance)
                    ? 800
                    : calculateZIndex(distance, 800),
                filter: isCurrentImage(distance)
                    ? 0
                    : calculateFilter(distance),
                translateX: isCurrentImage(distance)
                    ? 0
                    : calculateXPos(distance),
            },
            {duration: 0.25, ease: "easeOut"}
        );
    }, [distance]);

    return scope

}

//////////////////// Album Component //////////////////////////
function AlbumCard({
    album,
    distance,
    onClick,
}: {
    album: ReturnType<typeof AlbumFactory>;
    distance: number;
    onClick: () => void;
}) {
    const scope = useCardAnimation(distance);
    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <motion.div
            ref={scope}
            onClick={onClick}
            className={cn(
                "absolute aspect-square w-48 rounded-lg bg-base-100",
                "flex items-center justify-center text-6xl",
                "card image-full w-96 overflow-clip rounded-box bg-base-100 shadow-xl",
                isCurrentImage(distance) && "shadow-lg shadow-base-300"
            )}>
            <img
                className='aspect-square object-cover'
                src={ImageBuilder(album.album_cover).url()}
            />
            <button className={"btn btn-ghost"} onClick={() => setIsOpen(true)}>Open Moal</button>
            {isOpen &&
            (
                <div 
                className="absolute top-0 left-0 
                bg-base-200/50 w-full h-full "> 
                     <button 
                        className={"btn btn-ghost"} 
                        onClick={() => setIsOpen(false)}
                        >
                       X
                    </button>
                </div>
            )
            }
            {/* {album?.title?.fr} */}
        </motion.div>
    );
}

