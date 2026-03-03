'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CleanProcess() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const steps = t.process?.steps || [
    { number: "01", title: "Discovery", description: "Understanding your brand and market" },
    { number: "02", title: "Strategy", description: "Developing tailored growth plans" },
    { number: "03", title: "Creative Direction", description: "Crafting bold concepts" },
    { number: "04", title: "Production", description: "Bringing ideas to life" },
    { number: "05", title: "Optimization", description: "Continuous refinement" }
  ];

  return (
    <section ref={ref} className="py-32 bg-light">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-7xl font-black text-foreground text-center mb-24"
        >
          {t.process?.title || "Our Process"}
        </motion.h2>

        {/* Horizontal Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-light-gray">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-primary origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-5 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <span className="text-2xl font-black text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
