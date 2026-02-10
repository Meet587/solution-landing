"use client";

import { Section } from "@/components/ui/section";
import { GlowButton } from "@/components/ui/glow-button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <Section className="bg-secondary/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl gradient-primary p-12 text-center"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                    <h2 className="mb-4 text-primary-foreground">
                        Ready to Take Control of Your AI?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-foreground/90">
                        See how private, personalized AI agents can transform your enterprise operations.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <GlowButton
                            variant="secondary"
                            className="bg-white text-primary hover:bg-white/90 border-0 glow-pulse group"
                        >
                            Schedule Demo
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </GlowButton>
                    </div>

                    <p className="mt-6 text-sm text-primary-foreground/70">
                        Talk to our infrastructure team →
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
