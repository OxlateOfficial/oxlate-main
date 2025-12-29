"use client";
import { useRouter } from "next/navigation";

type Props = {
  price: string;
  time: string;
  ctaText: string;
  serviceId: string;
};

// Service-Specific SVG Background Patterns
const ServiceSVGPattern = ({ serviceId }: { serviceId: string }) => {
  switch (serviceId) {
    case "app-development":
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large smartphone frame - right side */}
          <g opacity="0.18">
            <rect x="220" y="60" width="140" height="260" rx="18" stroke="white" strokeWidth="2.5" fill="none" />
            <rect x="230" y="75" width="120" height="220" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="290" cy="250" r="8" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Screen grid lines */}
            <line x1="240" y1="110" x2="340" y2="110" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="240" y1="150" x2="340" y2="150" stroke="white" strokeWidth="1" opacity="0.6" />
            <line x1="240" y1="190" x2="340" y2="190" stroke="white" strokeWidth="1" opacity="0.6" />
            {/* App icon grid */}
            <circle cx="260" cy="130" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="290" cy="130" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
            <circle cx="320" cy="130" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          </g>
          {/* Touch gesture indicators - bottom left */}
          <g opacity="0.15">
            <circle cx="100" cy="480" r="35" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="100" cy="480" r="25" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="480" r="15" stroke="white" strokeWidth="1" fill="none" />
            {/* Swipe arrow */}
            <path d="M 80 460 L 120 460" stroke="white" strokeWidth="2" opacity="0.5" />
            <path d="M 110 455 L 120 460 L 110 465" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
          </g>
        </svg>
      );

    case "web-development":
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Browser window - top right */}
          <g opacity="0.18">
            <rect x="200" y="40" width="180" height="140" rx="8" stroke="white" strokeWidth="2.5" fill="none" />
            <line x1="200" y1="70" x2="380" y2="70" stroke="white" strokeWidth="2.5" />
            {/* Browser controls */}
            <circle cx="220" cy="55" r="4" fill="white" />
            <circle cx="240" cy="55" r="4" fill="white" />
            <circle cx="260" cy="55" r="4" fill="white" />
            {/* URL bar */}
            <rect x="280" y="48" width="80" height="14" rx="7" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
          </g>
          {/* CSS Grid/Flexbox representation */}
          <g opacity="0.15">
            <rect x="210" y="90" width="45" height="35" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="265" y="90" width="45" height="35" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="320" y="90" width="45" height="35" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="210" y="135" width="155" height="35" stroke="white" strokeWidth="1.5" fill="none" />
          </g>
          {/* Code brackets - left side */}
          <g opacity="0.12">
            <path d="M 80 200 L 60 220 L 80 240" stroke="white" strokeWidth="2.5" fill="none" />
            <path d="M 100 200 L 120 220 L 100 240" stroke="white" strokeWidth="2.5" fill="none" />
            <line x1="70" y1="260" x2="110" y2="260" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="70" y1="280" x2="90" y2="280" stroke="white" strokeWidth="1.5" opacity="0.6" />
          </g>
          {/* Responsive breakpoints - bottom */}
          <g opacity="0.12">
            <rect x="60" y="480" width="50" height="35" rx="4" stroke="white" strokeWidth="2" fill="none" />
            <rect x="130" y="480" width="70" height="35" rx="4" stroke="white" strokeWidth="2" fill="none" />
            <rect x="220" y="480" width="90" height="35" rx="4" stroke="white" strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    case "automation":
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <marker id="arrowhead-auto" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="white" />
            </marker>
          </defs>
          {/* Flow network - right side */}
          <g opacity="0.18">
            <circle cx="280" cy="80" r="22" stroke="white" strokeWidth="2.5" fill="none" />
            <circle cx="340" cy="160" r="22" stroke="white" strokeWidth="2.5" fill="none" />
            <circle cx="280" cy="240" r="22" stroke="white" strokeWidth="2.5" fill="none" />
            {/* Node icons */}
            <circle cx="280" cy="80" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="340" cy="160" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="280" cy="240" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
            {/* Connecting arrows */}
            <path d="M 290 100 L 330 140" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead-auto)" />
            <path d="M 330 180 L 290 220" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead-auto)" />
          </g>
          {/* Pipeline flow - left side */}
          <g opacity="0.15">
            <rect x="60" y="350" width="50" height="40" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <rect x="140" y="350" width="50" height="40" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <line x1="110" y1="370" x2="140" y2="370" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead-auto)" />
          </g>
          {/* Data flow indicators - bottom */}
          <g opacity="0.15">
            <circle cx="90" cy="480" r="15" stroke="white" strokeWidth="2" fill="none" />
            <line x1="105" y1="480" x2="175" y2="480" stroke="white" strokeWidth="2.5" markerEnd="url(#arrowhead-auto)" />
            <line x1="195" y1="480" x2="265" y2="480" stroke="white" strokeWidth="2.5" markerEnd="url(#arrowhead-auto)" />
            <circle cx="280" cy="480" r="15" stroke="white" strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    case "erp-software":
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Database/table structure - top right */}
          <g opacity="0.16">
            <rect x="200" y="60" width="180" height="50" rx="4" stroke="white" strokeWidth="2.5" fill="none" />
            <rect x="200" y="120" width="180" height="50" rx="4" stroke="white" strokeWidth="2.5" fill="none" />
            <rect x="200" y="180" width="180" height="50" rx="4" stroke="white" strokeWidth="2.5" fill="none" />
            {/* Column dividers */}
            <line x1="260" y1="60" x2="260" y2="230" stroke="white" strokeWidth="1.5" opacity="0.7" />
            <line x1="320" y1="60" x2="320" y2="230" stroke="white" strokeWidth="1.5" opacity="0.7" />
            {/* Row dividers */}
            <line x1="200" y1="85" x2="380" y2="85" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="145" x2="380" y2="145" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="200" y1="205" x2="380" y2="205" stroke="white" strokeWidth="1" opacity="0.5" />
          </g>
          {/* Dashboard widgets - left side */}
          <g opacity="0.14">
            <rect x="60" y="300" width="100" height="70" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <line x1="70" y1="330" x2="150" y2="330" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="345" x2="130" y2="345" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="360" x2="140" y2="360" stroke="white" strokeWidth="1" opacity="0.5" />
          </g>
          {/* System modules - bottom */}
          <g opacity="0.14">
            <rect x="80" y="450" width="60" height="60" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <rect x="170" y="450" width="60" height="60" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <rect x="260" y="450" width="60" height="60" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <line x1="140" y1="480" x2="170" y2="480" stroke="white" strokeWidth="2" />
            <line x1="230" y1="480" x2="260" y2="480" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      );

    case "custom-solution":
      return (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 400 600" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Modular hexagons - right side */}
          <g opacity="0.18">
            <polygon points="300,80 340,105 340,155 300,180 260,155 260,105" stroke="white" strokeWidth="2.5" fill="none" />
            <polygon points="310,95 330,107 330,143 310,155 290,143 290,107" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Medium hexagon */}
            <polygon points="320,220 350,240 350,280 320,300 290,280 290,240" stroke="white" strokeWidth="2" fill="none" />
          </g>
          {/* Geometric shapes - scattered */}
          <g opacity="0.15">
            <circle cx="240" cy="120" r="18" stroke="white" strokeWidth="2" fill="none" />
            <rect x="225" y="260" width="30" height="30" rx="4" stroke="white" strokeWidth="2" fill="none" transform="rotate(45 240 275)" />
            {/* Connection lines */}
            <line x1="258" y1="155" x2="290" y2="240" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
          </g>
          {/* Gear/cog element - left side */}
          <g opacity="0.14">
            <circle cx="100" cy="350" r="30" stroke="white" strokeWidth="2.5" fill="none" />
            <circle cx="100" cy="350" r="15" stroke="white" strokeWidth="2" fill="none" />
            {/* Gear teeth */}
            <rect x="95" y="320" width="10" height="8" stroke="white" strokeWidth="1" fill="none" />
            <rect x="95" y="372" width="10" height="8" stroke="white" strokeWidth="1" fill="none" />
            <rect x="70" y="345" width="8" height="10" stroke="white" strokeWidth="1" fill="none" />
            <rect x="122" y="345" width="8" height="10" stroke="white" strokeWidth="1" fill="none" />
          </g>
          {/* Building blocks - bottom */}
          <g opacity="0.14">
            <rect x="70" y="460" width="45" height="45" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <rect x="130" y="460" width="45" height="45" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <rect x="190" y="460" width="45" height="45" rx="6" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="275" cy="482" r="22" stroke="white" strokeWidth="2" fill="none" />
            {/* Puzzle connector */}
            <circle cx="115" cy="482" r="6" fill="white" opacity="0.6" />
            <circle cx="175" cy="482" r="6" fill="white" opacity="0.6" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default function ServicePricingCard({ price, time, ctaText, serviceId }: Props) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <div className="relative bg-black rounded-2xl p-6 sm:p-8 shadow-2xl text-white flex flex-col justify-between overflow-hidden min-h-[280px] sm:min-h-[320px]">
      {/* SVG Background Pattern - Service Specific */}
      <ServiceSVGPattern serviceId={serviceId} />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Content Layer */}
      <div className="relative z-10 space-y-5 sm:space-y-6">
        {/* Price Section */}
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1.5 sm:mb-2 font-semibold">
            Starting From
          </p>
          <p
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {price}
          </p>
        </div>

        {/* Delivery Section */}
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1.5 sm:mb-2 font-semibold">
            Delivery Time
          </p>
          <p className="text-xl sm:text-2xl md:text-2xl font-semibold tracking-tight">
            {time}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleClick}
        className="relative z-10 mt-6 w-full bg-white text-black py-3.5 sm:py-4 px-6 rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-200 active:scale-[0.97] transition-all duration-200 tracking-wide shadow-lg uppercase"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {ctaText}
      </button>
    </div>
  );
}