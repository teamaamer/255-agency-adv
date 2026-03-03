'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Why255Bold() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const statements = [
    "Built on Boldness.",
    "Driven by Clarity.",
    "Designed for Maximum Impact."
  ];

  return (
    <section className="relative py-48 lg:py-64 bg-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`${isRTL ? 'text-right' : 'text-left'}`}
            >
              <h2 className="text-6xl lg:text-9xl font-black text-white leading-tight">
                {statement}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
