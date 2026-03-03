'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CinematicCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-48 bg-dark overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(255, 54, 0, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(255, 54, 0, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(255, 54, 0, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Huge Headline */}
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-16 leading-tight">
            {t.cta?.title || "Ready to Compete at Full 255?"}
          </h2>

          {/* Glowing CTA Button */}
          <motion.a
            href="mailto:255@255.ps"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-primary hover:bg-primary-dark text-white px-14 py-7 text-xl font-bold transition-all duration-300 shadow-2xl group relative overflow-hidden"
          >
            <span className="relative z-10">{t.cta?.button || "Book a Consultation"}</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={28} />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary opacity-50 blur-2xl group-hover:opacity-70 transition-opacity" />
          </motion.a>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-white/60 text-lg"
          >
            <p>255@255.ps • +970 592 555 255</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
