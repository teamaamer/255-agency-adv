'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Video, Camera, BarChart3, Palette, PartyPopper } from 'lucide-react';

export default function ElevatedServices() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: t.services?.socialMedia || "Social Media Management",
      description: "Strategic content and community building",
      icon: Smartphone
    },
    {
      title: "Video Production",
      description: "Cinematic storytelling that converts",
      icon: Video
    },
    {
      title: "Photography",
      description: "Visual narratives that captivate",
      icon: Camera
    },
    {
      title: "Marketing & Strategy",
      description: "Data-driven growth planning",
      icon: BarChart3
    },
    {
      title: "Print Design",
      description: "Tangible brand experiences",
      icon: Palette
    },
    {
      title: "Events & Activations",
      description: "Immersive brand moments",
      icon: PartyPopper
    }
  ];

  return (
    <section className="py-32 bg-light">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-6">
            {t.services?.title || "What We Do"}
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            {t.services?.subtitle || "From strategy to execution, we create marketing systems that drive visibility, engagement, and measurable growth."}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-light-gray hover:border-primary/20">
                {/* Background Media on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl"
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Zoom Effect */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredIndex === index ? 1.02 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
