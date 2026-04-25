"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 7h12M8 2.5L12.5 7 8 11.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 10L10 2M10 2H5M10 2V7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[var(--bg-elevated)] overflow-hidden hover:border-white/[0.13] transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-[var(--bg-subtle)]">
        {/* Color wash that represents the project */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ background: `radial-gradient(ellipse at 30% 40%, ${project.color}, transparent 70%)` }}
        />

        {/* Grid texture inside card thumbnail */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Abstract project visual - initials + color glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold font-display border border-white/10"
            style={{
              background: `${project.color}18`,
              color: project.color,
              boxShadow: `0 0 40px ${project.color}30`,
            }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              View Case Study <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              project.type === "client"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-violet-500/10 border-violet-500/20 text-violet-400"
            }`}
          >
            {project.type === "client" ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Client
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Concept
              </>
            )}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] tracking-tight mb-1.5 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-white/[0.05] text-[var(--text-muted)] border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-[var(--text-muted)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Metrics row */}
        {project.metrics && (
          <div className="flex gap-4 mb-5 pt-4 border-t border-white/[0.05]">
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p
                  className="font-display text-base font-bold tracking-tight"
                  style={{ color: project.color }}
                >
                  {m.value}
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5 leading-none">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group/link"
          >
            Read case study
            <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
              <ArrowIcon />
            </span>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label={`Visit ${project.title} live`}
            >
              Live <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
