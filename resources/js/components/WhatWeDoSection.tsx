import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Search, Rocket } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface Status {
  text: string;
  dotClass: string;
  borderClass: string;
}

interface ServiceCard {
  title: string;
  metrics: Metric[];
  status: Status;
  desc: string;
}

const servicesData: ServiceCard[] = [
  {
    title: "Business Automation & ERP Systems",
    metrics: [
      { value: "+40%", label: "Efficiency" },
      { value: "-60%", label: "Manual Entry" },
    ],
    status: {
      text: "Starting",
      dotClass: "bg-gray-400",
      borderClass: "border-gray-500/30 bg-gray-500/10 text-gray-300",
    },
    desc: "Streamline your business processes with integrated ERP systems that provide real-time data and insights.",
  },
  {
    title: "E-Commerce Platform",
    metrics: [
      { value: "+25%", label: "Sales Growth" },
      { value: "+15%", label: "Conversion" },
    ],
    status: {
      text: "Pending",
      dotClass: "bg-amber-400",
      borderClass: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    },
    desc: "Build custom online retail experiences that drive sales and foster customer loyalty through intuitive design.",
  },
  {
    title: "Mobile App Development",
    metrics: [
      { value: "85%", label: "Retention" },
      { value: "<2s", label: "Load Time" },
    ],
    status: {
      text: "Confirmation",
      dotClass: "bg-blue-400",
      borderClass: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    },
    desc: "Create intuitive and powerful mobile applications for iOS and Android that provide exceptional user value.",
  },
  {
    title: "Cloud Infrastructure",
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "100%", label: "Security" },
    ],
    status: {
      text: "Completed",
      dotClass: "bg-emerald-400",
      borderClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    },
    desc: "Implement secure and scalable cloud architectures that ensure your systems are always available and performant.",
  },
];

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="inline-block w-[1.5px] md:w-[2px] h-[10px] md:h-[15px] bg-blue-600 ml-0.5 align-middle"
  />
);

export default function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire section wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Header fade/slide out
  const headerOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.18], [0, -40]);

  // 2. Mockup container entrance & scale
  const mockupScale = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.92, 1, 1, 0.95]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 0.18], ["40px", "0px"]);

  // 3. Search Bar typing animation
  const queryText = "why partner with eaj?";
  const [displayText, setDisplayText] = useState("");
  const typedLength = useTransform(scrollYProgress, [0.18, 0.42], [0, queryText.length]);
  
  useMotionValueEvent(typedLength, "change", (latest) => {
    setDisplayText(queryText.slice(0, Math.round(latest)));
  });

  // 4. Search bar positioning & styling transitions
  // It starts in the center of the mockup workspace, and then slides to the top header
  const searchBarY = useTransform(scrollYProgress, [0.42, 0.48], [0, -110]);
  const searchBarScale = useTransform(scrollYProgress, [0.42, 0.48], [1, 0.85]);
  const searchBarOpacity = useTransform(scrollYProgress, [0.62, 0.68], [1, 0]);

  // 5. Rocket Loader Animation (scroll progress 0.48 to 0.68)
  const loaderOpacity = useTransform(scrollYProgress, [0.48, 0.52, 0.62, 0.68], [0, 1, 1, 0]);
  const loaderScale = useTransform(scrollYProgress, [0.48, 0.52, 0.62, 0.68], [0.8, 1, 1, 0.8]);
  const loaderRotate = useTransform(scrollYProgress, [0.48, 0.68], [0, 360]);

  const [loaderStatus, setLoaderStatus] = useState("LOADING...");
  const statusTrigger = useTransform(scrollYProgress, [0.48, 0.58], [0, 1]);
  useMotionValueEvent(statusTrigger, "change", (latest) => {
    setLoaderStatus(latest < 0.5 ? "LOADING..." : "KEEP SCROLLING...");
  });

  // 6. Staggered reveal of service cards (scroll progress 0.68 to 0.88)
  const cardTransitions = servicesData.map((_, index) => {
    const start = 0.68 + index * 0.04;
    const end = start + 0.08;
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const y = useTransform(scrollYProgress, [start, end], [30, 0]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
    
    return { opacity, y, scale };
  });

  return (
    <div ref={containerRef} className="relative h-[280vh] w-full bg-white">
      {/* Sticky container that locks on viewport */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center items-center overflow-hidden bg-white/50 py-12 px-4 md:px-8">
        <div className="dot-grid-overlay pointer-events-none absolute inset-0 z-0 opacity-40" />

        {/* Section Header Row */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-10 w-full max-w-5xl mb-8 md:mb-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start px-2"
        >
          <div className="md:col-span-7">
            <span className="inline-flex rounded-full bg-[#97215f]/10 px-3 py-1 text-[10px] md:text-xs font-bold text-[#97215f] mb-3">
              Build
            </span>
            <h3 className="text-2xl leading-none font-black tracking-tight text-[#1f2454] md:text-4xl lg:text-5xl">
              What we <span className="text-[#97215f]">do?</span>
            </h3>
            <p className="mt-4 text-[11px] sm:text-xs md:text-sm leading-relaxed text-[#5f5c7b] max-w-xl">
              We design and build custom systems that replace manual work,
              disconnected tools, and slow operations.
            </p>
          </div>
          
          <div className="md:col-span-5 md:pt-8 border-l border-gray-200 pl-4 md:pl-8">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              The Problem
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-[#5f5c7b]">
              Disconnected tools and manual tasks create friction that slows your business down.
            </p>
          </div>
        </motion.div>

        {/* Mockup Container */}
        <motion.div
          style={{
            scale: mockupScale,
            opacity: mockupOpacity,
            y: mockupY,
          }}
          className="relative w-full max-w-5xl aspect-[16/10.5] rounded-2xl border border-[#d9d1de] bg-white shadow-[0_24px_50px_rgba(31,36,84,0.1)] overflow-hidden"
        >
          {/* Mockup Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-[#e9e3ed] bg-gray-50/70">
            {/* Window buttons */}
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#27c93f]" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center justify-center h-5 w-44 sm:w-52 md:w-72 rounded-md bg-white border border-[#e9e3ed]/80 text-[8px] md:text-[10px] text-[#8a869c] font-medium tracking-wide shadow-sm shadow-[#1f2454]/2">
              <span className="opacity-40 mr-0.5 font-bold">https://</span>
              eajwebdev.com
            </div>

            {/* Right spacer for alignment */}
            <div className="w-12" />
          </div>

          {/* Browser Viewport Workspace */}
          <div className="relative h-[calc(100%-37px)] bg-[#f8f7fa]/80 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
            
            {/* 1. Centered / Top Search Input Bar */}
            <motion.div
              style={{
                y: searchBarY,
                scale: searchBarScale,
                opacity: searchBarOpacity,
              }}
              className="absolute z-20 w-[80%] max-w-md bg-white border border-[#e9e3ed] rounded-full py-2 px-4 flex items-center gap-2 shadow-sm"
            >
              <Search size={14} className="text-slate-400 shrink-0" />
              <span className="text-[10px] md:text-xs font-semibold text-slate-700 select-none">
                {displayText}
                {displayText.length < queryText.length && <Cursor />}
              </span>
            </motion.div>

            {/* 2. Rocket Loader (revealed in center after search bar slides up) */}
            <motion.div
              style={{
                opacity: loaderOpacity,
                scale: loaderScale,
              }}
              className="absolute z-10 flex flex-col items-center gap-3 md:gap-4"
            >
              <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50">
                <motion.div
                  style={{ rotate: loaderRotate }}
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500"
                />
                <Rocket className="text-blue-600 w-5 h-5 md:w-7 md:h-7" />
              </div>
              <span className="text-[8px] md:text-[10px] font-black tracking-widest text-[#97215f] animate-pulse">
                {loaderStatus}
              </span>
            </motion.div>

            {/* 3. Cards Reveal Workspace */}
            <div className="w-full h-full flex items-center">
              <div className="grid grid-cols-4 gap-2 md:gap-4 w-full px-1">
                {servicesData.map((service, index) => (
                  <motion.div
                    key={index}
                    style={{
                      opacity: cardTransitions[index].opacity,
                      y: cardTransitions[index].y,
                      scale: cardTransitions[index].scale,
                    }}
                    className="flex flex-col justify-between h-[155px] sm:h-[195px] md:h-[250px] lg:h-[285px] bg-[#0c1329] border border-[#1e293b]/70 rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3.5 md:p-5 text-left shadow-lg shadow-black/15 overflow-hidden"
                  >
                    <div>
                      {/* Card Title */}
                      <h4 className="text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold text-white leading-tight line-clamp-2">
                        {service.title}
                      </h4>
                      
                      {/* Divider */}
                      <div className="border-t border-slate-800/80 my-2 md:my-3" />

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-1 md:gap-2">
                        {service.metrics.map((metric, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-[9px] sm:text-[11px] md:text-base lg:text-lg font-black text-sky-400 leading-none">
                              {metric.value}
                            </span>
                            <span className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[9px] font-semibold text-slate-400 uppercase tracking-wide mt-0.5 md:mt-1">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2">
                      {/* Badge status */}
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[6px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-semibold border ${service.status.borderClass}`}>
                        <span className={`w-1 h-1 rounded-full ${service.status.dotClass}`} />
                        {service.status.text}
                      </span>
                      
                      {/* Description */}
                      <p className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px] leading-relaxed text-slate-400 mt-2 line-clamp-1 sm:line-clamp-2 md:line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
