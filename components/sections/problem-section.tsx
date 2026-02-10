"use client";

import { Section } from "@/components/ui/section";
import { CardWithHover } from "@/components/ui/card-with-hover";
import { motion } from "framer-motion";
import { AlertTriangle, Shield, Box } from "lucide-react";

const painPoints = [
    {
        icon: AlertTriangle,
        title: "Your data trains their models",
        description: "Enterprise data sent to third-party servers becomes part of shared training pipelines. Your competitive advantage, now everyone's baseline.",
    },
    {
        icon: Box,
        title: "One-size-fits-all doesn't fit",
        description: "Generic AI can't understand your business context, processes, or proprietary knowledge. It's built for the masses, not your mission.",
    },
    {
        icon: Shield,
        title: "Compliance nightmares",
        description: "GDPR, HIPAA, SOC 2 — your data governance policies don't work with SaaS black boxes. Hope isn't a compliance strategy.",
    },
];

export function ProblemSection() {
    return (
        <Section className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="mb-4 text-destructive">The SaaS AI Trap</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Generic models. Shared infrastructure. Data exposure risks.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {painPoints.map((point, index) => (
                    <motion.div
                        key={point.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <CardWithHover className="h-full" glowOnHover={false}>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                                <point.icon className="h-6 w-6 text-destructive" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{point.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {point.description}
                            </p>
                        </CardWithHover>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
