import {cn} from "@/lib/utils";
import {motion, useAnimation} from "framer-motion";
import React, {ComponentPropsWithoutRef, useEffect, useRef} from "react";

export default function LogoMotion({
    longPath,
    fadeout,
    shortPath,
}: {
    longPath: MotionLogoProps;
    shortPath: MotionLogoProps;
    fadeout: number;
}) {
    return (
        <motion.svg
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            transition={{duration: 0.5, delay: fadeout}}
            width='433'
            height='292'
            viewBox='0 0 433 292'
            className={"mx-auto h-3/4 w-3/4"}
            preserveAspectRatio={"xMidYMax meet"}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id={"group"}>
                <PathMotion
                    length={858}
                    duration={longPath.duration}
                    delay={longPath.delay}
                    id={"long"}
                    d={
                        "M191.5 89.5C191.833 84.8333 194.4 72.7 202 61.5C209.6 50.3 201.167 34.8333 196 28.5C192.833 24.1667 187 13.1 189 3.5C191 -6.1 162 68.5 144.5 115C136.597 136 117.5 161 99.5 177C93.5 182.667 74.7 195.1 47.5 199.5C20.3 203.9 7.16665 193.333 3.99999 187.5C0.499986 180.333 1.99998 162.8 36 150C70 137.2 122.5 151.667 144.5 160.5C176 172.833 244.928 195.936 268 198.5C308.5 203 369 214 429.5 176"
                    }
                />
                <PathMotion
                    length={688}
                    duration={shortPath.duration}
                    delay={shortPath.delay}
                    id={"short"}
                    d={
                        "M176.5 69C169.5 92.6667 150 146.9 128 174.5C100.5 209 77.5002 214 54.0002 217C11.5 222.426 -7.99981 190.5 39.0002 168.5C71 158 102.1 162.9 142.5 174.5C182.9 186.1 256.7 213 289.5 217C320.167 220 389.1 221.8 419.5 205"
                    }
                />
            </g>
        </motion.svg>
    );
}
const PathMotion = ({
    className,
    delay,
    duration,
    id,
    d,
    length,
}: PathMotionProps) => {
    const {pathRef, controls} = useMotionPath(id, duration, delay);
    return (
        <>
            {/* Define filter */}
            <defs>
                <filter
                    id='calligraphic'
                    x='-20%'
                    y='-20%'
                    width='140%'
                    height='140%'>
                    <feGaussianBlur
                        in='SourceGraphic'
                        stdDeviation='1' // 👈 Reduced blur for less "ghosty" effect
                        result='blur'
                    />
                    <feOffset
                        in='blur'
                        dx='2' // 👈 Reduced offset for sharper lines
                        dy='4'
                        result='offsetBlur'
                    />
                    <feComposite
                        in='SourceGraphic'
                        in2='offsetBlur'
                        operator='in'
                    />
                </filter>
            </defs>
            <motion.path
                ref={pathRef}
                animate={controls}
                initial={{strokeDasharray: length, strokeDashoffset: length}}
                className={cn("stroke-primary", className)}
                id={id}
                d={d}
                filter='url(#calligraphic)' // 👈 Closing parenthesis added here
                strokeWidth='10'
            />
        </>
    );
};
const useMotionPath = (id: string, duration: number, delay: number) => {
    const controls = useAnimation();
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (pathRef.current) {
            console.log(
                `Path length: ${id} : `,
                pathRef.current.getTotalLength()
            ); // Log it

            controls.start({
                strokeDashoffset: 0,
                transition: {duration: duration, delay: delay},
            });
        }
    }, [controls, delay, duration, id]);

    return {pathRef, controls};
};

type PathMotionProps = ComponentPropsWithoutRef<"path"> & {
    d: string;
    id: string;
    duration: number;
    delay: number;
    length: number;
};

type MotionLogoProps = {
    duration: number;
    delay: number;
};
