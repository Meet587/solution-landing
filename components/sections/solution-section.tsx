"use client";

import { Section } from "@/components/ui/section";
import { CardWithHover } from "@/components/ui/card-with-hover";
import { motion } from "framer-motion";
import { Brain, Server, Users, ShieldCheck } from "lucide-react";

const benefits = [
    {
        icon: Brain,
        title: "Trained on Your Data Only",
        description: "Your AI agents learn exclusively from your documents, processes, and knowledge base. Nothing shared. Nothing leaked.",
    },
    {
        icon: Server,
        title: "Deployed on Your Servers",
        description: "On-premises or private cloud. Your infrastructure, your rules, your security perimeter.",
    },
    {
        icon: Users,
        title: "Custom Agents Per Team",
        description: "Operations, Support, Sales, Internal Tools — each team gets an agent trained for their specific workflows.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Ready Day One",
        description: "SSO, audit logs, role-based access. Built for IT, trusted by security teams.",
    },
];

export function SolutionSection() {
    return (
        <Section variant="gradient">
            <div className="text-center mb-16">
                <h2 className="mb-4">AI That Works <span className="gradient-text">for You</span>, Not Against You</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Private. Personalized. Precise.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <CardWithHover className="h-full">
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary">
                                <benefit.icon className="h-7 w-7 text-primary-foreground" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold">{benefit.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {benefit.description}
                            </p>
                        </CardWithHover>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
