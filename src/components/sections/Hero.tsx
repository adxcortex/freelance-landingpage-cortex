"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "../../config/site";

const STATS = [
  { value: "3+",    label: "Products shipped" },
  { value: "100",   label: "Lighthouse score" },
  { value: "< 2s",  label: "Avg load time" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  const scrollToWork = () =>
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* Radial glow behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-start justify-center pt-24"
      >
        <div className="w-[600px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-padded relative z-10 pt-32 pb-24 md:pt-36 md:pb-32">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-12 items-center">

          {/* ── LEFT: TEXT ── */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="label-text">
                Technical Partner · Kerala, India
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight text-foreground mb-6"
            >
              Your product is{" "}
              <span className="text-gradient">world-class.</span>
              <br />
              Your website{" "}
              <span className="relative inline-block">
                makes it look cheap.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-muted leading-relaxed max-w-xl mb-10"
            >
              I engineer high-converting digital infrastructures for founders
              and B2B teams - the kind that position you as the premium choice
              before a single word is read.
            </motion.p>

            {/* CTAs - ONE primary, one ghost */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-full shadow-lg shadow-accent/25 hover:bg-accent/90 active:scale-[0.98] transition-all duration-150"
              >
                Apply for a Build
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 7h12M8 2.5L12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-muted border border-white/10 rounded-full hover:border-white/20 hover:text-foreground active:scale-[0.98] transition-all duration-150"
              >
                See case studies
              </button>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: PORTRAIT CARD ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Outer glow ring */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-3xl bg-accent/8 blur-2xl"
            />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-elevated aspect-[4/5]">
              <Image
                src="/me.webp"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover object-top"
                priority
              />
              {/* Subtle overlay gradient at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#09090b]/80 to-transparent" />

              {/* Floating name tag */}
              <div className="absolute bottom-5 inset-x-5 flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
                  <p className="text-xs text-white/60 mt-0.5">Technical Partner</p>
                </div>
                {/* Available badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/80">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Available
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
