import { useEffect, useRef } from "react";
import Lenis from "lenis";

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
      autoRaf: false,
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

      lenisRef.current?.destroy();
      lenisRef.current = null;
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

  return lenisRef;
};

export default useLenis;
