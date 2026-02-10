"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
    const { hero } = landingCopy;

    return (
        <SectionContainer className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center max-w-5xl"
            >
                {/* Headline */}
                <motion.h1 variants={fadeInUp} className="mb-6">
                    {hero.headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={fadeInUp}
                    className="text-xl sm:text-2xl text-foreground-secondary mb-6 max-w-4xl mx-auto"
                >
                    {hero.subheadline}
                </motion.p>

                {/* Body paragraph */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg text-foreground-secondary mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    {hero.body}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <EnterpriseButton variant="primary" size="lg">
                        {hero.cta.primary}
                    </EnterpriseButton>
                    <EnterpriseButton
                        variant="ghost"
                        size="lg"
                        className="group"
                        onClick={() => {
                            document.getElementById("architecture")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        {hero.cta.secondary}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </EnterpriseButton>
                </motion.div>
            </motion.div>

            {/* Subtle decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </SectionContainer>
    );
}
