
import React from 'react';
import { Shield, Database, Server, Smartphone, Lock, GitBranch, Eye, Binary, Building2, Terminal, Cpu, Network } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">

            {/* Section 1 - Headline */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
                        We Build AI That<br />
                        Enterprises Can Own.
                    </h1>
                    <p className="text-xl sm:text-2xl text-foreground-secondary leading-relaxed max-w-3xl">
                        Our mission is to help organizations deploy AI systems that are private by design, predictable in cost, and built to operate inside real enterprise environments.
                    </p>
                </div>
            </section>

            {/* Section 2 - Our Belief */}
            <section className="py-20 lg:py-32 bg-muted/30 border-y border-border/50">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        <div className="space-y-4">
                            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                                <Server className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Infrastructure Must Be Owned</h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                As AI becomes the operating system of the enterprise, relying on rented, public models creates an unacceptable dependency. Core infrastructure cannot be a subscription service.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                                <Database className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Data Is The Intelligence</h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                Your proprietary data is the source of your competitive advantage. It should never be used to train a competitor's model or exist in a shared environment.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Control Is Non-Negotiable</h3>
                            <p className="text-foreground-secondary leading-relaxed">
                                Public AI APIs shift unpredictably. Production operations require stability, version control, and absolute governance over how models behave.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Why We Exist */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Bridging the Gap Between Ambition and Reality</h2>
                        <div className="prose prose-lg text-foreground-secondary space-y-6">
                            <p>
                                Every enterprise today acknowledges that AI will reshape their industry. However, the path to adoption is paralyzed by risk. Public AI services introduce privacy nightmares and data leakage concerns that block serious deployment.
                            </p>
                            <p>
                                Conversely, building everything in-house ("DIY AI") is deceptively complex, fragile, and often results in stalled pilots that never reach production.
                            </p>
                            <p>
                                We exist to solve this specific paradox. We exist to make <strong className="text-foreground font-semibold">private, production-ready AI agents</strong> practical, scalable, and safe for real organizations.
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted p-8 lg:p-12 rounded-2xl border border-border">
                        <h3 className="text-2xl font-bold mb-8">The Reality Gap</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-destructive/10 text-destructive flex-shrink-0 flex items-center justify-center mt-1">
                                    <span className="text-xs font-bold">✕</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Public AI APIs</h4>
                                    <p className="text-sm text-foreground-secondary mt-1">Unacceptable data risk, unpredictable costs, shared resources.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-destructive/10 text-destructive flex-shrink-0 flex items-center justify-center mt-1">
                                    <span className="text-xs font-bold">✕</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">In-House Builds</h4>
                                    <p className="text-sm text-foreground-secondary mt-1">High maintenance, fragility, talent scarcity, slow time-to-value.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center mt-1">
                                    <span className="text-xs font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Managed Private AI</h4>
                                    <p className="text-sm text-foreground-secondary mt-1">Sovereign, secure, maintained, and production-ready.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 4 - What Makes Us Different */}
            <section className="py-20 lg:py-32 bg-foreground text-background">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-16">Not Tools. Systems.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        <div>
                            <Lock className="h-8 w-8 mb-6 opacity-80" />
                            <h3 className="text-xl font-semibold mb-3">Private By Default</h3>
                            <p className="text-background-muted leading-relaxed opacity-80">
                                We don't "add" privacy later. We architect for it. Your data typically never leaves your environment, and if it does, it stays within single-tenant, isolated infrastructure.
                            </p>
                        </div>
                        <div>
                            <Cpu className="h-8 w-8 mb-6 opacity-80" />
                            <h3 className="text-xl font-semibold mb-3">No Shared Models</h3>
                            <p className="text-background-muted leading-relaxed opacity-80">
                                You never compete for compute. Your models are yours alone, fine-tuned on your data, without the risk of bleeding knowledge into a competitor's query.
                            </p>
                        </div>
                        <div>
                            <Terminal className="h-8 w-8 mb-6 opacity-80" />
                            <h3 className="text-xl font-semibold mb-3">Infrastructure-First</h3>
                            <p className="text-background-muted leading-relaxed opacity-80">
                                We don't just write prompts. We build the pipelines, the vector stores, and the evaluation harnesses that keep agents reliable over years, not just during demos.
                            </p>
                        </div>
                        <div>
                            <GitBranch className="h-8 w-8 mb-6 opacity-80" />
                            <h3 className="text-xl font-semibold mb-3">No Token Traps</h3>
                            <p className="text-background-muted leading-relaxed opacity-80">
                                SaaS AI models penalize you for usage. Our systems are built for transparent, predictable costs that don't balloon when you scale up production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - Our Approach */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Engineering Principles</h2>
                    <p className="text-xl text-foreground-secondary max-w-2xl">
                        Our approach protects enterprises over the long term by prioritizing architecture over fleeting features.
                    </p>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            title: "Architecture Before Features",
                            description: "We solve for the hard problems first: latency, throughput, and security. A beautiful interface is useless if the underlying system leaks data or fails under load.",
                            icon: Network
                        },
                        {
                            title: "Privacy Enforced by Design",
                            description: "Privacy isn't a policy; it's code. We implement air-gapping, PII redaction, and RBAC (Role-Based Access Control) at the deepest layers of the stack.",
                            icon: Lock
                        },
                        {
                            title: "Deterministic & Auditable",
                            description: "Enterprise legal teams cannot accept 'black boxes.' We build systems where every action is logged, traceable, and capable of human review.",
                            icon: Eye
                        },
                        {
                            title: "Model-Agnostic Strategy",
                            description: "The best model today may be obsolete tomorrow. Our architecture allows you to swap underlying LLMs without rebuilding your entire application logic.",
                            icon: Binary
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start border-t border-border pt-8">
                            <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-foreground-secondary leading-relaxed max-w-3xl">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6 - Who We Work With */}
            <section className="py-20 lg:py-32 bg-muted/50">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">Who We Work With</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                            <Building2 className="h-10 w-10 text-foreground-secondary mb-6" />
                            <h3 className="text-lg font-bold mb-2">Mid-Market Enterprises</h3>
                            <p className="text-foreground-secondary">
                                Organizations large enough to have complex data but agile enough to deploy competitive advantages quickly.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                            <Terminal className="h-10 w-10 text-foreground-secondary mb-6" />
                            <h3 className="text-lg font-bold mb-2">CTO-Led Teams</h3>
                            <p className="text-foreground-secondary">
                                Technical interaction is key. We work best when partnering with engineering leaders who understand the stakes.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                            <Lock className="h-10 w-10 text-foreground-secondary mb-6" />
                            <h3 className="text-lg font-bold mb-2">Security-Conscious</h3>
                            <p className="text-foreground-secondary">
                                Firms in healthcare, finance, or legal sectors where data sensitivity is the primary constraint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7 - Long Term Vision */}
            <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">The Next Decade</h2>
                        <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                            We are not building for the next hype cycle. We are building for a future where <strong>AI agents become the primary form of digital labor</strong>.
                        </p>
                        <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                            In this future, the organizations that win will be those that own their intelligence, rather than renting it. We envision a standard where private AI infrastructure is as common and essential as your email server or customer database.
                        </p>
                    </div>
                    <div className="relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-border flex items-center justify-center">
                        <div className="text-center p-8">
                            <span className="block text-5xl font-bold text-foreground/20 mb-4">2030+</span>
                            <span className="text-foreground/40 font-medium">Infrastructure for the Agentic Era</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 - Closing */}
            <section className="py-24 lg:py-40 text-center px-6">
                <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-foreground max-w-4xl mx-auto">
                    AI should strengthen your organization,<br /> not expose it.
                </h2>
                <p className="text-xl text-foreground-secondary mb-12">
                    We build AI that stays where it belongs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg h-12 px-8" asChild>
                        <Link href="#contact">Contact Our Team</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-lg h-12 px-8" asChild>
                        <Link href="/services">View Our Services</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
