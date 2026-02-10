"use client";

import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { FloatingNodes } from "@/components/ui/floating-nodes";
import { GlowButton } from "@/components/ui/glow-button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <AnimatedGradient />

            {/* Floating nodes visualization */}
            <FloatingNodes />

            {/* Hero content */}
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-5xl"
                >
                    {/* Small badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium"
                    >
                        <Shield className="h-4 w-4 text-accent-purple" />
                        <span>Enterprise-Grade AI Infrastructure</span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-6"
                    >
                        Hyper-Personalized AI Agents.{" "}
                        <span className="gradient-text">Your Data. Your Infrastructure.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl"
                    >
                        Enterprise-grade AI agents trained exclusively on your private data,
                        deployed on your own servers. Total control. Total privacy. Zero compromise.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                    >
                        <GlowButton variant="primary" className="group">
                            Request Demo
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </GlowButton>
                        <GlowButton variant="secondary">
                            View Architecture
                        </GlowButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-8 w-5 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1"
                >
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
