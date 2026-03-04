'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart3, Palette, Rocket, Monitor, PartyPopper, Video } from 'lucide-react';

export default function TypographyServices() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const [activeService, setActiveService] = useState(0);

  const services = [
    { 
      title: t.services?.socialMedia || "STRATEGY",
      description: "Data-driven planning and market positioning",
      icon: BarChart3
    },
    { 
      title: "BRANDING",
      description: "Visual identity and brand systems",
      icon: Palette
    },
    { 
      title: "CAMPAIGNS",
      description: "Integrated creative execution",
      icon: Rocket
    },
    { 
      title: "DIGITAL",
      description: "Web and app experiences",
      icon: Monitor
    },
    { 
      title: "ACTIVATIONS",
      description: "Immersive brand experiences",
      icon: PartyPopper
    },
    { 
      title: "PRODUCTION",
      description: "Video and content creation",
      icon: Video
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
                {(() => {
                  const Icon = services[activeService].icon;
                  return <Icon className="w-64 h-64 opacity-20 text-white" />;
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
