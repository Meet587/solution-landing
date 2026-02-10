"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
    className?: string;
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 -z-10 gradient-primary animated-gradient opacity-90",
                className
            )}
            aria-hidden="true"
        />
    );
}
