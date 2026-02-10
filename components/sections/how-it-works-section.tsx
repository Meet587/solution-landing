"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Database, Cpu, CloudOff, BarChart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Connect Your Data",
        description: "Securely ingest documents, databases, APIs, and knowledge bases within your environment.",
        icon: Database,
    },
    {
        number: "02",
        title: "Train Your Agents",
        description: "Fine-tune models on your private data. No external transfer. No shared compute.",
        icon: Cpu,
    },
    {
        number: "03",
        title: "Deploy Privately",
        description: "Launch agents on your infrastructure — on-prem, VPC, or private cloud.",
        icon: CloudOff,
    },
    {
        number: "04",
        title: "Scale & Control",
        description: "Monitor, govern, and expand across departments with full observability.",
        icon: BarChart,
    },
];

export function HowItWorksSection() {
    return (
        <Section className="bg-background">
            <div className="text-center mb-16">
                <h2 className="mb-4">How It Works</h2>
            </div>

            {/* Desktop: Horizontal timeline */}
            <div className="hidden lg:block relative">
                {/* Connecting line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan origin-left"
                />

                <div className="grid grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Number badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + 0.3,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-2xl font-bold text-primary-foreground glow z-10 relative"
                            >
                                {step.number}
                            </motion.div>

                            {/* Icon */}
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                                <step.icon className="h-6 w-6 text-accent" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile: Vertical timeline */}
            <div className="lg:hidden space-y-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="flex gap-6"
                    >
                        <div className="flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15 + 0.2,
                                    type: "spring"
                                }}
                                className="flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-xl font-bold text-primary-foreground glow shrink-0"
                            >
                                {step.number}
                            </motion.div>
                            {index < steps.length - 1 && (
                                <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-accent-purple to-accent-cyan" />
                            )}
                        </div>

                        <div className="pb-8">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                                <step.icon className="h-5 w-5 text-accent" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
