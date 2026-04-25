"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterTabs } from "../../components/work/FilterTabs";
import { ProjectCard } from "../../components/work/ProjectCard";
import { PROJECTS, CATEGORIES } from "../../data/projects";

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: PROJECTS.length };
    CATEGORIES.slice(1).forEach((cat) => {
      result[cat.id] = PROJECTS.filter((p) => p.category === cat.id).length;
    });
    return result;
  }, []);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        aria-label="Portfolio hero"
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-grid"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-accent/[0.08] blur-[140px]"
        />

        <div className="container-padded relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="label-text block mb-6"
          >
            Portfolio - {new Date().getFullYear()}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.07] tracking-tight text-[var(--text-primary)] max-w-3xl mb-6"
          >
            Selected Work &{" "}
            <span className="text-gradient">System Builds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10"
          >
            A mix of real-world client projects and engineered concepts -
            demonstrating how I solve problems at scale, from architecture to
            interface.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: `${PROJECTS.filter((p) => p.type === "client").length}`, label: "Client projects" },
              { value: `${PROJECTS.filter((p) => p.type === "concept").length}`, label: "Concept builds" },
              { value: "100", label: "Lighthouse avg" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────────── */}
      <section aria-label="Project grid" className="container-padded pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10 pt-2"
        >
          <FilterTabs
            active={activeFilter}
            onChange={setActiveFilter}
            counts={counts}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-[var(--text-muted)] text-sm">
                  No projects in this category yet.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── PERSONAL TOUCH ─────────────────────────────────────────── */}
      <section
        aria-labelledby="personal-heading"
        className="border-t border-white/[0.06]"
      >
        <div className="container-padded py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="label-text block mb-4"
              >
                The approach
              </motion.span>
              <motion.h2
                id="personal-heading"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-5"
              >
                Built by me,{" "}
                <span className="text-gradient">end-to-end.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-[var(--text-secondary)] leading-relaxed mb-4"
              >
                Every project here - client or concept - is designed, built, and
                shipped solo. No hand-offs, no agency markup. I own the
                architecture decisions, the design system, the performance budget,
                and the final delivery.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-[var(--text-secondary)] leading-relaxed"
              >
                I build the experimental projects because that's where I learn
                what works before a client has to pay for it. The systems I
                ship are informed by real curiosity - not just client briefs.
              </motion.p>
            </div>

            {/* Stack grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: "Framework", value: "Next.js 15/16" },
                { label: "Language", value: "TypeScript" },
                { label: "Styling", value: "Tailwind CSS v4" },
                { label: "Animation", value: "Framer Motion" },
                { label: "Database", value: "MongoDB / Prisma" },
                { label: "CMS", value: "Sanity" },
                { label: "Deploy", value: "Vercel / Railway" },
                { label: "Perf target", value: "Lighthouse 95+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.07] bg-[var(--bg-elevated)] p-4"
                >
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] bg-[var(--bg-elevated)]">
        <div className="container-padded py-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[var(--text-muted)] text-sm mb-3"
          >
            Ready to add your project to this list?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6"
          >
            Let&apos;s engineer something worth showing.
          </motion.h2>
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 shadow-lg shadow-accent/25 transition-colors"
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
          </motion.a>
        </div>
      </section>
    </div>
  );
}
