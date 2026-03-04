'use client';

import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Flower2, Brain, UtensilsCrossed, Bus, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AsymmetricPortfolio() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const projects = [
    { title: "Evest Ramadan", category: "Campaign", size: "large", icon: DollarSign },
    { title: "FIT Products", category: "Branding", size: "small", icon: Flower2 },
    { title: "SCD Awareness", category: "Social", size: "small", icon: Brain },
    { title: "Al Qaser", category: "Restaurant", size: "medium", icon: UtensilsCrossed },
    { title: "Grand Nablus", category: "Transport", size: "medium", icon: Bus },
    { title: "Product Launch", category: "Video", size: "large", icon: Video }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-6">
            {t.portfolio?.title || "Selected Work"}
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const colSpan = 
              project.size === 'large' ? 'col-span-12 lg:col-span-8' :
              project.size === 'medium' ? 'col-span-12 lg:col-span-6' :
              'col-span-12 lg:col-span-4';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colSpan} group cursor-pointer`}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-video">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-light-gray to-background flex items-center justify-center">
                    <project.icon className="w-64 h-64 opacity-10 text-foreground" />
                  </div>

                  {/* Dark Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-foreground/90 flex items-center justify-center"
                  >
                    <div className="text-center text-white p-8">
                      <div className="text-sm text-primary uppercase tracking-widest mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 justify-center group-hover:translate-x-2 transition-transform">
                        <span>View Case Study</span>
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
