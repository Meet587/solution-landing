import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: "section" | "div";
    variant?: "default" | "muted" | "accent";
    noPadding?: boolean;
}

/**
 * Reusable section container with consistent max-width and padding
 * Use this for all landing page sections for consistency
 */
export function SectionContainer({
    children,
    className,
    as: Component = "section",
    variant = "default",
    noPadding = false,
    ...props
}: SectionContainerProps) {
    return (
        <Component
            className={cn(
                // Base styles
                "w-full",
                // Variant backgrounds
                variant === "muted" && "bg-muted",
                variant === "accent" && "bg-accent",
                variant === "default" && "bg-background",
                // Optional padding
                !noPadding && "section-padding",
                className
            )}
            {...props}
        >
            <div className="section-container">{children}</div>
        </Component>
    );
}
