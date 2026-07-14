import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  useSEO({
    title: "Projects & Portfolio | EAJ Web Development Services",
    description: "Explore EAJ Web Development Services' portfolio of custom-built web systems including HRIS portals, pharmacy management tools, laundry automation software, and operational dashboards deployed for Philippine businesses.",
    canonicalPath: "/projects",
  });

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#1f2454] selection:bg-[#97215f] selection:text-white">
      <div className="dot-grid-overlay pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-[120]">
        <Header />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48">
        <div className="mb-20">
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
            Featured Projects & <br className="hidden md:block" /> Digital
            Craftsmanship
          </h1>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] sm:text-xs md:text-sm lg:text-lg">
            Explore our portfolio of high-performance custom systems and
            innovative digital solutions.
          </p>
        </div>

        <div className="grid gap-12 md:gap-24">
          {[
            {
              title: "Enterprise ERP System",
              type: "Web Application",
              desc: "A comprehensive resource planning system built for scale. Featuring real-time analytics, inventory management, and automated reporting.",
              tech: ["React", "Laravel", "MySQL", "Tailwind"],
              skeleton: "desktop",
            },
            {
              title: "E-Commerce Mobile Suite",
              type: "Mobile App",
              desc: "Seamless shopping experience with lightning-fast performance and secure payment integrations for both iOS and Android.",
              tech: ["React Native", "Node.js", "Redis", "AWS"],
              skeleton: "mobile",
            },
            {
              title: "Real-time Data Dashboard",
              type: "Data Visualization",
              desc: "Transforming complex data sets into actionable insights with interactive charts and automated alerting systems.",
              tech: ["Next.js", "Python", "PostgreSQL", "D3.js"],
              skeleton: "tablet",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="mb-4 inline-flex rounded-full border border-[#97215f]/25 bg-[#97215f]/8 px-4 py-1 text-xs font-bold tracking-widest text-[#97215f] uppercase">
                  {project.type}
                </div>
                <h3 className="mb-6 text-2xl font-black text-[#1f2454] md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-8 leading-relaxed text-[#5f5c7b] md:text-lg">
                  {project.desc}
                </p>
                <div className="mb-10 flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[#d9d1de] bg-white/80 px-3 py-1 text-xs font-medium text-[#5f5c7b]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 rounded-full bg-[#97215f] px-6 py-2 text-sm font-black text-white shadow-lg shadow-[#97215f]/20 transition-all hover:bg-[#7f1b50] active:scale-95">
                    Live Preview
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1de] text-[#1f2454] transition-all hover:bg-[#ece7f2] active:scale-95">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              <div
                className={`group relative aspect-video overflow-hidden rounded-3xl border border-[#d9d1de] bg-white/85 p-1 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex h-full w-full flex-col gap-4 rounded-[1.4rem] bg-[#f6f3ee] p-6">
                  {project.skeleton === "desktop" && (
                    <div className="h-full w-full space-y-4">
                      <div className="h-8 w-1/4 animate-pulse rounded-lg bg-[#dfd7e5]" />
                      <div className="grid grid-cols-4 gap-4">
                        <div className="h-24 animate-pulse rounded-lg bg-[#e8e2ec]" />
                        <div className="h-24 animate-pulse rounded-lg bg-[#e8e2ec]" />
                        <div className="h-24 animate-pulse rounded-lg bg-[#e8e2ec]" />
                        <div className="h-24 animate-pulse rounded-lg bg-[#e8e2ec]" />
                      </div>
                      <div className="h-full flex-1 animate-pulse rounded-lg bg-[#dfd7e5]" />
                    </div>
                  )}
                  {project.skeleton === "mobile" && (
                    <div className="flex h-full w-full justify-center gap-6">
                      <div className="relative h-full w-32 animate-pulse rounded-3xl border border-[#d9d1de] bg-[#ece8e1] p-3">
                        <div className="mb-4 h-4 w-1/2 rounded bg-[#d6cde0]" />
                        <div className="h-3/4 w-full rounded-2xl bg-[#d6cde0]" />
                      </div>
                      <div className="relative my-auto hidden h-[80%] w-32 animate-pulse rounded-3xl border border-[#e4ddea] bg-[#f6f3ee] p-3 sm:block">
                        <div className="mb-4 h-4 w-1/2 rounded bg-[#d6cde0]" />
                        <div className="h-3/4 w-full rounded-2xl bg-[#d6cde0]" />
                      </div>
                    </div>
                  )}
                  {project.skeleton === "tablet" && (
                    <div className="h-full w-full space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-32 animate-pulse rounded-lg bg-[#dfd7e5]" />
                        <div className="flex gap-2">
                          <div className="h-8 w-8 animate-pulse rounded-full bg-[#dfd7e5]" />
                          <div className="h-8 w-8 animate-pulse rounded-full bg-[#dfd7e5]" />
                        </div>
                      </div>
                      <div className="grid flex-1 grid-cols-2 gap-4">
                        <div className="animate-pulse rounded-2xl bg-[#dfd7e5]" />
                        <div className="space-y-4">
                          <div className="h-1/2 animate-pulse rounded-2xl bg-[#e8e2ec]" />
                          <div className="h-[calc(50%-1rem)] animate-pulse rounded-2xl bg-[#e8e2ec]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
