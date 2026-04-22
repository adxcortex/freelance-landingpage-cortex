"use client";

import { useState, useEffect, useRef } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Anti-spam & Behavior Tracking state
  const loadTime = useRef<number>(0);
  const interactionCount = useRef<number>(0);
  const visitorId = useRef<string>('unknown');
  const ipAddress = useRef<string>('');
  const metadata = useRef<Record<string, any>>({});

  useEffect(() => {
    loadTime.current = Date.now();

    // 1. Generate Canvas Fingerprint
    const getCanvasFingerprint = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return '';
        ctx.textBaseline = "top";
        ctx.font = "14px 'Arial'";
        ctx.fillStyle = "#f60";
        ctx.fillRect(125,1,62,20);
        ctx.fillStyle = "#069";
        ctx.fillText("Fingerprint 123 !@#", 2, 15);
        ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
        ctx.fillText("Fingerprint 123 !@#", 4, 17);
        return canvas.toDataURL();
      } catch (e) {
        return '';
      }
    };

    // 2. Hash Function (SHA-256)
    const hashString = async (msg: string) => {
      try {
        const msgBuffer = new TextEncoder().encode(msg);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      } catch (e) {
        return 'hash_failed';
      }
    };

    // 3. Collect Metadata
    const collectData = async () => {
      const data = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled,
        deviceMemory: (navigator as any).deviceMemory || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency,
        canvasHash: getCanvasFingerprint()
      };
      metadata.current = data;
      
      const combined = Object.values(data).join('|');
      visitorId.current = await hashString(combined);
      
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        ipAddress.current = ipData.ip;
      } catch (e) {
        // Fallback: Web3Forms captures IP automatically if not provided
      }
    };

    collectData();
  }, []);

  const handleInteraction = () => {
    interactionCount.current += 1;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    // Spam Protection Checks
    const honeypot = formData.get("company");
    const timeToSubmit = (Date.now() - loadTime.current) / 1000;
    
    // Rate Limiting (1 submission per minute)
    const lastSubmitTime = localStorage.getItem('last_submit_time');
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) {
      console.warn('Rate limited');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (honeypot || timeToSubmit < 2 || interactionCount.current === 0) {
      console.warn('Spam detected, submission blocked');
      // Silently fail for bots
      setSubmitStatus('success'); 
      formElement.reset();
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    localStorage.setItem('last_submit_time', now.toString());

    // Append standard payload
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    // Append Advanced Tracking and Metadata
    formData.append("time_to_submit", timeToSubmit.toString());
    formData.append("interaction_count", interactionCount.current.toString());
    formData.append("visitor_id", visitorId.current);
    if (ipAddress.current) {
      formData.append("ip_address", ipAddress.current);
    }
    
    // Append individual metadata properties
    Object.entries(metadata.current).forEach(([key, val]) => {
      formData.append(`meta_${key}`, String(val));
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          projectType: 'Business Website',
          budget: '₹10k - ₹25k',
          message: ''
        });
        formElement.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error("Form submission error:", data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit} onClick={handleInteraction} onChange={handleInteraction} onKeyDown={handleInteraction} className="space-y-6">
              {/* Spam Protection Honeypot */}
              <input type="text" name="company" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
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
                    name="email"
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
                    name="projectType"
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
                    name="budget"
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
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project goals, timeline, etc."
                ></textarea>
              </div>

              {/* Web3Forms spam protection botcheck */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Start Your Project'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm text-center font-medium">
                  Thanks! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center font-medium">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 rounded-l-3xl -z-0" />
    </section>
  );
}
