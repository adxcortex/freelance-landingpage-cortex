import Link from "next/link";
import type { Project } from "../../data/projects";

interface CaseStudyLayoutProps {
  project: Project;
}

const ArrowLeftIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M13 7H1M6 11.5L1.5 7 6 2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      {/* Hero band */}
      <div className="relative pt-28 pb-16 overflow-hidden">
        {/* Color glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-15"
          style={{ background: project.color }}
          aria-hidden
        />
        <div className="container-padded relative z-10">
          {/* Back */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-10 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeftIcon />
            </span>
            All work
          </Link>

          {/* Type badge */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                project.type === "client"
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-violet-500/10 border-violet-500/20 text-violet-400"
              }`}
            >
              {project.type === "client" ? "Client Project" : "Concept Build"}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-[var(--text-secondary)] border border-white/[0.08]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        aria-hidden
        className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />

      {/* Body */}
      <div className="container-padded py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          {/* Main narrative */}
          <div className="space-y-12">
            {/* Problem */}
            <section aria-labelledby="problem-heading">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  01
                </span>
                <h2
                  id="problem-heading"
                  className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)]"
                >
                  The Problem
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-[1.0625rem] leading-relaxed pl-9">
                {project.problem}
              </p>
            </section>

            {/* Approach */}
            <section aria-labelledby="approach-heading">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  02
                </span>
                <h2
                  id="approach-heading"
                  className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)]"
                >
                  The Approach
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-[1.0625rem] leading-relaxed pl-9">
                {project.approach}
              </p>
            </section>

            {/* Outcome */}
            <section aria-labelledby="outcome-heading">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  03
                </span>
                <h2
                  id="outcome-heading"
                  className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)]"
                >
                  The Outcome
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-[1.0625rem] leading-relaxed pl-9">
                {project.outcome}
              </p>
            </section>
          </div>

          {/* Sidebar - metrics + CTA */}
          <aside className="space-y-4">
            {/* Metrics */}
            {project.metrics?.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/[0.07] bg-[var(--bg-elevated)] p-5"
              >
                <p
                  className="font-display text-3xl font-bold tracking-tight"
                  style={{ color: project.color }}
                >
                  {m.value}
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{m.label}</p>
              </div>
            ))}

            {/* CTA nudge */}
            <div className="rounded-xl border border-dashed border-white/[0.08] p-5 mt-6">
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                Want something like this built for your product?
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors"
              >
                Apply for a Build
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
