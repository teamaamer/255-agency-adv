'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GlobalPresence() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const [activeOffice, setActiveOffice] = useState(null);

  const offices = [
    {
      city: "Nablus",
      country: "Palestine",
      flag: "🇵🇸",
      position: { top: '45%', left: '52%' }
    },
    {
      city: "Nazareth",
      country: "Israel",
      flag: "🇮🇱",
      position: { top: '46%', left: '52.5%' }
    },
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      flag: "🇸🇦",
      position: { top: '50%', left: '55%' }
    },
    {
      city: "Houston",
      country: "USA",
      flag: "🇺🇸",
      position: { top: '48%', left: '20%' }
    }
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-black text-white mb-20 text-center"
        >
          Global Presence
        </motion.h2>

        {/* Map Container */}
        <div className="relative w-full aspect-[2/1] bg-dark-gray/30 rounded-lg border border-white/10 overflow-hidden">
          {/* Subtle world map outline */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <circle cx="200" cy="240" r="3" fill="white" />
              <circle cx="520" cy="225" r="3" fill="white" />
              <circle cx="550" cy="250" r="3" fill="white" />
              <circle cx="480" cy="230" r="3" fill="white" />
            </svg>
          </div>

          {/* Office Markers */}
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={office.position}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onMouseEnter={() => setActiveOffice(index)}
              onMouseLeave={() => setActiveOffice(null)}
            >
              {/* Dot */}
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
              </div>

              {/* Info Card */}
              {activeOffice === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 bg-dark border border-white/20 rounded-lg p-4 whitespace-nowrap z-10"
                >
                  <div className="text-3xl mb-2">{office.flag}</div>
                  <div className="text-white font-bold text-lg">{office.city}</div>
                  <div className="text-medium-gray text-sm">{office.country}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Office List */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-dark-gray/30 border border-white/10 rounded-lg hover:border-primary transition-colors"
            >
              <div className="text-4xl mb-3">{office.flag}</div>
              <div className="text-white font-bold text-lg">{office.city}</div>
              <div className="text-medium-gray text-sm">{office.country}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
