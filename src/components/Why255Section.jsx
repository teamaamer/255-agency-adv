'use client';

import React from "react";
import FadeInBottom from "./animations/FadeInBottom";
import { useTranslation } from "@/contexts/LanguageContext";
import { Zap, Eye, TrendingUp } from "lucide-react";

const Why255Section = () => {
  const t = useTranslation();

  return (
    <section className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <FadeInBottom>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.why255?.title || "Why 255?"}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-white/95">
                {t.why255?.intro || "Brand building is step-by-step, like digital design built from precise values."}
              </p>
              <p className="text-white/95">
                {t.why255?.meaning || "255 is the highest value in the color scale, symbolizing boldness, clarity, and maximum impact."}
              </p>
            </div>
          </div>
        </FadeInBottom>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FadeInBottom delay={0.1}>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.why255?.boldness || "Boldness"}
              </h3>
              <p className="text-white/80">
                {t.why255?.boldnessDesc || "We push boundaries and take creative risks to make your brand stand out."}
              </p>
            </div>
          </FadeInBottom>

          <FadeInBottom delay={0.2}>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Eye className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.why255?.clarity || "Clarity"}
              </h3>
              <p className="text-white/80">
                {t.why255?.clarityDesc || "Clear communication and strategic focus ensure your message resonates."}
              </p>
            </div>
          </FadeInBottom>

          <FadeInBottom delay={0.3}>
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t.why255?.impact || "Maximum Impact"}
              </h3>
              <p className="text-white/80">
                {t.why255?.impactDesc || "Every decision is optimized for the highest possible value and results."}
              </p>
            </div>
          </FadeInBottom>
        </div>

        <FadeInBottom delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <p className="text-xl md:text-2xl font-bold text-white">
                {t.why255?.tagline || "\"We Change, Evolve, Race, Build and Grow\""}
              </p>
            </div>
          </div>
        </FadeInBottom>
      </div>
    </section>
  );
};

export default Why255Section;
