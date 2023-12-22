import React from "react";

const SkeletonFooter = () => {
    return (
        <footer className={"w-screen bg-base-100 px-3 py-12 md:px-12"}>
            <ul
                className={
                    "flex w-full flex-wrap items-center justify-center gap-12"
                }>
                {Array.from({length: 6}).map((_, i) => (
                    <li
                        key={`footer-item-${i}`}
                        className={
                            "aspect-video w-72 animate-pulse bg-neutral-800 text-center text-base-content"
                        }></li>
                ))}
            </ul>
        </footer>
    );
};

export default SkeletonFooter;
