"use client";

import { motion } from "framer-motion";
import { Database, Server, Users, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { FeatureCard } from "@/components/ui/feature-card";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = {
    0: Database,
    1: Server,
    2: Users,
    3: ShieldCheck,
};

export function SolutionSection() {
    const { solution } = landingCopy;

    return (
        <SectionContainer>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    {solution.headline}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary"
                >
                    {solution.subheadline}
                </motion.p>
            </div>

            <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {solution.benefits.map((benefit, index) => {
                    const Icon = icons[index as keyof typeof icons];
                    return (
                        <motion.div key={index} variants={fadeInUp}>
                            <FeatureCard className="h-full">
                                <Icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-2xl font-bold mb-4 text-foreground">
                                    {benefit.title}
                                </h3>
                                <p className="text-foreground-secondary leading-relaxed text-base">
                                    {benefit.description}
                                </p>
                            </FeatureCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionContainer>
    );
}
