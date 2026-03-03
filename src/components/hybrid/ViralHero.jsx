'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';

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
    <section ref={ref} className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle camel watermark */}
      <motion.div 
        style={{ opacity: 0.03 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[40rem] pointer-events-none"
      >
        🐪
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <motion.div 
          style={{ y, opacity }}
          className="grid lg:grid-cols-2 gap-16 items-center w-full py-20"
        >
          {/* Left Content - Viral Clean Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={isRTL ? 'text-right lg:order-2' : 'text-left'}
          >
            {/* Huge Typography with Serif Accent */}
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-8 text-foreground">
              <span className="block">CREATIVITY</span>
              <span className="block font-serif italic text-primary">done right.</span>
            </h1>

            {/* Clean Description */}
            <p className="text-xl lg:text-2xl text-medium-gray mb-12 leading-relaxed max-w-xl">
              {t.hero?.heroDescription || "We combine strategy, execution, and bold storytelling to build brands that compete globally."}
            </p>

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
            className={`hidden lg:block ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative">
              {/* Vertical Video Mockup Style */}
              <div className="aspect-[9/16] max-h-[600px] bg-light-gray rounded-3xl overflow-hidden shadow-2xl border border-light-gray">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
                  {/* Placeholder - Replace with actual video */}
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4 opacity-20">🎬</div>
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
        </motion.div>
      </div>
    </section>
  );
}
