"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "gradient" | "glass";
}

export function Section({
    children,
    className,
    variant = "default",
    ...props
}: SectionProps) {
    const variants = {
        default: "",
        gradient: "bg-gradient-to-b from-background via-secondary/20 to-background",
        glass: "glass-card",
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "section-padding section-container",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.section>
    );
}
