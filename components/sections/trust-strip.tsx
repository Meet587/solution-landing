"use client";

import { motion } from "framer-motion";
import { Shield, Server, CheckCircle2, Clock, Lock } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeIn, staggerFast } from "@/lib/animations";

const icons = [Shield, Server, CheckCircle2, Clock, Lock];

export function TrustStrip() {
    const { trustStrip } = landingCopy;

    return (
        <SectionContainer variant="muted" className="border-y border-border">
            <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            >
                {trustStrip.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="flex items-center gap-3 justify-center sm:justify-start"
                        >
                            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground-secondary font-medium">
                                {item}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </SectionContainer>
    );
}
