"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SVG_REGISTRY } from "@/components/svg/SvgRegistry";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics/events";

export default function HeroSection() {
  const { service, setService } = useServiceSelection();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: "web-development",
      label: "Website",
      description: "Modern, responsive sites",
      icon: "webFrameDetailed",
    },
    {
      id: "app-development",
      label: "App",
      description: "iOS & Android solutions",
      icon: "mobileFrameDetailed",
    },
    {
      id: "automation",
      label: "Automation",
      description: "Workflow optimization",
      icon: "pipelineLinear",
    },
    {
      id: "software",
      label: "ERP / Software",
      description: "Enterprise systems",
      icon: "databaseCylinder",
    },
    {
      id: "custom",
      label: "Custom",
      description: "Tailored solutions",
      icon: "customShape",
    },
  ];

  return (
    <section className="relative w-full min-h-[45vh] flex items-center px-3 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-6 sm:pb-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-5 sm:space-y-8">
            
            {/* Brand */}
            <div 
              className={`transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icons/Oxlate_logoX_blk.svg"
                    alt="Oxlate"
                    width={20}
                    height={20}
                    className="invert sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                    Oxlate
                  </h1>
                  <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] text-brand font-medium">
                    Strongly Modern
                  </p>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div 
              className={`transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-4 sm:mb-6">
                We solve business<br />
                problems with<br />
                <span className="text-brand">technology</span>
              </h2>
              <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-xl">
                Secure, modern, and easy-to-use digital solutions tailored to real business needs.
              </p>
            </div>

            {/* CTA */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button className="btn-primary px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto">
                Get a Free Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 text-secondary">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Trusted by businesses</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Built for India</span>
              </div>
            </div>

          </div>

          {/* Right: Service Card Grid - Mobile Optimized */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {services.map((item, index) => {
                const Icon = SVG_REGISTRY[item.icon as keyof typeof SVG_REGISTRY];
                const isActive = service === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setService(item.id);
                      router.push(`/?service=${item.id}`, { scroll: false });
                      trackEvent("service_select", { service: item.id });
                    }}
                    className={`
                      group relative p-3 sm:p-6 rounded-xl sm:rounded-2xl text-left
                      transition-all duration-300
                      hover:scale-[1.02] active:scale-[0.98]
                      ${index === 4 ? "col-span-2" : ""}
                      ${isActive ? "bg-primary border-2 border-[#35588d] shadow-lg sm:shadow-xl" : "bg-white border-2 border-[#E5E7EB] hover:border-primary"}
                    `}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white animate-pulse" />
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-2 sm:mb-4">
                      <div className={`w-8 h-8 sm:w-12 sm:h-12 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                        <Icon 
                          className={`w-full h-full ${isActive ? "text-white" : "text-primary"}`}
                          stroke="currentColor"
                          fill="none"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className={`text-sm sm:text-lg font-bold mb-0.5 sm:mb-1 ${isActive ? "text-white" : "text-primary"}`}>
                        {item.label}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-tight sm:leading-normal ${isActive ? "text-white/70" : "text-muted"}`}>
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}