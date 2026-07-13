import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Zap, Shield, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  useSEO({
    title: "About Us - EA Software Solutions",
    description: "Learn more about EA Software Solutions, a team of dedicated engineers and strategists building high-value custom systems and digital innovation backbones for Filipino brands.",
    canonicalPath: "/about",
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
          <h1 className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-3xl leading-[1.15] font-black tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Pioneering Digital <br className="hidden md:block" /> Systems in the
            Philippines
          </h1>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#5f5c7b] sm:text-sm md:text-base lg:text-lg">
            We are a team of dedicated engineers and strategists committed to
            transforming how Filipino businesses operate through custom-built
            technology.
          </p>
        </div>

        <div className="mb-32 grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#1f2454] md:text-4xl">
              Our Story
            </h2>
            <p className="leading-relaxed text-[#5f5c7b]">
              EA Software Solutions started by supporting businesses with their
              day-to-day IT needs. After years of seeing operational bottlenecks
              firsthand, we realized the real bridge to growth is not just better
              equipment, it is smarter systems.
            </p>
            <p className="leading-relaxed text-[#5f5c7b]">
              We are now evolving our expertise, taking our first bold steps
              into the systems market to offer high-value, custom-built
              solutions. While we are a new face in the industry, our mission is
              clear: to help founders reclaim their time and scale their vision
              through the power of automation.
            </p>
          </div>
          <div className="relative hidden aspect-video overflow-hidden rounded-3xl border border-[#d9d1de] bg-white/80 p-1 md:block">
            <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-[#f6f3ee] p-8">
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="h-32 animate-pulse rounded-2xl bg-[#ece8e1]" />
                <div className="h-32 animate-pulse rounded-2xl bg-[#97215f]/12" />
                <div className="h-32 animate-pulse rounded-2xl bg-[#1f2454]/10" />
                <div className="h-32 animate-pulse rounded-2xl bg-[#ece8e1]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="mask-linear-to-r flex gap-4 overflow-x-auto from-white via-white to-transparent pb-8 md:grid md:grid-cols-2 md:gap-6 md:pb-0">
            <div className="w-[240px] shrink-0 rounded-3xl border border-[#d9d1de] bg-white/85 p-8 md:w-full md:shrink md:p-10">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#97215f]/14 text-[#97215f] md:h-12 md:w-12">
                <Target size={20} className="md:h-6 md:w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#1f2454] md:mb-4 md:text-2xl">
                Our Mission
              </h3>
              <p className="text-xs leading-relaxed text-[#5f5c7b] md:text-base">
                To empower every Filipino entrepreneur with the technical
                infrastructure they need to compete on a global stage, through
                seamless automation and precision-engineered systems.
              </p>
            </div>
            <div className="w-[240px] shrink-0 rounded-3xl border border-[#d9d1de] bg-white/85 p-8 md:w-full md:shrink md:p-10">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1f2454]/10 text-[#1f2454] md:h-12 md:w-12">
                <Zap size={20} className="md:h-6 md:w-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#1f2454] md:mb-4 md:text-2xl">
                Our Vision
              </h3>
              <p className="text-xs leading-relaxed text-[#5f5c7b] md:text-base">
                To become the technical backbone of the most innovative brands
                in the Philippines, fostering a culture of efficiency and
                digital excellence across all industries.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 md:hidden">
            <div className="h-1 w-6 rounded-full bg-[#97215f]" />
            <div className="h-1 w-2 rounded-full bg-[#d9d1de]" />
            <span className="ml-2 text-[10px] font-bold tracking-widest text-[#7b7693] uppercase">
              Swipe to explore
            </span>
          </div>
        </div>

        <div className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-2xl font-black tracking-tight text-transparent md:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mask-linear-to-r flex gap-4 overflow-x-auto from-white via-white to-transparent pb-8 md:grid md:grid-cols-2 md:gap-8 md:pb-0 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />,
                title: "Integrity",
                desc: "We prioritize trust and transparency in every line of code and every client interaction.",
              },
              {
                icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
                title: "Collaboration",
                desc: "We work as an extension of your team to ensure the systems we build truly fit your needs.",
              },
              {
                icon: <Heart className="h-5 w-5 md:h-6 md:w-6" />,
                title: "Passion",
                desc: "We are deeply committed to the success of local businesses and the growth of our tech community.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="group w-[240px] shrink-0 rounded-3xl border border-[#d9d1de] bg-white/75 p-8 transition-all hover:border-[#97215f]/35 hover:bg-[#97215f]/6 md:w-full md:shrink"
              >
                <div className="mb-6 text-[#97215f] transition-transform group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="mb-3 text-lg font-bold text-[#1f2454] md:mb-4 md:text-xl">
                  {value.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#5f5c7b] md:text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 md:hidden">
            <div className="h-1 w-6 rounded-full bg-[#97215f]" />
            <div className="h-1 w-2 rounded-full bg-[#d9d1de]" />
            <div className="h-1 w-2 rounded-full bg-[#d9d1de]" />
            <span className="ml-2 text-[10px] font-bold tracking-widest text-[#7b7693] uppercase">
              Swipe to explore
            </span>
          </div>
        </div>

        <div className="mt-24 rounded-3xl border border-[#e6cddc] bg-[#f6edf3] p-8 text-center md:mt-48 md:p-24">
          <h2 className="bg-linear-to-b from-[#1f2454] via-[#1f2454] to-[#6f6a88] bg-clip-text text-2xl font-black tracking-tight text-transparent md:text-5xl">
            Want to know more about <br className="hidden md:block" /> how we
            work?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-[#5f5c7b] md:text-lg">
            We are always open to sharing our process and exploring how we can
            help your business reach new heights.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="rounded-full bg-[#97215f] px-8 py-3 text-sm font-black text-white shadow-2xl shadow-[#97215f]/20 transition-all duration-300 hover:bg-[#7f1b50] active:scale-95 md:px-10 md:py-4 md:text-lg">
              Connect with Us
            </button>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
