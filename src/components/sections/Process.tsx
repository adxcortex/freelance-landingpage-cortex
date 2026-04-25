"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Alignment",
    body:  "We map your business goals, ideal client profile, and revenue bottlenecks. No code is written until we agree on the exact outcome we're engineering toward.",
    duration: "2–3 days",
  },
  {
    n: "02",
    title: "Conversion Architecture",
    body:  "I design the information hierarchy, user journey, and conversion paths - the logic that guides a visitor from curiosity to contacting you.",
    duration: "3–5 days",
  },
  {
    n: "03",
    title: "Engineering & Build",
    body:  "Production-grade Next.js code, optimised performance, and semantic markup. Every component is tested across devices before it ships.",
    duration: "1–3 weeks",
  },
  {
    n: "04",
    title: "Launch & Handoff",
    body:  "Live deployment, Lighthouse audit, and a complete handoff - including CMS training if applicable. You own everything.",
    duration: "1–2 days",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-label="How we work"
      className="py-24 md:py-32 bg-subtle relative"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="container-padded">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text block mb-4"
          >
            The engagement model
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Predictable delivery.
            <br />
            Zero guesswork.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-muted leading-relaxed"
          >
            High-ticket clients don&apos;t fear the price - they fear the
            uncertainty. This process is designed to eliminate that.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            aria-hidden
            className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent hidden md:block"
          />

          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-6 md:gap-8 items-start group"
              >
                {/* Step node */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-bg-elevated border border-white/[0.1] flex items-center justify-center z-10 group-hover:border-accent/40 transition-colors duration-300">
                  <span className="text-xs font-bold text-accent">{step.n}</span>
                </div>

                {/* Card */}
                <div className="glass-card flex-1 p-6 md:p-7 group-hover:border-white/[0.12]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-[1.05rem] text-foreground">
                      {step.title}
                    </h3>
                    <span className="text-xs text-dimmed border border-white/[0.07] px-2.5 py-1 rounded-full shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden="true"
            className="shrink-0 mt-0.5 text-[var(--text-muted)]"
          >
            <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7.5 5v4M7.5 10.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            <span className="text-[var(--text-secondary)] font-medium">Timelines are indicative, not fixed.</span>{" "}
            Actual duration varies depending on project scope, feature complexity, content readiness, and feedback turnaround.
            Every engagement begins with a scoping call to establish a realistic timeline before any commitment is made.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
