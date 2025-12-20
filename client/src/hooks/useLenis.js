// src/hooks/useLenis.js
import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Smooth scrolling with Lenis (refined)
 * - Runs a single RAF loop
 * - Cleans up properly
 * - Optional: disable on touch devices
 * - Optional: expose instance for integrations (Framer Motion / GSAP)
 */
const useLenis = ({
  enabled = true,
  disableOnTouch = true,
  lerp = 0.08,
  wheelMultiplier = 0.6,
  smoothWheel = true,
  smoothTouch = false,
  anchors = true,
} = {}) => {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Optionally skip Lenis on touch devices (keeps native scrolling)
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (disableOnTouch && isTouch) return;

    const lenis = new Lenis({
      smoothWheel,
      smoothTouch,
      lerp,
      wheelMultiplier,
      anchors,
      autoRaf: false, // we control RAF ourselves
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [
    enabled,
    disableOnTouch,
    lerp,
    wheelMultiplier,
    smoothWheel,
    smoothTouch,
    anchors,
  ]);

  // If you ever want to access the Lenis instance (for manual scrollTo etc.)
  return lenisRef;
};

export default useLenis;
