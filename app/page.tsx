import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ProblemSection } from "@/components/sections/problem-section";
import { ShiftSection } from "@/components/sections/shift-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { EnterpriseReadinessSection } from "@/components/sections/enterprise-readiness-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <ShiftSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ArchitectureSection />
      <ComparisonSection />
      <EnterpriseReadinessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
