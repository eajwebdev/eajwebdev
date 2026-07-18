import { useState, useEffect } from "react";

export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Force closed on initial render
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    setIsMenuOpen,
  };
}
