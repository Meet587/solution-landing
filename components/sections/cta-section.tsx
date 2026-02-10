"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
    const { cta } = landingCopy;

    return (
        <SectionContainer className="border-y-2 border-primary/20">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
            >
                <motion.h2 variants={fadeInUp} className="mb-6">
                    {cta.headline}
                </motion.h2>

                <motion.p
                    variants={fadeInUp}
                    className="text-xl text-foreground-secondary mb-10 leading-relaxed"
                >
                    {cta.body}
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <EnterpriseButton variant="primary" size="xl">
                        {cta.buttons.primary}
                    </EnterpriseButton>
                    <EnterpriseButton variant="ghost" size="xl" className="group">
                        {cta.buttons.secondary}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </EnterpriseButton>
                </motion.div>
            </motion.div>
        </SectionContainer>
    );
}
