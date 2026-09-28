import { Project, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: "Wipaporn Wikornmetkul",
  title: "Software Engineer",
  tagline: "Bridging complex domain logic with accessible, resilient, and ultra-responsive web architectures.",
  bio: "Software Engineer with a focus on building mission-critical systems and intuitive user interfaces. Passionate about solving real-world challenges through cross-disciplinary collaboration—notably working alongside licensed pharmacists to build digital systems for Patient Information Leaflets (PIL) that enhance public health and medication safety.",
  location: "Bangkok, Thailand (GMT+7)",
  status: "Available for high-impact Software Engineering roles",
  email: "wipaporn.wikorn@gmail.com",
  github: "https://github.com/wipaporn",
  linkedin: "https://linkedin.com/in/wipaporn-wikornmetkul",
  stats: [
    { label: "Architecture", value: "Clean & Event-Driven" },
    { label: "Core Focus", value: "Full-Stack & Systems" },
    { label: "UX Metric", value: "WCAG AAA & <100ms LCP" },
    { label: "Domain Impact", value: "Healthcare & Digital Public Good" },
  ]
};

export const flagshipProject: Project = {
  id: "pil-management-system",
  title: "PIL Management System",
  subtitle: "Patient Information Leaflet (เอกสารกำกับยาฉบับประชาชน)",
  description: "A centralized digital platform co-engineered with hospital pharmacists to transform dense pharmaceutical leaflets into verified, highly readable, and searchable digital leaflets for patients and healthcare providers.",
  tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Full-Text Search", "QR Engine", "WCAG 2.1 AA"],
  featured: true,
  collaboration: "Developed in close collaboration with certified clinical pharmacists to guarantee pharmacological accuracy, dosage safety rules, and FDA standard compliance.",
  metrics: [
    { label: "Leaflet Search Latency", value: "< 85ms" },
    { label: "Readability Score Gain", value: "+ 74%" },
    { label: "Accessibility Tier", value: "WCAG AAA" },
    { label: "QR Scan-to-Read", value: "Instant 0-Auth" }
  ],
  systemArchitecture: [
    "Domain-driven schema representing medication active ingredients, contraindications, and pediatric dosages",
    "Pharmacist Verification & Audit Workflow (Draft -> Pharmacist Review -> Published Versioning)",
    "Sub-second fuzzy search indexing across generic names, brand names, and drug interactions",
    "High-legibility typography engine with dynamic font scaling and audio-assisted instructions for elderly patients",
    "Dynamic QR code generator linking directly from physical medicine packets to instant localized leaflets"
  ],
  highlights: [
    "Cross-disciplinary domain modeling with pharmacists to translate regulatory medical terminology into patient-friendly language",
    "Multi-tier permission model ensuring only licensed pharmaceutical personnel can approve medication revision releases",
    "Offline-first PWA capability allowing patients in low-connectivity clinics to access crucial safety warnings",
    "Zero-dependency printable PDF generation matching Thai FDA submission guidelines"
  ]
};

export const bentoProjects: Project[] = [
  {
    id: "medverify-api",
    title: "MedVerify Interaction Engine",
    subtitle: "Real-time Drug-Drug Interaction Matrix",
    description: "High-performance microservice that cross-checks prescription lists against known pharmacokinetic adverse interaction matrices, warning clinicians before dispensing.",
    tags: ["Go", "Redis", "gRPC", "Docker", "PostgreSQL"],
    metrics: [
      { label: "Throughput", value: "12,000 req/s" },
      { label: "P99 Latency", value: "4.2ms" }
    ],
    githubUrl: "https://github.com/wipaporn/medverify-engine",
    highlights: ["In-memory graph traversal for polypharmacy interaction trees", "Automated alert severity classification"]
  },
  {
    id: "telemetry-pulse",
    title: "CloudPulse Telemetry Hub",
    subtitle: "Real-time Service Health & Anomaly Visualizer",
    description: "Distributed observability dashboard aggregating system metrics, error spikes, and distributed tracing with WebSockets.",
    tags: ["React 19", "Tailwind CSS", "WebSockets", "TimescaleDB", "D3.js"],
    metrics: [
      { label: "Data Ingestion", value: "1.5M events/min" },
      { label: "Render Rate", value: "60 FPS Canvas" }
    ],
    githubUrl: "https://github.com/wipaporn/cloudpulse-telemetry",
    highlights: ["Custom virtualized WebGL line chart for continuous telemetry streams", "Zero-polling live socket updates"]
  },
  {
    id: "accessible-design-system",
    title: "Aura UI Component Kit",
    subtitle: "Accessible, Keyboard-First Component Library",
    description: "A headless, accessibility-first UI system engineered with Radix primitives, strict ARIA compliance, and customizable styling tokens.",
    tags: ["TypeScript", "React", "ARIA", "Framer Motion", "NPM Package"],
    metrics: [
      { label: "Test Coverage", value: "98.4%" },
      { label: "Bundle Impact", value: "< 14kB gzip" }
    ],
    githubUrl: "https://github.com/wipaporn/aura-ui-system",
    highlights: ["Complete keyboard navigation suite with focus trapping", "Automatic contrast ratio enforcement"]
  },
  {
    id: "terminal-os-portfolio",
    title: "Next-Gen Interactive OS Portfolio",
    subtitle: "Linear Aesthetics meets Floating Window Architecture",
    description: "The very portfolio you are browsing: built with custom window layering, draggable physics, synthesized Web Audio sound, and a functional command shell.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Web Audio API"],
    metrics: [
      { label: "Audio Footprint", value: "0 kB (Synthesized)" },
      { label: "Lighthouse Score", value: "100 / 100" }
    ],
    githubUrl: "https://github.com/wipaporn/portfolio-os",
    highlights: ["Zero external audio assets using Web Audio oscillator nodes", "Keyboard shortcut command palette"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: [
      { name: "TypeScript", level: 94, description: "Type-level programming, strict schemas, interfaces & generics" },
      { name: "JavaScript (ESNext)", level: 96, description: "Event loop, asynchronous patterns, Web APIs & workers" },
      { name: "Go / Golang", level: 82, description: "Goroutines, REST/gRPC microservices, robust concurrency" },
      { name: "Python", level: 85, description: "Data manipulation, automated scripting, FastAPI backend" },
      { name: "SQL (PostgreSQL)", level: 90, description: "Complex joins, indexing strategies, schema migrations & ACID" }
    ]
  },
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 95, description: "Hooks, Server Components, SSR/SSG, Suspense architecture" },
      { name: "Tailwind CSS", level: 95, description: "Design tokens, fluid typography, dark mode & responsive layouts" },
      { name: "Framer Motion", level: 90, description: "Physics-based springs, gesture tracking, layout transitions" },
      { name: "Web Accessibility (a11y)", level: 92, description: "WCAG 2.1 AA/AAA compliance, screen readers, focus traps" },
      { name: "State & Data Fetching", level: 90, description: "Zustand, React Query/TanStack, optimistic cache updates" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: 92, description: "Event-driven REST APIs, auth middleware, stream pipelines" },
      { name: "Redis & In-Memory Caching", level: 86, description: "Pub/Sub, rate limiting, session stores, fast lookup" },
      { name: "RESTful & GraphQL API", level: 91, description: "Schema-first design, pagination, idempotency keys" },
      { name: "Domain-Driven Design (DDD)", level: 88, description: "Bounded contexts, domain modeling, clean code architecture" }
    ]
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Docker & Containers", level: 88, description: "Multi-stage builds, container security, compose configs" },
      { name: "Git & CI/CD Pipelines", level: 92, description: "GitHub Actions, automated lint/test suites, semantic releases" },
      { name: "Testing (Vitest/Jest/Playwright)", level: 87, description: "Unit, integration, and E2E regression testing" },
      { name: "Cloud & Deployment", level: 84, description: "Vercel, AWS (S3, ECS, Lambda), Cloudflare Workers/Edge" }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    role: "Software Engineer (Healthcare Systems & Web Applications)",
    company: "Clinical HealthTech Collaborative",
    period: "2023 - Present",
    location: "Bangkok, Thailand",
    type: "Full-Time",
    achievements: [
      "Led the end-to-end frontend and backend architecture of the PIL Management System, collaborating directly with clinical pharmacists to digitize over 350+ medication leaflets.",
      "Engineered automated search and indexing pipeline reducing medication query times from seconds to sub-85ms.",
      "Implemented WCAG 2.1 AAA accessible UI ensuring elder patients and individuals with visual impairments can safely read dosage instructions.",
      "Established CI/CD deployment pipelines with automated type checking, unit tests, and Lighthouse performance gating."
    ],
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Jest"]
  },
  {
    role: "Software Engineering Intern / Web Developer",
    company: "Digital Innovation Lab",
    period: "2022 - 2023",
    location: "Bangkok, Thailand",
    type: "Internship",
    achievements: [
      "Developed interactive dashboard components for data visualization, improving client data consumption speed by 40%.",
      "Refactored legacy REST endpoints to improve query latency and reduce server memory overhead by 25%.",
      "Collaborated in daily agile scrums, PR code reviews, and pair programming sessions."
    ],
    techStack: ["JavaScript", "React", "Express.js", "MySQL", "Git"]
  }
];

