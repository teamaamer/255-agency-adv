'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ScrollProcess() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const steps = t.process?.steps || [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand, goals, audience, and market landscape."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Developing tailored marketing strategies that drive results."
    },
    {
      number: "03",
      title: "Creative Direction",
      description: "Crafting bold creative concepts that resonate."
    },
    {
      number: "04",
      title: "Production & Execution",
      description: "Bringing ideas to life with precision."
    },
    {
      number: "05",
      title: "Optimization & Support",
      description: "Continuous refinement for maximum impact."
    }
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-black text-white mb-24 text-center"
        >
          {t.process?.title || "Our Process"}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isRTL }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* Orange accent line */}
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1 h-full bg-primary`} />
      
      <div className={`${isRTL ? 'pr-12' : 'pl-12'}`}>
        <div className="text-7xl font-black text-white/10 mb-4">
          {step.number}
        </div>
        <h3 className="text-4xl lg:text-5xl font-black text-white mb-4">
          {step.title}
        </h3>
        <p className="text-xl text-medium-gray leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
