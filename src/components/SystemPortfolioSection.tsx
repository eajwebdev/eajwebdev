import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, ArrowUpRight } from "lucide-react";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";

const portfolioProjects = [
  {
    id: 1,
    title: "HRIS Portal",
    badge: "HR & PAYROLL SYSTEM",
    desc: "A comprehensive Human Resource Information System to manage employee onboarding, time tracking, payroll computations, and leave requests effortlessly.",
    url: "https://hris.eajwebdev.com/",
    displayUrl: "hris.eajwebdev.com",
  },
  {
    id: 2,
    title: "Pharmacy System",
    badge: "PHARMACY MANAGEMENT",
    desc: "An all-in-one pharmacy management tool for prescription filling, real-time inventory tracking, sales reporting, and automated stock alerts.",
    url: "https://pharmacy.eajwebdev.com/",
    displayUrl: "pharmacy.eajwebdev.com",
  },
  {
    id: 3,
    title: "Laundry Automation",
    badge: "LAUNDRY MANAGEMENT",
    badgesExtra: ["SMS ALERTS", "ONLINE BOOKING"],
    desc: "A modern laundry operations suite for managing customer drop-offs, tracking washing cycles, scheduling staff, and sending automatic pick-up notifications.",
    url: "https://laundry.eajwebdev.com/",
    displayUrl: "laundry.eajwebdev.com",
  },
];

// Eaj Logo Image Icon
const EajLogo = () => (
  <img
    src="/eajicon.png"
    alt="EAJ Logo"
    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-contain border border-slate-100 bg-white p-1.5 shadow-sm shrink-0 select-none"
  />
);

// Web App Launch Button
const LaunchAppButton = ({ url, displayUrl }: { url: string; displayUrl: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl border border-neutral-800 transition-all hover:bg-neutral-900 active:scale-95 select-none shrink-0"
  >
    <Globe size={16} className="text-neutral-400 shrink-0" />
    <div className="flex flex-col text-left leading-none">
      <span className="text-[7px] md:text-[8px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">Launch System</span>
      <span className="text-[12px] md:text-[13px] font-bold text-white tracking-normal font-sans flex items-center gap-1">
        {displayUrl} <ArrowUpRight size={12} className="opacity-60 shrink-0" />
      </span>
    </div>
  </a>
);

export default function SystemPortfolioSection() {
  const {
    activeProjectIndex,
    setActiveProjectIndex,
    prevProject,
    nextProject,
  } = useProjectCarousel(portfolioProjects.length);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardAnimState = (idx: number) => {
    const isActive = idx === activeProjectIndex;
    const isHovered = idx === hoveredIndex;
    
    let position: "left" | "center" | "right" = "center";
    if (activeProjectIndex === 0) {
      if (idx === 0) position = "center";
      else if (idx === 1) position = "right";
      else position = "left";
    } else if (activeProjectIndex === 1) {
      if (idx === 0) position = "left";
      else if (idx === 1) position = "center";
      else position = "right";
    } else if (activeProjectIndex === 2) {
      if (idx === 0) position = "left";
      else if (idx === 1) position = "right";
      else position = "center";
    }

    let x = "-50%";
    let y = "-50%";
    let rotate = 0;
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;

    if (position === "center") {
      x = "-50%";
      y = "-50%";
      rotate = 0;
      scale = isHovered ? 1.04 : 1.0;
      zIndex = 30;
      opacity = 1;
    } else if (position === "left") {
      x = isMobile ? "-78%" : "-110%";
      y = isMobile ? "-48%" : "-46%";
      rotate = isMobile ? -5 : -9;
      scale = isHovered ? 0.92 : 0.88;
      zIndex = isHovered ? 25 : 10;
      opacity = 0.82;
    } else if (position === "right") {
      x = isMobile ? "-22%" : "10%";
      y = isMobile ? "-48%" : "-46%";
      rotate = isMobile ? 5 : 9;
      scale = isHovered ? 0.92 : 0.88;
      zIndex = isHovered ? 25 : 10;
      opacity = 0.82;
    }

    return {
      x,
      y,
      rotate,
      scale,
      zIndex,
      opacity,
    };
  };

  return (
    <section
      id="projects"
      className="relative overflow-x-hidden bg-white py-16 md:py-24"
    >
      <div className="dot-grid-overlay pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 flex flex-col items-center overflow-visible">
        
        {/* Header Block */}
        <div className="mb-10 text-center md:mb-14">
          <h3 className="text-2xl leading-[1.15] font-black tracking-tight text-[#1f2454] md:text-4xl md:leading-[1.1] lg:text-5xl">
            System <span className="text-[#97215f]">Portfolio</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] md:text-lg lg:text-lg">
            A look at the custom-built systems we've delivered for our clients.
          </p>
        </div>

        {/* Card Deck Carousel Container */}
        <div className="relative w-full max-w-5xl h-[330px] md:h-[420px] mt-4 mb-8 overflow-visible flex items-center justify-center">
          {portfolioProjects.map((item, idx) => {
            const animState = getCardAnimState(idx);
            const isActive = idx === activeProjectIndex;

            return (
              <motion.div
                key={item.id}
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{
                  x: animState.x,
                  y: animState.y,
                  rotate: animState.rotate,
                  scale: animState.scale,
                  zIndex: animState.zIndex,
                  opacity: animState.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  if (!isActive) {
                    setActiveProjectIndex(idx);
                  }
                }}
                className={`absolute left-1/2 top-1/2 w-[85vw] max-w-[340px] md:w-[450px] md:max-w-none h-[280px] md:h-[320px] rounded-[2rem] border border-slate-200/80 bg-white p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(31,36,84,0.06),0_1px_3px_rgba(0,0,0,0.02)] transition-shadow duration-300 ${
                  isActive
                    ? "shadow-[0_25px_60px_rgba(31,36,84,0.12),0_1px_3px_rgba(0,0,0,0.02)] cursor-default"
                    : "cursor-pointer hover:shadow-[0_20px_50px_rgba(31,36,84,0.08)]"
                }`}
              >
                <div className="flex flex-col text-left gap-4 md:gap-5">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[8px] md:text-[9px] font-extrabold tracking-wider text-white bg-black px-3 py-1 rounded-full font-mono uppercase">
                      ( {item.badge} )
                    </span>
                    {item.badgesExtra && item.badgesExtra.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[8px] md:text-[9px] font-extrabold tracking-wider text-slate-500 border border-slate-200 bg-white px-3 py-1 rounded-full font-mono uppercase"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* App Info Header (Icon + Title) */}
                  <div className="flex items-center gap-3.5">
                    <EajLogo />
                    <h4 className="text-base md:text-xl font-bold font-mono text-[#1f2454] tracking-tight">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm leading-relaxed text-[#5f5c7b] -mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Platform Launch Button */}
                <div className="flex flex-wrap gap-2.5 mt-4">
                  <LaunchAppButton url={item.url} displayUrl={item.displayUrl} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Navigation */}
        <div className="mt-4 flex items-center justify-center gap-3 relative z-40">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1f2454] shadow-sm transition-all duration-300 hover:border-[#97215f]/40 hover:text-[#97215f] active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>
          {portfolioProjects.map((item, idx) => (
            <button
              key={item.id}
              aria-label={`Go to project ${item.title}`}
              onClick={() => setActiveProjectIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeProjectIndex
                  ? "w-8 bg-[#97215f]"
                  : "w-2 bg-[#d9d1de]"
              }`}
            />
          ))}
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1f2454] shadow-sm transition-all duration-300 hover:border-[#97215f]/40 hover:text-[#97215f] active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom Portfolio Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="rounded-full bg-[#97215f] px-8 py-3 text-xs md:text-sm font-black text-white shadow-xl shadow-[#97215f]/25 transition-all duration-300 hover:bg-[#7f1b50] active:scale-95"
          >
            Show system portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
