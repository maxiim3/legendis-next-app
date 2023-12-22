import {cn} from "@/lib/utils";
import React, {ComponentPropsWithoutRef} from "react";
import {Spotify} from "react-spotify-embed";

type SpotifyPlayerProps = ComponentPropsWithoutRef<"iframe"> & {
    link: string;
    withAnimation?: boolean;
};
const SpotifyPlayer = ({
    className,
    link,
    withAnimation = false,
    ...props
}: SpotifyPlayerProps) => (
    <Spotify
        aria-label={props["aria-label"]}
        link={link}
        className={cn(
            "flex-auto",
            withAnimation &&
                "scale-[98%] opacity-90 contrast-50 transition duration-150 hover:scale-[102%] hover:opacity-100 hover:contrast-100",
            className
        )}
        {...props}
    />
);

export default SpotifyPlayer;
