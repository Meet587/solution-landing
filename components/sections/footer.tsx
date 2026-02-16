import Link from "next/link";
import { landingCopy } from "@/content/landing-copy";

export function Footer() {
  const { footer } = landingCopy;

  return (
    <footer className="w-full bg-background-surface border-t border-border">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md accent-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <span className="text-base font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                {footer.company.name}
              </span>
            </div>
            <p className="text-sm text-foreground-muted">
              {footer.company.tagline}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {footer.links.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footer.links.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footer.links.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-border pt-8 mb-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footer.trustSignals.map((signal, index) => (
              <div
                key={index}
                className="text-xs text-foreground-muted font-medium uppercase tracking-wider"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-foreground-muted">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
