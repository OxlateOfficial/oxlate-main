"use client";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SVG_REGISTRY } from "@/components/svg/SvgRegistry";

export default function GridBg() {
  const { service } = useServiceSelection();

  return (
    <div className="absolute inset-0 overflow-hidden">
      
      {/* Primary Grid */}
      <div className="absolute inset-0 opacity-40 text-primary">
        <svg className="w-full h-full">
          <defs>
            <pattern id="main-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path 
                d="M 32 0 L 0 0 0 32" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                opacity="0.65"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#main-grid)" />
        </svg>
      </div>

      {/* Subtle Service-Specific Accents */}
      <div className="absolute inset-0 pointer-events-none text-primary">
        
        {/* Top Right */}
        <div className="absolute top-[10%] right-[7%] w-64 h-64 opacity-[0.06]">
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

        {/* Bottom Left */}
        <div className="absolute bottom-[15%] left-[6%] w-56 h-56 opacity-[0.05]">
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

        {/* Corner Guides */}
        <div className="absolute top-6 left-6 w-24 h-24 opacity-[0.08]">
          <SVG_REGISTRY.cornerFrames className="w-full h-full" />
        </div>
        <div className="absolute bottom-6 right-6 w-24 h-24 opacity-[0.08] rotate-180">
          <SVG_REGISTRY.cornerFrames className="w-full h-full" />
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-white to-transparent pointer-events-none" />
      
    </div>
  );
}