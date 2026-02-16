"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  UserCheck,
  KeyRound,
  FileSearch,
  CheckCircle2,
} from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const securityIcons = [Shield, Lock, UserCheck, KeyRound, FileSearch];

export function SecuritySection() {
  const { security } = landingCopy;

  return (
    <SectionContainer variant="surface" className="relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2>{security.headline}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left — Security Bullets */}
          <motion.div variants={fadeInUp} className="space-y-5">
            {security.left.map((item, index) => {
              const Icon = securityIcons[index];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background/40 border border-border/50 rounded-lg transition-all duration-300 hover:border-primary/20"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {item}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Right — Compliance Badges */}
          <motion.div variants={fadeInUp} className="space-y-5">
            {security.right.map((badge, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-background/40 border border-border/50 rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-foreground mb-1">
                    {badge.label}
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    {badge.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
