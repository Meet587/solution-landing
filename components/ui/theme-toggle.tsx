"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background-surface text-foreground-muted"
                aria-label="Toggle theme"
            >
                <Sun className="h-4 w-4" />
            </button>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background-surface text-foreground-muted hover:text-foreground hover:border-primary/40 transition-colors duration-300 cursor-pointer overflow-hidden"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ y: 16, rotate: -90, opacity: 0 }}
                        animate={{ y: 0, rotate: 0, opacity: 1 }}
                        exit={{ y: -16, rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <Sun className="h-4 w-4" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: 16, rotate: 90, opacity: 0 }}
                        animate={{ y: 0, rotate: 0, opacity: 1 }}
                        exit={{ y: -16, rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <Moon className="h-4 w-4" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
