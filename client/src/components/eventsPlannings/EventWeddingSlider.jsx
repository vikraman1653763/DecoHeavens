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
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden bg-black">
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
          {/* Background image */}
          <div
            className="absolute inset-0 scale-110 bg-center bg-cover blur-[2px] "
            style={{
              backgroundImage: `url(${slides[active]?.img})`,
            }}
          />

          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Extra vignette (optional) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-center gap-5">
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
              {/* Image */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Vertical title (inactive cards) */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="-rotate-90 translate-y-[300%]">
                    <p className="text-white font-dance text-3xl font-bold tracking-wider whitespace-nowrap drop-shadow">
                      {s.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Active content */}
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
