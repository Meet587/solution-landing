"use client";

import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardWithHover } from "@/components/ui/card-with-hover";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Workflow, Rocket, Check } from "lucide-react";

const useCases = [
    {
        id: "cto",
        label: "For CTOs",
        icon: Code,
        title: "Infrastructure You Control",
        description: "Deploy AI without surrendering your data governance. Full auditability, zero vendor lock-in.",
        points: [
            "Private deployment options (on-prem, VPC, air-gapped)",
            "Complete API control and customization",
            "Custom security policies and compliance frameworks",
        ],
    },
    {
        id: "ops",
        label: "For Operations",
        icon: Workflow,
        title: "Automate Without Compromise",
        description: "Agents that understand your processes, workflows, and tools — trained on your operational playbooks.",
        points: [
            "Workflow automation across existing tools",
            "Internal system integration (ERP, CRM, ticketing)",
            "Process-specific training on SOPs and runbooks",
        ],
    },
    {
        id: "founders",
        label: "For Founders",
        icon: Rocket,
        title: "Scale Smarter, Not Bigger",
        description: "Do more with your team by deploying personalized AI across support, sales, and ops — without hiring armies.",
        points: [
            "Multi-department agents from single platform",
            "Rapid deployment (weeks, not months)",
            "Cost-effective scaling without headcount bloat",
        ],
    },
];

export function UseCasesSection() {
    return (
        <Section variant="gradient">
            <div className="text-center mb-12">
                <h2 className="mb-4">Built for Enterprise Teams</h2>
            </div>

            <Tabs defaultValue="cto" className="max-w-5xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8 glass">
                    {useCases.map((useCase) => (
                        <TabsTrigger
                            key={useCase.id}
                            value={useCase.id}
                            className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
                        >
                            <useCase.icon className="mr-2 h-4 w-4" />
                            {useCase.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <AnimatePresence mode="wait">
                    {useCases.map((useCase) => (
                        <TabsContent key={useCase.id} value={useCase.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardWithHover className="p-8">
                                    <div className="grid gap-8 lg:grid-cols-2">
                                        <div>
                                            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
                                                <useCase.icon className="h-8 w-8 text-primary-foreground" />
                                            </div>
                                            <h3 className="mb-3 text-3xl font-bold">{useCase.title}</h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {useCase.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <ul className="space-y-4">
                                                {useCase.points.map((point, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                                        className="flex gap-3"
                                                    >
                                                        <Check className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                                                        <span className="text-foreground/90 leading-relaxed">{point}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardWithHover>
                            </motion.div>
                        </TabsContent>
                    ))}
                </AnimatePresence>
            </Tabs>
        </Section>
    );
}
