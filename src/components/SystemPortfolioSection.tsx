import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";

const portfolioProjects = [
  {
    id: 1,
    title: "Enterprise ERP System",
    type: "Web Application",
    desc: "A comprehensive resource planning system built for scale.",
    tech: ["React", "Laravel", "MySQL"],
    device: "desktop",
    url: "eajwebdev.com/erp",
  },
  {
    id: 2,
    title: "E-Commerce Mobile Suite",
    type: "Mobile App",
    desc: "Seamless shopping experience with secure payment integrations.",
    tech: ["React Native", "Node.js", "AWS"],
    device: "mobile",
    url: "eajwebdev.com/store",
  },
  {
    id: 3,
    title: "Real-time Data Dashboard",
    type: "Data Visualization",
    desc: "Transforming complex data sets into actionable insights.",
    tech: ["Next.js", "Python", "D3.js"],
    device: "tablet",
    url: "eajwebdev.com/analytics",
  },
];

// Custom 3D Parallax Desktop Browser Mockup
const DesktopMockup = ({ project, floatY }: { project: typeof portfolioProjects[0]; floatY: any }) => (
  <div className="relative w-full aspect-16/10 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-md flex flex-col text-left">
    {/* Browser Bar */}
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border-b border-slate-200">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 mx-4 h-4 rounded bg-white border border-slate-200/60 text-[6px] text-slate-400 flex items-center px-2 select-none">
        https://{project.url}
      </div>
    </div>
    {/* Browser Body */}
    <div className="flex-1 flex bg-slate-50 relative p-2">
      {/* Sidebar */}
      <div className="w-[20%] space-y-1.5 pr-2 border-r border-slate-200/50">
        <div className="h-2 w-full bg-slate-200 rounded animate-pulse" />
        <div className="h-1.5 w-[80%] bg-slate-200/80 rounded" />
        <div className="h-1.5 w-[90%] bg-slate-200/80 rounded" />
        <div className="h-1.5 w-[70%] bg-slate-200/80 rounded" />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 pl-2 space-y-2 relative">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-white p-1.5 rounded border border-slate-200/60 space-y-1">
            <div className="h-1 w-1/3 bg-slate-200 rounded" />
            <div className="h-2.5 w-1/2 bg-blue-100 rounded" />
          </div>
          <div className="bg-white p-1.5 rounded border border-slate-200/60 space-y-1">
            <div className="h-1 w-1/2 bg-slate-200 rounded" />
            <div className="h-2.5 w-2/3 bg-purple-100 rounded" />
          </div>
        </div>
        {/* Underlay Dashboard Area */}
        <div className="bg-white p-2 rounded border border-slate-200/60 h-[50%] flex flex-col justify-end">
          <div className="h-1 w-full bg-slate-100 rounded mb-1" />
          <div className="h-1 w-5/6 bg-slate-100 rounded" />
        </div>

        {/* Floating Parallax Card Layer */}
        <motion.div
          style={{ y: floatY }}
          className="absolute right-2 top-2 left-8 bg-white border border-slate-200 rounded-lg p-2.5 shadow-lg shadow-black/8 select-none"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[7px] font-bold text-slate-800 uppercase tracking-wider">Revenue Stream</span>
            <span className="text-[6px] text-green-500 font-bold">+18.5%</span>
          </div>
          {/* SVG Line Graph */}
          <svg className="w-full h-8" viewBox="0 0 100 40">
            <defs>
              <linearGradient id="blueGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 35 C 10 25, 20 30, 30 15 C 40 22, 50 10, 60 18 C 70 5, 80 12, 100 2"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0 35 C 10 25, 20 30, 30 15 C 40 22, 50 10, 60 18 C 70 5, 80 12, 100 2 L 100 40 L 0 40 Z"
              fill="url(#blueGrad2)"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  </div>
);

// Custom 3D Parallax Mobile Phone Mockup
const MobileMockup = ({ project, floatY }: { project: typeof portfolioProjects[0]; floatY: any }) => (
  <div className="relative w-[50%] max-w-[130px] aspect-[9/16] rounded-2xl border-4 border-slate-800 bg-white overflow-hidden shadow-md mx-auto flex flex-col text-left">
    {/* Screen Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-800 rounded-b-md z-20" />
    
    {/* App Viewport */}
    <div className="flex-1 bg-slate-50 flex flex-col relative p-1.5 pt-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-[6px] font-black text-slate-800">EAJ STORE</span>
        <div className="w-2.5 h-2.5 rounded bg-slate-200 flex items-center justify-center text-[5px] font-bold">🛒</div>
      </div>
      
      {/* Product Image Banner */}
      <div className="w-full h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg p-1 text-[5px] text-white flex flex-col justify-end mb-1.5 shadow-sm">
        <span className="font-bold leading-none">Summer Sale</span>
        <span className="opacity-80">Up to 50% Off</span>
      </div>

      {/* Grid item placeholders */}
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-white p-1 rounded border border-slate-200/50 space-y-1">
          <div className="aspect-square bg-slate-100 rounded animate-pulse" />
          <div className="h-1 w-2/3 bg-slate-200 rounded" />
        </div>
        <div className="bg-white p-1 rounded border border-slate-200/50 space-y-1">
          <div className="aspect-square bg-slate-100 rounded animate-pulse" />
          <div className="h-1 w-1/2 bg-slate-200 rounded" />
        </div>
      </div>

      {/* Floating Parallax Toast Layer */}
      <motion.div
        style={{ y: floatY }}
        className="absolute bottom-6 left-1 right-1 bg-[#0c1329] text-white border border-slate-800 rounded-md p-1.5 shadow-lg flex items-center gap-1 select-none z-10"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 flex items-center justify-center text-[4px] font-bold">✓</span>
        <div className="flex-1 flex flex-col">
          <span className="text-[5px] font-black">Checkout Complete</span>
          <span className="text-[4px] text-slate-400">Order ID #8792</span>
        </div>
        <span className="text-[5px] font-bold text-green-400">$149.00</span>
      </motion.div>
    </div>
  </div>
);

// Custom 3D Parallax Tablet Mockup
const TabletMockup = ({ project, floatY }: { project: typeof portfolioProjects[0]; floatY: any }) => (
  <div className="relative w-full aspect-[4/3] rounded-xl border-4 border-slate-800 bg-white overflow-hidden shadow-md flex flex-col text-left">
    {/* Tablet Body */}
    <div className="flex-1 flex bg-slate-50 relative p-2.5">
      {/* Sidebar */}
      <div className="w-[18%] space-y-2 pr-2 border-r border-slate-200/60">
        <div className="h-3 w-8 bg-purple-100 rounded" />
        <div className="h-2 w-full bg-slate-200 rounded" />
        <div className="h-2 w-[85%] bg-slate-200/80 rounded animate-pulse" />
        <div className="h-2 w-[70%] bg-slate-200/80 rounded" />
      </div>
      {/* Workspace */}
      <div className="flex-1 pl-2.5 space-y-2 relative">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[7px] font-black text-slate-800">Operational Analytics</span>
          <div className="w-12 h-3 bg-white border border-slate-200 rounded text-[5px] flex items-center justify-center text-slate-500 select-none">Filters ⚙️</div>
        </div>

        {/* Analytics grids */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((val) => (
            <div key={val} className="bg-white p-1.5 rounded border border-slate-200/60 space-y-1">
              <div className="h-1.5 w-1/2 bg-slate-200 rounded" />
              <div className="h-3.5 w-2/3 bg-slate-100 rounded" />
            </div>
          ))}
        </div>

        <div className="bg-white p-2 rounded border border-slate-200/60 h-[45%] flex flex-col justify-end">
          <div className="h-2 w-full bg-slate-100 rounded mb-1 animate-pulse" />
          <div className="h-2 w-[90%] bg-slate-100 rounded" />
        </div>

        {/* Floating Parallax Card Widget */}
        <motion.div
          style={{ y: floatY }}
          className="absolute right-4 bottom-4 left-6 bg-white border border-slate-200 rounded-lg p-2 shadow-lg shadow-black/8 select-none flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-[6px] font-bold text-slate-400 block uppercase">Conversion Ratio</span>
            <span className="text-xs font-black text-slate-800">74.2%</span>
          </div>
          {/* Simple Radial Gauge using SVG */}
          <svg className="w-7 h-7 shrink-0" viewBox="0 0 36 36">
            <path
              className="text-slate-100"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-purple-600"
              strokeDasharray="74, 100"
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  </div>
);

export default function SystemPortfolioSection() {
  const {
    activeProjectIndex,
    setActiveProjectIndex,
    getProjectOffset,
    getProjectCarouselStyle,
    prevProject,
    nextProject,
  } = useProjectCarousel(portfolioProjects.length);

  const projectsContainerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire section track
  const { scrollYProgress: projectsScrollY } = useScroll({
    target: projectsContainerRef,
    offset: ["start start", "end end"],
  });

  // Track the exit phase when projects scrolls out of view
  const { scrollYProgress: projectsExitScrollY } = useScroll({
    target: projectsContainerRef,
    offset: ["end end", "end start"],
  });

  // Blur, fade, and scale down the section as it exits to background
  const exitBlur = useTransform(projectsExitScrollY, [0, 0.8], ["blur(0px)", "blur(12px)"]);
  const exitOpacity = useTransform(projectsExitScrollY, [0, 0.8], [1, 0.1]);
  const exitScale = useTransform(projectsExitScrollY, [0, 0.8], [1, 0.90]);

  // Automatically cycle through projects on page scroll
  useMotionValueEvent(projectsScrollY, "change", (latest) => {
    if (latest < 0.35) {
      setActiveProjectIndex(0);
    } else if (latest < 0.70) {
      setActiveProjectIndex(1);
    } else {
      setActiveProjectIndex(2);
    }
  });

  // Vertical parallax shifts inside the mockup cards
  const leftCardYShift = useTransform(projectsScrollY, [0, 1], [-40, 40]);
  const rightCardYShift = useTransform(projectsScrollY, [0, 1], [40, -40]);

  return (
    <section
      ref={projectsContainerRef}
      id="projects"
      className="relative overflow-x-hidden bg-white md:h-[150vh]"
    >
      <div className="dot-grid-overlay pointer-events-none absolute inset-0 z-0" />

      {/* Sticky viewport wrapper for scroll-driven animations */}
      <motion.div
        style={{
          filter: exitBlur,
          opacity: exitOpacity,
          scale: exitScale,
        }}
        className="md:sticky md:top-0 md:h-screen flex flex-col justify-center items-center w-full relative z-10 mx-auto max-w-7xl px-5 py-9 md:px-4 md:py-0 overflow-visible origin-bottom"
      >
        
        {/* Header Block */}
        <div className="mb-9 text-center md:mb-12">
          <h3 className="text-2xl leading-[1.15] font-black tracking-tight text-[#1f2454] md:text-4xl md:leading-[1.1] lg:text-5xl">
            System <span className="text-[#97215f]">Portfolio</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] md:text-lg lg:text-lg">
            A look at the custom-built systems we've delivered for our clients.
          </p>
        </div>

        {/* Mobile / Tablet Horizontal Swipe List */}
        <div className="no-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-5 md:hidden">
          {portfolioProjects.map((item) => (
            <div
              key={item.id}
              className="group relative w-[80vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#d9d1de] bg-white/85 p-1 md:w-auto md:shrink md:snap-align-none"
            >
              <div className="relative flex h-full flex-col items-start gap-4 rounded-2xl bg-[#f6f3ee] p-6 text-left">
                <span className="text-[10px] font-bold tracking-widest text-[#97215f] uppercase bg-[#97215f]/8 px-2.5 py-0.5 rounded-full">
                  {item.type}
                </span>
                <h4 className="text-base font-bold text-[#1f2454] leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#5f5c7b] -mt-1">
                  {item.desc}
                </p>
                
                {/* Render Mobile static mockup */}
                <div className="w-full mt-2 flex justify-center">
                  {item.device === "desktop" && <DesktopMockup project={item} floatY={0} />}
                  {item.device === "mobile" && <MobileMockup project={item} floatY={0} />}
                  {item.device === "tablet" && <TabletMockup project={item} floatY={0} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 3D Scroll-Driven Carousel */}
        <div className="project-carousel-scene relative mx-auto hidden h-[23rem] w-full max-w-5xl overflow-visible md:block">
          {portfolioProjects.map((item, idx) => {
            const offset = getProjectOffset(idx);
            const cardStyle = getProjectCarouselStyle(offset);
            // Stagger depth float animations inside different cards
            const floatY = idx === 0 ? leftCardYShift : idx === 1 ? rightCardYShift : leftCardYShift;

            return (
              <div
                key={item.id}
                style={cardStyle}
                className="project-carousel-card group absolute top-1/2 left-1/2 w-[clamp(16rem,42vw,24rem)] rounded-2xl border border-[#d9d1de] bg-white/85 p-1"
              >
                <motion.div
                  style={{
                    y: offset === -1 ? leftCardYShift : offset === 1 ? rightCardYShift : 0,
                  }}
                  className="relative flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-6 text-left"
                >
                  <div className="w-full flex justify-between items-center">
                    <span className="text-[9px] font-bold tracking-widest text-[#97215f] uppercase bg-[#97215f]/8 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-[9px] text-[#8a869c] font-medium">{item.url}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1f2454] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-[#5f5c7b] -mt-1">
                    {item.desc}
                  </p>
                  
                  {/* Render Mockup Viewport */}
                  <div className="w-full mt-1 flex-1 flex items-center justify-center">
                    {item.device === "desktop" && <DesktopMockup project={item} floatY={floatY} />}
                    {item.device === "mobile" && <MobileMockup project={item} floatY={floatY} />}
                    {item.device === "tablet" && <TabletMockup project={item} floatY={floatY} />}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Navigation */}
        <div className="mt-4 hidden items-center justify-center gap-2 md:flex">
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1de] bg-white/90 text-[#1f2454] shadow-sm transition-all duration-300 hover:border-[#97215f]/40 hover:text-[#97215f] active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          {portfolioProjects.map((item, idx) => (
            <button
              key={item.id}
              aria-label={`Go to project ${item.title}`}
              onClick={() => setActiveProjectIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeProjectIndex
                  ? "w-8 bg-[#97215f]"
                  : "w-2 bg-[#d9d1de]"
              }`}
            />
          ))}
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1de] bg-white/90 text-[#1f2454] shadow-sm transition-all duration-300 hover:border-[#97215f]/40 hover:text-[#97215f] active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 md:mt-4 md:hidden">
          <div className="h-1 w-8 rounded-full bg-[#97215f]" />
          <div className="h-1 w-2 rounded-full bg-[#d9d1de]" />
          <div className="h-1 w-2 rounded-full bg-[#d9d1de]" />
          <span className="ml-2 text-[10px] font-bold tracking-widest text-[#7b7693] uppercase">
            Swipe to explore
          </span>
        </div>

        <div className="mt-8 flex justify-center md:mt-20">
          <Link
            to="/projects"
            className="rounded-full bg-[#97215f] px-8 py-3 text-sm font-black text-white shadow-2xl shadow-[#97215f]/20 transition-all duration-300 hover:bg-[#7f1b50] active:scale-95 md:px-10 md:py-4 md:text-lg"
          >
            Show system portfolio
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
