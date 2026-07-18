import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  BrainCircuit,
  Layers,
  Target,
  Workflow,
  Handshake,
} from "lucide-react";

type BusinessMindsetSectionProps = {
  onGetStarted: () => void;
};

const cardsData = [
  {
    title: "Custom-Built From Scratch",
    description: "No off-the-shelf systems",
    Icon: Cpu,
    isBright: true,
    pattern: (
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-white/10 opacity-30 flex items-center justify-center pointer-events-none">
        <div className="w-36 h-36 rounded-full border border-dashed border-white/10 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-dashed border-white/10" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Business-First Thinking",
    description: "We design logic before code",
    Icon: BrainCircuit,
    isBright: false,
    pattern: (
      <>
        <div className="absolute top-2 right-2 w-32 h-32 rounded-full bg-[#d946ef]/10 blur-2xl pointer-events-none" />
        <div className="absolute top-4 right-4 w-20 h-20 opacity-20 pointer-events-none border-t border-r border-dashed border-white/30 rounded-tr-2xl" />
      </>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with you",
    Icon: Layers,
    isBright: true,
    pattern: (
      <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-20 rotate-45 flex flex-col gap-3 pointer-events-none">
        <div className="h-[1px] w-full bg-white/30" />
        <div className="h-[1px] w-full bg-white/30" />
        <div className="h-[1px] w-full bg-white/30" />
        <div className="h-[1px] w-full bg-white/30" />
        <div className="h-[1px] w-full bg-white/30" />
      </div>
    ),
  },
  {
    title: "Results-Focused Execution",
    description: "Solve real operational problems",
    Icon: Target,
    isBright: false,
    pattern: (
      <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border border-white/10 opacity-30 flex items-center justify-center pointer-events-none">
        <div className="w-28 h-28 rounded-full border border-dashed border-white/15 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-white/10" />
        </div>
      </div>
    ),
  },
  {
    title: "End-to-End Ownership",
    description: "From idea to deployment",
    Icon: Workflow,
    isBright: true,
    pattern: (
      <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-white/10 opacity-20 rotate-12 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 border border-dashed border-white/15 flex items-center justify-center">
          <div className="w-16 h-16 border border-white/10 flex items-center justify-center">
            <div className="w-8 h-8 border border-dashed border-white/15" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Long-Term Partner Mindset",
    description: "Not a one-off dev shop",
    Icon: Handshake,
    isBright: false,
    pattern: (
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-white/10 opacity-20 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full border border-dashed border-white/15 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-white/10" />
        </div>
      </div>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BusinessMindsetSection({
  onGetStarted,
}: BusinessMindsetSectionProps) {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    const isAtEnd = target.scrollLeft >= maxScrollLeft - 10;

    if (isAtEnd) {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        target.scrollTo({ left: 0, behavior: "smooth" });
      }, 2000); // 2 seconds delay to allow reading/interacting with CTA card
    } else {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    }
  };

  return (
    <section className="relative px-6 py-20 lg:py-32 bg-[#0a0309] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-[#97215f]/8 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-[#d946ef]/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header Title */}
        <div className="mb-14 text-center md:mb-20">
          <h3 className="text-3xl leading-[1.12] font-black tracking-tight md:text-5xl md:leading-[1.08] lg:text-6xl">
            Not just <span className="text-[#d946ef]">developers</span>. <br />
            We think like <span className="text-[#97215f]">business owners</span>.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-slate-300 md:text-base">
            We design the logic before the code — so every system we build solves a real business problem.
          </p>
        </div>

        {/* Mobile View: Swipeable Horizontal Carousel */}
        <div className="block md:hidden mb-12">
          <div
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 -mx-10 scrollbar-none"
          >
            {cardsData.map((card, idx) => {
              const Icon = card.Icon;
              return (
                <div
                  key={idx}
                  className={`w-[78%] shrink-0 snap-center relative aspect-square rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/25 transition-all duration-300 ${
                    card.isBright
                      ? "bg-gradient-to-b from-[#97215f] to-[#6b1442] border border-[#d946ef]/20"
                      : "bg-gradient-to-b from-[#3a0d25] to-[#1e0613] border border-[#97215f]/20"
                  }`}
                >
                  {card.pattern}
                  
                  {/* Subtle dot pattern and top light reflection */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

                  {/* Icon Badge */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white border border-white/20 relative z-10">
                    <Icon size={18} />
                  </div>

                  <div className="mt-auto relative z-10">
                    <h4 className="text-lg font-black leading-tight text-white mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs text-white/80">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Card at the end of mobile carousel */}
            <button
              onClick={onGetStarted}
              type="button"
              className="w-[78%] shrink-0 snap-center relative aspect-square rounded-2xl p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#97215f] to-[#d946ef] border border-white/20 shadow-xl shadow-black/25 text-left group"
            >
              {/* Pattern / Decoration */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full border border-white/10 opacity-30 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 rounded-full border border-dashed border-white/10 flex items-center justify-center" />
              </div>

              {/* Subtle dot pattern and top light reflection */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />

              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/25 text-white border border-white/30 transition-transform group-active:scale-95 relative z-10">
                <ArrowRight size={18} />
              </div>

              <div className="mt-auto relative z-10">
                <h4 className="text-lg font-black leading-tight text-white mb-1">
                  Build Better Together
                </h4>
                <p className="text-xs text-white/90">
                  Let's start your custom system today
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop View: Grid Layout matching reference screenshot */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Render all 6 cards */}
          {cardsData.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <motion.article
                key={idx}
                variants={cardVariants}
                className={`group relative aspect-square rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/20 ${
                  card.isBright
                    ? "bg-gradient-to-b from-[#97215f] to-[#6b1442] border border-[#d946ef]/20"
                    : "bg-gradient-to-b from-[#3a0d25] to-[#1e0613] border border-[#97215f]/20"
                }`}
              >
                {card.pattern}
                
                {/* Subtle dot pattern and top light reflection */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

                {/* Icon Badge */}
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 transition-colors group-hover:bg-white/20 relative z-10">
                  <Icon size={20} />
                </div>

                <div className="mt-auto relative z-10">
                  <h4 className="text-xl font-extrabold leading-tight text-white mb-2 group-hover:text-[#d946ef] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-300">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}

          {/* CTA Card spanning 2 columns on desktop */}
          <motion.div
            variants={cardVariants}
            className="col-span-2 flex items-center justify-center h-full"
          >
            <button
              onClick={onGetStarted}
              type="button"
              className="group relative flex flex-col justify-between w-full h-full aspect-auto rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] shadow-xl text-left overflow-hidden bg-gradient-to-br from-[#97215f] to-[#d946ef] border border-white/20"
            >
              {/* Pattern / Decoration */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-white/10 opacity-30 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 rounded-full border border-dashed border-white/10 flex items-center justify-center" />
              </div>

              {/* Subtle dot pattern and top light reflection */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />

              {/* Arrow Badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white border border-white/30 transition-transform group-hover:translate-x-1 shrink-0 relative z-10">
                <ArrowRight size={20} />
              </div>

              <div className="mt-auto relative z-10">
                <h4 className="text-2xl font-black leading-tight text-white mb-2">
                  Build Better Together
                </h4>
                <p className="text-sm text-white/90">
                  Let's design and engineer your custom system today.
                </p>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
