"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "../../data/projects";

interface FilterTabsProps {
  active: string;
  onChange: (id: string) => void;
  counts: Record<string, number>;
}

export function FilterTabs({ active, onChange, counts }: FilterTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
      role="tablist"
      aria-label="Filter projects by category"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat.id)}
            className={`relative flex-shrink-0 px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
              isActive
                ? "text-white"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-white/[0.08] hover:border-white/[0.15]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
              />
            )}
            {cat.label}
            {counts[cat.id] !== undefined && (
              <span
                className={`ml-2 text-xs ${
                  isActive ? "text-white/70" : "text-[var(--text-muted)]"
                }`}
              >
                {counts[cat.id]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
