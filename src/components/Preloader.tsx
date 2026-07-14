import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Start the splitting reveal animation
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 2200);

    // Complete the loading screen entirely
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3400);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden select-none bg-transparent"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* SVG Clip Path Definitions (scaled 0 to 1 relative to bounding box) */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="left-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.5,0 C 0.62,0.25 0.38,0.75 0.5,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="right-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 C 0.62,0.25 0.38,0.75 0.5,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Left Panel (White Background) */}
      <motion.div
        className="absolute inset-0 bg-white"
        style={{ clipPath: "url(#left-clip)" }}
        initial={{ x: 0 }}
        animate={isSplitting ? { x: "-100%" } : { x: 0 }}
        transition={{ type: "tween", ease: [0.77, 0, 0.175, 1], duration: 1.2 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-[#97215f] text-center uppercase mt-24"
          >
            EAJ WEB DEV SERVICES
          </motion.h1>
        </div>
      </motion.div>

      {/* Right Panel (Navy Background) */}
      <motion.div
        className="absolute inset-0 bg-[#97215f]"
        style={{ clipPath: "url(#right-clip)" }}
        initial={{ x: 0 }}
        animate={isSplitting ? { x: "100%" } : { x: 0 }}
        transition={{ type: "tween", ease: [0.77, 0, 0.175, 1], duration: 1.2 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-white text-center uppercase mt-24"
          >
            EAJ WEB DEV SERVICES
          </motion.h1>
        </div>
      </motion.div>

      {/* Center Logo Icon */}
      <motion.img
        src="/eajicon.png"
        alt="EAJ Logo"
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain z-50 rounded-3xl border border-slate-100 bg-white p-2 shadow-xl"
        initial={{ x: "-100vw", y: "-50%", left: "50%", top: "40%", rotate: -180, opacity: 0 }}
        animate={
          isSplitting
            ? { x: "100vw", opacity: 0 }
            : { x: "-50%", rotate: 0, opacity: 1 }
        }
        transition={{
          x: { type: "spring", stiffness: isSplitting ? 80 : 120, damping: isSplitting ? 15 : 18 },
          default: { duration: 1 }
        }}
      />
    </motion.div>
  );
}
