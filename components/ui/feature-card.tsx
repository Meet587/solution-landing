import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

/**
 * Dark surface card with 1px border, subtle glow on hover
 * Enterprise-grade: no glass morphism, no bright gradients
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
        "bg-background-surface border border-border rounded-[10px] p-6 transition-all duration-300",
        hover &&
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_hsl(168_76%_46%/0.08)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
