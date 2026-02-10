"use client";

import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { EnterpriseButton } from "@/components/ui/enterprise-button";
import { ArrowRight, Check, X, Shield, Database, Bot, Server, Lock, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesContent() {
    const services = [
        {
            id: "01",
            title: "Private AI Agent Development",
            subtitle: "Purpose-built agents for real enterprise work.",
            description: "We design AI agents that reason, retrieve, and act across your internal systems. These are not chatbots. They are operational agents.",
            lists: [
                {
                    title: "What we build",
                    items: [
                        "Internal knowledge agents",
                        "Research and analysis agents",
                        "Document intelligence agents",
                        "Workflow automation agents",
                        "Department-specific copilots"
                    ]
                },
                {
                    title: "How they work",
                    items: [
                        "Trained on your internal data",
                        "Grounded using retrieval systems",
                        "Orchestrated with multi-step logic",
                        "Integrated with your tools and APIs"
                    ]
                }
            ]
        },
        {
            id: "02",
            title: "Enterprise Data Grounding & RAG Systems",
            subtitle: "Your data becomes the intelligence layer.",
            description: "AI is only as good as what it knows. We turn your enterprise data into a reliable knowledge source for agents.",
            lists: [
                {
                    title: "We work with",
                    items: [
                        "Internal documents (PDFs, docs, wikis)",
                        "Databases and data warehouses",
                        "Internal APIs and services",
                        "Historical records and logs"
                    ]
                },
                {
                    title: "What we deliver",
                    items: [
                        "Secure data ingestion pipelines",
                        "Vector-based retrieval systems",
                        "Structured and unstructured grounding",
                        "Hallucination-resistant architectures"
                    ]
                }
            ]
        },
        {
            id: "03",
            title: "Model Adaptation & Fine-Tuning",
            subtitle: "Specialization without data leakage.",
            description: "We adapt foundation models to your business context using efficient fine-tuning techniques.",
            lists: [
                {
                    title: "Capabilities",
                    items: [
                        "Domain-specific adaptation",
                        "Role-based specialization",
                        "Department-level intelligence",
                        "Consistent tone and behavior"
                    ]
                },
                {
                    title: "Key principle",
                    items: [
                        "Your data never trains a shared model",
                        "Your intelligence remains private"
                    ]
                }
            ]
        },
        {
            id: "04",
            title: "Agent Orchestration & Workflow Automation",
            subtitle: "AI that executes, not just responds.",
            description: "We design agent systems that handle multi-step workflows across tools and teams.",
            lists: [
                {
                    title: "Examples",
                    items: [
                        "Research → analysis → report generation",
                        "Document review → validation → escalation",
                        "Query → retrieval → synthesis → action"
                    ]
                },
                {
                    title: "Capabilities",
                    items: [
                        "Use tools & Call APIs",
                        "Maintain memory",
                        "Pause and resume tasks"
                    ]
                }
            ]
        },
        {
            id: "05",
            title: "Private Deployment & Infrastructure",
            subtitle: "Your environment. Your rules.",
            description: "All systems are deployed on infrastructure you control. If the system cannot run privately, we do not ship it.",
            lists: [
                {
                    title: "Deployment options",
                    items: [
                        "On-prem data centers",
                        "Private cloud (VPC)",
                        "Air-gapped environments"
                    ]
                },
                {
                    title: "Infrastructure principles",
                    items: [
                        "No outbound data flow",
                        "No public model dependency",
                        "Deterministic behavior",
                        "Predictable cost structure"
                    ]
                }
            ]
        },
        {
            id: "06",
            title: "Security, Privacy & Governance by Design",
            subtitle: "Privacy is architecture, not policy.",
            description: "We design systems where data protection is enforced by infrastructure. Compliance is not bolted on later. It is part of the system design.",
            lists: [
                {
                    title: "Built-in controls",
                    items: [
                        "Access control by role",
                        "Full audit logs",
                        "Model version locking",
                        "Clear data lineage"
                    ]
                }
            ]
        },
        {
            id: "07",
            title: "Integration with Enterprise Systems",
            subtitle: "AI that fits into your stack.",
            description: "We integrate agents with your existing tools and workflows. The agent works where your teams already work.",
            lists: [
                {
                    title: "Common integrations",
                    items: [
                        "Internal APIs",
                        "Databases",
                        "CRMs and ERPs",
                        "Knowledge bases",
                        "Custom internal systems"
                    ]
                }
            ]
        }
    ];

    const engagementSteps = [
        { num: "01", title: "Discovery & Scoping", desc: "We define the use case, data sources, and success criteria." },
        { num: "02", title: "Architecture Design", desc: "We design the agent system, data flows, and deployment model." },
        { num: "03", title: "Build & Integration", desc: "We implement agents, pipelines, and orchestration logic." },
        { num: "04", title: "Private Deployment", desc: "We deploy inside your environment and validate behavior." },
        { num: "05", title: "Iteration & Hardening", desc: "We refine accuracy, performance, and reliability." },
    ];

    return (
        <div className="flex flex-col w-full overflow-x-hidden">

            {/* Hero Section */}
            <Section
                className="pt-32 pb-12 min-h-[80vh] flex flex-col justify-center relative overflow-hidden"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                            Private AI Agents <br />
                            <span className="text-primary">for Enterprises</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-lg"
                        >
                            We design, build, and deploy private AI agents that run entirely on your infrastructure and are trained exclusively on your data.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-3"
                        >
                            {[
                                "No shared models.",
                                "No public inference.",
                                "No vendor lock-in."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-lg font-medium text-foreground">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ))}
                            <p className="pt-2 text-lg font-semibold text-primary">This is AI as owned infrastructure.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-4 flex gap-4"
                        >
                            <EnterpriseButton size="lg" className="px-8">
                                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                            </EnterpriseButton>
                        </motion.div>
                    </div>

                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative w-full aspect-square max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
                            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                                <FeatureCard className="col-span-2 bg-white/80 backdrop-blur">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Bot className="h-6 w-6 text-primary" />
                                        <span className="font-semibold">Private Agent</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-muted rounded w-3/4" />
                                        <div className="h-2 bg-muted rounded w-1/2" />
                                    </div>
                                </FeatureCard>
                                <FeatureCard className="bg-white/80 backdrop-blur translate-y-8">
                                    <Server className="h-6 w-6 text-primary mb-3" />
                                    <span className="font-semibold block">On-Prem</span>
                                    <span className="text-xs text-muted-foreground">Full Control</span>
                                </FeatureCard>
                                <FeatureCard className="bg-white/80 backdrop-blur -translate-y-4">
                                    <Lock className="h-6 w-6 text-primary mb-3" />
                                    <span className="font-semibold block">Secure</span>
                                    <span className="text-xs text-muted-foreground">No Leakage</span>
                                </FeatureCard>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Value Prop */}
            <Section className="bg-muted/30">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold">What We Do</h2>
                    <p className="text-2xl font-light leading-relaxed text-foreground">
                        We help enterprises move from <span className="text-muted-foreground line-through decoration-primary/50">AI experiments</span> to <span className="font-semibold text-primary">production-grade agent systems</span>.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto pt-8">
                        <div className="border-l-2 border-primary pl-6">
                            <h3 className="font-bold text-lg">You keep control.</h3>
                            <p className="text-muted-foreground">Your data, your infrastructure, your models.</p>
                        </div>
                        <div className="border-l-2 border-primary pl-6">
                            <h3 className="font-bold text-lg">We build the system.</h3>
                            <p className="text-muted-foreground">Architecture, data, models, and deployment—end to end.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Services */}
            <Section id="core-services">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Core Services</h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="space-y-8">
                    {services.map((service, index) => (
                        <FeatureCard key={index} className="p-0 overflow-hidden border-border/50 group hover:border-primary/30 transition-all duration-300">
                            <div className="grid lg:grid-cols-12 gap-0">
                                <div className="lg:col-span-4 p-8 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-between">
                                    <div>
                                        <span className="text-6xl font-bold text-primary/10 select-none block mb-4">{service.id}</span>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="font-medium text-foreground">{service.subtitle}</p>
                                    </div>
                                    <p className="mt-6 text-muted-foreground">{service.description}</p>
                                </div>
                                <div className="lg:col-span-8 p-8 grid sm:grid-cols-2 gap-8">
                                    {service.lists.map((list, lIdx) => (
                                        <div key={lIdx}>
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{list.title}</h4>
                                            <ul className="space-y-3">
                                                {list.items.map((item, iIdx) => (
                                                    <li key={iIdx} className="flex items-start gap-2 text-sm md:text-base">
                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </Section>

            {/* Engagement Model */}
            <Section className="bg-primary/5">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Engagement Model</h2>
                    <p className="text-muted-foreground text-lg">Structured. Transparent. Outcome-driven.</p>
                </div>

                <div className="grid md:grid-cols-5 gap-4 relative">
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border -z-10" />
                    {engagementSteps.map((step, idx) => (
                        <div key={idx} className="relative pt-4 md:pt-0">
                            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-bold mx-auto mb-6 z-10 relative">
                                {step.num}
                            </div>
                            <div className="md:hidden text-primary font-bold text-xl mb-2">{step.num}</div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Audience */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Who This Is For</h2>
                        <ul className="space-y-4">
                            {[
                                "Enterprises handling sensitive data",
                                "Teams that need predictable AI costs",
                                "Organizations avoiding vendor lock-in",
                                "CTO-led, security-conscious companies"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg">
                                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="pt-4 font-semibold">If AI is becoming part of your core operations, this is for you.</p>
                    </div>

                    <div className="space-y-6 p-8 bg-muted/20 rounded-2xl border border-dashed border-border">
                        <h2 className="text-3xl font-bold opacity-80">Who This Is Not For</h2>
                        <ul className="space-y-4">
                            {[
                                "Consumer chatbots",
                                "Public SaaS AI wrappers",
                                "Quick demos without ownership",
                                "Token-based AI experiments"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg opacity-70">
                                    <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                                        <X className="h-4 w-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="pt-4 font-medium opacity-60">We build systems meant to last.</p>
                    </div>
                </div>
            </Section>

            {/* Why */}
            <Section className="bg-secondary text-secondary-foreground">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Why This Approach Works</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Layers, title: "Models are replaceable", desc: "Don't lock yourself into one provider." },
                        { icon: Database, title: "Data is the moat", desc: "Your proprietary data is your competitive advantage." },
                        { icon: Shield, title: "Architecture defines outcomes", desc: "A robust system beats a 'perfect' model." }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-secondary-foreground/5 rounded-lg border border-white/10">
                            <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-secondary-foreground/70 sm:min-h-[3em]">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 text-xl font-medium text-primary">
                    Owning your AI stack gives you leverage, safety, and control.
                </div>
            </Section>

            {/* CTA */}
            <Section className="py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">Build AI You Actually Own.</h2>
                    <p className="text-xl text-muted-foreground">
                        If you are ready to deploy AI agents that operate fully inside your infrastructure, we should talk.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <EnterpriseButton size="lg" className="px-8 text-lg">
                            Talk to an Architect <ArrowRight className="ml-2 h-5 w-5" />
                        </EnterpriseButton>
                        <EnterpriseButton variant="outline" size="lg" className="px-8 text-lg">
                            Request Access
                        </EnterpriseButton>
                    </div>
                </div>
            </Section>

        </div>
    );
}
