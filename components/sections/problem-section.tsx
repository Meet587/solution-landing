"use client";

import { motion } from "framer-motion";
import {
    AlertCircle,
    TrendingUp,
    Clock,
    ShieldAlert,
    Link2,
    Brain,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { FeatureCard } from "@/components/ui/feature-card";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = [AlertCircle, TrendingUp, Clock, ShieldAlert, Link2, Brain];

export function ProblemSection() {
    const { problem } = landingCopy;

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
                    {problem.headline}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary max-w-3xl mx-auto"
                >
                    {problem.subheadline}
                </motion.p>
            </div>

            <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {problem.issues.map((issue, index) => {
                    const Icon = icons[index];
                    return (
                        <motion.div key={index} variants={fadeInUp}>
                            <FeatureCard className="h-full">
                                <Icon className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {issue.title}
                                </h3>
                                <p className="text-foreground-secondary leading-relaxed">
                                    {issue.description}
                                </p>
                            </FeatureCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionContainer>
    );
}
