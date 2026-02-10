"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, GitBranch, Wrench } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { FeatureCard } from "@/components/ui/feature-card";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = [Building2, Cpu, GitBranch, Wrench];

export function EnterpriseReadinessSection() {
    const { enterpriseReadiness } = landingCopy;

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
                    {enterpriseReadiness.headline}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary"
                >
                    {enterpriseReadiness.subheadline}
                </motion.p>
            </div>

            <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {enterpriseReadiness.sections.map((section, index) => {
                    const Icon = icons[index];
                    return (
                        <motion.div key={index} variants={fadeInUp}>
                            <FeatureCard className="h-full">
                                <Icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-2xl font-bold mb-4 text-foreground">
                                    {section.title}
                                </h3>
                                <p className="text-foreground-secondary leading-relaxed">
                                    {section.body}
                                </p>
                            </FeatureCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionContainer>
    );
}
