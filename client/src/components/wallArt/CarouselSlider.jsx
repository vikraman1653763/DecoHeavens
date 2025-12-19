// CarouselSlider.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/components/css/CarouselSlider.css";

const CarouselSlider = () => {
  const slideRef = useRef(null);
  const itemRefs = useRef([]); // main thumbnails
  const subRefs = useRef([]); // sub thumbnails (only when overlay open)

  const [loadedMap, setLoadedMap] = useState({});
  const [overlay, setOverlay] = useState(null);
  // overlay = {
  //   bg, name, des, subs: [],
  //   from: { left, top, width, height },
  //   phase: "from" | "to"
  // }

  const slides = useMemo(
    () => [
      {
        bg: "https://plus.unsplash.com/premium_photo-1706375750361-0760b9a10b05?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Modern Serenity",
        des: "A contemporary wall art design that brings calm, balance, and visual depth to modern living spaces, creating an atmosphere of quiet sophistication.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Nature’s Canvas",
        des: "Inspired by organic landscapes, this wall art adds warmth and natural flow to interiors, making it ideal for feature walls and calm environments.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "https://images.unsplash.com/photo-1589669525478-0090c61760e7?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Minimal Horizon",
        des: "A minimalist wall art composition designed for modern homes and workspaces, offering clean lines, subtle tones, and timeless appeal.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "https://plus.unsplash.com/premium_photo-1705835519832-a2cff501427e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Abstract Harmony",
        des: "A premium abstract wall art piece crafted to make a bold visual statement while maintaining artistic balance and modern elegance.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "/assets/wa11.webp",
        name: "Timeless Texture",
        des: "Textured wall art that blends classic inspiration with modern design sensibilities, adding depth and character to refined interiors.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "/assets/wa7.webp",
        name: "Urban Elegance",
        des: "A sophisticated wall art selection curated for contemporary urban spaces, enhancing apartments and studios with subtle luxury.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
      },
      {
        bg: "/assets/wa2.webp",
        name: "Artistic Expression",
        des: "Expressive forms and rich tones come together in this modern wall art, designed to elevate spaces with creative personality.",
        subs: ["/assets/wa1.webp", "/assets/wa2.webp", "/assets/wa3.webp", "/assets/wa4.webp"],
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

  // preload first bg
  useEffect(() => {
    preload(slides?.[0]?.bg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // lazy load main thumbs when near viewport
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

  const openFromThumb = (idx) => {
    const el = itemRefs.current[idx];
    const s = slides[idx];
    if (!el || !s) return;

    preload(s.bg);
    (s.subs || []).slice(0, 5).forEach((u) => preload(u));

    const r = el.getBoundingClientRect();

    setOverlay({
      bg: s.bg,
      name: s.name,
      des: s.des,
      subs: s.subs || [],
      from: { left: r.left, top: r.top, width: r.width, height: r.height },
      phase: "from",
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlay((o) => (o ? { ...o, phase: "to" } : o));
      });
    });
  };

  const closeOverlay = () => {
    setOverlay((o) => (o ? { ...o, phase: "from" } : o));
    window.setTimeout(() => setOverlay(null), 520);
  };

  // FLIP from any element (sub thumb -> fullscreen)
  const animateOverlayFromEl = (el, nextImageUrl) => {
    if (!el || !nextImageUrl) return;

    preload(nextImageUrl);
    const r = el.getBoundingClientRect();

    setOverlay((o) => {
      if (!o) return o;
      return {
        ...o,
        bg: nextImageUrl,
        from: { left: r.left, top: r.top, width: r.width, height: r.height },
        phase: "from",
      };
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlay((o) => (o ? { ...o, phase: "to" } : o));
      });
    });
  };

  // ESC close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && overlay) closeOverlay();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlay]);

  // reset sub refs when image changes
  useEffect(() => {
    subRefs.current = [];
  }, [overlay?.bg]);

  // positions for main thumbs (tune these)
  const posX = [10, 80, 38, 54, 90, 72, 85];
  const posY = [45, 80, 55, 26, 30, 65, 72];
  const posW = [220, 200, 210, 190, 180, 190, 180];
  const posH = [320, 300, 310, 280, 260, 280, 260];
  const rot = [-6, 8, -2, 5, 10, -4, 6];

  return (
    <section className="wall-stage">
      {/* stable background */}
      <div
        className="wall-bg"
        style={{
          backgroundImage: loadedMap[slides[0].bg] ? `url(${slides[0].bg})` : "none",
        }}
      />

      {/* main thumbnails */}
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

      {/* OVERLAY (main FLIP + right sub thumbs that also FLIP) */}
      {overlay && (
        <div className={`overlay-root ${overlay.phase === "to" ? "is-open" : ""}`}>
          <button
            className="overlay-backdrop"
            type="button"
            onClick={closeOverlay}
            aria-label="Close"
          />

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
            <div className="overlay-shade" />

            <div key={overlay.bg} className="overlay-content">
              <div className="overlay-title">{overlay.name}</div>
              <div className="overlay-desc">{overlay.des}</div>
              <button className="overlay-btn" type="button" onClick={closeOverlay}>
                Close
              </button>
            </div>

            {overlay.subs?.length > 0 && (
              <div className="overlay-subs">
                {overlay.subs.slice(0, 5).map((url, i) => {
                  const isSubLoaded = !!loadedMap[url];

                  return (
                    <button
                      key={url + i}
                      type="button"
                      className="overlay-sub"
                      ref={(node) => (subRefs.current[i] = node)}
                      style={{
                        backgroundImage: isSubLoaded ? `url(${url})` : "none",
                        animationDelay: `${0.25 + i * 0.08}s`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        animateOverlayFromEl(subRefs.current[i], url);
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
