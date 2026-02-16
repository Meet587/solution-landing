"use client";

import { motion } from "framer-motion";
import { Scale, Landmark, HeartPulse, Blocks } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { FeatureCard } from "@/components/ui/feature-card";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = [Scale, Landmark, HeartPulse, Blocks];

export function IndustryUseCasesSection() {
  const { industryUseCases } = landingCopy;

  return (
    <SectionContainer variant="surface">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {industryUseCases.headline}
        </motion.h2>
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {industryUseCases.cases.map((item, index) => {
          const Icon = icons[index];
          return (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">
                      {item.industry}
                    </h3>
                    <p className="text-sm text-foreground-secondary mb-2">
                      {item.useCase}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {item.capability}
                    </p>
                  </div>
                </div>
              </FeatureCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
