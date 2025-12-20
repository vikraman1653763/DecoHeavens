import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top on route change (Lenis-compatible)
 * - If Lenis exists -> uses lenis.scrollTo(0, { immediate: true })
 * - Else falls back to window.scrollTo(0, 0)
 */
const useScrollToTop = (lenisRef) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis (preferred)
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      return;
    }

    // Fallback (if Lenis not initialized)
    window.scrollTo(0, 0);
  }, [pathname, lenisRef]);
};

export default useScrollToTop;
