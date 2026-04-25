"use client";

import { motion } from "framer-motion";

const PAINS = [
  {
    symptom: "Paying for traffic that doesn't convert",
    reality:
      "You're spending on ads, SEO, or outreach - but the website doesn't close. A generic template signals a generic business.",
  },
  {
    symptom: "Losing deals to inferior competitors",
    reality:
      "Your product may be better, but if their website looks ₹5L more expensive, the client picks them. Perception is the product.",
  },
  {
    symptom: "Can't raise prices without losing leads",
    reality:
      "Premium pricing requires a premium presence. Mismatched positioning actively caps your revenue ceiling.",
  },
];

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Problem() {
  return (
    <section
      id="problem"
      aria-label="The problem"
      className="py-24 md:py-32 bg-subtle relative overflow-hidden"
    >
      {/* Divider line glow */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="container-padded">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-text block mb-4"
          >
            The real problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight"
          >
            Your website is silently
            <br />
            <span className="text-gradient">costing you clients.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 text-muted text-lg leading-relaxed"
          >
            Every day you operate with a mismatched digital presence, your
            highest-paying prospects quietly choose the competitor who looks
            the part - regardless of who's actually better.
          </motion.p>
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {PAINS.map((pain, i) => (
            <motion.article
              key={pain.symptom}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={itemVariants}
              className="glass-card p-7 group relative overflow-hidden"
            >
              {/* Accent left border */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-accent/40 rounded-full group-hover:bg-accent/70 transition-colors duration-300" />

              <p className="font-semibold text-foreground text-[0.95rem] mb-3 pl-4">
                {pain.symptom}
              </p>
              <p className="text-muted text-sm leading-relaxed pl-4">
                {pain.reality}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bridge statement */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center text-muted text-base max-w-xl mx-auto"
        >
          This isn&apos;t a design problem. It&apos;s a{" "}
          <span className="text-foreground font-medium">
            positioning infrastructure problem
          </span>
          . And it has a precise solution.
        </motion.p>
      </div>
    </section>
  );
}
