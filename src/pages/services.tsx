import { useState, useEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import {
  Cpu,
  Globe,
  ShieldCheck,
  Smartphone,
  Cloud,
  Code,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: "Services & IT Solutions - EAJ Web Development Services",
    description: "Explore our IT services & digital innovations including Custom Web Apps, Mobile App Development, Cloud Infrastructure, APIs, Cybersecurity, and Consulting in the Philippines.",
    canonicalPath: "/services",
  });

  // Update the slider transform via JS on activeIndex change.
  // This replaces the old dangerouslySetInnerHTML <style> injection —
  // the MD breakpoint override is now handled safely using matchMedia.
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const applyTransform = () => {
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      const cardWidth = isMd ? 384 : 200;
      const cardGap = isMd ? 32 : 8;
      const offset = 50; // percent — center the strip
      el.style.transform = `translateX(calc(${offset}% - ${cardWidth / 2}px - ${activeIndex * (cardWidth + cardGap)}px))`;
    };

    applyTransform();

    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", applyTransform);
    return () => mq.removeEventListener("change", applyTransform);
  }, [activeIndex]);

  const services = [
    {
      icon: <Smartphone />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
    },
    {
      icon: <Globe />,
      title: "Full-Stack Web Apps",
      desc: "Modern, responsive web applications built with the latest frameworks for speed, security, and scalability.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Infrastructure",
      desc: "Secure and scalable cloud hosting, migration, and management services to keep your data accessible and safe.",
    },
    {
      icon: <ShieldCheck />,
      title: "Cybersecurity Solutions",
      desc: "Comprehensive security audits, threat detection, and mitigation strategies to protect your digital assets.",
    },
    {
      icon: <Cpu />,
      title: "API Integration",
      desc: "Seamlessly connect your various platforms and tools with custom-built APIs and integration services.",
    },
    {
      icon: <Code />,
      title: "Tech Consulting",
      desc: "Strategic technology advice to help you choose the right stack and architecture for your long-term goals.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#1f2454] selection:bg-[#97215f] selection:text-white">
      <div className="dot-grid-overlay pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-[120]">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48">
        <div className="mb-16">
          <Link
            to="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6f6a88] transition-colors hover:text-[#1f2454]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
          <h1 className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-2xl leading-[1.15] font-black tracking-tight text-transparent md:text-4xl md:leading-[1.1] lg:text-5xl">
            IT Services &amp; Digital Innovation
          </h1>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] sm:text-xs md:text-sm lg:text-lg">
            Beyond core business systems, we provide comprehensive IT solutions
            to propel your digital transformation.
          </p>
        </div>

        <div
          className="relative overflow-hidden py-12 md:py-20"
        >
          <div className="flex items-center justify-center">
            {/* Slider — transform managed via useEffect + useRef (no dangerouslySetInnerHTML) */}
            <div
              ref={sliderRef}
              className="flex gap-2 transition-transform duration-500 ease-in-out md:gap-8"
            >
              {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                const isSide =
                  idx ===
                    (activeIndex - 1 + services.length) % services.length ||
                  idx === (activeIndex + 1) % services.length;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    onMouseMove={(e) => {
                      if (window.matchMedia("(pointer: coarse)").matches)
                        return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                    }}
                    className={`group relative w-[200px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-700 ease-out md:w-[384px] md:p-12 ${
                      isActive
                        ? "z-30 scale-100 border-[#97215f]/45 bg-white/95 opacity-100 shadow-2xl shadow-[#97215f]/15 md:scale-110"
                        : isSide
                          ? "z-20 scale-90 border-[#d9d1de] bg-white/80 opacity-45 blur-[1px] transition-all duration-500 md:opacity-70 md:blur-[2px]"
                          : "z-10 scale-75 border-[#e6dfeb] bg-[#efeae2] opacity-15 blur-sm md:blur-md"
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(151, 33, 95, 0.12), transparent 40%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div
                        className={`relative mb-4 flex h-10 w-10 items-center justify-center transition-transform duration-500 md:mb-8 md:h-14 md:w-14 ${isActive ? "scale-110" : "scale-100"}`}
                      >
                        <div className="absolute inset-0 bg-[#97215f]/20 blur-2xl" />
                        <div className="relative text-[#97215f]">
                          {service.icon}
                        </div>
                      </div>
                      <h4
                        className={`mb-2 text-xs font-bold transition-all duration-500 md:mb-4 md:text-2xl ${isActive ? "text-[#1f2454]" : "text-[#6f6a88]"}`}
                      >
                        {service.title}
                      </h4>
                      <p
                        className={`text-[10px] leading-tight transition-all duration-500 md:text-sm md:leading-relaxed ${isActive ? "text-[#5f5c7b]" : "text-[#7b7693]"}`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-center gap-6 md:mt-16">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1de] bg-white/90 text-[#1f2454] transition-all hover:bg-[#ece7f2] active:scale-95 md:h-12 md:w-12"
            >
              <ChevronLeft size={20} className="md:h-6 md:w-6" />
            </button>
            <div className="flex gap-1.5 md:gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 md:h-1.5 ${activeIndex === idx ? "w-6 bg-[#97215f] md:w-8" : "w-1.5 bg-[#d9d1de] md:w-2"}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1de] bg-white/90 text-[#1f2454] transition-all hover:bg-[#ece7f2] active:scale-95 md:h-12 md:w-12"
            >
              <ChevronRight size={20} className="md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        <div className="mt-32">
          <div className="mb-12 text-center md:text-left">
            <h2 className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-2xl leading-[1.15] font-black tracking-tight text-transparent md:text-4xl md:leading-[1.1] lg:text-5xl">
              Our Vision &amp; Impact
            </h2>
            <p className="mt-4 text-[#5f5c7b]">
              Scale without limits. Systemize without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12 lg:grid-rows-2">
            <div className="flex flex-col justify-center rounded-3xl border border-[#d9d1de] bg-white/85 p-8 lg:col-span-3">
              <h4 className="text-xl leading-tight font-black text-[#1f2454] md:text-2xl">
                Systemizing Every <br /> Filipino Business <br /> for Global
                Scale
              </h4>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#d9d1de] bg-white/85 p-8 lg:col-span-5">
              <div className="absolute inset-0 bg-[#97215f]/6" />
              <div className="relative flex h-full items-center justify-center gap-4">
                <div className="h-48 w-24 -rotate-12 transform rounded-2xl border border-[#d9d1de] bg-[#f6f3ee] p-2 shadow-xl shadow-[#1f2454]/8">
                  <div className="h-full w-full animate-pulse rounded-xl bg-[#e8e2ec]" />
                </div>
                <div className="z-10 h-56 w-28 rounded-2xl border border-[#cabed8] bg-white p-2 shadow-2xl shadow-[#97215f]/10">
                  <div className="h-full w-full animate-pulse rounded-xl bg-[#e8e2ec]" />
                </div>
                <div className="h-48 w-24 rotate-12 transform rounded-2xl border border-[#d9d1de] bg-[#f6f3ee] p-2 shadow-xl shadow-[#1f2454]/8">
                  <div className="h-full w-full animate-pulse rounded-xl bg-[#e8e2ec]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-[#d9d1de] bg-white/85 p-8 lg:col-span-4">
              <h4 className="text-lg leading-tight font-bold text-[#1f2454] md:text-xl">
                The Tech Backbone <br /> for the Philippines' <br /> Boldest
                Brands
              </h4>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-[#d9d1de] bg-white/85 p-8 lg:col-span-3">
              <h4 className="text-xl leading-tight font-black text-[#1f2454] md:text-2xl">
                Empowering <br /> Local Founders <br /> to Lead with Systems
              </h4>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#d9d1de] bg-white/85 p-1 lg:col-span-6 lg:row-span-1">
              <div className="h-full w-full rounded-[1.4rem] bg-[#f6f3ee] p-6">
                <div className="flex flex-col gap-4">
                  <div className="h-8 w-1/3 animate-pulse rounded-lg bg-[#dfd7e5]" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-video animate-pulse rounded-lg bg-[#e8e2ec]" />
                    <div className="aspect-video animate-pulse rounded-lg bg-[#e8e2ec]" />
                    <div className="aspect-video animate-pulse rounded-lg bg-[#e8e2ec]" />
                  </div>
                  <div className="h-32 w-full animate-pulse rounded-lg bg-[#dfd7e5]" />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#d9d1de] bg-white/85 p-8 lg:col-span-3 lg:row-span-1">
              <div className="mx-auto h-full w-32 rounded-3xl border border-[#d9d1de] bg-[#f6f3ee] p-3 shadow-xl shadow-[#1f2454]/8">
                <div className="h-full w-full animate-pulse space-y-3 rounded-2xl bg-[#e8e2ec] p-3">
                  <div className="h-4 w-1/2 rounded bg-[#d6cde0]" />
                  <div className="h-8 w-full rounded bg-[#d6cde0]" />
                  <div className="h-24 w-full rounded bg-[#d6cde0]" />
                  <div className="h-8 w-full rounded bg-[#d6cde0]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
