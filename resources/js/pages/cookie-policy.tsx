import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  useSEO({
    title: "Cookie Policy - EAJ Web Development Services",
    description: "Read the Cookie Policy of EAJ Web Development Services to understand how we use cookies and tracking technologies to improve our services.",
    canonicalPath: "/cookie-policy",
  });

  return (
    <div className="min-h-screen bg-[#f3f1eb] font-sans text-[#1f2454]">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 md:pt-40">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Cookie Policy</h1>
        <p className="mt-3 text-sm text-[#5f5c7b] md:text-base">Last updated: April 3, 2026</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-[#5f5c7b] md:text-base">
          <p>
            Cookies are small text files stored in your browser that help improve website
            performance and user experience.
          </p>
          <p>We may use cookies for essential functionality, analytics, and performance insights.</p>
          <p>
            You can manage or disable cookies through your browser settings. Disabling some cookies
            may affect how parts of the website function.
          </p>
          <p>
            Continued use of this site means you understand and accept our use of cookies under
            this policy.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

