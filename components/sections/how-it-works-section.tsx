"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

export function HowItWorksSection() {
    const { howItWorks } = landingCopy;

    return (
        <SectionContainer variant="muted">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    {howItWorks.headline}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary"
                >
                    {howItWorks.subheadline}
                </motion.p>
            </div>

            <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
            >
                {/* Connecting line */}
                <div className="absolute top-12 left-8 right-8 h-0.5 bg-border hidden lg:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {howItWorks.steps.map((step, index) => (
                        <motion.div key={index} variants={fadeInUp} className="relative">
                            {/* Step number badge */}
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                                    {step.number}
                                </div>
                            </div>

                            {/* Step content */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-foreground-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
