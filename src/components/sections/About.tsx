"use client";

import { motion } from 'framer-motion';
import { Target, Lightbulb, Trophy } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-1"
          >
            <div className="aspect-square  lg:aspect-2/3 rounded-3xl overflow-hidden bg-gray-100 relative">
              <img 
                src="/me.webp" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl shadow-primary/10 border border-gray-100 max-w-[240px] hidden lg:block"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">3+</p>
                    <p className="text-xs text-gray-500 font-medium">Projects Delivered</p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">1+ Years</p>
                    <p className="text-xs text-gray-500 font-medium">Real-World Exp</p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </motion.div>

          <div className='col-span-2'>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              My Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Hands-on experience in real production environments
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-10"
            >
              <p>
                Started building and fixing real-world projects early, evolving into delivering full-stack solutions for clients. I avoid bloated theory and focus directly on performance, scalability, and business impact.
              </p>
              <p>
                Whether it's a fast local business site or a complex web app, I bridge the gap between stunning design and high-converting strategy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Outcome Focused</h3>
                <p className="text-sm text-foreground/70">Everything I build is designed to increase your leads and sales.</p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Strategic Partner</h3>
                <p className="text-sm text-foreground/70">I advise on digital strategy, not just execution.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
