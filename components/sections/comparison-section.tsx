"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

export function ComparisonSection() {
    const { comparison } = landingCopy;

    return (
        <SectionContainer>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                    >
                        {comparison.headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-foreground-secondary"
                    >
                        {comparison.subheadline}
                    </motion.p>
                </div>

                {/* Comparison Table */}
                <motion.div
                    variants={staggerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white border border-border rounded-lg overflow-hidden shadow-soft"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-muted border-b border-border">
                        <div className="p-4 font-semibold text-foreground"></div>
                        <div className="p-4 font-semibold text-foreground border-l border-border">
                            Public SaaS AI
                        </div>
                        <div className="p-4 font-semibold text-primary border-l border-border">
                            Private AI Infrastructure
                        </div>
                    </div>

                    {/* Table Rows */}
                    {comparison.dimensions.map((dimension, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`grid grid-cols-3 border-b border-border last:border-b-0 ${index % 2 === 0 ? "bg-white" : "bg-muted/30"
                                }`}
                        >
                            <div className="p-4 font-semibold text-foreground">
                                {dimension.aspect}
                            </div>
                            <div className="p-4 border-l border-border flex items-start gap-2">
                                <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                                <span className="text-foreground-secondary text-sm">
                                    {dimension.saas}
                                </span>
                            </div>
                            <div className="p-4 border-l border-border flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-foreground-secondary text-sm font-medium">
                                    {dimension.private}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 p-6 bg-accent border border-border rounded-lg"
                >
                    <p className="text-foreground-secondary italic leading-relaxed">
                        {comparison.note}
                    </p>
                </motion.div>
            </div>
        </SectionContainer>
    );
}
