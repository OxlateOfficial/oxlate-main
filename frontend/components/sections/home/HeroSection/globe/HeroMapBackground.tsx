'use client';

import React from 'react';

const WorldMapHero: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1200 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Dot Grid for World Map */}
        <defs>
          <pattern
            id="dotGrid"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.5" fill="#cbd5e1" opacity="0.4" />
          </pattern>

          {/* Gradient for connection lines */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* North America */}
        <path
          d="M 80,140 L 85,135 L 90,130 L 100,125 L 115,120 L 130,118 L 145,120 L 160,125 L 170,135 L 175,145 L 178,160 L 180,175 L 180,190 L 178,205 L 175,220 L 170,235 L 165,245 L 155,250 L 145,252 L 135,250 L 125,245 L 118,235 L 115,225 L 110,215 L 105,205 L 100,195 L 95,185 L 92,175 L 90,165 L 88,155 L 85,148 Z M 190,160 L 200,155 L 210,152 L 220,155 L 225,165 L 228,180 L 230,195 L 228,210 L 220,220 L 210,225 L 200,223 L 195,215 L 192,200 L 190,185 L 190,170 Z"
          fill="url(#dotGrid)"
        />

        {/* South America */}
        <path
          d="M 240,330 L 250,320 L 260,315 L 270,318 L 278,328 L 285,345 L 288,365 L 290,385 L 288,405 L 285,425 L 280,445 L 275,460 L 268,475 L 258,485 L 248,488 L 238,485 L 230,475 L 225,460 L 222,440 L 220,420 L 220,400 L 222,380 L 225,360 L 230,345 L 235,335 Z"
          fill="url(#dotGrid)"
        />

        {/* Europe */}
        <path
          d="M 520,110 L 535,105 L 550,102 L 565,105 L 578,112 L 590,122 L 598,135 L 602,150 L 600,165 L 595,178 L 588,188 L 578,195 L 565,198 L 550,195 L 538,188 L 528,178 L 522,165 L 518,150 L 517,135 L 520,120 Z"
          fill="url(#dotGrid)"
        />

        {/* Africa */}
        <path
          d="M 540,240 L 555,235 L 570,233 L 585,235 L 598,242 L 608,252 L 615,265 L 620,280 L 622,300 L 622,320 L 620,340 L 615,360 L 608,378 L 598,395 L 585,408 L 570,415 L 555,418 L 540,415 L 528,408 L 518,395 L 510,378 L 505,360 L 502,340 L 502,320 L 505,300 L 510,280 L 518,265 L 528,252 L 538,243 Z"
          fill="url(#dotGrid)"
        />

        {/* Asia */}
        <path
          d="M 650,90 L 670,85 L 695,82 L 720,85 L 745,92 L 770,102 L 795,115 L 815,130 L 835,148 L 850,168 L 860,190 L 865,212 L 865,235 L 860,255 L 850,272 L 835,285 L 815,295 L 795,300 L 770,300 L 745,295 L 720,285 L 695,272 L 675,255 L 660,235 L 650,212 L 645,190 L 643,168 L 645,145 L 648,120 L 650,100 Z M 880,180 L 900,175 L 920,172 L 935,175 L 945,185 L 950,200 L 948,218 L 940,230 L 925,235 L 905,233 L 890,225 L 882,210 L 880,195 Z"
          fill="url(#dotGrid)"
        />

        {/* Australia */}
        <path
          d="M 900,400 L 915,395 L 935,392 L 955,395 L 972,402 L 985,412 L 995,425 L 1000,440 L 998,455 L 990,468 L 975,477 L 955,480 L 935,477 L 918,468 L 905,455 L 898,440 L 897,425 L 900,410 Z"
          fill="url(#dotGrid)"
        />

        {/* Connection Lines */}
        {/* Line 1: North America to Europe */}
        <path
          d="M 175,200 Q 350,150 520,170"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Line 2: Europe to Asia */}
        <path
          d="M 590,150 Q 680,140 780,180"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Line 3: Africa to Asia */}
        <path
          d="M 610,320 Q 720,300 850,260"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Line 4: Africa to Australia */}
        <path
          d="M 600,380 Q 750,400 920,430"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Animated dots on lines */}
        <circle cx="350" cy="150" r="3" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 175,200 Q 350,150 520,170"
          />
        </circle>

        <circle cx="680" cy="140" r="3" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M 590,150 Q 680,140 780,180"
          />
        </circle>

        <circle cx="750" cy="400" r="3" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M 600,380 Q 750,400 920,430"
          />
        </circle>

        {/* Location Markers */}
        {/* Marker 1: North America */}
        <g>
          <circle cx="160" cy="200" r="12" fill="#3b82f6" opacity="0.1">
            <animate
              attributeName="r"
              values="12;18;12"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="160" cy="200" r="8" fill="#3b82f6" opacity="0.3" />
          <circle cx="160" cy="200" r="5" fill="#3b82f6" />
        </g>

        {/* Marker 2: Asia */}
        <g>
          <circle cx="850" cy="240" r="12" fill="#f59e0b" opacity="0.1">
            <animate
              attributeName="r"
              values="12;18;12"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="850" cy="240" r="8" fill="#f59e0b" opacity="0.3" />
          <circle cx="850" cy="240" r="5" fill="#f59e0b" />
        </g>

        {/* Marker 3: Europe (small) */}
        <g>
          <circle cx="570" cy="150" r="10" fill="#3b82f6" opacity="0.1">
            <animate
              attributeName="r"
              values="10;15;10"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="570" cy="150" r="6" fill="#3b82f6" opacity="0.3" />
          <circle cx="570" cy="150" r="4" fill="#3b82f6" />
        </g>

        {/* Marker 4: Australia (small) */}
        <g>
          <circle cx="960" cy="440" r="10" fill="#10b981" opacity="0.1">
            <animate
              attributeName="r"
              values="10;15;10"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="960" cy="440" r="6" fill="#10b981" opacity="0.3" />
          <circle cx="960" cy="440" r="4" fill="#10b981" />
        </g>
      </svg>
    </div>
  );
};

export default WorldMapHero;