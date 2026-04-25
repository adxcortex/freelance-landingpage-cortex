"use client";

import { motion } from "framer-motion";

export function CTA() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      aria-label="Call to action"
      className="py-24 md:py-32 bg-subtle relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[500px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container-padded relative z-10 text-center max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-text block mb-5"
        >
          Ready to apply?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5"
        >
          Your market won&apos;t wait.
          <br />
          <span className="text-gradient">Neither should your website.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-muted text-lg leading-relaxed mb-10"
        >
          I take on a limited number of projects each month to ensure every
          client gets full strategic attention. If you&apos;re serious about
          building something premium, let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-semibold rounded-full text-sm shadow-xl shadow-accent/25 hover:bg-accent/90 active:scale-[0.98] transition-all duration-150"
          >
            Apply for a Build
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 7h12M8 2.5L12.5 7 8 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="mt-4 text-xs text-dimmed">
            20-min strategy call · No obligation · Response within 24 hrs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
