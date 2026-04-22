"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready to turn your idea into a <br className="hidden md:block"/> revenue-generating product?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-50 max-w-2xl mx-auto mb-10 opacity-90"
        >
          Stop settling for average websites. Let's build a premium platform that establishes your authority and converts visitors into paying customers.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-50 hover:scale-105 shadow-xl shadow-black/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
