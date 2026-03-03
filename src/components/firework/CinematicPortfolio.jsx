'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CinematicPortfolio() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const projects = [
    { 
      title: "Evest Ramadan Campaign",
      category: "Campaign",
      size: "large",
      emoji: "💰"
    },
    { 
      title: "FIT Feminine Products",
      category: "Branding",
      size: "medium",
      emoji: "🌸"
    },
    { 
      title: "SCD Awareness",
      category: "Campaign",
      size: "medium",
      emoji: "🧠"
    },
    { 
      title: "Al Qaser Restaurant",
      category: "Brand Identity",
      size: "large",
      emoji: "🍽️"
    },
    { 
      title: "Grand Nablus Bus",
      category: "Transportation",
      size: "medium",
      emoji: "🚌"
    },
    { 
      title: "Product Launch",
      category: "Video Production",
      size: "medium",
      emoji: "🎬"
    }
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-dark">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
            {t.portfolio?.title || "Work That Speaks Louder Than Words"}
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                project.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Card */}
              <div className={`relative bg-dark-gray border border-white/10 overflow-hidden ${
                project.size === 'large' ? 'aspect-[21/9]' : 'aspect-video'
              }`}>
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
                  <div className="text-9xl opacity-20">
                    {project.emoji}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className={`text-center ${isRTL ? 'text-right' : 'text-left'} px-8`}>
                    <div className="text-sm text-primary uppercase tracking-widest mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                      <span className="text-lg">View Case Study</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
