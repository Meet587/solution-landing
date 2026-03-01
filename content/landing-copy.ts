/**
 * Centralized copy for the enterprise landing page
 * Aligned with WIREFRAME.md section structure
 */

export const landingCopy = {
  metadata: {
    title: "Private AI Infrastructure | Enterprise AI Agents",
    description:
      "Private AI agents deployed on your infrastructure. No shared models. No data leakage. Full control. Built for regulated enterprises.",
  },

  hero: {
    label: "AI Infrastructure for Regulated Enterprises",
    headline: "Private AI Agents. Your Data. Your Infrastructure.",
    subline:
      "Deploy AI agents trained exclusively on your enterprise data — fully private, fully controlled, running inside your environment.",
    cta: {
      primary: "Schedule Architecture Call",
      secondary: "View Architecture",
    },
    trustLine: "Runs in VPC • On-Prem • Private Cloud",
  },

  problem: {
    headline: "Public AI Was Not Built for Production Systems.",
    cards: [
      {
        title: "Data Exposure Risk",
        description:
          "Every API call sends proprietary data to external servers. Your competitive advantage leaves your network perimeter.",
      },
      {
        title: "Compliance Limitations",
        description:
          "GDPR, HIPAA, SOC 2 demand data residency and auditability. Public APIs make compliance an ongoing challenge.",
      },
      {
        title: "Unpredictable Cost Scaling",
        description:
          "Variable per-token pricing creates budget uncertainty. As AI becomes core to operations, costs compound exponentially.",
      },
    ],
  },

  solution: {
    headline: "Private AI. Fully Controlled.",
    description:
      "We build AI infrastructure that runs entirely inside your environment. No external dependencies. No shared compute. Complete architectural control.",
    bullets: [
      "Runs inside your VPC",
      "Dedicated compute resources",
      "Data never leaves your boundary",
      "Full audit control",
    ],
  },

  industryUseCases: {
    headline: "Built for Regulated Industries",
    cases: [
      {
        industry: "Legal",
        useCase: "Private document intelligence for case research.",
        capability: "Secure contract analysis & precedent retrieval",
      },
      {
        industry: "Financial Services",
        useCase: "Secure AI copilots for internal operations.",
        capability: "Compliant risk analysis & regulatory reporting",
      },
      {
        industry: "Healthcare",
        useCase: "Protected patient data analysis.",
        capability: "HIPAA-compliant clinical decision support",
      },
      {
        industry: "Enterprise SaaS",
        useCase: "Internal knowledge automation.",
        capability: "Private support agents & workflow automation",
      },
    ],
  },

  deploymentProcess: {
    headline: "Deployment Process",
    steps: [
      {
        number: "01",
        title: "Architecture Design",
        description:
          "We assess your data landscape, define agent scope, and design the infrastructure architecture tailored to your environment.",
      },
      {
        number: "02",
        title: "Secure Environment Setup",
        description:
          "Deploy compute, storage, and networking within your VPC or on-prem infrastructure with enterprise security controls.",
      },
      {
        number: "03",
        title: "Agent Training & Integration",
        description:
          "Train agents on your private data, integrate with internal systems, and orchestrate multi-step workflows.",
      },
      {
        number: "04",
        title: "Production Rollout",
        description:
          "Deploy to production with CI/CD pipelines, monitoring, and observability. Full control from day one.",
      },
    ],
  },

  security: {
    headline: "Security First.",
    left: [
      "VPC / On-Prem Deployment",
      "Data Isolation",
      "Role-Based Access Control",
      "Encryption at Rest & Transit",
      "Audit Logging",
    ],
    right: [
      { label: "SOC2", description: "SOC2-ready architecture" },
      { label: "GDPR", description: "GDPR alignment" },
      { label: "Custom", description: "Custom policy integration" },
    ],
  },

  techStack: {
    headline: "Built on Proven Infrastructure",
    items: [
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Private LLM", description: "Self-hosted model inference" },
      { name: "Vector DB", description: "Embedding storage & retrieval" },
      { name: "Secure Storage", description: "Encrypted data at rest" },
      { name: "API Gateway", description: "Controlled access layer" },
    ],
  },

  whyUs: {
    headline: "Enterprise AI Expertise",
    cards: [
      {
        title: "Infrastructure-First Approach",
        description: "We design for production. Architecture before features. Security before convenience.",
      },
      {
        title: "Custom Architecture",
        description: "No shared environments. Every deployment is purpose-built for your specific requirements.",
      },
      {
        title: "Ongoing Optimization",
        description: "Long-term support model. We refine performance, update models, and scale with your growth.",
      },
    ],
  },

  cta: {
    headline: "Deploy Private AI with Confidence.",
    buttons: {
      primary: "Schedule Architecture Call",
      secondary: "Request Technical Brief",
    },
    trustLine: "Mid-market and regulated enterprise ready.",
  },

  footer: {
    company: {
      name: "PrivateAI",
      tagline: "Enterprise AI Infrastructure",
    },
    links: {
      product: [
        { label: "Architecture", href: "#" },
        { label: "Security", href: "#" },
        { label: "Deployment", href: "#" },
      ],
      company: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
      resources: [
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    trustSignals: ["SOC 2 Compliant", "Enterprise Support", "99.9% Uptime SLA"],
    copyright: "© 2026 PrivateAI. All rights reserved.",
  },
};
