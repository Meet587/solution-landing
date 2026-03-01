import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { IndustryUseCasesSection } from "@/components/sections/industry-use-cases-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IndustryUseCasesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TechStackSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
