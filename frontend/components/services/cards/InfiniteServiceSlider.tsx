"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import ServiceFeaturesCard from "@/components/ui/cards/ServiceFeaturesCard";
import ServicePricingCard from "@/components/ui/cards/ServicePricingCard";
import { useRouter } from "next/navigation";

/**
 * Service-specific floating background elements
 */
const ServiceFloatingElements = ({ serviceId }: { serviceId: string }) => {
  switch (serviceId) {
    case "app-development":
      return (
        <>
          {/* Floating phone icons */}
          <div className="absolute top-10 right-10 opacity-[0.04] pointer-events-none">
            <svg width="60" height="100" viewBox="0 0 60 100">
              <rect x="5" y="5" width="50" height="90" rx="8" stroke="black" strokeWidth="2" fill="none" />
              <rect x="10" y="15" width="40" height="65" rx="2" stroke="black" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 opacity-[0.05] pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="20" cy="20" r="10" stroke="black" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </>
      );

    case "web-development":
      return (
        <>
          {/* Floating browser windows */}
          <div className="absolute top-8 left-8 opacity-[0.04] pointer-events-none">
            <svg width="100" height="70" viewBox="0 0 100 70">
              <rect x="2" y="2" width="96" height="66" rx="4" stroke="black" strokeWidth="2" fill="none" />
              <line x1="2" y1="20" x2="98" y2="20" stroke="black" strokeWidth="2" />
              <circle cx="15" cy="11" r="3" fill="black" />
              <circle cx="27" cy="11" r="3" fill="black" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-12 opacity-[0.05] pointer-events-none">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <path d="M 10 15 L 5 25 L 10 35" stroke="black" strokeWidth="2" fill="none" />
              <path d="M 40 15 L 45 25 L 40 35" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </>
      );

    case "automation":
      return (
        <>
          {/* Floating flow nodes */}
          <div className="absolute top-12 right-16 opacity-[0.05] pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="20" cy="40" r="12" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="60" cy="40" r="12" stroke="black" strokeWidth="2" fill="none" />
              <line x1="32" y1="40" x2="48" y2="40" stroke="black" strokeWidth="2" />
              <polygon points="45,36 48,40 45,44" fill="black" />
            </svg>
          </div>
          <div className="absolute bottom-24 left-16 opacity-[0.04] pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="15" r="10" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="15" cy="45" r="10" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="45" cy="45" r="10" stroke="black" strokeWidth="2" fill="none" />
              <line x1="25" y1="23" x2="18" y2="37" stroke="black" strokeWidth="1.5" />
              <line x1="35" y1="23" x2="42" y2="37" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
        </>
      );

    case "erp-software":
      return (
        <>
          {/* Floating table/grid elements */}
          <div className="absolute top-10 left-12 opacity-[0.04] pointer-events-none">
            <svg width="90" height="60" viewBox="0 0 90 60">
              <rect x="2" y="2" width="86" height="56" rx="3" stroke="black" strokeWidth="2" fill="none" />
              <line x1="2" y1="20" x2="88" y2="20" stroke="black" strokeWidth="1.5" />
              <line x1="2" y1="40" x2="88" y2="40" stroke="black" strokeWidth="1.5" />
              <line x1="30" y1="2" x2="30" y2="58" stroke="black" strokeWidth="1.5" />
              <line x1="60" y1="2" x2="60" y2="58" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 opacity-[0.05] pointer-events-none">
            <svg width="70" height="70" viewBox="0 0 70 70">
              <rect x="5" y="5" width="25" height="25" rx="3" stroke="black" strokeWidth="2" fill="none" />
              <rect x="40" y="5" width="25" height="25" rx="3" stroke="black" strokeWidth="2" fill="none" />
              <rect x="5" y="40" width="25" height="25" rx="3" stroke="black" strokeWidth="2" fill="none" />
              <rect x="40" y="40" width="25" height="25" rx="3" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </>
      );

    case "custom-solution":
      return (
        <>
          {/* Floating modular shapes */}
          <div className="absolute top-14 right-14 opacity-[0.05] pointer-events-none">
            <svg width="70" height="70" viewBox="0 0 70 70">
              <polygon points="35,5 60,20 60,50 35,65 10,50 10,20" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="35" cy="35" r="12" stroke="black" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-24 left-14 opacity-[0.04] pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="20" stroke="black" strokeWidth="2" fill="none" />
              <rect x="20" y="20" width="20" height="20" rx="2" stroke="black" strokeWidth="1.5" fill="none" transform="rotate(45 30 30)" />
            </svg>
          </div>
        </>
      );

    default:
      return null;
  }
};

export default function InfiniteServiceSlider() {
  const { service, setService } = useServiceSelection();
  
  const [currentIndex, setCurrentIndex] = useState(() => {
    const index = SERVICES.findIndex((s) => s.id === service);
    return index >= 0 ? index : 0;
  });
  const router = useRouter();

  // Interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isInternalUpdate = useRef(false);

  useEffect(() => {
    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return;
    }
    
    const newIndex = SERVICES.findIndex((s) => s.id === service);
    if (newIndex !== -1 && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [service]);

  const updateServiceFromIndex = useCallback(
    (index: number) => {
      const selected = SERVICES[index];
      if (!selected || selected.id === service) return;

      isInternalUpdate.current = true;
      setService(selected.id);
      router.push(`/?service=${selected.id}`, { scroll: false });
    },
    [service, setService, router]
  );

  useEffect(() => {
    updateServiceFromIndex(currentIndex);
  }, [currentIndex, updateServiceFromIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    setStartTime(Date.now());
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    const resistance = 0.7;
    setDragOffset(offset * resistance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const endTime = Date.now();
    const duration = endTime - startTime;
    const velocity = Math.abs(dragOffset / duration);

    const dragThreshold = 80;
    const flickThreshold = 40;
    const flickVelocityThreshold = 0.5;

    let shouldNavigate = false;
    let direction = dragOffset > 0 ? "prev" : "next";

    if (velocity > flickVelocityThreshold && Math.abs(dragOffset) > flickThreshold) {
      shouldNavigate = true;
    } else if (Math.abs(dragOffset) > dragThreshold) {
      shouldNavigate = true;
    }

    if (shouldNavigate) {
      if (direction === "prev") {
        goToPrevious();
      } else {
        goToNext();
      }
    }

    setDragOffset(0);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  const getVisualPosition = (index: number): "prev" | "center" | "next" | "hidden" => {
    const total = SERVICES.length;
    let diff = index - currentIndex;
    
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return "center";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";
    return "hidden";
  };

  const getCardStyle = (index: number) => {
    const position = getVisualPosition(index);
    
    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;

    switch (position) {
      case "prev":
        translateX = -75;
        scale = 0.85;
        opacity = 0.4;
        zIndex = 1;
        break;
      case "center":
        translateX = 0;
        scale = 1;
        opacity = 1;
        zIndex = 10;
        break;
      case "next":
        translateX = 75;
        scale = 0.85;
        opacity = 0.4;
        zIndex = 1;
        break;
      case "hidden":
        opacity = 0;
        zIndex = 0;
        scale = 0.7;
        break;
    }

    if (position !== "hidden" && isDragging) {
      const containerWidth = containerRef.current?.offsetWidth || 1000;
      const dragPercentage = (dragOffset / containerWidth) * 100;
      translateX += dragPercentage;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: isDragging 
        ? "none" 
        : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 py-8 sm:py-12 overflow-hidden select-none touch-pan-y"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ 
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "pan-y",
      }}
    >
      <div className="relative h-[720px] sm:h-[800px] md:h-[700px] mx-auto max-w-7xl mt-10 sm:mt-0">
        {SERVICES.map((serviceItem, index) => {
          const cardStyle = getCardStyle(index);
          const position = getVisualPosition(index);
          
          return (
            <div
              key={serviceItem.id}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={cardStyle}
            >
              <div
                className={`
                  w-full max-w-5xl
                  ${position === "center" ? "pointer-events-auto" : "pointer-events-none"}
                `}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-200 overflow-hidden">
                  {/* Floating Background Elements - Service Specific */}
                  <ServiceFloatingElements serviceId={serviceItem.id} />
                  
                  {/* Header */}
                  <div className="relative z-10 text-center mb-8 sm:mb-12">
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      {serviceItem.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 tracking-wide">
                      {serviceItem.subtitle}
                    </p>
                  </div>

                  {/* Cards Grid */}
                  <div className="relative z-10 grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="order-1 md:order-2">
                      <ServicePricingCard
                        price={serviceItem.startingPrice}
                        time={serviceItem.deliveryTime}
                        ctaText={serviceItem.ctaText}
                        serviceId={serviceItem.id}
                      />
                    </div>
                    <div className="order-2 md:order-1">
                      <ServiceFeaturesCard features={serviceItem.features} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {SERVICES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? "w-8 bg-black"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }
            `}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>

      {/* Interaction hint */}
      <div className="text-center mt-4 text-xs text-gray-400">
        <p className="md:hidden">← Swipe to explore →</p>
        <p className="hidden md:block">← Drag to explore →</p>
      </div>
    </section>
  );
}