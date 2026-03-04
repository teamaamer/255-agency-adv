'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Flower2, DollarSign } from 'lucide-react';

export default function CinematicCaseStudy() {
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage === 'ar';

  const caseStudies = [
    {
      title: "Scaling a Beauty Brand with Video",
      client: "FIT Feminine Products",
      description: "Strategic video campaign driving 300% engagement increase across social platforms.",
      results: [
        { label: "Engagement", value: "+300%" },
        { label: "Reach", value: "2.5M" },
        { label: "Conversions", value: "+180%" }
      ],
      icon: Flower2
    },
    {
      title: "Financial Campaign Excellence",
      client: "Evest Ramadan Campaign",
      description: "Culturally-resonant campaign achieving record-breaking performance during Ramadan season.",
      results: [
        { label: "Impressions", value: "5M+" },
        { label: "Engagement", value: "+250%" },
        { label: "ROI", value: "4.2x" }
      ],
      icon: DollarSign
    }
  ];

  return (
    <section className="relative">
      {caseStudies.map((study, index) => (
        <CaseStudySection key={index} study={study} index={index} isRTL={isRTL} />
      ))}
    </section>
  );
}

function CaseStudySection({ study, index, isRTL }) {
  return (
    <div className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={isRTL ? 'lg:order-2 text-right' : 'text-left'}>
            <div>
              <div className="text-sm uppercase tracking-widest mb-4 opacity-60">
                Case Study {index + 1}
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {study.title}
              </h2>
              <p className="text-xl mb-8 opacity-80">
                {study.client}
              </p>
              <p className="text-lg leading-relaxed mb-12 opacity-70">
                {study.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-8">
                {study.results.map((result, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm uppercase tracking-wider opacity-60">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Media Block */}
          <div className={isRTL ? 'lg:order-1' : ''}>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
              <study.icon className="w-64 h-64 opacity-30 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
