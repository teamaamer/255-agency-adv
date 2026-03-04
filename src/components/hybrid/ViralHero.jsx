'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import Image from 'next/image';

export default function ViralHero() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-background overflow-hidden pt-28">
      {/* Subtle camel watermark */}
      <motion.div 
        style={{ opacity: 0.03 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none flex items-center justify-center"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
          <path d="M20,60 Q20,40 30,35 L35,30 Q40,25 45,30 L50,35 Q55,30 60,35 L65,40 Q70,35 75,40 L75,60 Q75,70 70,75 L30,75 Q25,70 25,60 Z M35,45 Q35,42 37,42 Q39,42 39,45 Q39,47 37,47 Q35,47 35,45 Z M61,45 Q61,42 63,42 Q65,42 65,45 Q65,47 63,47 Q61,47 61,45 Z" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <motion.div 
          style={{ y, opacity }}
          className="w-full py-20"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Content - Viral Clean Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className="mb-12">
                {/* CREATIVITY heading */}
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-foreground mb-4">
                  CREATIVITY
                </h1>

                {/* Container for "done right" and description */}
                <div className="flex gap-8 items-stretch">
                  {/* Two lines: "done" and "right" stacked */}
                  <div className="flex flex-col">
                    <span className="text-7xl lg:text-8xl xl:text-9xl font-serif italic text-primary leading-none">done</span>
                    <span className="text-7xl lg:text-8xl xl:text-9xl font-serif italic text-primary leading-none">right.</span>
                  </div>

                  {/* Description - tall div matching the height of two lines */}
                  <p className="text-xl lg:text-2xl text-medium-gray leading-relaxed max-w-md flex items-center self-stretch">
                    {t.hero?.heroDescription || "We combine strategy, execution, and bold storytelling to build brands that compete globally."}
                  </p>
                </div>
              </div>

              {/* Clean CTA Buttons */}
              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary hover:bg-primary-dark text-white px-10 py-5 text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg"
                >
                  {t.hero?.startYourProject || "Start Your Project"}
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-10 py-5 text-lg font-semibold transition-all duration-300"
                >
                  {t.hero?.exploreOurWork || "Explore Our Work"}
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Cinematic Media Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="hidden lg:block flex-shrink-0"
            >
              <div className="relative">
                {/* Vertical Video Mockup Style */}
                <div className="aspect-[9/16] max-h-[600px] bg-light-gray rounded-3xl overflow-hidden shadow-2xl border border-light-gray">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
                    {/* Placeholder - Replace with actual video */}
                    <div className="text-center p-8">
                      <Video className="w-24 h-24 mx-auto mb-4 opacity-20 text-foreground" />
                      <p className="text-medium-gray">Campaign Video</p>
                    </div>
                  </div>
                </div>

                {/* Subtle floating animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
