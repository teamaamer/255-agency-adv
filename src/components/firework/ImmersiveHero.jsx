'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';

export default function ImmersiveHero() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Dark Video Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      
      {/* Placeholder for video background - replace with actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-gray via-background to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] bg-repeat" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 h-full flex items-center"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={isRTL ? 'text-right' : 'text-left'}
            >
              {/* Massive Typography */}
              <motion.h1
                className="text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="block text-white">CREATIVITY</span>
                <motion.div
                  className="h-2 lg:h-3 bg-primary mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ transformOrigin: isRTL ? 'right' : 'left' }}
                />
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t.hero.makeYourAdAnAd || "We Make Your Ad An Ad."}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg lg:text-xl text-medium-gray mb-12 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {t.hero.heroDescription || "A multidisciplinary team multiplying creative impact across markets."}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <a
                  href="#contact"
                  className="group bg-primary hover:bg-primary-dark text-white px-10 py-5 text-lg font-bold transition-all duration-300 flex items-center gap-3"
                >
                  {t.hero.startYourProject || "Start Your Project"}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </a>
                <a
                  href="#work"
                  className="border-2 border-white text-white hover:bg-white hover:text-background px-10 py-5 text-lg font-bold transition-all duration-300"
                >
                  {t.hero.exploreOurWork || "Explore Our Work"}
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Refined Camel */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-[20rem] h-[20rem] opacity-10 filter blur-sm"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                  <path d="M20,60 Q20,40 30,35 L35,30 Q40,25 45,30 L50,35 Q55,30 60,35 L65,40 Q70,35 75,40 L75,60 Q75,70 70,75 L30,75 Q25,70 25,60 Z M35,45 Q35,42 37,42 Q39,42 39,45 Q39,47 37,47 Q35,47 35,45 Z M61,45 Q61,42 63,42 Q65,42 65,45 Q65,47 63,47 Q61,47 61,45 Z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
