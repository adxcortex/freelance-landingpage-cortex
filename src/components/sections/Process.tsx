"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and the problem you're trying to solve. No code is written until we have a solid plan."
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description: "I map out the user journey, plan the technical architecture, and define the features needed to achieve your goals effectively."
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Creating premium, intuitive interfaces that reflect your brand identity and guide users towards your conversion goals."
  },
  {
    number: "04",
    title: "Development",
    description: "Building your platform using modern, scalable technologies (React, Next.js) ensuring high performance and security."
  },
  {
    number: "05",
    title: "Launch & Optimization",
    description: "Rigorous testing followed by a smooth launch. We monitor performance and make data-driven optimizations to maximize ROI."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A proven process for success
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary/20 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-24 md:pl-0">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <span className="text-4xl font-black text-gray-100 absolute -top-4 -right-4 pointer-events-none select-none">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold mb-3 relative z-10 text-primary">{step.title}</h3>
                    <p className="text-foreground/70 relative z-10">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
