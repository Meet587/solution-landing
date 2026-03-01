import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "section" | "div";
  variant?: "default" | "surface" | "elevated";
  noPadding?: boolean;
}

/**
 * Reusable section container with consistent max-width and generous spacing
 * Dark enterprise theme with variant backgrounds
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
        "w-full relative",
        variant === "surface" && "bg-background-surface",
        variant === "elevated" && "bg-background-elevated",
        variant === "default" && "bg-background",
        !noPadding && "section-padding",
        className,
      )}
      {...props}
    >
      <div className="section-container">{children}</div>
    </Component>
  );
}
