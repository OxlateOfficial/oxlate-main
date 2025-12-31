"use client";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SVG_REGISTRY } from "@/components/svg/SvgRegistry";

export default function GridBg() {
  const { service } = useServiceSelection();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Grid - Adjusted opacity and size for mobile */}
      <div className="absolute inset-0 opacity-30 sm:opacity-40 text-primary">
        <svg className="w-full h-full">
          <defs>
            {/* Mobile: smaller grid */}
            <pattern 
              id="main-grid-mobile" 
              width="24" 
              height="24" 
              patternUnits="userSpaceOnUse"
              className="sm:hidden"
            >
              <path 
                d="M 24 0 L 0 0 0 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.4" 
                opacity="0.5"
              />
            </pattern>
            {/* Desktop: original grid */}
            <pattern 
              id="main-grid-desktop" 
              width="32" 
              height="32" 
              patternUnits="userSpaceOnUse"
              className="hidden sm:block"
            >
              <path 
                d="M 32 0 L 0 0 0 32" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                opacity="0.65"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#main-grid-mobile)" className="sm:hidden" />
          <rect width="100%" height="100%" fill="url(#main-grid-desktop)" className="hidden sm:block" />
        </svg>
      </div>

      {/* Subtle Service-Specific Accents - Much smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none text-primary">
        {/* Top Right - Reduced size and opacity on mobile */}
        <div className="absolute top-[8%] right-[3%] w-32 h-32 opacity-[0.03] sm:top-[10%] sm:right-[7%] sm:w-64 sm:h-64 sm:opacity-[0.06]">
          {service === "web-development" && (
            <SVG_REGISTRY.webFrameSidebar className="w-full h-full" />
          )}
          {service === "app-development" && (
            <SVG_REGISTRY.mobileFrameStack className="w-full h-full" />
          )}
          {service === "automation" && (
            <SVG_REGISTRY.pipelineBranch className="w-full h-full" />
          )}
          {service === "software" && (
            <SVG_REGISTRY.schemaDiagram className="w-full h-full" />
          )}
          {service === "custom" && (
            <SVG_REGISTRY.gearCluster className="w-full h-full" />
          )}
        </div>

        {/* Bottom Left - Reduced size and opacity on mobile */}
        <div className="absolute bottom-[12%] left-[2%] w-28 h-28 opacity-[0.025] sm:bottom-[15%] sm:left-[6%] sm:w-56 sm:h-56 sm:opacity-[0.05]">
          {service === "web-development" && (
            <SVG_REGISTRY.nodeClusterLarge className="w-full h-full" />
          )}
          {service === "app-development" && (
            <SVG_REGISTRY.nodeHub className="w-full h-full" />
          )}
          {service === "automation" && (
            <SVG_REGISTRY.loopbackFlow className="w-full h-full" />
          )}
          {service === "software" && (
            <SVG_REGISTRY.dataBlocks className="w-full h-full" />
          )}
          {service === "custom" && (
            <SVG_REGISTRY.moduleStack className="w-full h-full" />
          )}
        </div>

        {/* Corner Guides - Smaller on mobile */}
        <div className="absolute top-3 left-3 w-16 h-16 opacity-[0.05] sm:top-6 sm:left-6 sm:w-24 sm:h-24 sm:opacity-[0.08]">
          <SVG_REGISTRY.cornerFrames className="w-full h-full" />
        </div>
        <div className="absolute bottom-3 right-3 w-16 h-16 opacity-[0.05] rotate-180 sm:bottom-6 sm:right-6 sm:w-24 sm:h-24 sm:opacity-[0.08]">
          <SVG_REGISTRY.cornerFrames className="w-full h-full" />
        </div>
      </div>

      {/* Bottom Fade - Adjusted for mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}