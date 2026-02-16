"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  const { cta } = landingCopy;

  return (
    <SectionContainer className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-primary/[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-center max-w-3xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="mb-8">
          {cta.headline}
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <EnterpriseButton variant="primary" size="xl">
            {cta.buttons.primary}
          </EnterpriseButton>
          <EnterpriseButton variant="outline" size="xl" className="group">
            {cta.buttons.secondary}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </EnterpriseButton>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-sm text-foreground-muted">
          {cta.trustLine}
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}
