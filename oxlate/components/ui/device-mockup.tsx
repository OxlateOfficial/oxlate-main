"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Smartphone,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ScreenShotOption {
  id: string;
  label: string;
  src: string;
  caption: string;
}

const LAPTOP_SCREENS: ScreenShotOption[] = [
  {
    id: "mk-hero",
    label: "Portal Landing",
    src: "/work/mentorkrish/01-hero-landing.jpg",
    caption: "Mentor Krish — High-converting SAT & admissions consultancy portal",
  },
  {
    id: "mk-programs",
    label: "Curricula",
    src: "/work/mentorkrish/02-academic-prep-programs.jpg",
    caption: "Interactive SAT, ACT, and IELTS course discovery catalog",
  },
  {
    id: "mk-roadmap",
    label: "Roadmap",
    src: "/work/mentorkrish/03-academic-roadmap.jpg",
    caption: "4-stage diagnostic academic roadmap with visual milestone tracking",
  },
  {
    id: "mk-excellence",
    label: "Breakthroughs",
    src: "/work/mentorkrish/04-moments-of-excellence.jpg",
    caption: "Interactive student score breakthrough lightbox gallery",
  },
];

const PHONE_SCREENS: ScreenShotOption[] = [
  {
    id: "lem-home",
    label: "Specialties",
    src: "/work/lemniska/01-home-specialties.jpeg",
    caption: "Lemniska — 10+ medical specialty booking & care marketplace",
  },
  {
    id: "lem-doctors",
    label: "Doctors",
    src: "/work/lemniska/02-doctor-listing.jpeg",
    caption: "270+ verified multi-lingual doctors with instant slot booking",
  },
  {
    id: "lem-buddy",
    label: "AI Buddy",
    src: "/work/lemniska/03-ai-buddy-intro.jpeg",
    caption: "24/7 conversational AI health triage assistant",
  },
  {
    id: "lem-chat",
    label: "Consult Chat",
    src: "/work/lemniska/04-ai-buddy-chat.jpeg",
    caption: "Encrypted, HIPAA-compliant patient consultation workflows",
  },
];

function FloatingBadge({
  icon,
  title,
  subtitle,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-[#D9D4CC] bg-[#FAF8F5]/95 shadow-[0_8px_20px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all hover:border-[#A87445] hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F5F2EC] border border-[#D9D4CC]/80 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-sans text-xs font-bold text-[#111111] leading-tight">
          {title}
        </span>
        <span className="font-mono text-[10px] text-[#6C6B66] leading-tight mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export function DeviceMockup() {
  const [deviceType, setDeviceType] = useState<"laptop" | "phone">("laptop");
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const screens = deviceType === "laptop" ? LAPTOP_SCREENS : PHONE_SCREENS;
  const currentScreen = screens[activeScreenIndex] || screens[0];

  const handleSwitchDevice = (type: "laptop" | "phone") => {
    setDeviceType(type);
    setActiveScreenIndex(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 overflow-visible select-none">
      {/* Device Mode Switcher Pill */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#D9D4CC] bg-[#FAF8F5]/90 p-1.5 shadow-sm backdrop-blur-md">
          <button
            type="button"
            onClick={() => handleSwitchDevice("laptop")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              deviceType === "laptop"
                ? "bg-[#111111] text-[#FAF8F5] shadow-sm font-semibold"
                : "text-[#6C6B66] hover:text-[#111111]"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Web Platform (Laptop)</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitchDevice("phone")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              deviceType === "phone"
                ? "bg-[#111111] text-[#FAF8F5] shadow-sm font-semibold"
                : "text-[#6C6B66] hover:text-[#111111]"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App (Phone)</span>
          </button>
        </div>

        {/* Quick Link to Current Project Case Study */}
        <Link
          href={deviceType === "laptop" ? "/work/mentorkrish" : "/work/lemniska"}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A87445] hover:text-[#111111] transition-colors py-1 px-3 border border-[#D9D4CC] rounded-full bg-[#FAF8F5]"
        >
          <span>View {deviceType === "laptop" ? "Mentor Krish" : "Lemniska"} Case Study</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Showcase Canvas with Orbiting Badges */}
      <div className="relative flex items-center justify-center overflow-visible">
        {/* Left Declining Structural Accent Line */}
        <div className="pointer-events-none absolute -left-2 top-1/2 hidden h-px w-20 lg:w-36 -translate-y-1/2 rotate-[-12deg] bg-gradient-to-r from-[#A87445] to-transparent md:block opacity-60" />

        {/* Right Declining Structural Accent Line */}
        <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-20 lg:w-36 -translate-y-1/2 rotate-[12deg] bg-gradient-to-l from-[#A87445] to-transparent md:block opacity-60" />

        {/* Orbit Badge Top-Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-2 sm:-left-4 top-10 z-30 hidden md:block lg:-left-8"
        >
          <FloatingBadge
            icon={<Zap className="w-4 h-4 text-[#A87445]" />}
            title="Sub-Second Speed"
            subtitle="100% Lighthouse Score"
          />
        </motion.div>

        {/* Orbit Badge Top-Right */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-2 sm:-right-4 top-12 z-30 hidden md:block lg:-right-8"
        >
          <FloatingBadge
            icon={<Sparkles className="w-4 h-4 text-[#A87445]" />}
            title="5,000+ Active Users"
            subtitle="Google Play Store Downloads"
          />
        </motion.div>

        {/* Orbit Badge Bottom-Left */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-2 sm:-left-4 bottom-14 z-30 hidden md:block lg:-left-8"
        >
          <FloatingBadge
            icon={<ShieldCheck className="w-4 h-4 text-[#A87445]" />}
            title="100% Code Ownership"
            subtitle="Zero Vendor Lock-In"
          />
        </motion.div>

        {/* Orbit Badge Bottom-Right */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -right-2 sm:-right-4 bottom-12 z-30 hidden md:block lg:-right-8"
        >
          <FloatingBadge
            icon={<CheckCircle2 className="w-4 h-4 text-[#A87445]" />}
            title="Direct Builder Access"
            subtitle="Abhishek, Vaibhav & Gurmeet"
          />
        </motion.div>

        {/* Central Pure Object Showcase */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {deviceType === "laptop" ? (
              /* LAPTOP MOCKUP */
              <motion.div
                key="laptop-frame"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-4xl flex flex-col items-center"
              >
                {/* Laptop Lid / Screen Frame */}
                <div className="relative w-full aspect-[16/10] max-h-[520px] rounded-t-2xl sm:rounded-t-3xl border-4 sm:border-8 border-[#1C1C1A] bg-[#111111] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
                  {/* Top Bezel & Camera Dot */}
                  <div className="h-5 sm:h-6 w-full bg-[#1C1C1A] flex items-center justify-center relative shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2A2A28] border border-[#3A3A36]" />
                  </div>

                  {/* Browser Chrome Header */}
                  <div className="h-8 sm:h-9 bg-[#242422] border-b border-[#323230] px-3 sm:px-4 flex items-center justify-between shrink-0">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>

                    {/* URL Bar */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#161615] rounded-md border border-[#3A3A36] text-[10px] sm:text-xs font-mono text-[#D9D4CC] max-w-[280px] sm:max-w-xs w-full justify-center">
                      <span className="text-[#27C93F] font-bold">🔒</span>
                      <span className="truncate">https://mentorkrish.in</span>
                    </div>

                    <div className="font-mono text-[9px] uppercase tracking-wider text-[#A87445] hidden sm:block">
                      LIVE CLIENT PLATFORM
                    </div>
                  </div>

                  {/* Screen Content Viewport */}
                  <div className="relative flex-1 w-full bg-[#0E0E0D] overflow-hidden">
                    <Image
                      src={currentScreen.src}
                      alt={currentScreen.caption}
                      fill
                      priority
                      className="object-cover object-top transition-opacity duration-300"
                    />

                    {/* Overlay Caption Bar on Screen */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <p className="font-sans text-xs sm:text-sm font-medium text-white">
                        {currentScreen.caption}
                      </p>
                      <a
                        href="https://mentorkrish.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#A87445] hover:text-white transition-colors shrink-0"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Laptop Lower Deck / Aluminum Base */}
                <div className="relative w-[104%] h-3.5 sm:h-5 bg-gradient-to-b from-[#C4C0B6] to-[#8E8B83] rounded-b-xl sm:rounded-b-2xl border-t border-[#D9D4CC] shadow-[0_12px_24px_rgba(0,0,0,0.18)] flex items-start justify-center">
                  <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#52504B] rounded-b-sm" />
                </div>
              </motion.div>
            ) : (
              /* PHONE MOCKUP */
              <motion.div
                key="phone-frame"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[340px] sm:max-w-[360px] flex flex-col items-center"
              >
                {/* Phone Hardware Body */}
                <div className="relative w-full aspect-[9/19] rounded-[44px] sm:rounded-[48px] border-[10px] sm:border-[12px] border-[#1C1C1A] bg-[#111111] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
                  {/* Dynamic Island / Speaker Pill */}
                  <div className="absolute top-3.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                    <div className="w-24 h-5 rounded-full bg-black flex items-center justify-end px-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#181816] border border-[#2A2A26]" />
                    </div>
                  </div>

                  {/* App Screen Viewport */}
                  <div className="relative flex-1 w-full bg-[#161615] overflow-hidden pt-8">
                    <Image
                      src={currentScreen.src}
                      alt={currentScreen.caption}
                      fill
                      priority
                      className="object-cover object-top transition-opacity duration-300"
                    />

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-3 inset-x-3 bg-black/85 backdrop-blur-md border border-[#3A3A36] p-3 rounded-xl flex flex-col gap-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#A87445]">
                          LEMNISKA HEALTH
                        </span>
                        <span className="font-mono text-[8.5px] text-[#27C93F] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                          5,000+ DOWNLOADS
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#FAF8F5] leading-tight">
                        {currentScreen.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Screen Thumbnail Bar */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C6B66] mr-1 hidden sm:inline">
              SELECT VIEW:
            </span>
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenIndex(idx)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                  activeScreenIndex === idx
                    ? "border-[#A87445] bg-[#A87445] text-white font-semibold shadow-xs"
                    : "border-[#D9D4CC] bg-[#FAF8F5] text-[#292929] hover:border-[#111111]"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
