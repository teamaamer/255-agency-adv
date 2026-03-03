'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StatScroll() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // State for formatted numbers
  const [formattedClients, setFormattedClients] = useState('0');
  const [formattedAwards, setFormattedAwards] = useState('0');
  const [formattedSatisfaction, setFormattedSatisfaction] = useState('0');

  // Helper function to format numbers
  const formatNumber = (num) => {
    return Math.round(num).toString();
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Stats counter animations - start at 10% and complete by 25%
  const clientsCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 150], {
    clamp: true,
  });
  const awardsCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 240], {
    clamp: true,
  });
  const satisfactionCount = useTransform(scrollYProgress, [0.1, 0.25], [0, 90], {
    clamp: true,
  });

  // Update formatted numbers on motion value changes
  useMotionValueEvent(clientsCount, 'change', (latest) => {
    setFormattedClients(formatNumber(latest));
  });
  useMotionValueEvent(awardsCount, 'change', (latest) => {
    setFormattedAwards(formatNumber(latest));
  });
  useMotionValueEvent(satisfactionCount, 'change', (latest) => {
    setFormattedSatisfaction(formatNumber(latest));
  });

  // Opacity animations
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.2, 1], [0, 1, 1]);
  const iconsOpacity = useTransform(scrollYProgress, [0.05, 0.15, 1], [0, 0.4, 0.4]);

  // Transform animations
  const statsY = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  const statsScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

  // Heading animations
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.15, 1], [0, 1, 1]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);

  // Icon rotation and movement
  const iconRotate = useTransform(scrollYProgress, [0.05, 0.9], [0, 360]);
  const iconY = useTransform(scrollYProgress, [0.05, 0.3], [100, -50]);

  // Scroll indicator fade
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);

  const floatingIcons = [
    { Icon: Users, position: 'left-[10%] top-[20%]' },
    { Icon: Award, position: 'right-[15%] top-[30%]' },
    { Icon: TrendingUp, position: 'left-[20%] bottom-[25%]' },
    { Icon: Award, position: 'right-[25%] bottom-[35%]' },
    { Icon: Users, position: 'left-[15%] top-[50%]' },
    { Icon: TrendingUp, position: 'right-[20%] top-[60%]' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full"
      style={{ zIndex: 1 }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-primary to-[#ff5722]"
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: iconsOpacity }}
        >
          {floatingIcons.map(({ Icon, position }, index) => (
            <motion.div
              key={index}
              className={`absolute ${position}`}
              style={{
                rotate: iconRotate,
                y: iconY,
              }}
            >
              <Icon className="h-12 w-12 text-white/20" strokeWidth={1.5} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20"
          style={{
            opacity: statsOpacity,
            y: statsY,
            scale: statsScale,
          }}
        >
          {/* Heading Section */}
          <motion.div
            className="text-center mb-12"
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                {t.hero?.stats?.success || "OUR IMPACT"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {t.stats?.heading || "Unlocking Success Stories"}
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              {t.stats?.subheading || "Trusted by Brands Worldwide"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center px-2 sm:px-4">
            {/* Clients Stat */}
            <motion.div className="transform">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white shadow-2xl hover:shadow-[0_0_40px_rgba(254,247,1,0.4)] transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 text-primary">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {formattedClients}+
                </div>
                <div className="text-sm sm:text-base text-primary/80 font-medium">
                  {t.hero?.stats?.globalClients || "Global Clients Served"}
                </div>
              </div>
            </motion.div>

            {/* Awards Stat */}
            <motion.div className="transform">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white shadow-2xl hover:shadow-[0_0_40px_rgba(254,247,1,0.4)] transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 text-primary">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {formattedAwards}+
                </div>
                <div className="text-sm sm:text-base text-primary/80 font-medium">
                  {t.hero?.stats?.industryAwards || "Industry Awards"}
                </div>
              </div>
            </motion.div>

            {/* Satisfaction Stat */}
            <motion.div className="transform">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white shadow-2xl hover:shadow-[0_0_40px_rgba(254,247,1,0.4)] transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 text-primary">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {formattedSatisfaction}%
                </div>
                <div className="text-sm sm:text-base text-primary/80 font-medium">
                  {t.hero?.stats?.customerSatisfaction || "Customer Satisfaction"}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-12"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <div className="animate-bounce">
              <div className="flex flex-col items-center text-white">
                <span className="text-sm font-semibold mb-2">Scroll to explore</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
