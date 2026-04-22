"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/site';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent blur-3xl rounded-full mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited slots available this month
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">websites that convert visitors into revenue</span> - not just clicks
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
              Helping local businesses and startups grow with fast, modern, high-converting websites and web apps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="group shadow-xl shadow-primary/20" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                Get My Price Estimate
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to discuss a project with you.")}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-foreground/60 font-medium">
              Used by startups & local businesses • Fast delivery • Conversion-focused
            </p>
          </motion.div>

          {/* Right Side - Interactive Element/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Main floating card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-gray-100 p-6 z-20 glass"
            >
              <div className="flex items-center justify-between mb-8 border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Conversion Rate</p>
                    <p className="text-xs text-gray-500">Last 30 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">+24%</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${85 - (i * 15)}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-medium w-8">{85 - (i * 15)}%</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md rounded-full border border-primary/20 scale-110" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md rounded-full border border-primary/10 scale-125" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
