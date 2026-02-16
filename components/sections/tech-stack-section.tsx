"use client";

import { motion } from "framer-motion";
import { Container, Brain, Database, HardDrive, Network } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerFast } from "@/lib/animations";

const icons = [Container, Brain, Database, HardDrive, Network];

export function TechStackSection() {
  const { techStack } = landingCopy;

  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {techStack.headline}
        </motion.h2>
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {techStack.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-5 sm:p-6 bg-background-surface border border-border rounded-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground mb-1">
                {item.name}
              </div>
              <div className="text-[11px] text-foreground-muted">
                {item.description}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
