'use client';

import React from "react";
import FadeInBottom from "./animations/FadeInBottom";
import { useTranslation } from "@/contexts/LanguageContext";
import { Search, Target, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const t = useTranslation();
  
  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: t.process?.discovery || "Discovery",
      description: t.process?.discoveryDesc || "Understanding your brand, goals, audience, and market landscape through research and strategic insights."
    },
    {
      number: "02",
      icon: Target,
      title: t.process?.strategy || "Strategy",
      description: t.process?.strategyDesc || "Developing tailored marketing strategies that align with your vision and drive measurable results."
    },
    {
      number: "03",
      icon: Lightbulb,
      title: t.process?.creative || "Creative Direction",
      description: t.process?.creativeDesc || "Crafting bold creative concepts that capture your brand essence and resonate with your audience."
    },
    {
      number: "04",
      icon: Rocket,
      title: t.process?.production || "Production & Execution",
      description: t.process?.productionDesc || "Bringing ideas to life with precision through design, content creation, and campaign execution."
    },
    {
      number: "05",
      icon: TrendingUp,
      title: t.process?.optimization || "Optimization & Support",
      description: t.process?.optimizationDesc || "Continuous monitoring, analysis, and refinement to maximize impact and ensure sustained success."
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInBottom>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              {t.process?.title || "Our Process"}
            </h2>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">
              {t.process?.subtitle || "A proven methodology that transforms challenges into opportunities"}
            </p>
          </div>
        </FadeInBottom>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, index) => (
            <FadeInBottom key={index} delay={index * 0.1}>
              <div className="group relative bg-foreground rounded-2xl p-6 lg:p-8 hover:bg-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500 rounded-t-2xl" />
                
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl lg:text-6xl font-black text-primary/20 group-hover:text-white/30 transition-colors duration-500">
                    {step.number}
                  </span>
                  <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-primary group-hover:text-white mb-3 transition-colors duration-500">
                  {step.title}
                </h3>
                
                <p className="text-primary/70 group-hover:text-white/90 text-sm lg:text-base leading-relaxed transition-colors duration-500">
                  {step.description}
                </p>

                <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/5 group-hover:bg-white/10 rounded-tl-full transition-all duration-500" />
              </div>
            </FadeInBottom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
