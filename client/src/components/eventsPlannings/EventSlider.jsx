import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const InteriorDesignCarousel = () => {
  const intervalRef = useRef(null);
  const [active, setActive] = useState(2);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1524777313293-86d2ab467344?auto=format&fit=crop&w=1600&q=80",
      title: "Floral Styling",
      des: "Elegant floral aesthetics for entries, aisles, tables, and backdrops.",
    },
    {
      img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1600&q=80",
      title: "Grand Wedding",
      des: "Full-scale wedding planning with decor, logistics, and guest management.",
    },
    {
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
      title: "Mandap Decor",
      des: "Traditional mandap setups with modern styling and premium florals.",
    },
    {
      img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop",
      title: "Reception Night",
      des: "Stage design, lighting, and smooth coordination for reception evenings.",
    },
    {
      img: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=1600&q=80",
      title: "Corporate Events",
      des: "Professional event execution for launches, meets, and conferences.",
    },
    {
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
      title: "Mehendi & Haldi",
      des: "Pre-wedding celebrations with vibrant themes, music and coordination.",
    },
    {
      img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1600&q=80",
      title: "Live Catering",
      des: "Curated menus, live counters and seamless guest service management.",
    },
  ];

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => intervalRef.current && clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelect = (idx) => {
    setActive(idx);
    resetInterval();
  };

  return (
    <div className="relative w-full sm:min-h-screen flex items-center justify-center pt-22 sm:pt-0 px-4 py-10 overflow-hidden bg-black">
      {/* ✅ Dynamic blurred background (based on active image) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active]?.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 scale-110 bg-center bg-cover blur-[2px]"
            style={{ backgroundImage: `url(${slides[active]?.img})` }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* ---------------- MOBILE LAYOUT (< md) ---------------- */}
      <div className="relative z-10 w-full max-w-6xl md:hidden">
        {/* Active slide */}
        <div className="w-full">
          <motion.div
            key={slides[active]?.img}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-[420px] w-full">
              <img
                src={slides[active]?.img}
                alt={slides[active]?.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <h2 className="text-white text-2xl font-extrabold tracking-tight drop-shadow font-yatra">
                  {slides[active]?.title.toUpperCase()}
                </h2>
                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  {slides[active]?.des}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  i === active ? "w-7 bg-white" : "w-2.5 bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Thumbnails row */}
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {slides.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelect(idx)}
                className={[
                  "shrink-0 relative overflow-hidden rounded-xl border",
                  idx === active
                    ? "border-white/70"
                    : "border-white/20 opacity-80",
                ].join(" ")}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-16 w-24 object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- DESKTOP LAYOUT (md+) - UNCHANGED ---------------- */}
      <div className="relative z-10 w-full max-w-6xl hidden md:flex items-center justify-center gap-5">
        {slides.map((s, idx) => {
          const isActive = idx === active;

          return (
            <motion.button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              className={[
                "relative overflow-hidden rounded-2xl",
                "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
                "outline-none focus:ring-2 focus:ring-white/20",
                "cursor-pointer",
                isActive ? "h-[520px] w-[720px]" : "h-[520px] w-[120px]",
              ].join(" ")}
              animate={{ width: isActive ? 720 : 120 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="-rotate-90 translate-y-[300%]">
                    <p className="text-white font-dance text-3xl font-bold tracking-wider whitespace-nowrap drop-shadow">
                      {s.title}
                    </p>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute left-8 bottom-8 right-8"
                  >
                    <h2 className="text-white text-4xl font-extrabold tracking-tight drop-shadow font-yatra">
                      {s.title.toUpperCase()}
                    </h2>
                    <p className="mt-2 text-white/85 text-sm max-w-xl leading-relaxed">
                      {s.des}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default InteriorDesignCarousel;
