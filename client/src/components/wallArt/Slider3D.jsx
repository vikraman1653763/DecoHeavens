import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const WallArtSlider3D = () => {
  const slides = useMemo(
    () => [
      {
        title: "Signature Wall Murals",
        desc: "Bold feature walls and full-room murals tailored to your theme, palette, and space — crafted for a premium finish.",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
        tag: "Murals • Feature Walls • Story Themes",
      },
      {
        title: "Canvas & Frame Art",
        desc: "Curated canvas and framed artwork that elevates living rooms, offices, and studios — sized and styled to suit your interiors.",
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=70",
        tag: "Canvas • Frames • Gallery Sets",
      },
      {
        title: "Texture & 3D Panels",
        desc: "Add depth and character with modern textures and 3D panels — ideal for TV backdrops, reception areas, and accent walls.",
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=70",
        tag: "3D Panels • Textures • Accent Walls",
      },
      {
        title: "Traditional Wall Art",
        desc: "Elegant traditional designs for pooja rooms and heritage spaces — detailed patterns with warm, timeless character.",
        img: "https://plus.unsplash.com/premium_photo-1694475155167-4d3b05c8dee3?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tag: "Traditional • Symmetry • Premium Finish",
      },
      {
        title: "Wallpaper Designs",
        desc: "Premium wallpaper styles with clean alignment and smooth finishing — designed to blend beautifully with your space.",
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=70",
        tag: "Modern • Minimal • Luxury",
      },
      {
        title: "Brand & Statement Walls",
        desc: "Logo walls, quote walls, and brand-driven designs that turn workspaces into strong visual statements.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
        tag: "Branding • Quotes • Identity",
      },
      {
        title: "Kids’ Room Wall Art",
        desc: "Playful, safe, and durable themes for children’s rooms — characters, cartoons, and pastel worlds that grow with them.",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=70",
        tag: "Kids Themes • Pastels • Safe Paints",
      },
    ],
    []
  );

  const [active, setActive] = useState(3);
  const timerRef = useRef(null);
  const [pause, setPause] = useState(false);

  // ✅ Mobile refs (scroll-snap)
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);

  const visibleRange = 2;

  const next = () => setActive((p) => (p + 1) % slides.length);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pause) next();
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => timerRef.current && clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pause]);

  const getCircularOffset = (i, activeIndex, len) => {
    let offset = (i - activeIndex) % len;
    if (offset < 0) offset += len;
    if (offset > len / 2) offset -= len;
    return offset;
  };

  const getCardStyle = (offset) => {
    const abs = Math.abs(offset);

    if (abs > visibleRange) {
      return {
        transform: "translateX(0px) scale(0.7)",
        opacity: 0,
        zIndex: 0,
        filter: "blur(6px)",
        pointerEvents: "none",
      };
    }

    if (offset === 0) {
      return {
        transform: "none",
        zIndex: 50,
        filter: "none",
        opacity: 1,
      };
    }

    const translate = 140 * offset;
    const scale = 1 - 0.18 * abs;
    const rotate = offset > 0 ? "-1deg" : "1deg";

    return {
      transform: `translateX(${translate}px) scale(${scale}) perspective(16px) rotateY(${rotate})`,
      zIndex: 50 - abs,
      filter: "blur(5px)",
      opacity: abs === 2 ? 0.45 : 0.6,
    };
  };

  const imgV = {
    initial: { opacity: 0, scale: 1.03 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };
  const titleV = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.28, delay: 0.05 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
  };
  const tagV = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25, delay: 0.08 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
  };
  const descV = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.28, delay: 0.12 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
  };

  // ✅ Mobile: scroll to card + sync active
  const scrollTo = (idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  useEffect(() => {
    // mobile-only observer (safe to run on desktop too; root is hidden)
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll("[data-mobile-card='1']"));
    if (!cards.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((x) => x.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!best) return;
        const idx = Number(best.target.getAttribute("data-idx"));
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { root: scroller, threshold: [0.5, 0.65, 0.8] }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="w-full py-6 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative mandalas */}
      <img
        src="/assets/mandala.svg"
        alt="Mandala Decorative"
        className=" hidden sm:block
          absolute left-1/2 md:left-0 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-72 sm:w-160
          pointer-events-none animate-slow-spin
          opacity-20
        "
      />
      <img
        src="/assets/mandala.svg"
        alt="Mandala Decorative"
        className="hidden sm:block
          absolute right-1/2 md:right-0 top-1/2
          translate-x-1/2 -translate-y-1/2
          w-72 sm:w-160
          pointer-events-none animate-rev-slow-spin
          opacity-20
        "
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-dance text-xl sm:text-2xl text-secondary">
            Explore our styles. Pick what fits your walls.
          </p>
          <h2 className="font-yatra text-3xl sm:text-4xl text-primary mt-2">
            Our Wall Art Categories
          </h2>
          <p className="font-poppins text-sm sm:text-base text-neutral-600 mt-2">
            From modern textures to traditional patterns — our wall art is crafted
            to match your space and your story.
          </p>
        </div>

        {/* ✅ MOBILE: normal scroll-snap carousel */}
        <div className="sm:hidden">
          {/* controls */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => {
                prev();
                scrollTo((active - 1 + slides.length) % slides.length);
              }}
              className="w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-secondary
                         flex items-center justify-center text-secondary text-xl shadow-sm"
              aria-label="Previous"
            >
              <BsFillCaretLeftFill />
            </button>

            <div className="text-center">
              <div className="text-xs font-poppins text-neutral-500">Category</div>
              <div className="font-yatra text-xl text-primary leading-tight">
                {slides[active]?.title}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                next();
                scrollTo((active + 1) % slides.length);
              }}
              className="w-11 h-11 rounded-full bg-white/80 backdrop-blur border border-secondary
                         flex items-center justify-center text-secondary text-xl shadow-sm"
              aria-label="Next"
            >
              <BsFillCaretRightFill />
            </button>
          </div>

          <div
            ref={scrollerRef}
            data-hide-scrollbar="1"
            className="
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
            onTouchStart={() => setPause(true)}
            onTouchEnd={() => setPause(false)}
          >
            <style>{`
              [data-hide-scrollbar='1']::-webkit-scrollbar{display:none;}
            `}</style>

            {slides.map((s, idx) => (
              <motion.div
                key={idx}
                data-mobile-card="1"
                data-idx={idx}
                ref={(node) => (cardRefs.current[idx] = node)}
                className="
                  shrink-0 snap-center
                  w-[86%] max-w-[380px]
                  rounded-3xl overflow-hidden bg-white
                  border border-black/5 shadow-xl
                "
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setActive(idx);
                  scrollTo(idx);
                }}
              >
                <div className="h-[300px] w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>

                <div className="p-5">
                  <div className="font-yatra text-xl text-primary">{s.title}</div>
                  <div className="mt-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-poppins bg-secondary/25 text-neutral-800">
                    {s.tag}
                  </div>
                  <p className="mt-3 font-poppins text-sm text-neutral-700 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* dots */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={[
                  "h-2 rounded-full transition-all",
                  i === active ? "w-8 bg-secondary" : "w-2 bg-secondary/40",
                ].join(" ")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ✅ DESKTOP/TABLET: your 3D slider */}
        <div className="hidden sm:block">
          <div
            className="relative w-full h-[620px]"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            {slides.map((s, i) => {
              const isActive = i === active;
              const offset = getCircularOffset(i, active, slides.length);

              return (
                <div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-[470px] h-[500px]
                             rounded-2xl overflow-hidden bg-white shadow-xl border border-black/5
                             transition-all duration-500"
                  style={getCardStyle(offset)}
                >
                  <div className="relative h-[66%] w-full overflow-hidden">
                    {isActive ? (
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`img-${active}`}
                          variants={imgV}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          src={s.img}
                          alt={s.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                      </AnimatePresence>
                    ) : (
                      <img
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                  </div>

                  <div className="h-[44%] p-5 flex flex-col">
                    {isActive ? (
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={`title-${active}`}
                          variants={titleV}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="font-yatra text-xl text-primary"
                        >
                          {s.title}
                        </motion.h3>
                      </AnimatePresence>
                    ) : (
                      <h3 className="font-yatra text-xl text-primary">{s.title}</h3>
                    )}

                    {isActive ? (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`tag-${active}`}
                          variants={tagV}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="mt-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-poppins bg-secondary/25 text-neutral-800"
                        >
                          {s.tag}
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <div className="mt-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-poppins bg-secondary/25 text-neutral-800">
                        {s.tag}
                      </div>
                    )}

                    {isActive ? (
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`desc-${active}`}
                          variants={descV}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="font-poppins text-sm text-neutral-700 leading-relaxed mt-3"
                        >
                          {s.desc}
                        </motion.p>
                      </AnimatePresence>
                    ) : (
                      <p className="font-poppins text-sm text-neutral-700 leading-relaxed mt-3">
                        {s.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Controls */}
            <button
              onClick={() => {
                prev();
                resetTimer();
              }}
              className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-secondary
                         flex items-center justify-center text-secondary text-2xl font-bold
                         hover:bg-secondary/10 transition z-50"
              aria-label="Previous"
            >
              <BsFillCaretLeftFill />
            </button>

            <button
              onClick={() => {
                next();
                resetTimer();
              }}
              className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2
                         w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-secondary
                         flex items-center justify-center text-secondary text-2xl font-bold
                         hover:bg-secondary/10 transition z-50"
              aria-label="Next"
            >
              <BsFillCaretRightFill />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallArtSlider3D;
