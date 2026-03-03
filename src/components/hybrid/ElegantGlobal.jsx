'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ElegantGlobal() {
  const [activeOffice, setActiveOffice] = useState(null);

  const offices = [
    { city: "Nablus", country: "Palestine", flag: "🇵🇸", position: { top: '45%', left: '52%' } },
    { city: "Nazareth", country: "Israel", flag: "🇮🇱", position: { top: '46%', left: '52.5%' } },
    { city: "Riyadh", country: "Saudi Arabia", flag: "🇸🇦", position: { top: '50%', left: '55%' } },
    { city: "Houston", country: "USA", flag: "🇺🇸", position: { top: '48%', left: '20%' } }
  ];

  return (
    <section className="py-32 bg-light">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-7xl font-black text-foreground mb-20 text-center"
        >
          Global Presence
        </motion.h2>

        {/* Minimal Map */}
        <div className="relative w-full aspect-[2/1] bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <circle cx="200" cy="240" r="2" fill="#1a1a1a" />
              <circle cx="520" cy="225" r="2" fill="#1a1a1a" />
            </svg>
          </div>

          {/* Office Dots */}
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
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>

              {activeOffice === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-6 left-1/2 -translate-x-1/2 bg-foreground text-white rounded-lg p-4 whitespace-nowrap shadow-xl z-10"
                >
                  <div className="text-2xl mb-2">{office.flag}</div>
                  <div className="font-bold">{office.city}</div>
                  <div className="text-sm opacity-70">{office.country}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{office.flag}</div>
              <div className="font-bold text-lg text-foreground">{office.city}</div>
              <div className="text-medium-gray text-sm">{office.country}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
