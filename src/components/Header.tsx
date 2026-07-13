import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { isActivePath } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useActiveIndicator } from "@/hooks/useActiveIndicator";
import { type HeaderProps } from "@/types";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Header({ onGetStarted }: HeaderProps) {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const scrolled = useScroll(50);
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
  
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setVisible(false);
      } else {
        // Scrolling up -> show
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const checkActive = (href: string) => isActivePath(url, href);

  const { navRefs, activeIndicator } = useActiveIndicator(
    url,
    navLinks
  );

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const handleGetStarted = () => {
    setIsMenuOpen(false);
    if (onGetStarted) {
      onGetStarted();
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [url, setIsMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-[100] transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "border-b border-[#d9d1de] bg-white/92 py-4 backdrop-blur-md md:border-transparent md:bg-transparent md:backdrop-blur-none"
            : "border-b border-transparent bg-transparent py-5 md:py-7 backdrop-blur-none"
        }`}
      >
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex flex-1 items-center">
            <Link to="/" aria-label="EA Software Solutions home">
              <BrandLogo size="sm" className="transition-transform hover:scale-[1.02]" />
            </Link>
          </div>

          <div className="group hidden items-center rounded-full border border-[#d9d1de] bg-white/80 px-1.5 py-1.5 shadow-lg shadow-[#1f2454]/5 backdrop-blur-md transition-all duration-300 hover:border-[#bcb2cc] md:flex">
            <div className="relative flex items-center gap-1">
              <span
                className={`pointer-events-none absolute top-0 bottom-0 rounded-full bg-[#97215f] shadow-lg shadow-[#97215f]/20 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeIndicator.ready ? "opacity-100" : "opacity-0"}`}
                style={{
                  left: activeIndicator.left,
                  width: activeIndicator.width,
                }}
              />
              {navLinks.map((link, idx) => {
                const isActive = checkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    ref={(el) => {
                      navRefs.current[idx] = el;
                    }}
                    className={`rounded-full px-[clamp(0.7rem,1.4vw,1rem)] py-[clamp(0.4rem,0.9vw,0.6rem)] text-[clamp(0.72rem,1.1vw,0.82rem)] font-semibold transition-all ${
                      isActive
                        ? "relative z-10 text-white"
                        : "text-[#1f2454] hover:bg-[#ece7f2] hover:text-[#1f2454]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 sm:gap-6">
            <button
              onClick={handleGetStarted}
              className="hidden rounded-full bg-[#97215f] px-7 py-2.5 text-sm font-black text-white shadow-xl shadow-[#97215f]/20 transition-all duration-300 hover:bg-[#7f1b50] active:scale-95 sm:block"
            >
              Get Started
            </button>

            <button
              onClick={toggleMenu}
              className="relative z-[110] flex h-10 w-10 items-center justify-center text-[#1f2454] transition-all md:hidden"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-[#1f2454]/30 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 bottom-0 left-0 z-[90] h-[50vh] overflow-y-auto rounded-t-[2.5rem] border-t border-[#d9d1de] bg-white/98 px-[clamp(1rem,5vw,1.75rem)] pb-[clamp(1rem,5vw,1.75rem)] pt-[clamp(0.75rem,3vw,1rem)] backdrop-blur-3xl transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-[#b7aec7]" />

        <div className="flex flex-col items-center gap-0 text-center">
          <div className="flex w-full flex-col">
            {navLinks.map((link) => {
              const isActive = checkActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full border-b border-[#e2dcea] py-[clamp(0.7rem,3.2vw,0.95rem)] text-center text-[clamp(0.9rem,4vw,1rem)] font-bold transition-all active:bg-[#ece7f2] ${
                    isActive ? "text-[#97215f]" : "text-[#1f2454]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-8 w-full">
            <button
              onClick={handleGetStarted}
              className="w-full rounded-full bg-[#97215f] py-[clamp(0.7rem,3.2vw,0.95rem)] text-[clamp(0.85rem,3.8vw,1rem)] font-black text-white shadow-2xl shadow-[#97215f]/20 transition-all hover:bg-[#7f1b50] active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
