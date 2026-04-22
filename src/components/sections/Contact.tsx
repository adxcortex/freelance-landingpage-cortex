"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    budget: '₹10k - ₹25k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for your message! I'll be in touch shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Let's build something <span className="text-primary">amazing</span> together.
            </motion.h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-md">
              Whether you need a complete rebrand or a complex web application, I'm here to help turn your vision into reality.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500">Email</p>
                  <p className="font-medium">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500">Phone</p>
                  <p className="font-medium">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <select 
                    value={formState.projectType}
                    onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                  >
                    <option>Landing Page</option>
                    <option>Business Website</option>
                    <option>Web App</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Budget Range</label>
                  <select 
                    value={formState.budget}
                    onChange={(e) => setFormState({...formState, budget: e.target.value})}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                  >
                    <option>&lt; ₹10,000</option>
                    <option>₹10k - ₹25k</option>
                    <option>₹25k - ₹50k</option>
                    <option>&gt; ₹50k</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project goals, timeline, etc."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Start Your Project
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-3xl -z-0" />
    </section>
  );
}
