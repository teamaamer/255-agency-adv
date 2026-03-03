'use client';

import React, { useState } from "react";
import FadeInBottom from "./animations/FadeInBottom";
import { useTranslation } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t.faq?.q1 || "What services does 255 Agency offer?",
      answer: t.faq?.a1 || "We offer six core service pillars: Consulting, Visual Branding, Creative Execution, Brand Activations, Digital Solutions, and Event Coordination. Each service is tailored to meet your specific business needs and goals."
    },
    {
      question: t.faq?.q2 || "How long has 255 been in business?",
      answer: t.faq?.a2 || "255 was established in 2021 by Sakher Olayaan. Since then, we've grown to a team of 20 professionals and have successfully served over 150 clients globally."
    },
    {
      question: t.faq?.q3 || "What makes 255 different from other agencies?",
      answer: t.faq?.a3 || "We combine data-driven insights with bold creative vision to deliver tailored marketing solutions. Our agile approach helps clients adapt to market trends while our founder's 5+ years of hands-on experience ensures results-driven strategies."
    },
    {
      question: t.faq?.q4 || "What is the meaning behind the name '255'?",
      answer: t.faq?.a4 || "255 represents the highest value in the color scale, symbolizing boldness, clarity, and maximum impact. Just like brand building is step-by-step, digital design is built from precise values—and we aim for the highest standard in everything we do."
    },
    {
      question: t.faq?.q5 || "What industries do you work with?",
      answer: t.faq?.a5 || "We work with diverse clients across various sectors, from startups to established brands. Our portfolio includes food & beverage, transportation, retail, and more. We tailor our approach to each industry's unique needs."
    },
    {
      question: t.faq?.q6 || "How do you approach new projects?",
      answer: t.faq?.a6 || "Our process follows five key stages: Discovery (understanding your brand and goals), Strategy (developing tailored plans), Creative Direction (crafting bold concepts), Production & Execution (bringing ideas to life), and Optimization & Support (continuous refinement for maximum impact)."
    },
    {
      question: t.faq?.q7 || "Where are your offices located?",
      answer: t.faq?.a7 || "We have four office locations: Nablus (Palestine), Nazareth (Israel), Riyadh (Saudi Arabia), and Houston (Texas, USA). This global presence allows us to serve clients across different markets and time zones."
    },
    {
      question: t.faq?.q8 || "How can I get started with 255?",
      answer: t.faq?.a8 || "Simply reach out through our contact form, email us at 255@255.ps, or call any of our office locations. We'll schedule a discovery call to understand your needs and discuss how we can help achieve your goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-4">
        <FadeInBottom>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              {t.faq?.title || "Frequently Asked Questions"}
            </h2>
            <p className="text-primary/70 text-lg md:text-xl">
              {t.faq?.subtitle || "Everything you need to know about working with 255"}
            </p>
          </div>
        </FadeInBottom>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInBottom key={index} delay={index * 0.05}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg md:text-xl font-bold text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-primary/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInBottom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
