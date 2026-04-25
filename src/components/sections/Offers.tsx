"use client";

import { motion } from "framer-motion";

const TIERS = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "The conversion-ready presence",
    description:
      "For brands that need a world-class public face fast - landing page or multi-page site built to convert, rank, and load instantly.",
    includes: [
      "Strategic copywriting direction",
      "Premium UI / UX design",
      "Next.js + Tailwind build",
      "SEO-ready semantic markup",
      "Contact / lead capture form",
      "2 revision rounds",
      "Full code handoff",
    ],
    cta: "Apply for Foundation",
    accent: false,
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    tagline: "The full growth engine",
    description:
      "For founders who need more than a website - a complete digital infrastructure with CMS, analytics, and advanced integrations.",
    includes: [
      "Everything in Foundation",
      "Headless CMS integration",
      "Custom dashboard / admin panel",
      "Auth system & user flows",
      "API & third-party integrations",
      "Performance audit (Lighthouse 95+)",
      "4 revision rounds",
      "30-day post-launch support",
    ],
    cta: "Apply for Infrastructure",
    accent: true,
  },
  {
    id: "partner",
    name: "Fractional Partner",
    tagline: "Ongoing technical partnership",
    description:
      "For teams that want a senior engineer without the overhead of a full-time hire. Dedicated monthly capacity, strategic input included.",
    includes: [
      "Everything in Infrastructure",
      "Weekly strategy sessions",
      "Priority turnaround",
      "Feature sprints",
      "Code reviews & architecture guidance",
      "Cancel any time",
    ],
    cta: "Discuss Partnership",
    accent: false,
  },
];

export function Offers() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="pricing"
      aria-label="Service tiers"
      className="py-24 md:py-32 bg-background relative"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="container-padded">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text block mb-4"
          >
            Engagement tiers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Choose the depth of engagement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 text-muted text-sm leading-relaxed"
          >
            Pricing is shared on the discovery call after understanding your
            scope. Every project is scoped individually - no hourly billing.
          </motion.p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-7 flex flex-col gap-6 relative overflow-hidden ${
                tier.accent
                  ? "border-accent/40 shadow-xl shadow-accent/10"
                  : ""
              }`}
            >
              {tier.accent && (
                <>
                  {/* Recommended badge */}
                  <span className="absolute top-4 right-4 label-text text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full text-[0.625rem]">
                    Most popular
                  </span>
                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                </>
              )}

              <div>
                <p className="text-xs text-dimmed font-semibold tracking-widest uppercase mb-1">
                  {tier.name}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {tier.tagline}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg
                      className="w-4 h-4 text-accent shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 text-sm font-semibold rounded-xl transition-all duration-150 active:scale-[0.98] ${
                  tier.accent
                    ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25"
                    : "border border-white/10 text-muted hover:border-white/20 hover:text-foreground"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pre-qualify note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-xs text-dimmed max-w-md mx-auto"
        >
          All engagements start with a 20-minute strategy call. Minimum
          engagement: ₹40,000. Serious projects only.
        </motion.p>
      </div>
    </section>
  );
}
