import {cn} from "@/lib/utils";
import {ComponentPropsWithoutRef} from "react";

export default function Heading2({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"h2">) {
    return (
        <h2
            className={cn(
                "font-roboto text-3xl font-normal uppercase text-primary sm:text-4xl",
                className
            )}
            {...props}>
            {children}
        </h2>
    );
}
