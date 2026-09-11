"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectPhotoGalleryProps {
  images: string[];
  title: string;
  schematicType?: "platform" | "mobile";
}

export function ProjectPhotoGallery({
  images,
  title,
  schematicType = "platform",
}: ProjectPhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const hasImages = images && images.length > 0;
  const currentImage = hasImages ? images[activeIndex] : null;
  const currentHasError = imageErrors[activeIndex];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative w-full flex flex-col gap-4 select-none">
      {/* Main Viewport Container */}
      <div
        onClick={() => !currentHasError && setIsLightboxOpen(true)}
        className={`relative w-full h-64 sm:h-96 md:h-[460px] bg-[#111111] border border-[#292929] rounded-[2px] overflow-hidden ${
          !currentHasError && hasImages ? "cursor-zoom-in group" : ""
        }`}
      >
        {/* Architectural HUD Overlay */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none text-white/70 font-mono text-[11px]">
          <span className="flex items-center gap-2 bg-[#111111]/80 backdrop-blur-sm px-2 py-1 border border-[#292929]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A87445]" />
            INTERFACE CAPTURE // {String(activeIndex + 1).padStart(2, "0")} OF{" "}
            {String(images.length || 1).padStart(2, "0")}
          </span>
          {hasImages && !currentHasError && (
            <span className="hidden sm:flex items-center gap-1.5 bg-[#111111]/80 backdrop-blur-sm px-2 py-1 border border-[#292929] group-hover:text-white transition-colors">
              <Maximize2 className="w-3 h-3 text-[#A87445]" />
              <span>EXPAND</span>
            </span>
          )}
        </div>

        {/* Image Rendering / Fallback CAD Blueprint */}
        {hasImages && currentImage && !currentHasError ? (
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={`${title} - Photo ${activeIndex + 1}`}
              fill
              className="object-contain p-4 sm:p-6 transition-transform duration-300 group-hover:scale-[1.01]"
              onError={() => handleImageError(activeIndex)}
              priority
            />
          </div>
        ) : (
          /* Graceful Architectural Schematic Fallback when photo is pending upload */
          <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between text-[#FAF8F5]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gallery-cad-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#D9D4CC" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gallery-cad-grid)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#A87445" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="90" stroke="#A87445" strokeWidth="1" fill="none" strokeDasharray="3 6" />
              </svg>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between text-xs font-mono text-[#8C8A84]">
              <span>SCHEMATIC // ARCHITECTURAL_VIEW</span>
              <span className="text-[#A87445]">STATUS: VERIFIED SPEC</span>
            </div>

            <div className="relative z-10 my-auto text-center max-w-md mx-auto">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-[#A87445]/50 bg-[#181817] flex items-center justify-center text-[#A87445]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                {title} Interface Specification
              </h4>
              <p className="text-xs text-[#8C8A84] font-mono leading-relaxed mb-3">
                {currentImage ? `Image target: ${currentImage}` : "Architectural system wireframe"}
              </p>
              <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-[#A87445] px-2.5 py-1 border border-[#A87445]/40 bg-[#A87445]/10">
                Ready for user screenshot upload
              </span>
            </div>

            <div className="relative z-10 border-t border-[#292929] pt-3 flex items-center justify-between text-[11px] font-mono text-[#6C6B66]">
              <span>SYSTEM: {schematicType.toUpperCase()} ARCHITECTURE</span>
              <span className="text-[#FAF8F5]">60 FPS CLAMPED</span>
              <span>TYPE-SAFE CONTRACT</span>
            </div>
          </div>
        )}

        {/* Carousel Prev/Next Overlay Controls (shown when multiple images) */}
        {hasImages && images.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none z-20">
            <button
              onClick={handlePrev}
              type="button"
              className="pointer-events-auto w-9 h-9 rounded-full bg-[#111111]/80 hover:bg-[#A87445] text-white border border-[#292929] flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="pointer-events-auto w-9 h-9 rounded-full bg-[#111111]/80 hover:bg-[#A87445] text-white border border-[#292929] flex items-center justify-center transition-colors shadow-md"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Selector Strip (shows all photos) */}
      {hasImages && images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, idx) => {
            const isSelected = idx === activeIndex;
            const hasErr = imageErrors[idx];

            return (
              <button
                key={img}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative w-24 h-16 sm:w-28 sm:h-18 shrink-0 rounded-[2px] overflow-hidden border transition-all duration-150 bg-[#161615] flex flex-col justify-between p-1.5 text-left font-mono ${
                  isSelected
                    ? "border-[#A87445] ring-1 ring-[#A87445]"
                    : "border-[#D9D4CC] opacity-70 hover:opacity-100"
                }`}
              >
                {!hasErr ? (
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover opacity-85"
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center text-[9px] text-[#8C8A84] p-1 text-center">
                    <span className="text-[#A87445] font-bold">SLOT {idx + 1}</span>
                  </div>
                )}
                <span className="relative z-10 text-[9px] font-bold text-white bg-[#111111]/80 px-1 rounded-xs self-start">
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && currentImage && !currentHasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between text-white font-mono text-xs z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A87445]" />
                {title} // PHOTO {activeIndex + 1} OF {images.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-[#292929] hover:bg-[#A87445] flex items-center justify-center text-white transition-colors"
                aria-label="Close fullscreen view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div
              className="relative w-full h-[80vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage}
                alt={`${title} Fullscreen`}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Bottom Controls */}
            {images.length > 1 && (
              <div
                className="flex items-center justify-center gap-6 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-[#292929] hover:bg-[#A87445] text-white font-mono text-xs rounded-[2px] transition-colors inline-flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>
                <span className="font-mono text-xs text-[#8C8A84]">
                  {activeIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-[#292929] hover:bg-[#A87445] text-white font-mono text-xs rounded-[2px] transition-colors inline-flex items-center gap-2"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
