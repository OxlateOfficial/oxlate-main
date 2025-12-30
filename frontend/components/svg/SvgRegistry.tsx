'use client';
import React from 'react';
export type SvgProps = {
    className?: string;
    stroke?: string;
    fill?: string;
    opacity?: number;
};
export const SVG_REGISTRY = {
    phone: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 60 100" className={className}>
            <rect x="5" y="5" width="50" height="90" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="10" y="15" width="40" height="65" rx="2" stroke={stroke} strokeWidth="1" fill="none" />
        </svg>
    ),
    browser: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 70" className={className}>
            <rect x="2" y="2" width="96" height="66" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="2" y1="20" x2="98" y2="20" stroke={stroke} strokeWidth="2" />
            <circle cx="15" cy="11" r="3" fill={stroke} />
            <circle cx="27" cy="11" r="3" fill={stroke} />
        </svg>
    ),
    automationFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 80" className={className}>
            <circle cx="20" cy="40" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="60" cy="40" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="32" y1="40" x2="48" y2="40" stroke={stroke} strokeWidth="2" />
            <polygon points="45,36 48,40 45,44" fill={stroke} />
        </svg>
    ),
    erpGrid: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 90 60" className={className}>
            <rect x="2" y="2" width="86" height="56" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="30" y1="2" x2="30" y2="58" stroke={stroke} strokeWidth="1.5" />
            <line x1="60" y1="2" x2="60" y2="58" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    customShape: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 70" className={className}>
            <polygon points="35,5 60,20 60,50 35,65 10,50 10,20" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="35" cy="35" r="12" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    appFrame1: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 800 600" className={className}>
            <rect x="100" y="50" width="120" height="220" rx="20" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="580" y="100" width="100" height="180" rx="15" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="400" cy="450" r="60" stroke={stroke} strokeWidth="2" fill="none" />
        </svg>
    ),
    webFrame1: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg className="w-full h-full" viewBox="0 0 800 600">
            <rect x="100" y="100" width="250" height="180" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="100" y1="140" x2="350" y2="140" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    webFrame2: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg className="w-full h-full" viewBox="0 0 800 600">
            <rect x="450" y="200" width="280" height="200" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    ),
    nodeSingle: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 80" className={className}>
            <circle cx="40" cy="40" r="18" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="40" cy="40" r="6" fill={stroke} />
        </svg>
    ),
    nodeDouble: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 60" className={className}>
            <circle cx="30" cy="30" r="16" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="30" r="16" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="46" y1="30" x2="74" y2="30" stroke={stroke} strokeWidth="1.5" />
            <circle cx="30" cy="30" r="5" fill={stroke} />
            <circle cx="90" cy="30" r="5" fill={stroke} />
        </svg>
    ),
    nodeTriple: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 180 60" className={className}>
            <circle cx="30" cy="30" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="30" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="150" cy="30" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="44" y1="30" x2="76" y2="30" stroke={stroke} strokeWidth="1.5" />
            <line x1="104" y1="30" x2="136" y2="30" stroke={stroke} strokeWidth="1.5" />
            <circle cx="30" cy="30" r="4" fill={stroke} />
            <circle cx="90" cy="30" r="4" fill={stroke} />
            <circle cx="150" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    nodeClusterSmall: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="30" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="30" cy="70" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="70" cy="70" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="50" y1="42" x2="30" y2="58" stroke={stroke} strokeWidth="1.5" />
            <line x1="50" y1="42" x2="70" y2="58" stroke={stroke} strokeWidth="1.5" />
            <circle cx="50" cy="30" r="4" fill={stroke} />
            <circle cx="30" cy="70" r="4" fill={stroke} />
            <circle cx="70" cy="70" r="4" fill={stroke} />
        </svg>
    ),
    nodeClusterLarge: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 140" className={className}>
            <circle cx="70" cy="40" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="35" cy="80" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="70" cy="100" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="105" cy="80" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="70" y1="54" x2="35" y2="68" stroke={stroke} strokeWidth="1.5" />
            <line x1="70" y1="54" x2="70" y2="88" stroke={stroke} strokeWidth="1.5" />
            <line x1="70" y1="54" x2="105" y2="68" stroke={stroke} strokeWidth="1.5" />
            <circle cx="70" cy="40" r="4" fill={stroke} />
            <circle cx="35" cy="80" r="4" fill={stroke} />
            <circle cx="70" cy="100" r="4" fill={stroke} />
            <circle cx="105" cy="80" r="4" fill={stroke} />
        </svg>
    ),
    nodeHub: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 160" className={className}>
            <circle cx="80" cy="80" r="16" stroke={stroke} strokeWidth="2.5" fill="none" />
            <circle cx="80" cy="30" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="130" cy="80" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="80" cy="130" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="30" cy="80" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="80" y1="64" x2="80" y2="40" stroke={stroke} strokeWidth="1.5" />
            <line x1="96" y1="80" x2="120" y2="80" stroke={stroke} strokeWidth="1.5" />
            <line x1="80" y1="96" x2="80" y2="120" stroke={stroke} strokeWidth="1.5" />
            <line x1="64" y1="80" x2="40" y2="80" stroke={stroke} strokeWidth="1.5" />
            <circle cx="80" cy="80" r="6" fill={stroke} />
        </svg>
    ),
    nodeRing: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 120" className={className}>
            <circle cx="60" cy="20" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="100" cy="60" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="60" cy="100" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="20" cy="60" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <path d="M 68 24 Q 85 35 96 52" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 96 68 Q 85 85 68 96" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 52 96 Q 35 85 24 68" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 24 52 Q 35 35 52 24" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="20" r="3" fill={stroke} />
            <circle cx="100" cy="60" r="3" fill={stroke} />
            <circle cx="60" cy="100" r="3" fill={stroke} />
            <circle cx="20" cy="60" r="3" fill={stroke} />
        </svg>
    ),
    nodeStack: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 120" className={className}>
            <circle cx="40" cy="30" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="40" cy="60" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="40" cy="90" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="40" y1="44" x2="40" y2="46" stroke={stroke} strokeWidth="1.5" />
            <line x1="40" y1="74" x2="40" y2="76" stroke={stroke} strokeWidth="1.5" />
            <circle cx="40" cy="30" r="4" fill={stroke} />
            <circle cx="40" cy="60" r="4" fill={stroke} />
            <circle cx="40" cy="90" r="4" fill={stroke} />
        </svg>
    ),
    nodeToNode: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 60" className={className}>
            <circle cx="20" cy="30" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="80" cy="30" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="30" y1="30" x2="70" y2="30" stroke={stroke} strokeWidth="2" />
            <circle cx="20" cy="30" r="4" fill={stroke} />
            <circle cx="80" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    nodeToArrow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 60" className={className}>
            <circle cx="20" cy="30" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="30" y1="30" x2="75" y2="30" stroke={stroke} strokeWidth="2" />
            <polygon points="70,25 80,30 70,35" fill={stroke} />
            <circle cx="20" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    arrowToNode: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 60" className={className}>
            <circle cx="80" cy="30" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="20" y1="30" x2="70" y2="30" stroke={stroke} strokeWidth="2" />
            <polygon points="25,25 20,30 25,35" fill={stroke} />
            <circle cx="80" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    bidirectionalFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 60" className={className}>
            <line x1="20" y1="30" x2="100" y2="30" stroke={stroke} strokeWidth="2" />
            <polygon points="25,25 20,30 25,35" fill={stroke} />
            <polygon points="95,25 100,30 95,35" fill={stroke} />
        </svg>
    ),
    curvedFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 80" className={className}>
            <path d="M 20 20 Q 50 10 80 40" stroke={stroke} strokeWidth="2" fill="none" />
            <polygon points="75,37 80,40 77,45" fill={stroke} />
            <circle cx="20" cy="20" r="4" fill={stroke} />
        </svg>
    ),
    zigzagFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 80" className={className}>
            <path d="M 20 40 L 40 20 L 60 40 L 80 20 L 100 40" stroke={stroke} strokeWidth="2" fill="none" />
            <polygon points="95,37 100,40 97,43" fill={stroke} />
            <circle cx="20" cy="40" r="4" fill={stroke} />
        </svg>
    ),
    dottedFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 60" className={className}>
            <line x1="20" y1="30" x2="80" y2="30" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="75,25 80,30 75,35" fill={stroke} />
            <circle cx="20" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    branchingFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 100" className={className}>
            <circle cx="30" cy="50" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="40" y1="50" x2="60" y2="30" stroke={stroke} strokeWidth="2" />
            <line x1="40" y1="50" x2="60" y2="50" stroke={stroke} strokeWidth="2" />
            <line x1="40" y1="50" x2="60" y2="70" stroke={stroke} strokeWidth="2" />
            <polygon points="55,27 60,30 57,33" fill={stroke} />
            <polygon points="55,47 60,50 55,53" fill={stroke} />
            <polygon points="55,67 60,70 57,73" fill={stroke} />
            <circle cx="30" cy="50" r="4" fill={stroke} />
        </svg>
    ),
    loopbackFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <path d="M 20 30 L 60 30 L 60 70 L 20 70" stroke={stroke} strokeWidth="2" fill="none" />
            <polygon points="25,67 20,70 23,73" fill={stroke} />
            <circle cx="20" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    webFrameSimple: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 80" className={className}>
            <rect x="10" y="10" width="100" height="60" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="22" x2="110" y2="22" stroke={stroke} strokeWidth="2" />
            <circle cx="20" cy="16" r="2" fill={stroke} />
            <circle cx="28" cy="16" r="2" fill={stroke} />
        </svg>
    ),
    webFrameDetailed: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="10" width="120" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="26" x2="130" y2="26" stroke={stroke} strokeWidth="2" />
            <rect x="20" y="36" width="40" height="48" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="70" y="36" width="50" height="22" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="70" y="62" width="50" height="22" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="18" r="2.5" fill={stroke} />
            <circle cx="30" cy="18" r="2.5" fill={stroke} />
        </svg>
    ),
    webFrameSplit: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="10" width="120" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="26" x2="130" y2="26" stroke={stroke} strokeWidth="2" />
            <line x1="70" y1="26" x2="70" y2="90" stroke={stroke} strokeWidth="1.5" />
            <circle cx="20" cy="18" r="2.5" fill={stroke} />
        </svg>
    ),
    webFrameDashboard: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 120" className={className}>
            <rect x="10" y="10" width="140" height="100" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="26" x2="150" y2="26" stroke={stroke} strokeWidth="2" />
            <rect x="20" y="36" width="40" height="30" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="70" y="36" width="40" height="30" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="120" y="36" width="25" height="30" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="20" y="72" width="125" height="30" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    webFrameGrid: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="10" width="120" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="50" y1="10" x2="50" y2="90" stroke={stroke} strokeWidth="1.5" />
            <line x1="90" y1="10" x2="90" y2="90" stroke={stroke} strokeWidth="1.5" />
            <line x1="10" y1="35" x2="130" y2="35" stroke={stroke} strokeWidth="1.5" />
            <line x1="10" y1="60" x2="130" y2="60" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    webFrameSidebar: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="10" width="120" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="26" x2="130" y2="26" stroke={stroke} strokeWidth="2" />
            <line x1="45" y1="26" x2="45" y2="90" stroke={stroke} strokeWidth="2" />
            <circle cx="20" cy="18" r="2.5" fill={stroke} />
        </svg>
    ),
    webFrameNavbar: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="10" width="120" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="30" x2="130" y2="30" stroke={stroke} strokeWidth="2" />
            <rect x="20" y="16" width="20" height="8" rx="1" stroke={stroke} strokeWidth="1" fill="none" />
            <line x1="90" y1="20" x2="100" y2="20" stroke={stroke} strokeWidth="1.5" />
            <line x1="105" y1="20" x2="115" y2="20" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    webFrameCards: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 100" className={className}>
            <rect x="10" y="10" width="45" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="60" y="10" width="45" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="110" y="10" width="40" height="80" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
        </svg>
    ),
    mobileFrameSimple: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 120" className={className}>
            <rect x="10" y="10" width="50" height="100" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="15" y="20" width="40" height="75" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <line x1="30" y1="103" x2="40" y2="103" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    mobileFrameDetailed: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 130" className={className}>
            <rect x="10" y="10" width="50" height="110" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="15" y="22" width="40" height="85" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="20" y="28" width="30" height="20" rx="2" stroke={stroke} strokeWidth="1" fill="none" />
            <rect x="20" y="52" width="30" height="12" rx="2" stroke={stroke} strokeWidth="1" fill="none" />
            <rect x="20" y="68" width="30" height="12" rx="2" stroke={stroke} strokeWidth="1" fill="none" />
            <line x1="30" y1="112" x2="40" y2="112" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    mobileFrameStack: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 110 120" className={className}>
            <rect x="10" y="10" width="40" height="80" rx="6" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="35" y="25" width="40" height="80" rx="6" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="60" y="40" width="40" height="80" rx="6" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    mobileFrameSplit: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 130" className={className}>
            <rect x="10" y="10" width="50" height="110" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="70" x2="60" y2="70" stroke={stroke} strokeWidth="2" />
            <rect x="15" y="22" width="40" height="40" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="15" y="75" width="40" height="38" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    mobileFrameGrid: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 130" className={className}>
            <rect x="10" y="10" width="50" height="110" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="15" y="22" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="37" y="22" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="15" y="44" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="37" y="44" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="15" y="66" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="37" y="66" width="18" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    mobileFrameModal: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 130" className={className}>
            <rect x="10" y="10" width="50" height="110" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="18" y="40" width="34" height="50" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="35" cy="55" r="8" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    mobileFrameList: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 70 130" className={className}>
            <rect x="10" y="10" width="50" height="110" rx="8" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="15" y1="28" x2="55" y2="28" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="40" x2="55" y2="40" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="52" x2="55" y2="52" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="64" x2="55" y2="64" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="76" x2="55" y2="76" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    pipelineLinear: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 60" className={className}>
            <circle cx="30" cy="30" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="80" cy="30" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="130" cy="30" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="42" y1="30" x2="68" y2="30" stroke={stroke} strokeWidth="2" />
            <line x1="92" y1="30" x2="118" y2="30" stroke={stroke} strokeWidth="2" />
            <polygon points="63,25 68,30 63,35" fill={stroke} />
            <polygon points="113,25 118,30 113,35" fill={stroke} />
            <circle cx="30" cy="30" r="4" fill={stroke} />
            <circle cx="80" cy="30" r="4" fill={stroke} />
            <circle cx="130" cy="30" r="4" fill={stroke} />
        </svg>
    ),
    pipelineBranch: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <circle cx="30" cy="50" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="25" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="75" r="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="42" y1="50" x2="55" y2="50" stroke={stroke} strokeWidth="2" />
            <line x1="55" y1="50" x2="80" y2="25" stroke={stroke} strokeWidth="2" />
            <line x1="55" y1="50" x2="80" y2="75" stroke={stroke} strokeWidth="2" />
            <circle cx="30" cy="50" r="4" fill={stroke} />
            <circle cx="90" cy="25" r="3" fill={stroke} />
            <circle cx="90" cy="75" r="3" fill={stroke} />
        </svg>
    ),
    pipelineLoop: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <circle cx="30" cy="50" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="50" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="42" y1="50" x2="78" y2="50" stroke={stroke} strokeWidth="2" />
            <path d="M 90 62 Q 60 80 30 62" stroke={stroke} strokeWidth="2" fill="none" />
            <polygon points="33,64 30,62 33,59" fill={stroke} />
            <circle cx="30" cy="50" r="4" fill={stroke} />
            <circle cx="90" cy="50" r="4" fill={stroke} />
        </svg>
    ),
    automationChain: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 180 60" className={className}>
            <rect x="10" y="15" width="30" height="30" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="75" y="15" width="30" height="30" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="140" y="15" width="30" height="30" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="40" y1="30" x2="75" y2="30" stroke={stroke} strokeWidth="2" />
            <line x1="105" y1="30" x2="140" y2="30" stroke={stroke} strokeWidth="2" />
            <polygon points="70,25 75,30 70,35" fill={stroke} />
            <polygon points="135,25 140,30 135,35" fill={stroke} />
        </svg>
    ),
    triggerFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <polygon points="30,25 50,15 50,35" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="90" cy="50" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="50" y1="25" x2="78" y2="50" stroke={stroke} strokeWidth="2" />
            <polygon points="75,48 78,50 76,53" fill={stroke} />
            <circle cx="90" cy="50" r="4" fill={stroke} />
        </svg>
    ),
    eventFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 80" className={className}>
            <circle cx="30" cy="40" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="70" y="25" width="30" height="30" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="130" cy="40" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="44" y1="40" x2="70" y2="40" stroke={stroke} strokeWidth="2" />
            <line x1="100" y1="40" x2="116" y2="40" stroke={stroke} strokeWidth="2" />
            <polygon points="65,35 70,40 65,45" fill={stroke} />
            <polygon points="111,35 116,40 111,45" fill={stroke} />
        </svg>
    ),
    schedulerFlow: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="15" y="25" width="30" height="30" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="85" cy="40" r="12" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="45" y1="40" x2="73" y2="40" stroke={stroke} strokeWidth="2" />
            <circle cx="25" cy="35" r="2" fill={stroke} />
            <circle cx="35" cy="35" r="2" fill={stroke} />
            <circle cx="30" cy="45" r="2" fill={stroke} />
            <polygon points="68,35 73,40 68,45" fill={stroke} />
            <circle cx="85" cy="40" r="4" fill={stroke} />
        </svg>
    ),
    tableGrid: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 80" className={className}>
            <rect x="10" y="10" width="100" height="60" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="28" x2="110" y2="28" stroke={stroke} strokeWidth="2" />
            <line x1="45" y1="10" x2="45" y2="70" stroke={stroke} strokeWidth="1.5" />
            <line x1="75" y1="10" x2="75" y2="70" stroke={stroke} strokeWidth="1.5" />
            <line x1="10" y1="45" x2="110" y2="45" stroke={stroke} strokeWidth="1" />
        </svg>
    ),
    tableStack: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 110" className={className}>
            <rect x="10" y="10" width="80" height="25" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="10" y="42" width="80" height="25" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="10" y="74" width="80" height="25" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="30" y1="10" x2="30" y2="35" stroke={stroke} strokeWidth="1.5" />
            <line x1="70" y1="10" x2="70" y2="35" stroke={stroke} strokeWidth="1.5" />
            <line x1="30" y1="42" x2="30" y2="67" stroke={stroke} strokeWidth="1.5" />
            <line x1="70" y1="42" x2="70" y2="67" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    databaseCylinder: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 100" className={className}>
            <ellipse cx="40" cy="20" rx="25" ry="10" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="15" y1="20" x2="15" y2="75" stroke={stroke} strokeWidth="2" />
            <line x1="65" y1="20" x2="65" y2="75" stroke={stroke} strokeWidth="2" />
            <ellipse cx="40" cy="75" rx="25" ry="10" stroke={stroke} strokeWidth="2" fill="none" />
            <ellipse cx="40" cy="40" rx="25" ry="8" stroke={stroke} strokeWidth="1.5" fill="none" />
            <ellipse cx="40" cy="55" rx="25" ry="8" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    dataBlocks: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 100" className={className}>
            <rect x="10" y="15" width="30" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="45" y="15" width="30" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="80" y="15" width="30" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="27.5" y="55" width="30" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="62.5" y="55" width="30" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="25" y1="45" x2="42.5" y2="55" stroke={stroke} strokeWidth="1.5" />
            <line x1="60" y1="45" x2="42.5" y2="55" stroke={stroke} strokeWidth="1.5" />
            <line x1="60" y1="45" x2="77.5" y2="55" stroke={stroke} strokeWidth="1.5" />
            <line x1="95" y1="45" x2="77.5" y2="55" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    dataFlowGrid: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="30" width="30" height="40" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="55" y="20" width="30" height="60" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="100" y="25" width="30" height="50" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="40" y1="50" x2="55" y2="50" stroke={stroke} strokeWidth="1.5" />
            <line x1="85" y1="50" x2="100" y2="50" stroke={stroke} strokeWidth="1.5" />
            <polygon points="52,47 55,50 52,53" fill={stroke} />
            <polygon points="97,47 100,50 97,53" fill={stroke} />
        </svg>
    ),
    schemaDiagram: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 160 120" className={className}>
            <rect x="10" y="10" width="50" height="40" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="100" y="10" width="50" height="40" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="55" y="70" width="50" height="40" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="35" y1="50" x2="80" y2="70" stroke={stroke} strokeWidth="1.5" />
            <line x1="125" y1="50" x2="80" y2="70" stroke={stroke} strokeWidth="1.5" />
            <line x1="10" y1="25" x2="15" y2="25" stroke={stroke} strokeWidth="1" />
            <line x1="10" y1="35" x2="15" y2="35" stroke={stroke} strokeWidth="1" />
        </svg>
    ),
    relationalLinks: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <rect x="10" y="15" width="40" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="90" y="15" width="40" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="50" y="55" width="40" height="30" rx="3" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="50" y1="30" x2="90" y2="30" stroke={stroke} strokeWidth="1.5" />
            <line x1="30" y1="45" x2="70" y2="55" stroke={stroke} strokeWidth="1.5" />
            <line x1="110" y1="45" x2="70" y2="55" stroke={stroke} strokeWidth="1.5" />
            <circle cx="50" cy="30" r="3" fill={stroke} />
            <circle cx="90" cy="30" r="3" fill={stroke} />
        </svg>
    ),
    gearSingle: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 80" className={className}>
            <circle cx="40" cy="40" r="18" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="40" cy="40" r="8" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="38" y="10" width="4" height="12" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="38" y="58" width="4" height="12" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="10" y="38" width="12" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="58" y="38" width="12" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="20" y="20" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" transform="rotate(45 22 24)" />
            <rect x="56" y="20" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" transform="rotate(-45 58 24)" />
            <rect x="20" y="52" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" transform="rotate(-45 22 56)" />
            <rect x="56" y="52" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" transform="rotate(45 58 56)" />
        </svg>
    ),
    gearDouble: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 120 80" className={className}>
            <circle cx="35" cy="40" r="16" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="35" cy="40" r="7" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="85" cy="40" r="16" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="85" cy="40" r="7" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="33" y="12" width="4" height="10" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="33" y="58" width="4" height="10" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="83" y="12" width="4" height="10" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="83" y="58" width="4" height="10" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    gearCluster: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 140 100" className={className}>
            <circle cx="40" cy="35" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="40" cy="35" r="6" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="85" cy="35" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="85" cy="35" r="6" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="62" cy="65" r="14" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="62" cy="65" r="6" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="38" y="10" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="83" y="10" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="60" y="82" width="4" height="8" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    moduleBlock: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 80" className={className}>
            <rect x="10" y="10" width="60" height="60" rx="6" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="10" y1="30" x2="70" y2="30" stroke={stroke} strokeWidth="2" />
            <rect x="20" y="40" width="15" height="15" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="45" y="40" width="15" height="15" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="25" cy="18" r="2" fill={stroke} />
            <circle cx="40" cy="18" r="2" fill={stroke} />
            <circle cx="55" cy="18" r="2" fill={stroke} />
        </svg>
    ),
    moduleStack: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <rect x="10" y="10" width="60" height="20" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="10" y="40" width="60" height="20" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <rect x="10" y="70" width="60" height="20" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="2" fill={stroke} />
            <circle cx="20" cy="50" r="2" fill={stroke} />
            <circle cx="20" cy="80" r="2" fill={stroke} />
        </svg>
    ),
    configPanel: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 120" className={className}>
            <rect x="10" y="10" width="80" height="100" rx="6" stroke={stroke} strokeWidth="2" fill="none" />
            <line x1="20" y1="30" x2="80" y2="30" stroke={stroke} strokeWidth="1.5" />
            <line x1="20" y1="50" x2="80" y2="50" stroke={stroke} strokeWidth="1.5" />
            <line x1="20" y1="70" x2="80" y2="70" stroke={stroke} strokeWidth="1.5" />
            <circle cx="70" cy="30" r="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="40" cy="50" r="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="60" cy="70" r="4" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    systemBox: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <rect x="10" y="10" width="80" height="80" rx="8" stroke={stroke} strokeWidth="2.5" fill="none" />
            <rect x="20" y="20" width="60" height="60" rx="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="15" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="5" fill={stroke} />
        </svg>
    ),
    logicBlock: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 80 80" className={className}>
            <rect x="10" y="20" width="60" height="40" rx="4" stroke={stroke} strokeWidth="2" fill="none" />
            <circle cx="5" cy="35" r="3" fill={stroke} />
            <circle cx="5" cy="45" r="3" fill={stroke} />
            <circle cx="75" cy="40" r="3" fill={stroke} />
            <line x1="5" y1="35" x2="10" y2="35" stroke={stroke} strokeWidth="1.5" />
            <line x1="5" y1="45" x2="10" y2="45" stroke={stroke} strokeWidth="1.5" />
            <line x1="70" y1="40" x2="75" y2="40" stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    cornerLines: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <path d="M 10 10 L 10 30 M 10 10 L 30 10" stroke={stroke} strokeWidth="2" strokeLinecap="square" />
            <path d="M 90 10 L 90 30 M 90 10 L 70 10" stroke={stroke} strokeWidth="2" strokeLinecap="square" />
            <path d="M 10 90 L 10 70 M 10 90 L 30 90" stroke={stroke} strokeWidth="2" strokeLinecap="square" />
            <path d="M 90 90 L 90 70 M 90 90 L 70 90" stroke={stroke} strokeWidth="2" strokeLinecap="square" />
        </svg>
    ),
    cornerFrames: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <path d="M 5 5 L 5 25 L 10 25 L 10 10 L 25 10 L 25 5 Z" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 95 5 L 95 25 L 90 25 L 90 10 L 75 10 L 75 5 Z" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 5 95 L 5 75 L 10 75 L 10 90 L 25 90 L 25 95 Z" stroke={stroke} strokeWidth="1.5" fill="none" />
            <path d="M 95 95 L 95 75 L 90 75 L 90 90 L 75 90 L 75 95 Z" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    gridOverlay: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <line x1="0" y1="25" x2="100" y2="25" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
            <line x1="0" y1="50" x2="100" y2="50" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
            <line x1="0" y1="75" x2="100" y2="75" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
            <line x1="25" y1="0" x2="25" y2="100" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
            <line x1="50" y1="0" x2="50" y2="100" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
            <line x1="75" y1="0" x2="75" y2="100" stroke={stroke} strokeWidth="0.5" opacity="0.4" />
        </svg>
    ),
    crosshair: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="30" stroke={stroke} strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="20" stroke={stroke} strokeWidth="1" fill="none" />
            <line x1="50" y1="10" x2="50" y2="35" stroke={stroke} strokeWidth="1.5" />
            <line x1="50" y1="65" x2="50" y2="90" stroke={stroke} strokeWidth="1.5" />
            <line x1="10" y1="50" x2="35" y2="50" stroke={stroke} strokeWidth="1.5" />
            <line x1="65" y1="50" x2="90" y2="50" stroke={stroke} strokeWidth="1.5" />
            <circle cx="50" cy="50" r="3" fill={stroke} />
        </svg>
    ),
    measurementMarks: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <line x1="20" y1="20" x2="80" y2="20" stroke={stroke} strokeWidth="1.5" />
            <line x1="20" y1="15" x2="20" y2="25" stroke={stroke} strokeWidth="1.5" />
            <line x1="80" y1="15" x2="80" y2="25" stroke={stroke} strokeWidth="1.5" />
            <line x1="40" y1="18" x2="40" y2="22" stroke={stroke} strokeWidth="1" />
            <line x1="60" y1="18" x2="60" y2="22" stroke={stroke} strokeWidth="1" />
            <line x1="20" y1="20" x2="20" y2="80" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="20" x2="25" y2="20" stroke={stroke} strokeWidth="1.5" />
            <line x1="15" y1="80" x2="25" y2="80" stroke={stroke} strokeWidth="1.5" />
            <line x1="18" y1="40" x2="22" y2="40" stroke={stroke} strokeWidth="1" />
            <line x1="18" y1="60" x2="22" y2="60" stroke={stroke} strokeWidth="1" />
        </svg>
    ),
    alignmentGuides: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <line x1="50" y1="0" x2="50" y2="100" stroke={stroke} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke={stroke} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
            <circle cx="50" cy="50" r="3" stroke={stroke} strokeWidth="1" fill="none" />
        </svg>
    ),
    boundingBox: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <rect x="20" y="20" width="60" height="60" stroke={stroke} strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
            <rect x="18" y="18" width="4" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="78" y="18" width="4" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="18" y="78" width="4" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
            <rect x="78" y="78" width="4" height="4" stroke={stroke} strokeWidth="1.5" fill="none" />
        </svg>
    ),
    referenceLines: ({ stroke = 'currentColor', className }: SvgProps) => (
        <svg viewBox="0 0 100 100" className={className}>
            <line x1="10" y1="10" x2="90" y2="10" stroke={stroke} strokeWidth="1" opacity="0.4" />
            <line x1="10" y1="30" x2="90" y2="30" stroke={stroke} strokeWidth="1" opacity="0.4" />
            <line x1="10" y1="50" x2="90" y2="50" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
            <line x1="10" y1="70" x2="90" y2="70" stroke={stroke} strokeWidth="1" opacity="0.4" />
            <line x1="10" y1="90" x2="90" y2="90" stroke={stroke} strokeWidth="1" opacity="0.4" />
        </svg>
    ),
} as const;