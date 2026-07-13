import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0309] rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden">
      {/* Huge Background Watermark */}
      <div className="absolute inset-0 flex items-end justify-center select-none pointer-events-none z-0 overflow-hidden">
        <span className="font-black text-[clamp(6rem,16vw,22rem)] leading-none text-white opacity-[0.20] translate-y-10">
          EAJWEB
        </span>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-0 lg:px-10">
        {/* 4-column row matching the reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14">
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start space-y-5">
            <BrandLogo size="md" className="brightness-0 invert" />
            <p className="max-w-[18rem] text-xs leading-relaxed text-slate-400">
              Building systems that work the way your business works.
            </p>

            <div>
              <h5 className="text-xs font-bold text-white mb-3 tracking-widest uppercase">
                Socials
              </h5>
              <div className="flex gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/12 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Facebook size={14} />
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/12 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Instagram size={14} />
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/12 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.97 2.05 1.64 3.34 1.93.02 1.43-.01 2.86.01 4.29-1.31-.05-2.61-.43-3.72-1.16-.85-.56-1.55-1.35-2.03-2.27v6.62c.04 1.87-.51 3.74-1.6 5.2-1.36 1.74-3.59 2.76-5.8 2.65-2.48-.12-4.77-1.74-5.69-4.05-.98-2.52-.39-5.51 1.47-7.44 1.48-1.47 3.65-2.18 5.71-1.85.01 1.45.01 2.9.02 4.35-1.07-.32-2.28-.07-3.1.66-.75.7-.99 1.83-.61 2.78.38 1.01 1.51 1.66 2.59 1.55.9-.06 1.67-.77 1.86-1.65.04-1.2.01-6.73.01-7.93v-6.9h.04z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/12 hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.966.01c3.178.001 6.169 1.24 8.424 3.496 2.254 2.256 3.491 5.25 3.486 8.423-.01 6.613-5.347 11.951-11.916 11.951-2.003-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.773 1.45 5.436-.001 9.858-4.425 9.862-9.864.002-2.634-1.02-5.11-2.884-6.978C16.48 1.892 14.004.862 11.37.862c-5.442 0-9.866 4.423-9.87 9.863-.002 1.723.447 3.411 1.303 4.908l-.99 3.62 3.714-.974zm11.082-6.529c-.297-.15-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-xs font-bold text-white tracking-widest uppercase">
              Company
            </h5>
            <ul className="space-y-3 text-[0.8rem] text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-xs font-bold text-white tracking-widest uppercase">
              Services
            </h5>
            <ul className="space-y-3 text-[0.8rem] text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Automate Operations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Automate Sales
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Automate Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Build Your Idea
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Other Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Projects */}
          <div className="flex flex-col space-y-4">
            <h5 className="text-xs font-bold text-white tracking-widest uppercase">
              Projects
            </h5>
            <ul className="space-y-3 text-[0.8rem] text-slate-400">
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Affiliate &amp; Distributors
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Inventory System
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  CRM &amp; Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Enterprise Resource Planning
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Landing Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} EAJWEB. All rights reserved.</p>
          <div className="flex gap-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
