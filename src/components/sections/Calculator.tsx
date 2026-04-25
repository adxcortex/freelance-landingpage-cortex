"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { siteConfig } from '../../config/site';

const pricingData = {
  projectType: siteConfig.pricing.base,
  pages: siteConfig.pricing.pages,
  features: siteConfig.pricing.features,
  designLevel: siteConfig.pricing.designLevel,
  animations: siteConfig.pricing.animations,
  backend: siteConfig.pricing.backend,
  seo: siteConfig.pricing.seo
};

export function Calculator() {
  const [type, setType] = useState<"Landing Page" | "Business Website" | "Web App / SaaS">("Business Website");
  const [pages, setPages] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [design, setDesign] = useState<"Standard" | "Premium Design">("Premium Design");
  const [animations, setAnimations] = useState<"None" | "Moderate" | "Advanced">("Moderate");
  const [backend, setBackend] = useState<"No Backend" | "Core Backend" | "Advanced System">("No Backend");
  const [seo, setSeo] = useState<"Basic SEO" | "Technical SEO+">("Basic SEO");
  
  const [minTotal, setMinTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(0);

  useEffect(() => {
    let minCost = pricingData.projectType[type].min;
    let maxCost = pricingData.projectType[type].max;
    
    if (pages > 1) {
      minCost += (pages - 1) * pricingData.pages.base;
      maxCost += (pages - 1) * pricingData.pages.max;
    }
    
    selectedFeatures.forEach(f => {
      minCost += pricingData.features[f as keyof typeof pricingData.features];
      maxCost += pricingData.features[f as keyof typeof pricingData.features];
    });
    
    minCost += pricingData.designLevel[design];
    maxCost += pricingData.designLevel[design];
    
    minCost += pricingData.animations[animations];
    maxCost += pricingData.animations[animations];
    
    minCost += pricingData.backend[backend];
    maxCost += pricingData.backend[backend];
    
    minCost += pricingData.seo[seo];
    maxCost += pricingData.seo[seo];
    
    setMinTotal(minCost);
    setMaxTotal(maxCost);
  }, [type, pages, selectedFeatures, design, animations, backend, seo]);

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleCalculate = () => {
    const text = `Hi, I need a ${type}. My estimated budget is ₹${minTotal.toLocaleString('en-IN')} - ₹${maxTotal.toLocaleString('en-IN')}. Let's discuss further!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Project Cost Estimator
          </motion.h2>
          <p className="text-foreground/70 max-w-2xl mx-auto flex items-center justify-center gap-4 flex-wrap">
            <span>No hidden charges</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
            <span>Clear communication</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Controls */}
          <div className="lg:w-2/3 space-y-8">
            {/* Project Type */}
            <div>
              <h3 className="text-lg font-bold mb-4">Project Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(["Landing Page", "Business Website", "Web App / SaaS"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      type === t ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-gray-500 mt-1">From ₹{pricingData.projectType[t].min.toLocaleString('en-IN')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pages Slider */}
            <div>
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-bold">Number of Pages</h3>
                <span className="font-semibold text-primary">{pages} {pages === 1 ? 'Page' : 'Pages'}</span>
              </div>
              <input 
                type="range" 
                min="1" max="50" 
                value={pages} 
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <p className="text-xs text-gray-500 mt-2">First page included. +₹800 per additional page.</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold mb-4">Extra Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.keys(pricingData.features).map(f => (
                  <button
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      selectedFeatures.includes(f) ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                      selectedFeatures.includes(f) ? 'bg-primary border-primary text-white' : 'border-gray-300'
                    }`}>
                      {selectedFeatures.includes(f) && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Design */}
              <div>
                <h3 className="text-sm font-bold mb-3">Design Quality</h3>
                <select 
                  value={design} 
                  onChange={(e) => setDesign(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="Standard">Standard</option>
                  <option value="Premium Design">Premium Design</option>
                </select>
              </div>
              
              {/* Animations */}
              <div>
                <h3 className="text-sm font-bold mb-3">Animations</h3>
                <select 
                  value={animations} 
                  onChange={(e) => setAnimations(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="None">None</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Advanced">Advanced (Framer)</option>
                </select>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-sm font-bold mb-3">Backend & Database</h3>
                <select 
                  value={backend} 
                  onChange={(e) => setBackend(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="No Backend">No Backend</option>
                  <option value="Core Backend">Core Backend</option>
                  <option value="Advanced System">Advanced System</option>
                </select>
              </div>

              {/* SEO */}
              <div>
                <h3 className="text-sm font-bold mb-3">SEO Setup</h3>
                <select 
                  value={seo} 
                  onChange={(e) => setSeo(e.target.value as any)}
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="Basic SEO">Basic SEO</option>
                  <option value="Technical SEO+">Technical SEO+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sticky Total Panel */}
          <div className="lg:w-1/3">
            <div className="bg-foreground text-white rounded-3xl p-8 sticky top-32 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-gray-200">Estimated Range</h3>
              <div className="text-4xl font-black text-white mb-2">
                ₹{minTotal.toLocaleString('en-IN')} - ₹{maxTotal.toLocaleString('en-IN')}{type === "Web App / SaaS" ? '+' : ''}
              </div>
              <p className="text-gray-400 text-sm mb-8">
                Final pricing may vary based on exact requirements and scope.
              </p>

              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-[#25D366]/30 border-none" onClick={handleCalculate}>
                Get Exact Quote on WhatsApp
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
