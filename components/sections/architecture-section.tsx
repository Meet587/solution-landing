"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Server, Database, Lock, Shield, Eye, FileKey } from "lucide-react";

const benefits = [
    { icon: Lock, text: "No cloud dependencies for inference" },
    { icon: Shield, text: "Air-gapped deployment options" },
    { icon: Eye, text: "Full audit trail & logging" },
    { icon: FileKey, text: "Bring your own model weights" },
];

export function ArchitectureSection() {
    return (
        <Section className="bg-secondary/20">
            <div className="text-center mb-12">
                <h2 className="mb-4">Architecture Built for <span className="gradient-text">Privacy</span></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your data never leaves your walls.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="glass-card p-8 space-y-6">
                        {/* Your Infrastructure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative rounded-xl border-2 border-accent-purple/50 bg-accent-purple/5 p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Server className="h-6 w-6 text-accent-purple" />
                                <h4 className="font-bold text-lg">Your Private Infrastructure</h4>
                            </div>

                            {/* AI Agent Layer */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mb-4 rounded-lg border border-accent-blue/50 bg-accent-blue/10 p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-3 w-3 rounded-full bg-accent-blue animate-pulse" />
                                    <span className="font-semibold text-sm">AI Agent Layer</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Running on your hardware
                                </p>
                            </motion.div>

                            {/* Data Sources */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="rounded-lg border border-accent-cyan/50 bg-accent-cyan/10 p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Database className="h-4 w-4 text-accent-cyan" />
                                    <span className="font-semibold text-sm">Your Data Sources</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Internal databases, documents, APIs
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Zero External Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                            className="inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2 text-sm font-bold glow"
                        >
                            <Lock className="h-4 w-4" />
                            Zero External Transmission
                        </motion.div>
                    </div>
                </motion.div>

                {/* Benefits List */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.text}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4 glass-card p-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-primary">
                                <benefit.icon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div className="flex-1 pt-1">
                                <p className="font-semibold text-lg">{benefit.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
