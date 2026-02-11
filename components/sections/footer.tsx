import { SectionContainer } from "@/components/ui/section-container";
import { landingCopy } from "@/content/landing-copy";

export function Footer() {
    const { footer } = landingCopy;

    return (
        <SectionContainer variant="muted" className="border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Company Info */}
                <div className="md:col-span-1">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                        {footer.company.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary">
                        {footer.company.tagline}
                    </p>
                </div>

                {/* Product Links */}
                {/* <div>
                    <h4 className="font-semibold text-foreground mb-4">Product</h4>
                    <ul className="space-y-3">
                        {footer.links.product.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                {/* Company Links */}
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Company</h4>
                    <ul className="space-y-3">
                        {footer.links.company.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources Links */}
                {/* <div>
                    <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                    <ul className="space-y-3">
                        {footer.links.resources.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>

            {/* Trust Signals */}
            <div className="border-t border-border pt-8 mb-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {footer.trustSignals.map((signal, index) => (
                        <div
                            key={index}
                            className="text-sm text-foreground-secondary font-medium"
                        >
                            {signal}
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
                <p className="text-sm text-foreground-muted">{footer.copyright}</p>
            </div>
        </SectionContainer>
    );
}
