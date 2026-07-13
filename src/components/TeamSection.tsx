import React, { useRef, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { getInitials, isExternalLink } from "@/lib/utils";
import { type TeamMember, type TeamTab } from "@/types";

const developmentTeam: TeamMember[] = [
  {
    name: "Edwin T. Abril Jr.",
    role: "Lead Developer / Web Administrator",
    avatar: "/devs/abril.jpg",
    portfolio: "/projects",
  },
  {
    name: "Joshua Kyle L. Dalmacio",
    role: "Senior Developer / System Administrator",
    portfolio: "/projects",
  },
  {
    name: "Mark Ian D. Dela Cruz",
    role: "Junior Developer / Frontend & UX",
    avatar: "/devs/markian.jpg",
    portfolio: "https://mrkndlcrz.vercel.app/",
  },
];

const creativeTeam: TeamMember[] = [
  {
    name: "Yobyob",
    role: "Creative Designer",
    avatar: "/devs/Yobyob.jpg",
    portfolio: "/projects",
  },
  {
    name: "Michael Bolivia",
    role: "Creative Designer",
    portfolio: "/projects",
  },
];

const teamTabs: { id: TeamTab; label: string }[] = [
  { id: "development", label: "Development Team" },
  { id: "creative", label: "Creative Team" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
    },
  },
};

export default function TeamSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-US", options));
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const [activeTeamTab, setActiveTeamTab] = useState<TeamTab>("development");
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const activeTeamMembers = useMemo(
    () => (activeTeamTab === "development" ? developmentTeam : creativeTeam),
    [activeTeamTab]
  );

  const changeTeamTab = (tab: TeamTab) => {
    setActiveTeamTab(tab);
    setExpandedMember(null);
  };

  const teamRef = useRef<HTMLDivElement>(null);
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  // Foreground scale and slide entry animations
  const { scrollYProgress: teamScrollY } = useScroll({
    target: teamRef,
    offset: ["start end", "start start"],
  });

  const teamOpacity = useTransform(teamScrollY, [0, 0.8], [0.4, 1]);
  const teamScale = useTransform(teamScrollY, [0, 0.8], [0.93, 1]);
  const teamY = useTransform(teamScrollY, [0, 0.8], [60, 0]);

  return (
    <motion.section
      ref={teamRef}
      id="team"
      style={{
        opacity: teamOpacity,
        scale: teamScale,
        y: teamY,
      }}
      className="relative px-5 py-16 md:px-8 md:py-20 lg:py-28 bg-[#fcfbf9] rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-[#d9d1de]/30 -mt-16 md:-mt-24 shadow-[0_-20px_50px_rgba(31,36,84,0.06)] origin-top z-20 overflow-x-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-9 text-center md:mb-12">
          <h3 className="text-2xl leading-[1.15] font-black tracking-tight text-[#1f2454] md:text-4xl md:leading-[1.1] lg:text-5xl">
            Our <span className="text-[#97215f]">Team</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] md:text-lg">
            The people behind our systems-driven approach to solving business challenges.
          </p>
        </div>

        {/* Universal MacBook Pro Mockup (Works on Mobile and Desktop) */}
        <div className="relative mx-auto w-full max-w-4xl mt-6 px-1 md:px-4">
          {/* MacBook Screen Bezel */}
          <div className="relative rounded-t-xl md:rounded-t-3xl border-[6px] md:border-[12px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[16/13.5] md:aspect-[16/10.5] flex flex-col justify-start z-10">
            {/* MacBook Display Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[10px] md:w-36 md:h-[18px] bg-slate-900 rounded-b-[6px] md:rounded-b-xl z-50 flex items-center justify-center gap-1 md:gap-1.5 px-1.5 md:px-3">
              {/* Webcam Lens */}
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-950 border border-slate-800" />
              {/* Green LED indicator */}
              <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-green-500/80" />
            </div>
            
            {/* Screen Viewport with macOS Magenta Wallpaper */}
            <div className="flex-1 bg-gradient-to-tr from-[#3b0d25] via-[#97215f] to-[#be185d] overflow-hidden relative flex flex-col justify-between rounded-t-md md:rounded-t-xl pb-11 md:pb-16">
              {/* Flowing background waves/blobs */}
              <div className="absolute -top-20 -left-20 w-[14rem] md:w-[24rem] h-[14rem] md:h-[24rem] rounded-full bg-[#f43f5e]/18 blur-[50px] md:blur-[75px] pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-[14rem] md:w-[24rem] h-[14rem] md:h-[24rem] rounded-full bg-[#ec4899]/16 blur-[55px] md:blur-[80px] pointer-events-none" />
              
              {/* Screen Glossy Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/4 to-white/0 pointer-events-none z-30" />

              {/* macOS Top Menu Bar */}
              <div className="h-5 md:h-6 bg-black/15 backdrop-blur-md border-b border-white/10 px-2 md:px-4 flex items-center justify-between text-[9px] md:text-[11px] font-medium text-white/90 z-40 select-none">
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Apple SVG Icon */}
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 fill-white/90" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.37-6.15-3.41-2.73-7.38-7.5-11.91-14.31-9.94-14.88-16.71-31.5-20.3-49.85-2.21-11.05-3.32-21.72-3.32-31.98 0-15.66 3.82-28.73 11.45-39.2 7.64-10.48 17.51-15.77 29.62-15.89 6.81 0 13.91 2.3 21.32 6.88 7.4 4.58 11.91 6.87 15.53 6.87 3.09 0 7.42-2.19 12.98-6.57 6.96-5.46 14.12-8.11 21.46-7.97 18.25.52 32.18 7.21 41.81 20.1-14.73 8.94-22 21.14-21.82 36.57.21 12.02 4.96 22.09 14.24 30.2 9.28 8.12 20.31 12.59 33.1 13.41-2.42 7.21-5.69 14.52-9.82 21.93zm-31.86-107.72c0-8.87 3.16-16.89 9.47-24.08 7.37-8.35 16.38-12.78 27.02-13.29.13 1.02.2 1.83.2 2.45 0 8.5-3.23 16.32-9.7 23.49-3.08 3.42-6.9 6.27-11.45 8.56-4.55 2.29-9.15 3.51-13.8 3.67-.14-1.02-.21-2.07-.21-3.25z" />
                  </svg>
                  <span className="font-bold">eaj</span>
                  <span className="hidden md:inline">File</span>
                  <span className="hidden md:inline">Edit</span>
                  <span className="hidden md:inline">View</span>
                  <span className="hidden md:inline">Go</span>
                  <span className="hidden md:inline">Window</span>
                  <span className="hidden md:inline">Help</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span>100% 🔋</span>
                  <span>{currentTime}</span>
                </div>
              </div>

              {/* Screen Main Content Area */}
              <div className="flex-1 p-2 md:p-6 relative flex flex-col justify-center items-center overflow-hidden">
                {activeTeamMembers.length === 0 ? (
                  <p className="text-center text-[10px] md:text-sm text-white/80 font-medium my-auto z-10">
                    Creative team profiles are coming soon.
                  </p>
                ) : (
                  <>
                    {/* Mobile View - Horizontal Scrollable snap cards inside MacBook display */}
                    <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-3 w-full pb-2 px-1 scrollbar-none z-10 my-auto">
                      {activeTeamMembers.map((member) => (
                        <div
                          key={member.name}
                          className="w-[85%] shrink-0 snap-center relative h-[11.5rem] overflow-hidden rounded-xl border border-white/20 shadow-lg shadow-black/15"
                        >
                          {member.avatar ? (
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/95 to-white/45 backdrop-blur-sm">
                              <span className="text-2xl font-black tracking-tight text-[#87285d]">
                                {getInitials(member.name)}
                              </span>
                            </div>
                          )}

                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#4f2a3f]/78 via-[#7a4b63]/42 to-transparent" />
                          <div className="absolute left-3 bottom-3 right-3 z-10">
                            <h4 className="text-xs leading-tight font-black text-white drop-shadow-md">
                              {member.name}
                            </h4>
                            <p className="text-[9px] text-white/90">
                              {member.role}
                            </p>
                            {isExternalLink(member.portfolio) ? (
                              <a
                                href={member.portfolio}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1.5 inline-flex rounded-full border border-white/55 bg-white/18 px-2.5 py-0.5 text-[8px] font-bold text-white backdrop-blur-sm transition-all"
                              >
                                View Portfolio
                              </a>
                            ) : (
                              <Link
                                to={member.portfolio}
                                className="mt-1.5 inline-flex rounded-full border border-white/55 bg-white/18 px-2.5 py-0.5 text-[8px] font-bold text-white backdrop-blur-sm transition-all"
                              >
                                View Portfolio
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop View - Accordion / Grid with Staggered Scroll-Reveal and Hover Grow */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate={isTeamInView ? "visible" : "hidden"}
                      className="hidden md:flex gap-3 w-[92%] mx-auto justify-center items-center my-auto z-10"
                    >
                      {activeTeamMembers.map((member, index) => {
                        const isExpanded = expandedMember === index;
                        const hasExpandedCard = expandedMember !== null;

                        return (
                          <motion.article
                            key={member.name}
                            variants={cardVariants}
                            onMouseEnter={() => setExpandedMember(index)}
                            onMouseLeave={() => setExpandedMember(null)}
                            onFocus={() => setExpandedMember(index)}
                            onBlur={() => setExpandedMember(null)}
                            tabIndex={0}
                            className={`relative h-[19rem] w-full overflow-hidden rounded-2xl border border-white/20 shadow-xl shadow-black/15 transition-all duration-300 lg:h-[21rem] lg:min-w-0 ${
                              isExpanded
                                ? "lg:-translate-y-1 lg:flex-[1.45] lg:shadow-2xl lg:shadow-black/25"
                                : "lg:flex-1"
                            } ${hasExpandedCard && !isExpanded ? "lg:flex-[0.78]" : ""}`}
                          >
                            {member.avatar ? (
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className={`h-full w-full object-cover transition-transform duration-300 ${
                                  isExpanded ? "lg:scale-[1.08]" : ""
                                }`}
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/95 to-white/45 backdrop-blur-sm">
                                <span className="text-3xl font-black tracking-tight text-[#87285d]">
                                  {getInitials(member.name)}
                                </span>
                              </div>
                            )}

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#4f2a3f]/78 via-[#7a4b63]/42 to-transparent" />
                            <div
                              className={`pointer-events-none absolute inset-0 transition-colors duration-300 ${
                                isExpanded ? "bg-[#5a2a42]/20" : "bg-transparent"
                              }`}
                            />
                            <div
                              className={`absolute left-1/2 z-10 w-[92%] -translate-x-1/2 transition-all duration-300 ${
                                isExpanded
                                  ? "bottom-1/2 translate-y-1/2 text-center"
                                  : "bottom-3 translate-y-0 text-left"
                              }`}
                            >
                              <h4 className="text-lg leading-tight font-black text-white drop-shadow-md md:text-xl">
                                {member.name}
                              </h4>
                              <p className="mt-0.5 text-xs text-white/90 md:text-sm">
                                {member.role}
                              </p>
                              {isExpanded &&
                                (isExternalLink(member.portfolio) ? (
                                  <a
                                    href={member.portfolio}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex rounded-full border border-white/55 bg-white/18 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/28"
                                  >
                                    View Portfolio
                                  </a>
                                ) : (
                                  <Link
                                    to={member.portfolio}
                                    className="mt-3 inline-flex rounded-full border border-white/55 bg-white/18 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/28"
                                  >
                                    View Portfolio
                                  </Link>
                                ))}
                            </div>
                          </motion.article>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </div>

              {/* macOS Glassmorphic Dock */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/25 rounded-xl md:rounded-2xl p-1 flex items-center gap-1.5 md:gap-2 shadow-2xl z-40">
                {teamTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => changeTeamTab(tab.id)}
                    className={`whitespace-nowrap rounded-lg md:rounded-xl px-2.5 py-1 md:px-4 md:py-1.5 text-[9px] md:text-xs font-bold transition-all ${
                      activeTeamTab === tab.id
                        ? "bg-white text-[#97215f] shadow-md"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

            </div>
          </div>
          {/* MacBook Base Keyboard Tray */}
          <div className="relative h-1.5 md:h-2.5 w-[104%] -left-[2%] bg-slate-200 rounded-b-lg md:rounded-b-2xl border-t border-slate-300 shadow-xl flex justify-center z-0">
            {/* Center thumb opening notch */}
            <div className="w-10 md:w-20 h-0.5 md:h-1.5 bg-slate-400/40 rounded-b-md" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
