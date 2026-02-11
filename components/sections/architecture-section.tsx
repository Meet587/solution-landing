"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Database, Shield } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

export function ArchitectureSection() {
    const { architecture } = landingCopy;

    return (
        <SectionContainer id="architecture" variant="muted">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Diagram */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="bg-white border border-border rounded-lg p-8 shadow-soft">
                        {/* Simple architecture diagram */}
                        <div className="space-y-6">
                            {/* Top: Your Private Infrastructure */}
                            <div className="flex items-center gap-4 p-4 bg-primary/10 border border-primary rounded-lg">
                                <Server className="h-10 w-10 text-primary" />
                                <div>
                                    <div className="font-bold text-foreground">
                                        Your Private Infrastructure
                                    </div>
                                    <div className="text-sm text-foreground-secondary">
                                        On-premises / Private VPC / Air-gapped
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                                <div className="w-0.5 h-8 bg-border" />
                            </div>

                            {/* Middle: AI Agent Layer */}
                            <div className="flex items-center gap-4 p-4 bg-accent border border-border rounded-lg">
                                <Shield className="h-10 w-10 text-primary" />
                                <div>
                                    <div className="font-bold text-foreground">
                                        AI Agent Layer
                                    </div>
                                    <div className="text-sm text-foreground-secondary">
                                        Orchestration, reasoning, tool access
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                                <div className="w-0.5 h-8 bg-border" />
                            </div>

                            {/* Bottom: Data Sources */}
                            <div className="flex items-center gap-4 p-4 bg-muted border border-border rounded-lg">
                                <Database className="h-10 w-10 text-primary" />
                                <div>
                                    <div className="font-bold text-foreground">
                                        Internal Data Sources
                                    </div>
                                    <div className="text-sm text-foreground-secondary">
                                        Documents, databases, APIs (internal only)
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="mt-8 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full">
                                    <CheckCircle2 className="h-5 w-5 text-green-700" />
                                    <span className="font-semibold text-green-700">
                                        Zero External Transmission
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    variants={staggerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeInUp} className="mb-4">
                        {architecture.headline}
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-xl text-foreground-secondary mb-6">
                        {architecture.subheadline}
                    </motion.p>

                    <div className="space-y-6 mb-8">
                        {architecture.body.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={fadeInUp}
                                className="text-foreground-secondary leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div variants={fadeInUp} className="space-y-3">
                        {architecture.principles.map((principle, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground-secondary font-medium">
                                    {principle}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </SectionContainer>
    );
}
