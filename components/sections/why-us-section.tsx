"use client";

import { motion } from "framer-motion";
import { Layers, Fingerprint, Headphones } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { FeatureCard } from "@/components/ui/feature-card";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = [Layers, Fingerprint, Headphones];

export function WhyUsSection() {
  const { whyUs } = landingCopy;

  return (
    <SectionContainer variant="surface">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {whyUs.headline}
        </motion.h2>
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {whyUs.cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard className="h-full text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {card.description}
                </p>
              </FeatureCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
