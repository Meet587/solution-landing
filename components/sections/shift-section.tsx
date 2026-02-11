"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp } from "@/lib/animations";

export function ShiftSection() {
    const { shift } = landingCopy;

    return (
        <SectionContainer variant="muted">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    {shift.headline}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-foreground-secondary text-center mb-12"
                >
                    {shift.subheadline}
                </motion.p>

                <div className="space-y-6">
                    {shift.paragraphs.map((paragraph, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white border-l-4 border-primary p-6 rounded-r-lg shadow-soft"
                        >
                            <p className="text-lg text-foreground-secondary leading-relaxed">
                                {paragraph}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
