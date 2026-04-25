"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Data ───────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "saas",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="3" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "SaaS & Web Applications",
    outcome: "A full-stack product that scales to 100k users without a rewrite",
    description:
      "End-to-end Next.js web applications — from data model to deployment. Architected for growth, not just demo day.",
    tags: ["Next.js", "TypeScript", "Scalability", "Auth", "API Design"],
    problem: "Most SaaS MVPs are built fast and break faster. You need a system built for iteration, not just launch.",
    differentiator: "I design the data model, the component architecture, and the API contracts upfront — so the system evolves without rewrites.",
    whenToChoose: "You have a validated idea and need a production-grade system, not a prototype.",
    color: "#7c5cfc",
  },
  {
    id: "landing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M3 10h14M10 3l7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "High-Converting Landing Pages",
    outcome: "A page that converts cold visitors into qualified leads at 3–8%",
    description:
      "Conversion-engineered landing pages built around your buyer psychology, not your feature list.",
    tags: ["Conversion Rate", "Performance", "SEO", "A/B Ready", "Core Web Vitals"],
    problem: "Template-built pages give you a presence, not a conversion engine. Yours needs to close.",
    differentiator: "I write the information hierarchy before I write a line of code. Every section has one job: move the visitor to the next.",
    whenToChoose: "You're running paid traffic or cold outreach and your current page isn't converting at target.",
    color: "#10b981",
  },
  {
    id: "ecommerce",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M2 3h2l2.4 8h8.4l1.6-5H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    title: "E-commerce Systems",
    outcome: "A store that loads in under 1.5s and converts 20% better than Shopify themes",
    description:
      "Custom storefronts on Next.js with headless commerce, optimised checkout flows, and Lighthouse 95+ performance.",
    tags: ["Headless Commerce", "Performance", "Payment", "SEO", "Inventory"],
    problem: "Shopify themes are slow, rigid, and generic. When your brand is premium, your store needs to feel it.",
    differentiator: "I build custom commerce experiences — not themes. Every interaction is optimised for purchase velocity.",
    whenToChoose: "Your store revenue is limited by slow load times, rigid design, or checkout friction.",
    color: "#f59e0b",
  },
  {
    id: "dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="2" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="2" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="9" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="12" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Admin Dashboards",
    outcome: "Your ops team moves 40% faster with a purpose-built internal tool",
    description:
      "Role-based admin systems and internal dashboards designed for operators, not developers — clean, fast, and actually usable.",
    tags: ["RBAC", "Real-time", "Data Tables", "Charts", "Filters"],
    problem: "Spreadsheets and generic tools don't scale. Your team deserves tooling built around your actual workflow.",
    differentiator: "I map your operational flows before designing a single screen. The result is a tool people actually use.",
    whenToChoose: "You have internal operations that currently live in Sheets, Notion, or disconnected tools.",
    color: "#3b82f6",
  },
  {
    id: "portfolio",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 9v4M8 11h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Portfolio & Agency Sites",
    outcome: "A digital presence that commands ₹3L+ project budgets",
    description:
      "Premium portfolio and agency websites built to filter for high-ticket clients and signal strategic authority.",
    tags: ["Conversion", "SEO", "Design System", "CMS", "Performance"],
    problem: "Most portfolios list skills. They don't sell. Clients buy confidence — yours needs to project it immediately.",
    differentiator: "This site is an example. Every section is engineered around a specific conversion outcome, not aesthetic preference.",
    whenToChoose: "You're a freelancer, studio, or agency ready to move upmarket and attract better clients.",
    color: "#ec4899",
  },
  {
    id: "custom",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Systems & Integrations",
    outcome: "A bespoke tool that eliminates the manual process costing your team 10+ hours per week",
    description:
      "Purpose-built software for workflows that off-the-shelf tools can't solve — PWAs, booking systems, automation layers, custom CMS.",
    tags: ["PWA", "Automation", "API", "Offline-first", "Custom Logic"],
    problem: "Your operations have grown past what generic tools can handle. You need something built for your exact workflow.",
    differentiator: "I don't bend your process to fit a template. I build the template around your process.",
    whenToChoose: "You have a specific problem that Zapier, Notion, or Airtable can't cleanly solve.",
    color: "#06b6d4",
  },
];

/* ─── Animation helpers ───────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ─── Service Card ────────────────────────────────────────────── */

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] as const }}
      className="glass-card p-7 flex flex-col gap-5 group relative overflow-hidden cursor-default"
      style={{ "--service-color": service.color } as React.CSSProperties}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}90, transparent)` }}
      />

      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300"
          style={{
            backgroundColor: `${service.color}15`,
            borderColor: `${service.color}30`,
            color: service.color,
          }}
        >
          {service.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="font-display font-bold text-[1.05rem] text-foreground mb-1">
            {service.title}
          </h2>
          <p className="text-sm font-medium text-[var(--text-muted)] italic leading-snug">
            {service.outcome}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-white/[0.08] text-dimmed bg-white/[0.03]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors duration-150 w-fit mt-1"
        aria-expanded={expanded}
      >
        <motion.svg
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        {expanded ? "Less detail" : "How I approach this"}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-white/[0.06] space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-dimmed mb-1">The Problem</p>
                <p className="text-sm text-muted leading-relaxed">{service.problem}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-dimmed mb-1">My Approach</p>
                <p className="text-sm text-muted leading-relaxed">{service.differentiator}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-dimmed mb-1">When to Choose This</p>
                <p className="text-sm text-muted leading-relaxed">{service.whenToChoose}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        aria-label="Services hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px]"
        />

        <div className="container-padded relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="label-text block mb-6"
          >
            What I build
          </motion.span>

          {/* Semantic H1 with keyword-rich content */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.07] tracking-tight text-foreground max-w-3xl mb-6"
          >
            Systems that{" "}
            <span className="text-gradient">grow your revenue.</span>
            <br />
            Not just your page count.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-lg text-muted leading-relaxed max-w-2xl mb-10"
          >
            Every service below is engineered around a business outcome —
            not a deliverable. I don&apos;t build websites. I build systems
            that convert, retain, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "6",    label: "Service categories" },
              { value: "₹3L+", label: "Avg. project value" },
              { value: "100",  label: "Lighthouse target" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-foreground tracking-tight">{s.value}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section
        aria-labelledby="services-grid-heading"
        className="container-padded pb-24 md:pb-32"
      >
        {/* Visually hidden heading for screen readers / SEO */}
        <h2 id="services-grid-heading" className="sr-only">
          Next.js Development Services for SaaS Startups
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ── PROCESS TEASER ───────────────────────────────────────── */}
      <section
        aria-label="Engagement approach"
        className="border-t border-white/[0.06]"
      >
        <div className="container-padded py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <motion.span
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="label-text block mb-4"
              >
                The approach
              </motion.span>
              <motion.h2
                {...fadeUp}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5"
              >
                Every build starts{" "}
                <span className="text-gradient">with a problem.</span>
                <br />
                Not a feature list.
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-muted leading-relaxed mb-4"
              >
                Before any code is written, I map your business goals,
                conversion bottlenecks, and growth constraints. The
                architecture follows the outcome — never the other way around.
              </motion.p>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/#process"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-150"
                >
                  See the full process
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 7h12M8 2.5L12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Differentiators */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Outcome-first scoping",
                  body: "No discovery call ends until we agree on what success looks like numerically.",
                },
                {
                  label: "Zero hand-offs",
                  body: "I own design, architecture, and delivery. No brief gets lost in translation.",
                },
                {
                  label: "Performance by default",
                  body: "Lighthouse 95+ is the floor, not a stretch goal. Core Web Vitals are non-negotiable.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="glass-card p-5"
                >
                  <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        aria-label="Call to action"
        className="border-t border-white/[0.06] bg-[var(--bg-elevated)]"
      >
        <div className="container-padded py-16 md:py-20">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="label-text block mb-4"
          >
            Ready to build?
          </motion.span>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4 max-w-xl"
          >
            Tell me what you&apos;re{" "}
            <span className="text-gradient">trying to achieve.</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-muted leading-relaxed mb-8 max-w-lg"
          >
            I take on a limited number of projects each month. Every engagement
            starts with a 20-minute strategy call — no obligation, no pitch deck.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 shadow-lg shadow-accent/25 transition-colors"
            >
              Apply for a Build
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12M8 2.5L12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.1] text-muted text-sm font-medium rounded-xl hover:border-white/20 hover:text-foreground transition-colors"
            >
              See the work first
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
