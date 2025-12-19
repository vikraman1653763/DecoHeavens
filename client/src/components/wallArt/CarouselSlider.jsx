import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/components/css/CarouselSlider.css";
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
      bg: "/assets/wa16.webp",
      name: "Modern Serenity",
      des: "A contemporary wall art design that brings calm, balance, and visual depth to modern living spaces, creating an atmosphere of quiet sophistication.",
      subs: [

        "/assets/wa15.webp",
        "/assets/wa16.webp",
        "/assets/wa17.webp",
        "/assets/wa18.webp",
        "/assets/wa19.webp",
        "/assets/wa40.webp",
      ],
    },
    {
      bg: "/assets/wa20.webp",
      name: "Nature’s Canvas",
      des: "Inspired by organic landscapes, this wall art adds warmth and natural flow to interiors, making it ideal for feature walls and calm environments.",
      subs: [
        "/assets/wa21.webp",
        "/assets/wa22.webp",
        "/assets/wa23.webp",
        "/assets/wa36.webp",
        "/assets/wa41.webp",

        "/assets/wa24.webp",
      ],
    },
    {
      bg: "/assets/wa25.webp",
      name: "Minimal Horizon",
      des: "A minimalist wall art composition designed for modern homes and workspaces, offering clean lines, subtle tones, and timeless appeal.",
      subs: [
        "/assets/wa26.webp",
        "/assets/wa27.webp",
        "/assets/wa28.webp",
        "/assets/wa37.webp",
                "/assets/wa42.webp",

        "/assets/wa29.webp",
      ],
    },
    {
      bg: "/assets/wa30.webp",
      name: "Abstract Harmony",
      des: "A premium abstract wall art piece crafted to make a bold visual statement while maintaining artistic balance and modern elegance.",
      subs: [
        "/assets/wa31.webp",
        "/assets/wa32.webp",
        "/assets/wa33.webp",
        "/assets/wa34.webp",
        "/assets/wa39.webp",
        "/assets/wa38.webp",
      ],
    },
    {
      bg: "/assets/wa35.webp",
      name: "Timeless Texture",
      des: "Textured wall art that blends classic inspiration with modern design sensibilities, adding depth and character to refined interiors.",
      subs: [
        "/assets/wa15.webp",
        "/assets/wa16.webp",
        "/assets/wa42.webp",
        "/assets/wa17.webp",
        "/assets/wa18.webp",
        "/assets/wa39.webp",
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

  // ✅ IMPORTANT: REMOVE body scroll lock completely
  // (No "document.body.style.overflow = hidden" effect)

  // positions for main thumbs
  const posX = [10, 80, 38, 54, 90, 72, 85];
  const posY = [45, 80, 55, 26, 30, 65, 72];
  const posW = [220, 200, 210, 190, 180, 190, 180];
  const posH = [320, 300, 310, 280, 260, 280, 260];
  const rot = [-6, 8, -2, 5, 10, -4, 6];

  return (
    <section ref={stageRef} className="wall-stage">
      <div
        className="wall-bg"
        style={{
          backgroundImage: loadedMap[slides[0].bg] ? `url(${slides[0].bg})` : "none",
        }}
      />

      <div ref={slideRef} className="wall-layer">
        {slides.map((s, idx) => {
          const isLoaded = !!loadedMap[s.bg];

          return (
            <button
              key={idx}
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
            >
              {!isLoaded && <span className="thumb-skeleton" />}
            </button>
          );
        })}
      </div>

      {overlay && (
        <div
          className={[
            "overlay-root",
            overlay.phase === "to" ? "is-open" : "",
            overlay.didOpen ? "show-once" : "",
          ].join(" ")}
        >
          <button className="overlay-backdrop" type="button" onClick={closeOverlay} aria-label="Close" />

          <div
            className="overlay-card"
            style={{
              backgroundImage: loadedMap[overlay.bg] ? `url(${overlay.bg})` : "none",
              left: overlay.from.left,
              top: overlay.from.top,
              width: overlay.from.width,
              height: overlay.from.height,
            }}
          >
            {overlay.flip && (
              <div
                key={overlay.flip.id}
                className={`overlay-flip ${overlay.flip.phase === "to" ? "is-open" : ""}`}
                style={{
                  backgroundImage: loadedMap[overlay.flip.bg] ? `url(${overlay.flip.bg})` : "none",
                  left: overlay.flip.from.left,
                  top: overlay.flip.from.top,
                  width: overlay.flip.from.width,
                  height: overlay.flip.from.height,
                }}
              />
            )}

            <div className="overlay-shade" />

            <div className="overlay-content">
              <div className="overlay-title">{overlay.name}</div>
              <div className="overlay-desc">{overlay.des}</div>
              <button className="overlay-btn flex items-center justify-center gap-2 text-black bg-white" type="button" onClick={closeOverlay}>
                exit<IoExitOutline />
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
