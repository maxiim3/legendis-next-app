import {cn} from "@/lib/utils";
import React, {ComponentPropsWithoutRef} from "react";

export default function Tooltip({
    children,
    className,
    message,
}: ComponentPropsWithoutRef<"span"> & {message: string}) {
    return (
        <span
            data-tip={message}
            className={cn("tooltip", className)}>
            {children}
        </span>
    );
}
