"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Search, Zap, Layout } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Custom, responsive websites built to establish your online presence and attract high-quality leads.",
    icon: Globe,
  },
  {
    title: "Web Applications",
    description: "Complex, scalable SaaS platforms and web apps that automate your business processes.",
    icon: Layout,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed specifically to increase user engagement and conversions.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description: "Technical and on-page SEO that helps you rank higher on Google and get found by your ideal clients.",
    icon: Search,
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds that improve user experience and reduce bounce rates.",
    icon: Zap,
  },
  {
    title: "Mobile-First Design",
    description: "Flawless experiences across all devices, ensuring you never lose a customer on mobile.",
    icon: Smartphone,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            What I Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Solutions that drive business growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            I don't just write code. I solve business problems through technology, focusing on what matters most: your bottom line.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
