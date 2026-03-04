"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Initializing AOS with optimized settings
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50, // Slightly smaller offset for better mobile experience
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
      // Disable AOS on devices with reduced motion enabled
      disable: () => {
        if (typeof window === "undefined") return true;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      },
    });
  }, []);

  // Refresh AOS when pathname changes (Next.js client-side navigation)
  useEffect(() => {
    // We use refreshHard to recalculate positions after a page change
    // This is more reliable in SPA environments
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};
