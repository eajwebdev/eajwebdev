import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

// Blue cursor SVG matching the user's screenshot
const BlueCursor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg pointer-events-none"
  >
    <path
      d="M3 2v22.4l7.2-7.2 5.6 11.2 4.8-2.4-5.6-11.2h10L3 2z"
      fill="#2563eb"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

interface Position {
  left: string;
  top: string;
  scale?: number;
  opacity?: number;
}

// Coordinates inside the dashboard (in percentages)
const cursorPositions: Record<number, Position> = {
  0: { left: "85%", top: "85%", scale: 1, opacity: 0 }, // Hidden / Off
  1: { left: "54%", top: "74%", scale: 1, opacity: 1 }, // Enter & hover badge
  2: { left: "54%", top: "74%", scale: 0.8, opacity: 1 }, // Click badge
  3: { left: "74%", top: "43%", scale: 0.8, opacity: 1 }, // Drag to Slot 2
  4: { left: "82%", top: "52%", scale: 1, opacity: 1 }, // Release & move away
  5: { left: "74%", top: "43%", scale: 1, opacity: 1 }, // Enter Slot 2 badge
  6: { left: "74%", top: "43%", scale: 0.8, opacity: 1 }, // Click badge
  7: { left: "34%", top: "43%", scale: 0.8, opacity: 1 }, // Drag to Slot 1
  8: { left: "42%", top: "52%", scale: 1, opacity: 1 }, // Release & move away
  9: { left: "85%", top: "85%", scale: 1, opacity: 0 }, // Retreat
};

const badgePositions: Record<number, Position> = {
  0: { left: "50%", top: "70%", scale: 1, opacity: 1 }, // Rest Slot 3
  1: { left: "50%", top: "70%", scale: 1, opacity: 1 }, // Rest Slot 3
  2: { left: "50%", top: "70%", scale: 0.95, opacity: 1 }, // Clicked
  3: { left: "70%", top: "39%", scale: 0.95, opacity: 1 }, // Dragging to Slot 2
  4: { left: "70%", top: "39%", scale: 1, opacity: 1 }, // Dropped Slot 2
  5: { left: "70%", top: "39%", scale: 1, opacity: 1 }, // In Slot 2
  6: { left: "70%", top: "39%", scale: 0.95, opacity: 1 }, // Clicked
  7: { left: "30%", top: "39%", scale: 0.95, opacity: 1 }, // Dragging to Slot 1
  8: { left: "30%", top: "39%", scale: 1, opacity: 1 }, // Dropped Slot 1
  9: { left: "30%", top: "39%", scale: 1, opacity: 0 }, // Resetting
};

const stepDurations = [
  1200, // 0 -> 1: cursor enters
  400,  // 1 -> 2: click
  1200, // 2 -> 3: drag to Slot 2
  500,  // 3 -> 4: release
  1500, // 4 -> 5: Slot 2 glow
  400,  // 5 -> 6: click in Slot 2
  1200, // 6 -> 7: drag to Slot 1
  500,  // 7 -> 8: release
  1500, // 8 -> 9: Slot 1 glow
  800,  // 9 -> 0: retreat & reset
];

const getTransition = (currentStep: number) => {
  switch (currentStep) {
    case 1:
      return { duration: 0.9, ease: "easeOut" };
    case 2:
      return { duration: 0.2, ease: "easeInOut" };
    case 3:
      return { duration: 1.0, ease: "easeInOut" };
    case 4:
      return { duration: 0.25, ease: "easeOut" };
    case 5:
      return { duration: 0.3, ease: "easeInOut" };
    case 6:
      return { duration: 0.2, ease: "easeInOut" };
    case 7:
      return { duration: 1.0, ease: "easeInOut" };
    case 8:
      return { duration: 0.25, ease: "easeOut" };
    case 9:
      return { duration: 0.6, ease: "easeIn" };
    case 0:
      return { duration: 0.3, ease: "easeOut" };
    default:
      return { duration: 0.5 };
  }
};

export default function InteractiveDashboardMockup() {
  const [step, setStep] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // 3D Tilt calculations
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 6 degrees for smooth tilt)
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const springConfig = { damping: 25, stiffness: 120 };
  const xRotation = useSpring(rotateX, springConfig);
  const yRotation = useSpring(rotateY, springConfig);

  useEffect(() => {
    xRotation.set(rotateX);
    yRotation.set(rotateY);
  }, [rotateX, rotateY, xRotation, yRotation]);

  // Ambient step animation loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runSequence = (currentStep: number) => {
      const duration = stepDurations[currentStep];
      timeoutId = setTimeout(() => {
        const nextStep = (currentStep + 1) % 10;
        setStep(nextStep);
        runSequence(nextStep);
      }, duration);
    };

    runSequence(0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Determine active glowing slots
  const isSlot1Active = step === 8 || step === 9;
  const isSlot2Active = step === 4 || step === 5 || step === 6 || step === 7;
  const isSlot3Active = step === 0 || step === 1 || step === 2 || step === 3;

  return (
    <div className="perspective-[1000px] w-full max-w-[640px] px-2 md:px-0">
      {/* Outer Floating Container */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        {/* Inner 3D Tilt Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: xRotation,
            rotateY: yRotation,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full aspect-[16/10.5] rounded-2xl border border-[#d9d1de] bg-white/75 backdrop-blur-md shadow-[0_24px_50px_rgba(31,36,84,0.12)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_32px_64px_rgba(31,36,84,0.18)]"
        >
          {/* Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-10" />

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-3 md:px-4 py-2.5 border-b border-[#e9e3ed] bg-white/40">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center justify-center h-5 w-44 md:w-56 rounded-md bg-white/50 border border-[#e9e3ed]/80 text-[8px] md:text-[9px] text-[#8a869c] font-medium tracking-wide shadow-sm shadow-[#1f2454]/2">
              <span className="opacity-40 mr-1 font-bold">https://</span>
              eajwebdev.com/automate
            </div>
            <div className="w-10 md:w-12" />
          </div>

          {/* Main Dashboard Panel Body */}
          <div className="flex h-[calc(100%-41px)] bg-gray-50/20">
            {/* Sidebar menu simulation */}
            <div className="w-1/4 border-r border-[#e9e3ed]/80 bg-white/35 p-3 md:p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-[#97215f]/15 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#97215f]" />
                </div>
                <div className="h-2.5 w-12 rounded bg-[#1f2454]/15" />
              </div>
              <div className="space-y-2.5 mt-2">
                {[45, 60, 35, 50].map((width, idx) => (
                  <div
                    key={idx}
                    className="h-1.5 rounded-full bg-[#1f2454]/8"
                    style={{ width: `${width}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Dashboard Content Workspace */}
            <div className="w-3/4 p-3 md:p-4 relative flex flex-col gap-3">
              {/* Row 1: Side by Side Slots */}
              <div className="grid grid-cols-2 gap-3 h-[45%]">
                {/* Slot 1: Top-Left Card */}
                <div
                  className={`rounded-xl border p-3 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isSlot1Active
                      ? "border-[#97215f]/40 bg-[#97215f]/4 shadow-[0_4px_16px_rgba(151,33,95,0.08)] scale-[1.01]"
                      : "border-gray-200/80 bg-white/70"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold text-[#8a869c] uppercase tracking-wider">
                      Workflows
                    </span>
                    <Sparkles
                      size={11}
                      className={`text-[#97215f] transition-all duration-300 ${
                        isSlot1Active ? "opacity-100 scale-100 rotate-12" : "opacity-0 scale-50"
                      }`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 rounded bg-gray-200/70" />
                    <div className="h-1.5 w-1/2 rounded bg-gray-200/60" />
                  </div>
                </div>

                {/* Slot 2: Top-Right Card */}
                <div
                  className={`rounded-xl border p-3 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isSlot2Active
                      ? "border-blue-500/40 bg-blue-500/4 shadow-[0_4px_16px_rgba(37,99,235,0.08)] scale-[1.01]"
                      : "border-gray-200/80 bg-white/70"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold text-[#8a869c] uppercase tracking-wider">
                      Integration
                    </span>
                    <div
                      className={`rounded-full bg-blue-500 p-0.5 text-white transition-all duration-300 ${
                        isSlot2Active ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                    >
                      <Check size={8} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-2/3 rounded bg-gray-200/70" />
                    <div className="h-1.5 w-1/3 rounded bg-gray-200/60" />
                  </div>
                </div>
              </div>

              {/* Row 2: Bottom Wide Slot */}
              <div
                className={`h-[48%] rounded-xl border p-3 flex flex-col justify-between transition-all duration-300 ${
                  isSlot3Active
                    ? "border-gray-300 bg-white/90 shadow-sm"
                    : "border-gray-200/70 bg-white/50 opacity-90"
                }`}
              >
                <span className="text-[9px] font-bold text-[#8a869c] uppercase tracking-wider">
                  Automated Queue
                </span>
                <div className="space-y-2 mt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <div className="h-1.5 w-24 rounded bg-gray-200" />
                    </div>
                    <div className="h-1.5 w-6 rounded bg-gray-200" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <div className="h-1.5 w-16 rounded bg-gray-200" />
                    </div>
                    <div className="h-1.5 w-8 rounded bg-gray-200" />
                  </div>
                </div>
              </div>

              {/* The "Achieve" Badge Pill */}
              <motion.div
                animate={{
                  left: badgePositions[step].left,
                  top: badgePositions[step].top,
                  scale: badgePositions[step].scale,
                  opacity: badgePositions[step].opacity,
                }}
                transition={getTransition(step)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full bg-[#2563eb] px-4 md:px-5 py-2.5 text-[10px] md:text-[11px] font-extrabold text-white shadow-lg shadow-blue-500/25 select-none"
              >
                Achieve
              </motion.div>

              {/* Simulated Moving Cursor */}
              <motion.div
                animate={{
                  left: cursorPositions[step].left,
                  top: cursorPositions[step].top,
                  scale: cursorPositions[step].scale,
                  opacity: cursorPositions[step].opacity,
                }}
                transition={getTransition(step)}
                className="absolute z-40 pointer-events-none"
              >
                <BlueCursor />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
