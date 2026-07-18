import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service - EAJ Web Development Services",
    description: "Read the Terms of Service governing the use of EAJ Web Development Services websites, custom ERP, and automation services.",
    canonicalPath: "/terms-of-service",
  });

  return (
    <div className="min-h-screen bg-[#f3f1eb] font-sans text-[#1f2454]">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 md:pt-40">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-[#5f5c7b] md:text-base">Last updated: April 3, 2026</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-[#5f5c7b] md:text-base">
          <p>
            By using this website, you agree to use it lawfully and in a way that does not harm
            the platform, our services, or other users.
          </p>
          <p>
            All content on this website, including text, visuals, branding, and code samples, is
            owned by or licensed to EAJ Web Development Services unless otherwise stated.
          </p>
          <p>
            Information presented on this website is for general business information and may be
            updated without prior notice. Project timelines, costs, and deliverables are finalized
            only through signed service agreements.
          </p>
          <p>
            We may suspend or restrict access if misuse, abuse, or unauthorized activity is
            detected.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

