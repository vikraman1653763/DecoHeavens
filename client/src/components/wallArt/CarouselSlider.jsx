import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/components/css/CarouselSlider.css";
import { AnimatePresence, motion } from "framer-motion";

import { IoExitOutline } from "react-icons/io5";
const FLIP_DURATION = 520;

const CarouselSlider = () => {
  const stageRef = useRef(null); // ✅ NEW: section ref (for relative coords)
  const slideRef = useRef(null);
  const itemRefs = useRef([]);
  const flipTimer = useRef(null);

  const [loadedMap, setLoadedMap] = useState({});
  const [overlay, setOverlay] = useState(null);
  // overlay = { bg, name, des, subs, from, phase, flip?, didOpen? }
  const slides = useMemo(
    () => [
      {
        bg: "/assets/wa15.webp",
        name: "Urban Calm",
        des: "A refined modern wall art set designed to bring balance, softness, and contemporary elegance to living spaces.",
        subs: [
          "/assets/wa15.webp",
          "/assets/wa16.webp",
          "/assets/wa17.webp",
          "/assets/wa18.webp",
        ],
      },
      {
        bg: "/assets/wa19.webp",
        name: "Nature Flow",
        des: "Inspired by organic forms and natural tones, this wall art collection adds warmth and visual harmony to interiors.",
        subs: [
          "/assets/wa19.webp",
          "/assets/wa20.webp",
          "/assets/wa21.webp",
          "/assets/wa22.webp",
        ],
      },
      {
        bg: "/assets/wa23.webp",
        name: "Minimal Horizon",
        des: "A minimalist wall art series crafted for modern homes, featuring clean compositions and timeless aesthetic appeal.",
        subs: [
          "/assets/wa23.webp",
          "/assets/wa24.webp",
          "/assets/wa25.webp",
          "/assets/wa26.webp",
        ],
      },
      {
        bg: "/assets/wa27.webp",
        name: "Abstract Balance",
        des: "Bold yet composed, this abstract wall art set creates a striking focal point while maintaining visual equilibrium.",
        subs: [
          "/assets/wa27.webp",
          "/assets/wa28.webp",
          "/assets/wa29.webp",
          "/assets/wa30.webp",
        ],
      },
      {
        bg: "/assets/wa31.webp",
        name: "Textured Essence",
        des: "A tactile-inspired wall art collection blending depth, layers, and modern design sensibilities.",
        subs: [
          "/assets/wa31.webp",
          "/assets/wa32.webp",
          "/assets/wa33.webp",
          "/assets/wa34.webp",
        ],
      },
      {
        bg: "/assets/wa35.webp",
        name: "Modern Rhythm",
        des: "Dynamic forms and contemporary tones come together in this wall art set to energize modern interiors.",
        subs: [
          "/assets/wa35.webp",
          "/assets/wa36.webp",
          "/assets/wa37.webp",
          "/assets/wa38.webp",
        ],
      },
      {
        bg: "/assets/wa39.webp",
        name: "Soft Geometry",
        des: "A modern geometric wall art series with subtle shapes and balanced compositions for elegant spaces.",
        subs: [
          "/assets/wa39.webp",
          "/assets/wa40.webp",
          "/assets/wa41.webp",
          "/assets/wa42.webp",
        ],
      },
      {
        bg: "/assets/wa43.webp",
        name: "Timeless Forms",
        des: "A classic-inspired wall art collection reimagined through a contemporary design language.",
        subs: [
          "/assets/wa43.webp",
          "/assets/wa44.webp",
          "/assets/wa45.webp",
          "/assets/wa46.webp",
        ],
      },
      {
        bg: "/assets/wa47.webp",
        name: "Artistic Layers",
        des: "Layered textures and expressive forms define this modern wall art set, ideal for statement walls.",
        subs: [
          "/assets/wa47.webp",
          "/assets/wa48.webp",
          "/assets/wa15.webp",
          "/assets/wa16.webp",
        ],
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

  useEffect(() => {
    preload(slides?.[0]?.bg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // lazy load main thumbs
  useEffect(() => {
    const container = slideRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll(".wall-thumb"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const url = entry.target.getAttribute("data-bg");
          if (!url) return;
          preload(url);
          io.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "300px", threshold: 0.01 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedMap]);

  // ✅ Convert viewport rect -> section-relative rect
  const getRectRelativeToStage = (el) => {
    const stage = stageRef.current;
    if (!el || !stage) return null;

    const r = el.getBoundingClientRect();
    const s = stage.getBoundingClientRect();

    return {
      left: r.left - s.left,
      top: r.top - s.top,
      width: r.width,
      height: r.height,
    };
  };

  const openFromThumb = (idx) => {
    const el = itemRefs.current[idx];
    const s = slides[idx];
    if (!el || !s) return;

    preload(s.bg);
    (s.subs || []).slice(0, 5).forEach((u) => preload(u));

    const from = getRectRelativeToStage(el);
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

  // ✅ Only animate NEXT image expanding from clicked sub thumb (scoped to stage)
  const animateOverlayFromEl = (el, nextImageUrl) => {
    if (!el || !nextImageUrl) return;

    // allow multiple clicks
    if (flipTimer.current) {
      clearTimeout(flipTimer.current);
      flipTimer.current = null;
    }

    const from = getRectRelativeToStage(el);
    if (!from) return;

    preload(nextImageUrl);

    const flipId = Date.now();

    setOverlay((o) => {
      if (!o) return o;
      return {
        ...o,
        flip: {
          id: flipId,
          bg: nextImageUrl,
          from,
          phase: "from",
        },
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
        return {
          ...o,
          bg: nextImageUrl,
          flip: null,
        };
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

  // cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  // positions for main thumbs
  const posX = [5, 79, 28, 44, 70, 66, 15, 76, 55];
  const posY = [45, 60, 65, 26, 10, 45, 10, 25];
  const posW = [320, 200, 410, 380, 500, 300, 430, 320, 300];
  const posH = [420, 350, 210, 380, 230, 280, 580, 210, 450];
  const rot = [-6, -8, -2, 5, 10, 4, 5, 8];

  return (
    <section ref={stageRef} className="wall-stage">
      <div
        className="wall-bg "
        style={{
          backgroundImage: `url(/assets/wall.webp)`,
        }}
      />

      <div ref={slideRef} className="wall-layer">
        <AnimatePresence mode="popLayout">
          {slides.map((s, idx) => {
            const isLoaded = !!loadedMap[s.bg];

            return (
              <motion.button
                key={s.bg}
                type="button"
                className="wall-thumb"
                data-bg={s.bg}
                ref={(node) => (itemRefs.current[idx] = node)}
                onClick={() => openFromThumb(idx)}
                aria-label={`Open ${s.name}`}
                style={{
                  backgroundImage: isLoaded ? `url(${s.bg})` : "none",
                  "--x": `${posX[idx] ?? 60}%`,
                  "--y": `${posY[idx] ?? 50}%`,
                  "--w": `${posW[idx] ?? 200}px`,
                  "--h": `${posH[idx] ?? 300}px`,
                  "--rot": `${rot[idx] ?? 0}deg`,
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.25, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {!isLoaded && <span className="thumb-skeleton" />}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {overlay && (
        <div
          className={[
            "overlay-root",
            overlay.phase === "to" ? "is-open" : "",
            overlay.didOpen ? "show-once" : "",
          ].join(" ")}
        >
          <button
            className="overlay-backdrop"
            type="button"
            onClick={closeOverlay}
            aria-label="Close"
          />

          <div
            className="overlay-card"
            style={{
              backgroundImage: loadedMap[overlay.bg]
                ? `url(${overlay.bg})`
                : "none",
              left: overlay.from.left,
              top: overlay.from.top,
              width: overlay.from.width,
              height: overlay.from.height,
            }}
          >
            {overlay.flip && (
              <div
                key={overlay.flip.id}
                className={`overlay-flip ${
                  overlay.flip.phase === "to" ? "is-open" : ""
                }`}
                style={{
                  backgroundImage: loadedMap[overlay.flip.bg]
                    ? `url(${overlay.flip.bg})`
                    : "none",
                  left: overlay.flip.from.left,
                  top: overlay.flip.from.top,
                  width: overlay.flip.from.width,
                  height: overlay.flip.from.height,
                }}
              />
            )}

            <div className="overlay-shade" />

            <div className="overlay-content">
              <div className="overlay-title leading-10 text-nowrap font-extrabold font-yatra">
                {overlay.name}
              </div>
              <div className="overlay-desc">{overlay.des}</div>
              <button
                className="overlay-btn flex items-center justify-center gap-2 text-black bg-white"
                type="button"
                onClick={closeOverlay}
              >
                exit
                <IoExitOutline />
              </button>
            </div>

            {overlay.subs?.length > 0 && (
              <div className="overlay-subs bento">
                {overlay.subs.slice(0, 6).map((url, i) => {
                  const isSubLoaded = !!loadedMap[url];
                  return (
                    <button
                      key={`${url}-${i}`}
                      type="button"
                      className="overlay-sub"
                      style={{
                        backgroundImage: isSubLoaded ? `url(${url})` : "none",
                        animationDelay: `${0.25 + i * 0.08}s`,
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
          </div>
        </div>
      )}
    </section>
  );
};

export default CarouselSlider;
