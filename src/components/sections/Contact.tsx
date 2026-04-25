"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

const BUDGET_OPTIONS = [
  "₹40k – ₹80k",
  "₹80k – ₹1.5L",
  "₹1.5L – ₹3L",
  "₹3L+",
];

const PROJECT_TYPES = [
  "Landing Page",
  "Business Website",
  "Web Application / SaaS",
  "Fractional Partnership",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;    // honeypot - hidden from humans
  projectType: string;
  budget: string;
  bottleneck: string;
  currentSite: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: PROJECT_TYPES[1],
    budget: BUDGET_OPTIONS[1],
    bottleneck: "",
    currentSite: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const loadedAt    = useRef(Date.now());
  const interactions = useRef(0);

  const touch = () => { interactions.current += 1; };

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam guards
    const elapsed = (Date.now() - loadedAt.current) / 1000;
    if (form.company || elapsed < 3 || interactions.current < 2) {
      setStatus("success"); // silent fail for bots
      return;
    }

    const lastSubmit = localStorage.getItem("_lsub");
    if (lastSubmit && Date.now() - Number(lastSubmit) < 60_000) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = new FormData();
    payload.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    payload.append("subject",  `New enquiry from ${form.name} - ${form.projectType}`);
    payload.append("name",       form.name);
    payload.append("email",      form.email);
    payload.append("project_type", form.projectType);
    payload.append("budget",     form.budget);
    payload.append("bottleneck", form.bottleneck);
    payload.append("current_site", form.currentSite);
    payload.append("botcheck",   "");

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("_lsub", String(Date.now()));
        setStatus("success");
        setForm({ name:"", email:"", company:"", projectType: PROJECT_TYPES[1], budget: BUDGET_OPTIONS[1], bottleneck:"", currentSite:"" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-elevated border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-150";

  return (
    <section
      id="contact"
      aria-label="Contact and project application"
      className="py-24 md:py-32 bg-background relative"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="container-padded">
        <div className="grid lg:grid-cols-[1fr_540px] gap-16 lg:gap-20 items-start">

          {/* ── LEFT: context ── */}
          <div className="lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="label-text block mb-4"
            >
              Apply for a build
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5"
            >
              Tell me about
              <br />
              <span className="text-gradient">your project.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-muted text-[0.95rem] leading-relaxed mb-10"
            >
              I review every application personally. If there&apos;s a fit, I&apos;ll
              reach out within 24 hours to schedule a 20-minute strategy call.
              <br /><br />
              No commitment required - just a real conversation about what
              you&apos;re trying to build.
            </motion.p>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="space-y-3"
            >
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-elevated border border-white/[0.07] flex items-center justify-center group-hover:border-white/14 transition-colors">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.2">
                    <rect x="1" y="3" width="14" height="10" rx="2"/>
                    <path d="M1 5.5l7 4.5 7-4.5"/>
                  </svg>
                </span>
                {siteConfig.contact.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-elevated border border-white/[0.07] flex items-center justify-center group-hover:border-white/14 transition-colors">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current text-[#25D366]">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.74 1.01 3.89L0 16l4.24-1.1A7.96 7.96 0 008 16c4.42 0 8-3.58 8-8S12.42 0 8 0zm4.15 11.3c-.18.5-1.03.94-1.43.98-.37.04-.85.05-1.36-.09-.31-.09-.72-.21-1.22-.43-2.13-.92-3.52-3.05-3.62-3.19-.1-.14-.82-1.09-.82-2.08 0-.99.52-1.48.7-1.68.18-.2.4-.25.53-.25h.38c.12 0 .28-.05.44.34.17.41.57 1.4.62 1.5.05.1.08.22.02.35-.06.13-.1.21-.19.32-.1.11-.2.25-.29.34-.1.1-.19.2-.08.39.11.19.49.81 1.06 1.31.73.65 1.34.85 1.53.94.19.09.3.08.41-.05.11-.13.48-.56.61-.75.13-.19.26-.16.44-.1.18.07 1.16.55 1.36.65.2.1.33.15.38.23.05.08.05.48-.13.98z"/>
                  </svg>
                </span>
                WhatsApp - quick chat
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "success" ? (
              <div className="glass-card p-10 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 text-emerald-400 fill-none stroke-current" strokeWidth="1.8">
                    <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Application received.</h3>
                <p className="text-muted text-sm max-w-xs">
                  I&apos;ll review your project and reach out within 24 hours.
                  Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onClick={touch}
                onChange={touch}
                onKeyDown={touch}
                className="glass-card p-7 md:p-8 space-y-5"
                noValidate
              >
                {/* Honeypot - invisible to humans */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={set("company")}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-name" className="text-xs font-medium text-muted">
                      Your name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={set("name")}
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-email" className="text-xs font-medium text-muted">
                      Work email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-type" className="text-xs font-medium text-muted">
                      Project type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="cf-type"
                      value={form.projectType}
                      onChange={set("projectType")}
                      className={inputBase}
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-budget" className="text-xs font-medium text-muted">
                      Budget range <span className="text-accent">*</span>
                    </label>
                    <select
                      id="cf-budget"
                      value={form.budget}
                      onChange={set("budget")}
                      className={inputBase}
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-site" className="text-xs font-medium text-muted">
                    Current website (if any)
                  </label>
                  <input
                    id="cf-site"
                    type="url"
                    autoComplete="url"
                    placeholder="https://yoursite.com"
                    value={form.currentSite}
                    onChange={set("currentSite")}
                    className={inputBase}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-bottleneck" className="text-xs font-medium text-muted">
                    What&apos;s your biggest bottleneck right now?{" "}
                    <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="cf-bottleneck"
                    required
                    rows={4}
                    placeholder="e.g. Poor conversion rates, outdated design, no CMS, slow load times…"
                    value={form.bottleneck}
                    onChange={set("bottleneck")}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all duration-150 shadow-lg shadow-accent/20"
                >
                  {status === "submitting" ? "Sending…" : "Submit Application"}
                </button>

                <p className="text-xs text-dimmed text-center">
                  Minimum engagement: ₹40,000 · Response within 24 hrs
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
