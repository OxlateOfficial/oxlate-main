"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SvgRenderer from '@/components/svg/SvgRenderer';
import { Svg } from '@react-three/drei';


type Landing = {
  id: string;
  title: string;
  tagline: string;
  hero: {
    subtitle: string;
    stats: { value: string; unit: string; label: string }[];
  };
  overview: {
    heading: string;
    description: string;
    highlights: string[];
  };
  valueBlocks: {
    icon: string;
    title: string;
    description: string;
  }[];
  workflow: {
    heading: string;
    steps: {
      number: number;
      title: string;
      description: string;
      deliverable: string;
    }[];
  };
  guarantees: string[];
  faqs: { q: string; a: string }[];
  cta: {
    heading: string;
    subheading: string;
    buttonText: string;
    supportText: string;
  };
};

type Props = {
  landing: Landing;
};

// Service-specific visual elements
const ServiceVisualIdentity = ({ serviceId }: { serviceId: string }) => {
  const getThemeColor = () => {
    switch (serviceId) {
      case 'app-development': return 'bg-primary';
      case 'web-development': return 'bg-primary';
      case 'automation': return 'bg-primary';
      case 'erp-software': return 'bg-primary';
      case 'custom-solution': return 'bg-primary';
      default: return 'bg-primary';
    }
  };

  const getAccentColor = () => {
    switch (serviceId) {
      case 'app-development': return 'bg-dark';
      case 'web-development': return 'bg-dark';
      case 'automation': return 'bg-dark';
      case 'erp-software': return 'bg-dark';
      case 'custom-solution': return 'bg-dark';
      default: return 'bg-dark';
    }
  };

  return { gradient: getThemeColor(), accent: getAccentColor() };
};

// Service-specific background pattern
const ServiceBackgroundPattern = ({ serviceId }: { serviceId: string }) => {
  switch (serviceId) {
    case 'app-development':
      return (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <SvgRenderer name="appFrame1"
          className='w-full h-full'
           />
        </div>
      );
    case 'web-development':
      return (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <SvgRenderer name="webFrame1" className=''/>
          <SvgRenderer name="webFrame2" className=''/>
        </div>
      );
    case 'automation':
      return (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="400" cy="150" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="650" cy="150" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="190" y1="150" x2="360" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="440" y1="150" x2="610" y2="150" stroke="currentColor" strokeWidth="2" />
            <polygon points="350,145 360,150 350,155" fill="currentColor" />
            <polygon points="600,145 610,150 600,155" fill="currentColor" />
          </svg>
        </div>
      );
    case 'erp-software':
      return (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <rect x="100" y="100" width="200" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="100" y="180" width="200" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="100" y="260" width="200" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="150" y1="100" x2="150" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <line x1="250" y1="100" x2="250" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <rect x="450" y="150" width="280" height="250" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
    case 'custom-solution':
      return (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <polygon points="400,80 480,130 480,230 400,280 320,230 320,130" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="150" cy="400" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="580" y="350" width="100" height="100" rx="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 630 400)" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

// Icon components
const IconPerformance = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconSecurity = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconScalability = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
);

const IconSupport = () => (
  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'performance': return <IconPerformance />;
    case 'security': return <IconSecurity />;
    case 'scalability': return <IconScalability />;
    case 'support': return <IconSupport />;
    default: return <IconPerformance />;
  }
};

export default function ServiceLandingClient({ landing }: Props) {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const theme = ServiceVisualIdentity({ serviceId: landing.id });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className={`relative bg-linear-to-br ${theme.gradient} text-white overflow-hidden`}>
        <ServiceBackgroundPattern serviceId={landing.id} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <div className={`w-2 h-2 rounded-full ${theme.accent}`}></div>
              Oxlate Services
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
              {landing.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 sm:mb-8">
              {landing.tagline}
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-10 sm:mb-12">
              {landing.hero.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl">
              {landing.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</span>
                    {stat.unit && <span className="text-lg sm:text-xl text-gray-400">{stat.unit}</span>}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-8 sm:h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 L0,60 Q300,90 600,60 T1200,60 L1200,0 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ==================== OVERVIEW SECTION ==================== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {landing.overview.heading}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                {landing.overview.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {landing.overview.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`shrink-0 w-1.5 h-1.5 rounded-full ${theme.accent} mt-2.5`}></div>
                    <span className="text-gray-700 leading-relaxed">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== VALUE BLOCKS ==================== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {landing.valueBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 text-gray-800">
                  {getIcon(block.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {block.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORKFLOW SECTION ==================== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 sm:mb-16"
            >
              {landing.workflow.heading}
            </motion.h2>

            <div className="relative">
              {/* Connecting line - desktop only */}
              <div className="absolute left-8 top-16 bottom-16 w-px bg-gray-200 hidden md:block"></div>

              <div className="space-y-8 sm:space-y-12">
                {landing.workflow.steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex gap-6 sm:gap-8"
                  >
                    {/* Step number */}
                    <div className={`shrink-0 w-16 h-16 rounded-full bg-linear-to-br ${theme.gradient} text-white flex items-center justify-center font-bold text-2xl shadow-lg relative z-10`}>
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GUARANTEES SECTION ==================== */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
            >
              What you can expect
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {landing.guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex items-start gap-4"
                >
                  <div className={`shrink-0 w-6 h-6 rounded-full bg-linear-to-br ${theme.gradient} flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12"
          >
            Frequently asked questions
          </motion.h2>

          <div className="space-y-4">
            {landing.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full ${theme.accent} flex items-center justify-center text-white transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className={`relative bg-linear-to-br ${theme.gradient} text-white py-16 sm:py-20 md:py-24 overflow-hidden`}>
        <ServiceBackgroundPattern serviceId={landing.id} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {landing.cta.heading}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
              {landing.cta.subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => router.push(`/services/${landing.id}`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
              >
                {landing.cta.buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <span className="text-sm sm:text-base text-gray-300">
                {landing.cta.supportText}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
