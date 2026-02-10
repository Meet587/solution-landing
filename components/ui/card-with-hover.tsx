"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardWithHoverProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    glowOnHover?: boolean;
}

export function CardWithHover({
    children,
    className,
    glowOnHover = true,
    ...props
}: CardWithHoverProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "glass-card p-6 transition-all duration-300",
                glowOnHover && "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
