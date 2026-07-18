import { useSEO } from "@/hooks/useSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy - EAJ Web Development Services",
    description: "Read the Privacy Policy of EAJ Web Development Services to understand how we collect, store, and protect your user data and inquiries.",
    canonicalPath: "/privacy-policy",
  });

  return (
    <div className="min-h-screen bg-[#f3f1eb] font-sans text-[#1f2454]">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 md:pt-40">
        <h1 className="text-3xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#5f5c7b] md:text-base">Last updated: April 3, 2026</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-[#5f5c7b] md:text-base">
          <p>
            EAJ Web Development Services values your privacy. This page explains what information we
            collect, how we use it, and how we protect it when you use our website or contact us.
          </p>
          <p>
            We may collect contact details you submit (such as name, email, company, and inquiry
            details), along with basic technical information (such as browser type and visit data)
            to improve site reliability and user experience.
          </p>
          <p>
            We use collected information to respond to inquiries, provide requested services,
            improve our website, and maintain service security. We do not sell personal data.
          </p>
          <p>
            If you have privacy-related concerns, requests, or corrections, contact us through our
            official channels and we will address your request in a reasonable timeframe.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

