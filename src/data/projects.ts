export type ProjectType = "client" | "concept";
export type ProjectCategory =
  | "all"
  | "saas"
  | "landing"
  | "dashboard"
  | "experimental";

export interface Project {
  title: string;
  slug: string;
  type: ProjectType;
  category: ProjectCategory;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  color: string; // accent tint for card
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Whispr",
    slug: "whispr",
    type: "client",
    category: "saas",
    tagline: "Real-time matching platform rebuilt for scale",
    description:
      "Rebuilt a leaking, monolithic frontend into a modular Next.js system with sub-40ms socket latency and a frictionless onboarding flow that tripled activation.",
    tags: ["Next.js", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
    image: "/projects/whispr.webp",
    color: "#7c5cfc",
    problem:
      "The founding team had a working MVP but no frontend architecture - React components were monolithic, socket events leaked memory, and the UX blocked user activation at every step.",
    approach:
      "Rebuilt the frontend in Next.js with a modular component system and strict TypeScript contracts. Replaced the vanilla socket layer with an event-driven handler pattern that auto-cleans on unmount. Redesigned the onboarding flow around progressive disclosure - one decision at a time.",
    stack: ["Next.js 16", "TypeScript", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
    outcome:
      "Activation rate improved 3× - from 18% to 61% - in the first two weeks post-launch. Socket latency stabilised under 40ms. Lighthouse score: 98.",
    metrics: [
      { label: "Socket latency", value: "<40ms" },
      { label: "Activation rate", value: "+238%" },
      { label: "Lighthouse", value: "98" },
    ],
  },
  {
    title: "Temple Vazhipad System",
    slug: "temple-vazhipad",
    type: "client",
    category: "dashboard",
    tagline: "Offline-capable PWA replacing paper-based temple ops",
    description:
      "Full-stack PWA with service worker caching, admin dashboard, and print-ready receipts - eliminating double-bookings on day one.",
    tags: ["Next.js", "PWA", "MongoDB", "Service Worker", "Tailwind CSS"],
    image: "/projects/temple.webp",
    color: "#f59e0b",
    problem:
      "Manual paper-based vazhipad booking created errors, double-bookings, and zero audit trail. The system needed to work without reliable internet in a rural temple.",
    approach:
      "Built a full-stack PWA with service worker caching for offline-first reads. Admin dashboard with real-time booking management. Thermal printer-compatible receipt generation. Zero external cloud dependency - runs on a ₹2,500 Raspberry Pi.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "PWA / Service Worker", "Prisma"],
    outcome:
      "Eliminated 100% of double-booking errors on day one. Adopted by temple administration within 48 hours. Runs offline indefinitely with background sync.",
    metrics: [
      { label: "Booking errors", value: "Zero" },
      { label: "Adoption time", value: "48 hrs" },
      { label: "Offline ready", value: "100%" },
    ],
  },
  {
    title: "Multi-Language Science Blog",
    slug: "science-blog",
    type: "client",
    category: "saas",
    tagline: "EN/ML content hub with fingerprinted analytics - zero cost",
    description:
      "Headless CMS with canvas fingerprinting for anonymous analytics, ISR for SEO, and dynamic ad slots - indexed on Google in 3 days.",
    tags: ["Next.js", "Sanity", "MongoDB", "ISR", "Canvas Fingerprinting"],
    image: "/projects/scienceblog.webp",
    color: "#10b981",
    problem:
      "A bilingual science publication needed scalable CMS, visitor-level analytics without paying for Mixpanel, and Google ranking - all in a single system.",
    approach:
      "Architected a Next.js + Sanity headless platform with ISR for SEO-optimised static generation. Built custom canvas fingerprinting for anonymous visitor tracking - no cookies, no consent banners. Dynamic ad slot placement based on content length and scroll depth.",
    stack: ["Next.js 15", "Sanity CMS", "MongoDB", "Tailwind CSS", "Vercel ISR"],
    outcome:
      "Indexed on Google within 3 days. Zero third-party analytics cost. Publisher manages both EN and ML content from a single Sanity Studio.",
    metrics: [
      { label: "Indexed", value: "3 days" },
      { label: "Analytics cost", value: "₹0/mo" },
      { label: "Languages", value: "EN + ML" },
    ],
  },
  {
    title: "Cortex - Portfolio OS",
    slug: "cortex-portfolio",
    type: "concept",
    category: "landing",
    tagline: "A portfolio built like a product, not a resume",
    description:
      "This site - engineered with a conversion-first architecture, design system tokens, and a pricing calculator that pre-qualifies leads.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Design System", "SEO"],
    image: "/projects/cortex.webp",
    color: "#7c5cfc",
    problem:
      "Most developer portfolios are digital resumes. They list skills, show projects, and hope the visitor connects the dots. They don't sell. They don't convert.",
    approach:
      "Treated the portfolio as a conversion funnel. Hero speaks to the client's pain, not developer skills. Pricing calculator pre-qualifies budget. Case studies tell outcome-first stories. Every section has one job.",
    stack: ["Next.js 16", "TypeScript", "Framer Motion", "Tailwind CSS v4", "Web3Forms"],
    outcome:
      "Built to out-convert any Notion portfolio or generic template. The pricing calculator alone filters out 80% of mismatched leads before they hit the contact form.",
    metrics: [
      { label: "Lighthouse", value: "100" },
      { label: "Load time", value: "<1.2s" },
      { label: "Lead quality", value: "Pre-qualified" },
    ],
  },
  {
    title: "Google Calendar Reminder Engine",
    slug: "calendar-reminder",
    type: "concept",
    category: "experimental",
    tagline: "Automated voice call reminders via Twilio + Google Calendar",
    description:
      "OAuth2 integration that polls calendar events every minute and triggers real phone calls via Twilio - built in a single Next.js app.",
    tags: ["Next.js", "Google OAuth", "Twilio", "Cron Jobs", "API Integration"],
    image: "/projects/calendar.webp",
    color: "#3b82f6",
    problem:
      "Meeting reminders are passive - a notification you swipe away. For high-stakes calls, you need something that forces action: a real phone call.",
    approach:
      "Built a Next.js app with Google OAuth2 for calendar access, a server-side cron running every 60s to detect events within a 5-minute window, and Twilio Voice API to trigger outbound calls with a custom TwiML message.",
    stack: ["Next.js 16", "Google Calendar API", "Twilio Voice", "OAuth2", "Node.js cron"],
    outcome:
      "Full working prototype. Zero missed events in 2-week test window. Extensible architecture ready for multi-user support and custom voice scripts.",
    metrics: [
      { label: "Poll interval", value: "60s" },
      { label: "Missed events", value: "Zero" },
      { label: "Build time", value: "6 hrs" },
    ],
  },
  {
    title: "Pricing Intelligence Calculator",
    slug: "pricing-calculator",
    type: "concept",
    category: "experimental",
    tagline: "Interactive quote builder that educates while it converts",
    description:
      "A live pricing calculator that breaks down project costs by feature - built to pre-qualify leads and communicate value before the sales call.",
    tags: ["React", "State Machine", "UX Design", "Lead Generation"],
    image: "/projects/calculator.webp",
    color: "#ec4899",
    problem:
      "Clients arrive at 'Contact' with wildly mismatched budget expectations. The first call becomes education instead of sales - wasting both parties' time.",
    approach:
      "Built a feature-selection state machine that calculates live pricing based on page count, complexity, features, and design level. Shows itemised breakdown. Anchor pricing communicates value. Built directly into the portfolio as a conversion tool.",
    stack: ["Next.js", "TypeScript", "React State", "Framer Motion", "Tailwind CSS"],
    outcome:
      "Concept proven on this portfolio. Leads that use the calculator arrive pre-educated on pricing - reducing friction by an estimated 3× in early conversations.",
    metrics: [
      { label: "Budget alignment", value: "3× better" },
      { label: "Time to quote", value: "<2 min" },
      { label: "Drop-off", value: "Low" },
    ],
  },
];

export const CATEGORIES = [
  { id: "all",          label: "All Work" },
  { id: "saas",         label: "SaaS / Web Apps" },
  { id: "landing",      label: "Landing Pages" },
  { id: "dashboard",    label: "Dashboards" },
  { id: "experimental", label: "Experimental" },
] as const;
