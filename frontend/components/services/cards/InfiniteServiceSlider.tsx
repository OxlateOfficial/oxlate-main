"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import ServiceFeaturesCard from "@/components/ui/cards/ServiceFeaturesCard";
import ServicePricingCard from "@/components/ui/cards/ServicePricingCard";
import { useRouter } from "next/navigation";

/**
 * InfiniteServiceSlider - Enhanced Version
 * 
 * Premium infinite slider with:
 * - Smooth center-focused card display
 * - Velocity-based flick detection
 * - Optimized touch interactions
 * - Professional animations
 * - Full SEO compliance
 */

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
  
  // Prevent circular updates by tracking if we're updating from internal navigation
  const isInternalUpdate = useRef(false);

  // Sync with external service changes (only from pill buttons)
  useEffect(() => {
    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return;
    }
    
    const newIndex = SERVICES.findIndex((s) => s.id === service);
    if (newIndex !== -1 && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [service]); // Removed currentIndex to prevent loop

  // Update global state when index changes from user interaction
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

  /**
   * Start drag interaction
   */
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    setStartTime(Date.now());
  };

  /**
   * Update drag position
   */
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const offset = clientX - startX;
    
    // Apply resistance at edges for natural feel
    const resistance = 0.7;
    setDragOffset(offset * resistance);
  };

  /**
   * End drag with velocity detection for flick gestures
   */
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const endTime = Date.now();
    const duration = endTime - startTime;
    const velocity = Math.abs(dragOffset / duration); // pixels per ms

    // Threshold for normal drag
    const dragThreshold = 80;
    
    // Threshold for quick flick (lower requirement)
    const flickThreshold = 40;
    const flickVelocityThreshold = 0.5; // px/ms

    let shouldNavigate = false;
    let direction = dragOffset > 0 ? "prev" : "next";

    // Check for flick gesture (fast movement)
    if (velocity > flickVelocityThreshold && Math.abs(dragOffset) > flickThreshold) {
      shouldNavigate = true;
    }
    // Check for normal drag
    else if (Math.abs(dragOffset) > dragThreshold) {
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

  // Mouse handlers
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

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  /**
   * Determine visual position for infinite wrapping
   */
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

  /**
   * Calculate card style based on position and drag state
   */
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

    // Apply live drag offset
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
        touchAction: "pan-y", // Allow vertical scroll, prevent horizontal
      }}
    >
      {/* Cards container */}
      <div className="relative h-[600px] sm:h-[650px] md:h-[700px] mx-auto max-w-7xl  ">
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
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-200">
                  {/* Header */}
                  <div className="text-center mb-8 sm:mb-12">
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
                  <div className="grid gap-6 md:grid-cols-2">
                    <ServiceFeaturesCard features={serviceItem.features} />
                    <ServicePricingCard
                      price={serviceItem.startingPrice}
                      time={serviceItem.deliveryTime}
                      ctaText={serviceItem.ctaText}
                      serviceId={serviceItem.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots (optional visual indicator) */}
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