"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Replace these with your real project data ──────────────────────────────
const CASE_STUDIES = [
  {
    id: "whispr",
    tag: "SaaS Platform",
    title: "Whispr",
    tagline: "Real-time matching platform with 40ms socket latency",
    problem:
      "The founding team had a working MVP but no frontend architecture - React components were monolithic, socket events leaked memory, and the UX blocked user activation.",
    solution:
      "Rebuilt the frontend in Next.js with a modular component system, replaced the vanilla socket layer with an event-driven handler pattern, and designed a frictionless onboarding flow.",
    result: "Activation rate improved 3× - from 18 % to 61 % - in the first two weeks post-launch.",
    stack: ["Next.js 16", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
    metrics: [
      { label: "Socket latency",   value: "< 40 ms" },
      { label: "Activation rate",  value: "+238 %" },
      { label: "Lighthouse score", value: "98" },
    ],
  },
  {
    id: "temple",
    tag: "Production Web App",
    title: "Temple Vazhipad System",
    tagline: "Offline-capable PWA for real-world temple operations",
    problem:
      "Manual paper-based vazhipad booking created errors, double-bookings, and no audit trail. The team needed a digital system that worked without reliable internet.",
    solution:
      "Built a PWA with service worker caching, an admin dashboard for booking management, and a print-ready receipt system - zero external cloud dependency.",
    result: "Eliminated 100 % of double-booking errors on day one. Fully adopted by temple administration within 48 hours.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "PWA / Service Worker"],
    metrics: [
      { label: "Booking errors",  value: "Zero" },
      { label: "Adoption time",  value: "48 hrs" },
      { label: "Works offline",  value: "100 %" },
    ],
  },
  {
    id: "science-blog",
    tag: "Content Platform",
    title: "Multi-Language Science Blog",
    tagline: "EN / ML content hub with fingerprinted analytics",
    problem:
      "A bilingual science publication needed a scalable CMS with visitor-level analytics, without paying for Mixpanel or Amplitude - and it had to rank on Google.",
    solution:
      "Architected a Next.js + Sanity headless platform with custom canvas fingerprinting for anonymous visitor tracking, ISR for SEO, and dynamically placed ad slots.",
    result: "Indexing on Google within 3 days. Zero third-party analytics cost. Publisher controls content in both languages from a single Sanity Studio.",
    stack: ["Next.js", "Sanity CMS", "MongoDB", "Tailwind CSS"],
    metrics: [
      { label: "Indexed",           value: "3 days" },
      { label: "Analytics cost",   value: "₹0 / mo" },
      { label: "Languages",        value: "EN + ML" },
    ],
  },
];

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const study = CASE_STUDIES[active];

  return (
    <section
      id="work"
      aria-label="Case studies"
      className="py-24 md:py-32 bg-background relative"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="container-padded">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text block mb-4"
          >
            System breakdowns
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Real problems. Real outcomes.
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {CASE_STUDIES.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                active === i
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                  : "text-muted border-white/10 hover:border-white/20 hover:text-foreground"
              }`}
            >
              {cs.title}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-[1fr_320px] gap-8"
          >
            {/* Left - narrative */}
            <article className="glass-card p-8 md:p-10 relative overflow-hidden">
              {/* Subtle top accent line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-accent/60 to-transparent" />

              <span className="label-text block mb-3">{study.tag}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {study.title}
              </h3>
              <p className="text-muted text-sm mb-8">{study.tagline}</p>

              <div className="space-y-6">
                {[
                  { title: "The bottleneck",  body: study.problem },
                  { title: "The architecture", body: study.solution },
                  { title: "The outcome",     body: study.result },
                ].map((block) => (
                  <div key={block.title}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-dimmed mb-1.5">
                      {block.title}
                    </p>
                    <p className="text-muted text-[0.925rem] leading-relaxed">{block.body}</p>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.05] text-muted border border-white/[0.07]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>

            {/* Right - metrics */}
            <div className="flex flex-col gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="glass-card p-6 flex flex-col gap-1">
                  <p className="font-display text-3xl font-bold text-foreground tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted">{m.label}</p>
                </div>
              ))}

              {/* Nudge */}
              <div className="glass-card p-6 border-dashed mt-auto">
                <p className="text-xs text-muted leading-relaxed">
                  Every engagement starts with understanding your business
                  bottleneck - not your tech stack.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
