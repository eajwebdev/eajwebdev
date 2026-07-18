import { useState, useEffect, useRef } from "react";
import { isActivePath } from "@/lib/utils";

export function useActiveIndicator(
  url: string,
  navLinks: Array<{ href: string }>
) {
  const navRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndicator, setActiveIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  useEffect(() => {
    const getActiveIndex = () =>
      navLinks.findIndex((link) => isActivePath(url, link.href));

    const updateIndicator = () => {
      const idx = getActiveIndex();
      const el = navRefs.current[idx];
      if (!el || !el.parentElement) return;

      const linkRect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();

      setActiveIndicator({
        left: linkRect.left - parentRect.left,
        width: linkRect.width,
        ready: true,
      });
    };

    updateIndicator();
    const raf = requestAnimationFrame(updateIndicator);
    const fontsReady = document.fonts?.ready;
    fontsReady?.then(updateIndicator).catch(() => {});
    window.addEventListener("resize", updateIndicator);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [url, navLinks]);

  return {
    navRefs,
    activeIndicator,
  };
}

