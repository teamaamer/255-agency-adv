'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TypographyServices() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      title: t.services?.socialMedia || "STRATEGY",
      description: "Data-driven planning and market positioning",
      emoji: "📊"
    },
    { 
      title: "BRANDING",
      description: "Visual identity and brand systems",
      emoji: "🎨"
    },
    { 
      title: "CAMPAIGNS",
      description: "Integrated creative execution",
      emoji: "🚀"
    },
    { 
      title: "DIGITAL",
      description: "Web and app experiences",
      emoji: "💻"
    },
    { 
      title: "ACTIVATIONS",
      description: "Immersive brand experiences",
      emoji: "🎪"
    },
    { 
      title: "PRODUCTION",
      description: "Video and content creation",
      emoji: "🎬"
    }
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Service List */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2 text-right' : ''}`}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setActiveService(index)}
                className="cursor-pointer group"
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className={`text-5xl lg:text-7xl font-black transition-all duration-300 ${
                  activeService === index 
                    ? 'text-primary' 
                    : 'text-white/30 group-hover:text-white/60'
                }`}>
                  {service.title}
                </h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeService === index ? 1 : 0,
                    height: activeService === index ? 'auto' : 0
                  }}
                  className="text-xl text-medium-gray mt-4 overflow-hidden"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Right - Background Media */}
          <div className={`hidden lg:block ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="sticky top-32">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-square bg-gradient-to-br from-dark-gray to-background border border-white/10 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <div className="text-9xl opacity-20">
                  {services[activeService].emoji}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
