'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ImmersiveCTA() {
  const { t, currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  return (
    <section className="relative py-48 lg:py-64 bg-gradient-to-br from-black via-dark to-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 54, 0, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 54, 0, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 54, 0, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-6xl lg:text-9xl font-black text-white mb-12 leading-tight">
            {t.cta?.title || "Ready to Compete at Full 255?"}
          </h2>

          {/* CTA Button */}
          <motion.a
            href="mailto:255@255.ps"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white px-12 py-6 text-xl font-bold transition-all duration-300 group"
          >
            <span>{t.cta?.button || "Book a Consultation"}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </motion.a>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-medium-gray"
          >
            <p className="text-lg">255@255.ps • +970 592 555 255</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
