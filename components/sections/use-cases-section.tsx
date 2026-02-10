"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp } from "@/lib/animations";

export function UseCasesSection() {
    const { useCases } = landingCopy;
    const [activeTab, setActiveTab] = useState(useCases.roles[0].id);

    const activeRole = useCases.roles.find((role) => role.id === activeTab);

    return (
        <SectionContainer>
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    {useCases.headline}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary"
                >
                    {useCases.subheadline}
                </motion.p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {useCases.roles.map((role) => (
                    <button
                        key={role.id}
                        onClick={() => setActiveTab(role.id)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === role.id
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-white text-foreground-secondary border border-border hover:border-primary/30 hover:bg-accent"
                            }`}
                    >
                        {role.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeRole && (
                <motion.div
                    key={activeRole.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white border border-border rounded-lg p-8 shadow-soft"
                >
                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                        {activeRole.title}
                    </h3>

                    <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
                        {activeRole.body}
                    </p>

                    <div className="space-y-3">
                        {activeRole.bullets.map((bullet, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground-secondary">{bullet}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </SectionContainer>
    );
}
