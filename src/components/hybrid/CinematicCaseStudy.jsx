'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CinematicCaseStudy() {
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const caseStudies = [
    {
      title: "Scaling a Beauty Brand with Video",
      client: "FIT Feminine Products",
      description: "Strategic video campaign driving 300% engagement increase across social platforms.",
      results: [
        { label: "Engagement", value: "+300%" },
        { label: "Reach", value: "2.5M" },
        { label: "Conversions", value: "+180%" }
      ],
      emoji: "🌸"
    },
    {
      title: "Financial Campaign Excellence",
      client: "Evest Ramadan Campaign",
      description: "Culturally-resonant campaign achieving record-breaking performance during Ramadan season.",
      results: [
        { label: "Impressions", value: "5M+" },
        { label: "Engagement", value: "+250%" },
        { label: "ROI", value: "4.2x" }
      ],
      emoji: "💰"
    }
  ];

  return (
    <section className="relative">
      {caseStudies.map((study, index) => (
        <CaseStudySection key={index} study={study} index={index} isRTL={isRTL} />
      ))}
    </section>
  );
}

function CaseStudySection({ study, index, isRTL }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f4f2ee", "#1a1a1a", "#f4f2ee"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1a1a1a", "#ffffff", "#1a1a1a"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="py-32"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            style={{ color: textColor }}
            className={isRTL ? 'lg:order-2 text-right' : 'text-left'}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm uppercase tracking-widest mb-4 opacity-60">
                Case Study {index + 1}
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {study.title}
              </h2>
              <p className="text-xl mb-8 opacity-80">
                {study.client}
              </p>
              <p className="text-lg leading-relaxed mb-12 opacity-70">
                {study.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-8">
                {study.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider opacity-60">
                      {result.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Media Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={isRTL ? 'lg:order-1' : ''}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
              <div className="text-9xl opacity-30">
                {study.emoji}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
