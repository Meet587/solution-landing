"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

export function HowItWorksSection() {
  const { deploymentProcess } = landingCopy;

  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {deploymentProcess.headline}
        </motion.h2>
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Connecting line — horizontal on desktop */}
        <div className="absolute top-8 left-[10%] right-[10%] h-px bg-border hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {deploymentProcess.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative text-center lg:text-left"
            >
              {/* Step number */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="w-16 h-16 rounded-full bg-background-surface border border-border flex items-center justify-center font-bold text-lg text-primary relative z-10">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
