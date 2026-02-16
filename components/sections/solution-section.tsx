"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Database,
  Cpu,
  Shield,
  Server,
  Workflow,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function SolutionSection() {
  const { solution } = landingCopy;

  return (
    <SectionContainer id="solution">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column — Text + Bullets */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeInUp} className="mb-5">
            {solution.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground-secondary mb-8 max-w-[500px] leading-relaxed"
          >
            {solution.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-4">
            {solution.bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground-secondary font-medium">
                  {bullet}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-background-surface border border-border rounded-[12px] p-6 sm:p-8">
            <div className="space-y-3">
              {[
                {
                  icon: Database,
                  label: "Data Sources",
                  sub: "Secure ingestion pipeline",
                },
                {
                  icon: Shield,
                  label: "Agent Runtime",
                  sub: "Private model inference",
                },
                {
                  icon: Cpu,
                  label: "Vector Storage",
                  sub: "Embedding retrieval layer",
                },
                {
                  icon: Workflow,
                  label: "API Layer",
                  sub: "Controlled access endpoints",
                },
                {
                  icon: Server,
                  label: "Internal Systems",
                  sub: "ERP, CRM, knowledge base",
                },
              ].map((item, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-background/50 border border-border/50 rounded-lg"
                  >
                    <item.icon className="h-4.5 w-4.5 text-primary/70 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-foreground">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-foreground-muted">
                        {item.sub}
                      </div>
                    </div>
                    {index < 4 && (
                      <div className="text-foreground-muted text-xs">→</div>
                    )}
                  </motion.div>
                  {index < 4 && (
                    <div className="flex justify-center">
                      <div className="w-px h-2 bg-border/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
