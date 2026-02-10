import Link from "next/link";
import { Shield, Clock, Headphones } from "lucide-react";

const links = [
    { label: "About", href: "#" },
    { label: "Architecture", href: "#" },
    { label: "Security", href: "#" },
    { label: "Contact", href: "#" },
];

const trustSignals = [
    { icon: Shield, text: "SOC 2 Compliant" },
    { icon: Headphones, text: "Enterprise Support" },
    { icon: Clock, text: "99.9% Uptime" },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-secondary/20">
            <div className="section-container py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-2 text-lg font-bold gradient-text">AI Infrastructure</h3>
                        <p className="text-sm text-muted-foreground">
                            Hyper-personalized AI agents for enterprise.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold">Company</h4>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust Signals */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold">Trust & Security</h4>
                        <ul className="space-y-2">
                            {trustSignals.map((signal) => (
                                <li key={signal.text} className="flex items-center gap-2">
                                    <signal.icon className="h-4 w-4 text-accent" />
                                    <span className="text-sm text-muted-foreground">{signal.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-border/30 pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} AI Infrastructure. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
