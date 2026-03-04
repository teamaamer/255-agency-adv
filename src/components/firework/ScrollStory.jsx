'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart3, Target, PartyPopper } from 'lucide-react';

export default function ScrollStory() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';
  
  const stories = [
    {
      title: "We Build Brands That Compete.",
      description: "Strategic positioning that cuts through noise and captures market share.",
      bgGradient: "from-primary/20 to-background"
    },
    {
      title: "We Combine Data With Bold Execution.",
      description: "Insights-driven creativity that delivers measurable impact.",
      bgGradient: "from-dark-gray/40 to-background"
    },
    {
      title: "We Activate Experiences.",
      description: "Immersive brand moments that create lasting connections.",
      bgGradient: "from-primary-dark/20 to-background"
    }
  ];

  return (
    <section className="relative bg-background">
      {stories.map((story, index) => (
        <StorySection key={index} story={story} index={index} isRTL={isRTL} />
      ))}
    </section>
  );
}

function StorySection({ story, index, isRTL }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], isRTL ? [100, 0, 0, -100] : [-100, 0, 0, 100]);

  return (
    <div ref={ref} className="relative h-screen flex items-center">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${story.bgGradient}`}>
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] bg-repeat" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, x }}
            className={isRTL ? 'text-right lg:order-2' : 'text-left'}
          >
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
              {story.title}
            </h2>
            <p className="text-2xl text-medium-gray leading-relaxed max-w-2xl">
              {story.description}
            </p>
          </motion.div>

          {/* Media placeholder */}
          <motion.div
            style={{ opacity }}
            className={`hidden lg:block ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="aspect-video bg-dark-gray/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/20">
                {index === 0 && <BarChart3 className="w-48 h-48" />}
                {index === 1 && <Target className="w-48 h-48" />}
                {index === 2 && <PartyPopper className="w-48 h-48" />}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
