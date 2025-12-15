import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WallArtSlider3D = () => {
  const slides = useMemo(
    () => [
      {
        title: "Custom Wall Murals",
        desc: "From feature walls to full-room murals — we design, print, and install with a premium finish.",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
        tag: "Design • Print • Install",
      },
      {
        title: "Canvas & Frame Prints",
        desc: "Museum-style canvas prints and frames that elevate living rooms, offices, and studios.",
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=70",
        tag: "Canvas • Frames • Gallery Sets",
      },
      {
        title: "3D Wall Panels",
        desc: "Add depth and texture using modern 3D panels — perfect for reception areas and TV backdrops.",
        img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=70",
        tag: "Texture • Premium Look",
      },
      {
        title: "Wallpaper Installation",
        desc: "Clean, bubble-free wallpaper installation with proper surface prep and long-lasting adhesion.",
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=70",
        tag: "Prep • Alignment • Finish",
      },
      {
        title: "Office Branding Walls",
        desc: "Logo walls, quote walls, and brand themes that turn your workplace into a statement.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
        tag: "Brand • Identity • Impact",
      },
      {
        title: "Kids Room Wall Art",
        desc: "Playful themes and soft palettes — safe materials with a neat, long-lasting finish.",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=70",
        tag: "Themes • Characters • Pastels",
      },
      {
  title: "Traditional Wall Art",
  desc: "Elegant traditional designs for pooja rooms and heritage spaces — crafted with detail, symmetry, and warm tones.",
  img: "https://plus.unsplash.com/premium_photo-1694475155167-4d3b05c8dee3?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tag: "Traditional • Premium Finish",
}

    ],
    []
  );

  const [active, setActive] = useState(3);
  const [styles, setStyles] = useState([]);
  const timerRef = useRef(null);
  const [pause, setPause] = useState(false);

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

  useEffect(() => {
    const newStyles = slides.map((_, i) => {
      if (i === active) {
        return { transform: "none", zIndex: 10, filter: "none", opacity: 1 };
      }

      const diff = i - active;
      const abs = Math.abs(diff);

      // Keep your original “stacked” feel
      const translate = 140 * diff;
      const scale = 1 - 0.18 * abs;

      return {
        transform: `translateX(${translate}px) scale(${scale}) perspective(16px) rotateY(${diff > 0 ? "-1deg" : "1deg"})`,
        zIndex: 10 - abs,
        filter: "blur(5px)",
        opacity: abs > 2 ? 0 : 0.55,
      };
    });

    setStyles(newStyles);
  }, [active, slides]);

  // Reveal animations for active card elements
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

  return (
    <section className="w-full py-16 sm:py-20 bg-secondary/15">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header (theme matched) */}
        <div className="text-center mb-10">
          <p className="font-dance text-xl sm:text-2xl text-primary/90">
            Turn blank walls into beautiful stories
          </p>
          <h2 className="font-yatra text-3xl sm:text-4xl text-neutral-900 mt-2">
            Wall Art Services
          </h2>
          <p className="font-poppins text-sm sm:text-base text-neutral-600 mt-2">
            Custom designs, premium materials, and clean installation — for homes & businesses.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative w-full h-[520px] overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {slides.map((s, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] sm:w-[320px] h-[450px] rounded-2xl overflow-hidden bg-white shadow-xl border border-black/5 transition-all duration-500"
                style={styles[i]}
              >
                {/* Image Top */}
                <div className="relative h-[56%] w-full overflow-hidden">
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

                  {/* subtle overlay for readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                </div>

                {/* Content Bottom */}
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
                        className="mt-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-poppins
                                   bg-secondary/25 text-neutral-800"
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
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2
                       w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-black/10
                       flex items-center justify-center text-primary text-2xl font-bold
                       hover:bg-white transition"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={() => {
              next();
              resetTimer();
            }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2
                       w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-black/10
                       flex items-center justify-center text-primary text-2xl font-bold
                       hover:bg-white transition"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default WallArtSlider3D;
