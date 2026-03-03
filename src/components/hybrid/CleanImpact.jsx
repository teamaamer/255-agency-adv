'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CleanImpact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 150, suffix: '+', label: 'Clients Served' },
    { value: 20, suffix: '', label: 'Creative Professionals' },
    { value: 4, suffix: '', label: 'Global Offices' },
    { value: 5, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="text-center"
            >
              {/* Huge Number */}
              <div className="text-7xl lg:text-8xl font-black text-foreground mb-4 tracking-tight">
                {isInView && <Counter target={stat.value} suffix={stat.suffix} />}
              </div>
              {/* Clean Label */}
              <div className="text-lg text-medium-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}
