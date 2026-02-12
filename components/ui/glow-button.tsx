"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary";
    loading?: boolean;
    children?: React.ReactNode;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, variant = "primary", loading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "gradient-primary text-primary-foreground glow-hover",
            secondary: "border-2 border-primary/50 text-foreground hover:border-primary hover:bg-primary/10",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    className
                )}
                disabled={disabled || loading}
                {...props}
            >
                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
