import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoExitOutline } from "react-icons/io5";

const FLIP_DURATION = 520;

/**
 * CarouselSliderMobile ✅
 * - Mobile-only normal scroll-snap carousel
 * - Includes MODAL with:
 *   - main image + title + desc
 *   - sub images (bento)
 *   - click sub image => FLIP animation (same logic as desktop)
 * - No desktop design touched (you will render this only inside sm:hidden wrapper)
 */
const CarouselSliderMobile = () => {
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const flipTimer = useRef(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [loadedMap, setLoadedMap] = useState({});
  const [overlay, setOverlay] = useState(null);
  // overlay = { bg, name, des, subs, from, phase, flip?, didOpen? }

  // ✅ Slides inside mobile
  const slides = useMemo(
    () => [
      {
        bg: "/assets/wa15.webp",
        name: "Urban Calm",
        des: "A refined modern wall art set designed to bring balance, softness, and contemporary elegance to living spaces.",
        subs: ["/assets/wa15.webp", "/assets/wa16.webp", "/assets/wa17.webp", "/assets/wa18.webp"],
      },
      {
        bg: "/assets/wa19.webp",
        name: "Nature Flow",
        des: "Inspired by organic forms and natural tones, this wall art collection adds warmth and visual harmony to interiors.",
        subs: ["/assets/wa19.webp", "/assets/wa20.webp", "/assets/wa21.webp", "/assets/wa22.webp"],
      },
      {
        bg: "/assets/wa23.webp",
        name: "Minimal Horizon",
        des: "A minimalist wall art series crafted for modern homes, featuring clean compositions and timeless aesthetic appeal.",
        subs: ["/assets/wa23.webp", "/assets/wa24.webp", "/assets/wa25.webp", "/assets/wa26.webp"],
      },
      {
        bg: "/assets/wa27.webp",
        name: "Abstract Balance",
        des: "Bold yet composed, this abstract wall art set creates a striking focal point while maintaining visual equilibrium.",
        subs: ["/assets/wa27.webp", "/assets/wa28.webp", "/assets/wa29.webp", "/assets/wa30.webp"],
      },
      {
        bg: "/assets/wa31.webp",
        name: "Textured Essence",
        des: "A tactile-inspired wall art collection blending depth, layers, and modern design sensibilities.",
        subs: ["/assets/wa31.webp", "/assets/wa32.webp", "/assets/wa33.webp", "/assets/wa34.webp"],
      },
      {
        bg: "/assets/wa35.webp",
        name: "Modern Rhythm",
        des: "Dynamic forms and contemporary tones come together in this wall art set to energize modern interiors.",
        subs: ["/assets/wa35.webp", "/assets/wa36.webp", "/assets/wa37.webp", "/assets/wa38.webp"],
      },
      {
        bg: "/assets/wa39.webp",
        name: "Soft Geometry",
        des: "A modern geometric wall art series with subtle shapes and balanced compositions for elegant spaces.",
        subs: ["/assets/wa39.webp", "/assets/wa40.webp", "/assets/wa41.webp", "/assets/wa42.webp"],
      },
      {
        bg: "/assets/wa43.webp",
        name: "Timeless Forms",
        des: "A classic-inspired wall art collection reimagined through a contemporary design language.",
        subs: ["/assets/wa43.webp", "/assets/wa44.webp", "/assets/wa45.webp", "/assets/wa46.webp"],
      },
      {
        bg: "/assets/wa47.webp",
        name: "Artistic Layers",
        des: "Layered textures and expressive forms define this modern wall art set, ideal for statement walls.",
        subs: ["/assets/wa47.webp", "/assets/wa48.webp", "/assets/wa15.webp", "/assets/wa16.webp"],
      },
    ],
    []
  );

  const preload = (url) => {
    if (!url || loadedMap[url]) return;
    const img = new Image();
    img.src = url;
    img.onload = () => setLoadedMap((p) => ({ ...p, [url]: true }));
  };

  // preload first
  useEffect(() => {
    if (slides?.[0]?.bg) preload(slides[0].bg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // observe centered card
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll("[data-card='1']"));
    if (!cards.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((x) => x.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (!best) return;

        const idx = Number(best.target.getAttribute("data-idx"));
        if (!Number.isNaN(idx)) setActiveIdx(idx);
      },
      { root: scroller, threshold: [0.4, 0.55, 0.7] }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // preload current + neighbors
  useEffect(() => {
    if (!slides.length) return;

    const cur = slides[activeIdx]?.bg;
    const prev = slides[(activeIdx - 1 + slides.length) % slides.length]?.bg;
    const next = slides[(activeIdx + 1) % slides.length]?.bg;

    [cur, prev, next].forEach((u) => preload(u));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, slides.length]);

  const scrollTo = (idx) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector(`[data-idx='${idx}']`);
    if (!scroller || !card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const prev = () => slides.length && scrollTo((activeIdx - 1 + slides.length) % slides.length);
  const next = () => slides.length && scrollTo((activeIdx + 1) % slides.length);

  // ✅ for mobile we can use viewport rect (fixed modal), no stageRef needed
  const getRectViewport = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { left: r.left, top: r.top, width: r.width, height: r.height };
  };

  const openFromThumb = (idx) => {
    const el = cardRefs.current[idx];
    const s = slides[idx];
    if (!el || !s) return;

    preload(s.bg);
    (s.subs || []).slice(0, 6).forEach((u) => preload(u));

    const from = getRectViewport(el);
    if (!from) return;

    setOverlay({
      bg: s.bg,
      name: s.name,
      des: s.des,
      subs: s.subs || [],
      from,
      phase: "from",
      flip: null,
      didOpen: false,
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlay((o) => (o ? { ...o, phase: "to", didOpen: true } : o));
      });
    });
  };

  const closeOverlay = () => {
    setOverlay((o) => (o ? { ...o, phase: "from" } : o));
    window.setTimeout(() => setOverlay(null), FLIP_DURATION);
  };

  const animateOverlayFromEl = (el, nextImageUrl) => {
    if (!el || !nextImageUrl) return;

    if (flipTimer.current) {
      clearTimeout(flipTimer.current);
      flipTimer.current = null;
    }

    const from = getRectViewport(el);
    if (!from) return;

    preload(nextImageUrl);

    const flipId = Date.now();

    setOverlay((o) => {
      if (!o) return o;
      return {
        ...o,
        flip: { id: flipId, bg: nextImageUrl, from, phase: "from" },
      };
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlay((o) => {
          if (!o?.flip) return o;
          return { ...o, flip: { ...o.flip, phase: "to" } };
        });
      });
    });

    flipTimer.current = setTimeout(() => {
      setOverlay((o) => {
        if (!o) return o;
        return { ...o, bg: nextImageUrl, flip: null };
      });
      flipTimer.current = null;
    }, FLIP_DURATION);
  };

  // ESC close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && overlay) closeOverlay();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlay]);

  // lock scroll while modal
  useEffect(() => {
    if (!overlay) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [overlay]);

  // cleanup timer
  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  return (
    <div className="block relative w-full">
      {/* Top controls */}
      <div className="relative z-10 px-4 pt-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 rounded-full bg-white/90 border border-black/10 shadow-sm grid place-items-center"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="text-center">
            <div className="text-sm text-white/90 font-medium tracking-wider">Wall Art</div>
            <div className="text-white font-yatra text-xl leading-none">{slides[activeIdx]?.name}</div>
          </div>

          <button
            type="button"
            onClick={next}
            className="h-10 w-10 rounded-full bg-white/90 border border-black/10 shadow-sm grid place-items-center"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* Scroll-snap carousel */}
      <div className="relative z-10 mt-5">
        <div
          ref={scrollerRef}
          data-hide-scrollbar="1"
          className="
            flex gap-4 overflow-x-auto px-4 pb-5
            snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <style>{`
            [data-hide-scrollbar='1']::-webkit-scrollbar { display: none; }
          `}</style>

          {slides.map((s, idx) => {
            const isLoaded = !!loadedMap[s.bg];

            return (
              <motion.button
                key={s.bg}
                type="button"
                data-card="1"
                data-idx={idx}
                ref={(node) => (cardRefs.current[idx] = node)}
                onClick={() => openFromThumb(idx)} // ✅ open modal
                className="
                  shrink-0 snap-center
                  w-[86%] max-w-[360px]
                  rounded-3xl overflow-hidden
                  border border-white/20
                  bg-black/10
                  shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                  relative
                  focus:outline-none
                "
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  className="w-full h-[420px] bg-center bg-cover"
                  style={{ backgroundImage: isLoaded ? `url(${s.bg})` : "none" }}
                >
                  {!isLoaded && <span className="thumb-skeleton" />}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-2xl bg-white/92 backdrop-blur border border-black/5 p-4 text-left">
                    <div className="font-yatra text-lg text-black leading-tight">{s.name}</div>
                    <div className="mt-1 text-sm text-neutral-700 line-clamp-2">{s.des}</div>
                    <div className="mt-3 text-xs font-semibold text-neutral-800 inline-flex items-center gap-2">
                      Tap to view <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 pb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={[
                "h-2 rounded-full transition-all",
                i === activeIdx ? "w-8 bg-white" : "w-2 bg-white/50",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ✅ MOBILE MODAL */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-label="Close"
              onClick={closeOverlay}
            />

            {/* Animated expanding card */}
            <div
              className={[
                "absolute rounded-3xl overflow-hidden shadow-2xl",
                "transition-[left,top,width,height,transform] duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)]",
                overlay.phase === "to" ? "scale-100" : "scale-100",
              ].join(" ")}
              style={{
                left: overlay.phase === "to" ? "50%" : overlay.from.left,
                top: overlay.phase === "to" ? "50%" : overlay.from.top,
                width: overlay.phase === "to" ? "92vw" : overlay.from.width,
                height: overlay.phase === "to" ? "86vh" : overlay.from.height,
                transform: overlay.phase === "to" ? "translate(-50%, -50%)" : "translate(0,0)",
                backgroundImage: loadedMap[overlay.bg] ? `url(${overlay.bg})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* FLIP layer (sub image expand) */}
              {overlay.flip && (
                <div
                  key={overlay.flip.id}
                  className={[
                    "absolute rounded-2xl overflow-hidden",
                    "transition-[left,top,width,height,transform,opacity] duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)]",
                    overlay.flip.phase === "to" ? "opacity-100" : "opacity-100",
                  ].join(" ")}
                  style={{
                    left: overlay.flip.phase === "to" ? 0 : overlay.flip.from.left,
                    top: overlay.flip.phase === "to" ? 0 : overlay.flip.from.top,
                    width: overlay.flip.phase === "to" ? "100%" : overlay.flip.from.width,
                    height: overlay.flip.phase === "to" ? "100%" : overlay.flip.from.height,
                    transform: overlay.flip.phase === "to" ? "translate(0,0)" : "translate(0,0)",
                    backgroundImage: loadedMap[overlay.flip.bg] ? `url(${overlay.flip.bg})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}

              {/* Shade */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Close */}
              <button
                type="button"
                onClick={closeOverlay}
                className="absolute top-3 right-3 z-20 rounded-full bg-white/90 border border-black/10 shadow-sm px-4 py-2 text-sm font-semibold text-black inline-flex items-center gap-2"
              >
                Exit <IoExitOutline />
              </button>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                <div className="rounded-2xl bg-white/92 backdrop-blur border border-black/5 p-4">
                  <div className="font-yatra text-xl text-black">{overlay.name}</div>
                  <div className="mt-1 text-sm text-neutral-700">{overlay.des}</div>

                  {/* Subs */}
                  {overlay.subs?.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {overlay.subs.slice(0, 6).map((url, i) => {
                        const isSubLoaded = !!loadedMap[url];
                        return (
                          <button
                            key={`${url}-${i}`}
                            type="button"
                            className="relative aspect-square rounded-2xl overflow-hidden border border-black/10 bg-white/60"
                            style={{
                              backgroundImage: isSubLoaded ? `url(${url})` : "none",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              animateOverlayFromEl(e.currentTarget, url);
                            }}
                            aria-label={`Open sub image ${i + 1}`}
                          >
                            {!isSubLoaded && <span className="thumb-skeleton" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="mt-3 text-xs text-neutral-600">
                    Tap any tile above to preview it full-screen.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselSliderMobile;
