import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import InteractiveDashboardMockup from "@/components/InteractiveDashboardMockup";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import SystemPortfolioSection from "@/components/SystemPortfolioSection";
import TeamSection from "@/components/TeamSection";
import BusinessMindsetSection from "@/components/BusinessMindsetSection";
import { useWelcomePage } from "@/hooks/useWelcomePage";

const heroCircleDecor = [
  {
    id: "ring-outer",
    className:
      "hero-ring absolute top-[46%] left-1/2 h-[min(96vw,40rem)] w-[min(96vw,40rem)] rounded-full border border-[#97215f]/6 [animation-delay:-1.5s]",
  },
  {
    id: "ring-inner",
    className:
      "hero-ring absolute top-[46%] left-1/2 h-[min(58vw,22rem)] w-[min(58vw,22rem)] rounded-full border border-[#97215f]/8 [animation-delay:-5s]",
  },
  {
    id: "dot-1",
    className:
      "hero-ring absolute top-[14%] left-[22%] h-2.5 w-2.5 rounded-full border border-[#97215f]/25 bg-[#97215f]/15 md:h-3 md:w-3",
  },
  {
    id: "dot-2",
    className:
      "hero-ring absolute top-[34%] right-[24%] h-2 w-2 rounded-full border border-[#1f2454]/20 bg-[#1f2454]/10",
  },
  {
    id: "dot-3",
    className:
      "hero-ring absolute bottom-[30%] left-[28%] hidden h-2 w-2 rounded-full border border-[#97215f]/20 bg-white/80 sm:block",
  },
  {
    id: "hollow-1",
    className:
      "hero-ring absolute top-[12%] right-[18%] hidden h-10 w-10 rounded-full border border-dashed border-[#97215f]/18 md:block",
  },
  {
    id: "hollow-2",
    className:
      "hero-ring absolute bottom-[12%] right-[30%] hidden h-8 w-8 rounded-full border border-[#d9d1de]/80 bg-white/30 lg:block",
  },
] as const;

export default function Welcome() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const { isInquiryModalOpen, setIsInquiryModalOpen } = useWelcomePage();

  return (
    <div className="relative bg-[#0a0309] font-sans text-[#1f2454] selection:bg-[#97215f] selection:text-white">
      <div className="relative z-10 bg-white">
        <Header onGetStarted={() => setIsInquiryModalOpen(true)} />

        <section
          id="hero"
          className="relative overflow-hidden px-6 pt-24 pb-20 md:px-4 md:pt-48 md:pb-36"
        >
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="hero-orb absolute -top-28 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#97215f]/14 blur-[110px] md:h-[34rem] md:w-[34rem]" />
            <div className="hero-orb hero-orb-delay absolute top-[38%] -left-24 h-72 w-72 rounded-full bg-[#1f2454]/10 blur-[90px] md:h-96 md:w-96" />
            <div className="hero-orb absolute right-[-4rem] bottom-[-2rem] h-64 w-64 rounded-full bg-[#c13d86]/12 blur-[100px] md:h-80 md:w-80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(255,255,255,0.95),transparent_62%)]" />

            <div className="hero-ring absolute top-[46%] left-1/2 h-[min(88vw,34rem)] w-[min(88vw,34rem)] rounded-full border border-[#97215f]/10" />
            <div className="hero-ring absolute top-[46%] left-1/2 h-[min(72vw,28rem)] w-[min(72vw,28rem)] rounded-full border border-[#d9d1de]/55 [animation-delay:-3.5s]" />
            {heroCircleDecor.map((item) => (
              <div key={item.id} className={item.className} />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-7xl pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-center lg:text-left md:pt-10">
            {/* Left Column - Hero content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start w-full">
              <h1 className="hero-animate-in hero-delay-2 mb-6 text-2xl leading-[1.15] font-black tracking-tight md:mb-8 md:text-4xl md:leading-[1.08] lg:text-5xl">
                <span className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-transparent">
                  Powering Your Growth with
                </span>{" "}
                <br className="hidden md:block" />
                <span className="shimmer-text-brand">Custom Systems</span>
              </h1>

              <p className="hero-animate-in hero-delay-3 mx-auto lg:mx-0 mb-10 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] md:mb-12 md:text-base lg:text-base">
                Custom systems that automate your core operations and scale your
                growth.
              </p>

              <div className="hero-animate-in hero-delay-4 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 sm:flex-row sm:gap-4 w-full">
                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="rounded-full bg-[#97215f] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#97215f]/20 transition-all duration-300 hover:bg-[#7f1b50] hover:shadow-[#97215f]/30 active:scale-95 md:px-7 md:py-3 md:text-sm"
                >
                  Start My Custom System
                </button>
                <Link
                  to="/projects"
                  className="rounded-full border border-[#d9d1de] bg-white/70 px-6 py-2.5 text-xs font-medium text-[#1f2454] shadow-sm shadow-[#1f2454]/5 backdrop-blur-sm transition-all duration-300 hover:border-[#bcb2cc] hover:bg-white active:scale-95 md:px-7 md:py-3 md:text-sm"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="hero-animate-in hero-delay-5 mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-[0.65rem] font-semibold tracking-wide text-[#8a869c] uppercase md:mt-12 md:text-xs">
                {[
                  "Workflow Automation",
                  "Custom ERP",
                  "Operational Dashboards",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#97215f]/70" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Interactive Mockup Animation */}
            <div className="hero-animate-in hero-delay-6 lg:col-span-5 flex justify-center w-full">
              <InteractiveDashboardMockup />
            </div>
          </div>

          <a
            href="#services"
            aria-label="Scroll to services"
            className="hero-scroll-hint absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-[#d9d1de]/80 bg-white/60 p-2 text-[#97215f]/55 shadow-sm backdrop-blur-sm transition-colors hover:text-[#97215f] md:flex"
          >
            <ChevronDown size={18} />
          </a>
        </section>

        <WhatWeDoSection />

        <SystemPortfolioSection />

        <TeamSection />

        <BusinessMindsetSection
          onGetStarted={() => setIsInquiryModalOpen(true)}
        />

        <section id="about" className="relative px-4 py-20 lg:py-32">
          <div className="dot-grid-overlay pointer-events-none absolute inset-0 z-0" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-black tracking-tight text-[#1f2454] sm:text-3xl md:text-4xl lg:text-5xl">
                Why EAJ Web Development Services?
              </h3>
              <p className="mt-6 text-xs leading-relaxed text-[#5f5c7b] sm:text-sm md:text-base lg:text-lg">
                We build the digital backbone of your business through precision
                engineering and innovation.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Innovation First",
                  desc: "We utilize the latest tech stacks to ensure your system is future-proof and lightning fast. Our team constantly researches emerging technologies to give you a competitive edge.",
                },
                {
                  title: "Scale with Ease",
                  desc: "Our architectures are designed to grow as your user base and data volume expand. We build systems that handle traffic spikes without breaking a sweat.",
                },
                {
                  title: "Security by Design",
                  desc: "Enterprise-grade security is baked into every line of code we write. From data encryption to secure auth flows, your business data is always protected.",
                },
                {
                  title: "Data-Driven Insights",
                  desc: "Every system we build is optimized for data collection and analysis, giving you the clarity needed to make informed executive decisions.",
                },
                {
                  title: "End-to-End Support",
                  desc: "We don't just deliver and disappear. Our team provides ongoing maintenance and strategic advice to ensure your system evolves with your business.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${activeAccordion === idx ? "border-[#97215f]/35 bg-[#f5eef3]" : "border-[#d9d1de] bg-white/85 hover:border-[#bcb2cc]"}`}
                >
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === idx ? null : idx)
                    }
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <h4
                      className={`text-sm font-bold transition-colors md:text-base ${activeAccordion === idx ? "text-[#1f2454]" : "text-[#5f5c7b]"}`}
                    >
                      {item.title}
                    </h4>
                    <ChevronDown
                      size={18}
                      className={`text-[#7b7693] transition-transform duration-300 ${activeAccordion === idx ? "rotate-180 text-[#97215f]" : ""}`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${activeAccordion === idx ? "max-h-40 px-6 pb-5 opacity-100" : "max-h-0 px-6 pb-0 opacity-0"}`}
                  >
                    <p className="text-sm leading-relaxed text-[#5f5c7b]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
}
