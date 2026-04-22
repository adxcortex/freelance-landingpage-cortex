"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Code2, Globe, LayoutDashboard, Rocket, ShoppingCart, Cpu, Layout, BarChart, FileCode2 } from 'lucide-react';

const capabilities = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Modern websites for businesses that attract customers and generate leads.",
    tags: ["SEO", "Fast Load", "Mobile Responsive"],
    icon: Globe,
    mockType: "website"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages designed for ads, campaigns, and product launches.",
    tags: ["Conversion Focused", "A/B Ready"],
    icon: Rocket,
    mockType: "landing"
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Custom web apps with dashboards, user systems, and scalable backend.",
    tags: ["Auth", "API", "Dashboard"],
    icon: LayoutDashboard,
    mockType: "webapp"
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Online stores with payment integration and optimized checkout experience.",
    tags: ["Payments", "Performance"],
    icon: ShoppingCart,
    mockType: "ecommerce"
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    description: "Internal tools and dashboards to manage data, users, and workflows.",
    tags: ["Analytics", "Management"],
    icon: BarChart,
    mockType: "dashboard"
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Have a unique idea? I build tailored solutions based on your exact needs.",
    tags: ["Flexible", "Scalable"],
    icon: Cpu,
    mockType: "custom"
  }
];

const MockUI = ({ type }: { type: string }) => {
  switch(type) {
    case 'website':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex justify-between items-center mb-2">
            <div className="w-8 h-3 bg-gray-300 rounded"></div>
            <div className="flex gap-2"><div className="w-4 h-1 bg-gray-200 rounded"></div><div className="w-4 h-1 bg-gray-200 rounded"></div></div>
          </div>
          <div className="w-3/4 h-4 bg-primary/40 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-gray-300 rounded mb-4"></div>
          <div className="w-full h-12 bg-gray-100 rounded-md mt-auto"></div>
        </div>
      );
    case 'landing':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center">
          <div className="w-3/4 h-5 bg-gradient-to-r from-primary to-primary-light rounded-md"></div>
          <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
          <div className="w-24 h-6 bg-primary rounded-full mt-2"></div>
        </div>
      );
    case 'webapp':
      return (
        <div className="w-full h-full flex gap-3">
          <div className="w-1/4 h-full bg-gray-100 rounded flex flex-col gap-2 p-1">
            <div className="w-full h-2 bg-gray-300 rounded"></div>
            <div className="w-full h-2 bg-gray-200 rounded"></div>
            <div className="w-full h-2 bg-gray-200 rounded"></div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-4 bg-gray-100 rounded"></div>
            <div className="w-full flex-1 bg-primary/10 rounded border border-primary/20"></div>
          </div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex justify-between mb-1"><div className="w-12 h-2 bg-gray-300 rounded"></div><div className="w-4 h-4 bg-primary/20 rounded-full"></div></div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-gray-100 rounded flex flex-col p-1 gap-1"><div className="flex-1 bg-gray-200 rounded"></div><div className="w-8 h-2 bg-primary/40 rounded"></div></div>
            <div className="bg-gray-100 rounded flex flex-col p-1 gap-1"><div className="flex-1 bg-gray-200 rounded"></div><div className="w-8 h-2 bg-primary/40 rounded"></div></div>
          </div>
        </div>
      );
    case 'dashboard':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 bg-primary/10 rounded"></div>
            <div className="h-8 bg-gray-100 rounded"></div>
            <div className="h-8 bg-gray-100 rounded"></div>
          </div>
          <div className="flex-1 bg-gray-50 rounded border border-gray-100 flex items-end p-2 gap-1 justify-between">
             {[40, 70, 45, 90, 60].map((h, i) => <div key={i} className="w-full bg-primary/30 rounded-t" style={{height: `${h}%`}}></div>)}
          </div>
        </div>
      );
    case 'custom':
    default:
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-lg animate-[spin_4s_linear_infinite]"></div>
            <div className="absolute inset-2 border-2 border-primary/40 rounded-lg animate-[spin_3s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center"><FileCode2 className="w-5 h-5 text-primary" /></div>
          </div>
        </div>
      );
  }
};

export function Projects() {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What I Can Build For You
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-foreground/70 text-lg"
          >
            Real-world solutions I design and develop based on your business needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Visual Area */}
              <div className="aspect-[16/9] relative bg-gray-50 border-b border-gray-100 overflow-hidden flex items-center justify-center">
                {/* Base State */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <item.icon className="w-12 h-12 text-gray-300 group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Hover Mock UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex items-center justify-center">
                  <div className="w-full h-full glass rounded-xl shadow-lg border border-white/50 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <MockUI type={item.mockType} />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-primary/5 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-4">Need something similar or completely custom?</h3>
          <p className="text-foreground/60 text-sm mb-8">
            Every project is built from scratch based on your goals — no templates, no shortcuts.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Your Project Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
