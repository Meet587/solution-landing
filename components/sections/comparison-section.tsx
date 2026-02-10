"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
    {
        feature: "Data Privacy",
        saas: "Shared infrastructure, external servers",
        ours: "100% private, your servers",
        saasNegative: true,
    },
    {
        feature: "Customization",
        saas: "Generic models for everyone",
        ours: "Hyper-personalized per team",
        saasNegative: true,
    },
    {
        feature: "Compliance",
        saas: "Hope their SOC 2 covers you",
        ours: "You control the audit trail",
        saasNegative: true,
    },
    {
        feature: "Vendor Lock-in",
        saas: "Dependent on their API changes",
        ours: "Open architecture, your rules",
        saasNegative: true,
    },
    {
        feature: "Data Ownership",
        saas: "Terms of service uncertainty",
        ours: "Absolute ownership",
        saasNegative: true,
    },
];

export function ComparisonSection() {
    return (
        <Section variant="gradient">
            <div className="text-center mb-12">
                <h2 className="mb-4">Why Not SaaS AI?</h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="glass-card overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-4 border-b border-border/50 bg-secondary/30 p-6">
                        <div className="font-bold text-lg">Feature</div>
                        <div className="font-bold text-lg text-destructive/80">SaaS AI</div>
                        <div className="font-bold text-lg gradient-text">Our Solution</div>
                    </div>

                    {/* Table Rows */}
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={row.feature}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="grid grid-cols-3 gap-4 border-b border-border/30 p-6 hover:bg-secondary/20 transition-colors"
                        >
                            <div className="font-semibold">{row.feature}</div>
                            <div className="flex items-start gap-2">
                                <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{row.saas}</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring" }}
                                >
                                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                </motion.div>
                                <span className="font-medium">{row.ours}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
