import type { Metadata } from "next";
import { Mail, Shield, AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { EnterpriseButton } from "@/components/ui/enterprise-button";

export const metadata: Metadata = {
    title: "Contact an Architect | Enterprise AI Infrastructure",
    description: "Discuss your private AI deployment, data security, and architectural needs with our team.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <div className="section-container max-w-5xl">

                {/* Section 1: Headline */}
                <div className="mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Talk to an Architect.
                    </h1>
                    <p className="text-xl text-foreground-secondary max-w-2xl leading-relaxed">
                        Discuss your use case, deployment model, and data environment with our team.
                        <span className="block mt-2 text-foreground-muted text-lg">
                            This is a technical conversation.
                        </span>
                    </p>
                </div>

                {/* Section 2: What to Expect */}
                <div className="grid md:grid-cols-12 gap-12 mb-24 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="md:col-span-4 lg:col-span-3">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4 border-t border-border pt-4">
                            What to Expect
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9">
                        <div className="bg-background-soft border border-border rounded-lg p-8">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="w-5 h-5 text-primary" />
                                        <h3 className="font-semibold text-foreground">No Sales Scripts</h3>
                                    </div>
                                    <p className="text-sm text-foreground-secondary">
                                        We skip qualification questions and generic demos. You'll speak directly with solutions engineers who understand infrastructure.
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <AlertCircle className="w-5 h-5 text-primary" />
                                        <h3 className="font-semibold text-foreground">Feasibility Focus</h3>
                                    </div>
                                    <p className="text-sm text-foreground-secondary">
                                        We focus on architecture and technical feasibility first. This call is for serious AI deployments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 & 4: Qualification Criteria */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 animate-fade-in-up" style={{ animationDelay: '200ms' }}>

                    {/* Section 3: When You Should Contact Us */}
                    <div>
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary inline-block"></span>
                            When to contact us
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "You need AI agents running privately",
                                "You cannot send data to public models",
                                "You want predictable AI costs",
                                "You are moving from prototype to production"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start group">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground-secondary group-hover:text-foreground transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 4: When You Should Not */}
                    <div className="opacity-80">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground-muted">
                            <span className="w-8 h-px bg-border inline-block"></span>
                            When NOT to contact us
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Consumer chatbots",
                                "Public SaaS experiments",
                                "Token-based AI tools",
                                "One-off demos"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start group">
                                    <XCircle className="w-5 h-5 text-foreground-muted shrink-0 mt-0.5" />
                                    <span className="text-foreground-muted group-hover:text-foreground-secondary transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Section 5: Contact Form Context */}
                <div className="max-w-3xl border-t border-border pt-16 mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-2">Start the Conversation</h2>
                        <p className="text-foreground-secondary">
                            Tell us about your architectural needs. Your information stays private.
                        </p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-foreground">Role</label>
                                <input
                                    type="text"
                                    id="role"
                                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder="CTO, VP of Engineering"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                            <input
                                type="text"
                                id="company"
                                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                placeholder="Acme Corp"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="usecase" className="text-sm font-medium text-foreground">Use Case Summary</label>
                            <textarea
                                id="usecase"
                                rows={4}
                                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                placeholder="We are looking to deploy internal agents for..."
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-foreground block">Deployment Preference</label>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <label className="flex items-center gap-3 p-4 border border-input rounded-md cursor-pointer hover:border-primary/50 transition-colors bg-background-soft">
                                    <input type="radio" name="deployment" className="accent-primary w-4 h-4" />
                                    <span className="text-sm">On-Premises</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-input rounded-md cursor-pointer hover:border-primary/50 transition-colors bg-background-soft">
                                    <input type="radio" name="deployment" className="accent-primary w-4 h-4" />
                                    <span className="text-sm">Private Cloud</span>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4">
                            <EnterpriseButton size="lg" className="w-full sm:w-auto">
                                Request Architecture Review
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </EnterpriseButton>
                        </div>
                    </form>
                </div>

                {/* Section 6 & 7: Alternative & Closing */}
                <div className="grid md:grid-cols-2 gap-12 border-t border-border pt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    {/* Alternative Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4">
                            Direct Inquiries
                        </h3>
                        <a href="mailto:enterprise@meet.ai" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                            <div className="p-2 bg-background-soft rounded-md group-hover:bg-primary/10 transition-colors">
                                <Mail className="w-5 h-5 text-foreground-secondary group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-medium">enterprise@meet.ai</span>
                        </a>
                        <p className="mt-4 text-sm text-foreground-muted">
                            For existing enterprise partners, please contact your dedicated solutions architect directly.
                        </p>
                    </div>

                    {/* Closing Line */}
                    <div className="md:text-right">
                        <h3 className="text-xl font-medium text-foreground mb-2">
                            If AI is becoming part of your business, ownership matters.
                        </h3>
                        <p className="text-primary font-semibold text-lg">
                            Let’s design it properly.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
