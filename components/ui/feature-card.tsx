import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hover?: boolean;
}

/**
 * Clean feature card with subtle border, no glass morphism
 * Includes subtle lift effect on hover if enabled
 */
export function FeatureCard({
    children,
    className,
    hover = true,
    ...props
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "bg-white border border-border rounded-lg p-6 transition-all duration-300",
                hover && "hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-primary/30",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
