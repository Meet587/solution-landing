"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Database,
  Shield,
  Cpu,
  Workflow,
} from "lucide-react";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import { landingCopy } from "@/content/landing-copy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const { hero } = landingCopy;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative section-container w-full pt-32 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-6">
                {hero.label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="mb-5 max-w-[600px]">
              {hero.headline}
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-foreground-secondary mb-8 max-w-[560px] leading-relaxed"
            >
              {hero.subline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <EnterpriseButton variant="primary" size="lg">
                {hero.cta.primary}
              </EnterpriseButton>
              <EnterpriseButton
                variant="ghost"
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById("solution")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {hero.cta.secondary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </EnterpriseButton>
            </motion.div>

            {/* Micro trust line */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm text-foreground-muted tracking-wide"
            >
              {hero.trustLine}
            </motion.p>
          </motion.div>

          {/* Right Column — Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-background-surface border border-border rounded-[12px] p-8 overflow-hidden">
              {/* "Your Infrastructure" label */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground-muted font-medium">
                  Your Infrastructure
                </span>
                <span className="text-[10px] text-primary/60 font-mono">
                  PRIVATE BOUNDARY
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {/* Data Sources */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 p-3.5 bg-background/60 border border-border/60 rounded-lg"
                >
                  <Database className="h-5 w-5 text-primary/70 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Data Sources
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      Documents, DBs, APIs
                    </div>
                  </div>
                </motion.div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* AI Agent Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex items-center gap-3 p-3.5 bg-primary/5 border border-primary/20 rounded-lg"
                >
                  <Cpu className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      AI Agent Layer
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      Reasoning, retrieval, execution
                    </div>
                  </div>
                </motion.div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Orchestration */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-3 p-3.5 bg-background/60 border border-border/60 rounded-lg"
                >
                  <Workflow className="h-5 w-5 text-primary/70 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Orchestration
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      Workflows, tool access, memory
                    </div>
                  </div>
                </motion.div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Internal Systems */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 }}
                  className="flex items-center gap-3 p-3.5 bg-background/60 border border-border/60 rounded-lg"
                >
                  <Server className="h-5 w-5 text-primary/70 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Internal Systems
                    </div>
                    <div className="text-[11px] text-foreground-muted">
                      CRM, ERP, knowledge base
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Shield badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-5 flex items-center justify-center gap-2 text-[11px] text-primary/70 font-medium"
              >
                <Shield className="h-3.5 w-3.5" />
                <span>Zero External Transmission</span>
              </motion.div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-[12px] ring-1 ring-inset ring-primary/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
