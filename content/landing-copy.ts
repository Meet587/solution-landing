/**
 * Centralized copy for the enterprise landing page
 * All long-form content is managed here for easy updates
 */

export const landingCopy = {
  metadata: {
    title: "Private AI Infrastructure | Hyper-Personalized AI Agents",
    description:
      "Build AI agents trained on your private enterprise data, deployed on your infrastructure. No shared models. No data leakage. Full control.",
  },

  hero: {
    headline: "Private AI Agents. Built on Your Data. Running on Your Infrastructure.",
    subheadline:
      "Design, train, and deploy hyper-personalized AI agents using your enterprise data—fully private, fully controlled, and deployed inside your environment.",
    body: "Public AI platforms were built for demos, not core systems. When AI becomes part of your operations, your data, cost model, and compliance posture cannot depend on shared infrastructure. We help enterprises build AI agents that stay inside their walls and operate on their terms.",
    cta: {
      primary: "Request Access",
      secondary: "View Architecture",
    },
  },

  trustStrip: [
    "Deployed on-prem or private cloud",
    "No shared models",
    "Predictable costs",
    "Enterprise security by default",
    "Built for long-term ownership",
  ],

  problem: {
    headline: "The Problem with Public AI",
    subheadline: "When AI moves from experiment to production, shared infrastructure breaks down.",
    issues: [
      {
        title: "Data Leaving the Enterprise",
        description:
          "Every API call to a public provider sends your proprietary data across the internet. Even with encryption, you're trusting third parties with your competitive advantage.",
      },
      {
        title: "Token-Based Pricing Spirals",
        description:
          "Variable costs based on usage create unpredictable budgets. As AI becomes core to operations, these costs compound exponentially.",
      },
      {
        title: "Latency Unpredictability",
        description:
          "Network calls to external APIs introduce latency. For real-time workflows, milliseconds matter—and you have no control.",
      },
      {
        title: "Compliance and Audit Gaps",
        description:
          "GDPR, HIPAA, SOC 2—regulatory frameworks demand data residency and auditability. Public APIs complicate compliance.",
      },
      {
        title: "Vendor Lock-In Risk",
        description:
          "When your business logic depends on a provider's API, you're at their mercy for pricing changes, feature deprecation, and availability.",
      },
      {
        title: "Inability to Specialize Deeply",
        description:
          "Generic models can't learn your specific processes, terminology, or workflows without sending that sensitive context to external servers.",
      },
    ],
  },

  shift: {
    headline: "The Shift: From AI Tools to AI Infrastructure",
    subheadline: "AI is no longer an app. It's a core system that enterprises must own.",
    paragraphs: [
      "The market has matured beyond generative novelty. Organizations now face 'Day 2' challenges: scaling AI beyond prototypes, governing its outputs, and integrating it into mission-critical workflows.",
      "Just as you wouldn't rely on a third party to host your database or DNS, enterprises increasingly view AI as infrastructure that must reside within their control. Data is the moat. Models are becoming commodities. **Architecture determines outcomes.**",
      "This shift requires treating AI agents as first-class infrastructure: versioned, tested, deployed with CI/CD, and monitored like any production system. Private AI infrastructure enables this transformation.",
    ],
  },

  solution: {
    headline: "Your AI. Your Data. Your Infrastructure.",
    subheadline: "This is not SaaS AI. This is private AI infrastructure.",
    benefits: [
      {
        title: "Trained on Your Data Only",
        description:
          "AI agents learn exclusively from your documents, databases, APIs, and internal knowledge bases. Training happens within your environment. No data is sent to external servers. No shared learning pools. Your intelligence stays yours.",
      },
      {
        title: "Deployed on Your Servers",
        description:
          "On-premises, private VPC, or air-gapped environments. You choose the infrastructure. You control access. You define security policies. Inference happens locally—zero external dependencies.",
      },
      {
        title: "Hyper-Personalized per Team",
        description:
          "Operations, support, sales, engineering—each department gets agents trained on their specific workflows, terminology, and processes. Not generic. Not one-size-fits-all. Purpose-built for your organization.",
      },
      {
        title: "Enterprise-Ready from Day One",
        description:
          "SSO integration, audit logs, role-based access control, and compliance frameworks built in. Designed for IT governance. Approved by security teams. Scalable across departments.",
      },
    ],
  },

  howItWorks: {
    headline: "How It Works",
    subheadline: "Four stages from data to deployment",
    steps: [
      {
        number: "01",
        title: "Data Grounding",
        description:
          "Securely ingest documents, databases, APIs, wikis, and internal systems. Data extraction happens within your environment using connectors you control. Structured and unstructured data are indexed for retrieval.",
      },
      {
        number: "02",
        title: "Model Adaptation",
        description:
          "Fine-tune foundation models using your private data or apply parameter-efficient adapters. Training compute runs on your infrastructure. Model weights never leave your servers. Achieve domain specialization without exposing proprietary information.",
      },
      {
        number: "03",
        title: "Agent Orchestration",
        description:
          "Define agent workflows: reasoning chains, retrieval strategies, tool access, and multi-step execution. Agents follow your business logic, call internal APIs, and integrate with existing systems—all orchestrated within your architecture.",
      },
      {
        number: "04",
        title: "Private Deployment",
        description:
          "Deploy agents to production on-prem or in your private cloud. Monitor performance, update models, and scale across teams using CI/CD pipelines. Full observability. Full control.",
      },
    ],
  },

  useCases: {
    headline: "Built for Enterprise Teams",
    subheadline: "How different roles leverage private AI infrastructure",
    roles: [
      {
        id: "cto",
        label: "For CTOs",
        title: "Infrastructure You Control",
        body: "Deploy AI without surrendering data governance. Private AI infrastructure gives you complete control over where data resides, how models are trained, and which systems agents can access. No vendor dependencies. No black-box APIs. Full auditability for compliance teams. Choose your own model weights, swap providers without rewriting code, and scale on your timeline.",
        bullets: [
          "Private deployment options (on-prem, VPC, air-gapped)",
          "API and access control you define",
          "Bring your own models or use ours",
          "Custom security policies and network isolation",
        ],
      },
      {
        id: "ops",
        label: "For Operations Leaders",
        title: "Automate Without Compromise",
        body: "AI agents that truly understand your workflows. Trained on your SOPs, internal documentation, and process playbooks, these agents execute tasks with the context only your organization has. Automate approvals, document processing, research, and internal query handling—without exposing sensitive operational data to third parties.",
        bullets: [
          "Workflow automation tailored to your processes",
          "Integration with internal tools (ERP, CRM, ticketing)",
          "Process-specific training (no generic responses)",
          "Reduce manual overhead without data exposure",
        ],
      },
      {
        id: "founder",
        label: "For Founders",
        title: "Scale Smarter, Not Bigger",
        body: "Do more with your existing team. Deploy personalized AI agents across support, sales, operations, and engineering without hiring armies or paying per-token. Fixed infrastructure costs give you predictable budgets. Rapid deployment timelines mean faster time-to-value. Scale AI capabilities across departments while maintaining centralized control.",
        bullets: [
          "Multi-department agent deployment",
          "Predictable cost structure (no variable token fees)",
          "Fast implementation (weeks, not quarters)",
          "Cost-effective scaling as you grow",
        ],
      },
    ],
  },

  architecture: {
    headline: "Architecture & Data Privacy",
    subheadline: "Privacy isn't a policy. It's architecture.",
    body: [
      "In private AI infrastructure, data sovereignty is enforced by design. Your training data never leaves your network perimeter. Inference happens on your compute. Model weights reside on storage you control. There are no fallback calls to public APIs, no shared embedding services, and no external dependencies for core functionality.",
      "Full auditability means every model decision, every training run, and every agent action is logged within your systems. Compliance teams can trace data lineage. Security teams can inspect network traffic. Operations teams can monitor performance. **Transparency through architecture.**",
    ],
    principles: [
      "No internet dependencies for inference",
      "Air-gapped deployment capability",
      "Audit logs stored within your environment",
      "Bring your own model weights",
      "Deterministic behavior (no black-box updates)",
    ],
  },

  comparison: {
    headline: "Why Not Public SaaS AI?",
    subheadline: "Understanding the architectural tradeoffs",
    note: "Public SaaS AI has its place—for prototyping, consumer apps, and low-stakes use cases. But when AI becomes mission-critical infrastructure, architectural control becomes non-negotiable.",
    dimensions: [
      {
        aspect: "Data Privacy",
        saas: "Data sent to external servers; potential training pool inclusion",
        private: "100% private; data never leaves your environment",
      },
      {
        aspect: "Cost Model",
        saas: "Variable per-token pricing; unpredictable at scale",
        private: "Fixed infrastructure cost; predictable budgets",
      },
      {
        aspect: "Latency",
        saas: "Network round-trips to external APIs",
        private: "Local inference; sub-100ms response times",
      },
      {
        aspect: "Customization",
        saas: "Generic models for all users",
        private: "Hyper-personalized models trained on your data",
      },
      {
        aspect: "Compliance",
        saas: "Depends on vendor certifications; limited auditability",
        private: "You control compliance posture; full audit trails",
      },
      {
        aspect: "Vendor Lock-In",
        saas: "Tied to provider API; migration is complex",
        private: "Open architecture; swap models without code rewrites",
      },
      {
        aspect: "Uptime Control",
        saas: "Dependent on vendor SLA",
        private: "You manage availability and redundancy",
      },
    ],
  },

  enterpriseReadiness: {
    headline: "Built for Real Enterprises",
    subheadline: "Infrastructure-grade AI for organizations moving beyond prototypes",
    sections: [
      {
        title: "Mid-Market Readiness",
        body: "You don't need hyperscaler budgets to own your AI stack. Private AI infrastructure is designed for mid-market enterprises: teams of 50–500 who need serious capabilities without Silicon Valley price tags. Deploy on commodity hardware or cloud instances you already provision.",
      },
      {
        title: "Scaling with GPU Clusters",
        body: "Start with a single GPU node. Scale to clusters as usage grows. Dynamic scheduling maximizes hardware utilization—run multiple agents on shared compute without dedicated resources per agent. Lower total cost of ownership vs. per-token SaaS.",
      },
      {
        title: "DevOps-Native Workflows",
        body: "Manage AI agents like any other code. Version control with Git. Test in staging environments. Deploy via CI/CD pipelines. Roll back instantly if a model update underperforms. AI becomes part of your existing engineering workflow.",
      },
      {
        title: "Long-Term Maintainability",
        body: "This isn't a vendor relationship—it's infrastructure you own. Train your team to operate it. Customize, extend, and evolve the stack as your needs change. No vendor can sunset your API or change pricing overnight.",
      },
    ],
  },

  cta: {
    headline: "Build AI You Actually Own.",
    body: "If AI is becoming part of your business, you should control it like one. Build private AI agents that work entirely inside your environment and scale on your terms.",
    buttons: {
      primary: "Request Access",
      secondary: "Talk to an Architect",
    },
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
        // { label: "Careers", href: "#" },
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
