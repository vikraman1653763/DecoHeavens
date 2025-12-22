import React, { useEffect, useRef, useState } from "react";
import "@/components/css/InteriorDesignCarousel.css";
import { AnimatePresence, motion } from "framer-motion";
import { LineShadowText } from "../ui/line-shadow-text";

/**
 * ✅ Desktop: your existing wheel carousel (UNCHANGED)
 * ✅ Mobile: normal slider carousel (single image + swipe)
 */
const InteriorDesignCarousel = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=500&q=80",
      title: "Modern Living",
      des: "Elegant interior styling crafted to enhance modern living spaces with warmth and balance.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg",
      title: "Biophilic Office Design",
      des: "Modern office interiors integrating natural elements and greenery to enhance focus, wellness, and productivity.",
    },
    {
      img: "https://images.unsplash.com/photo-1706074740295-d7a79c079562?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Reception Lounge",
      des: "Modern reception and waiting spaces crafted for comfort, elegance, and a professional ambience.",
    },
    {
      img: "https://images.unsplash.com/photo-1706074797611-a02f9ed06439?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Executive Meeting Room",
      des: "Sleek conference rooms crafted for productive discussions in a modern corporate environment.",
    },
    {
      img: "https://images.unsplash.com/photo-1667646590380-670b53b8c393?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Urban Style",
      des: "Contemporary designs curated for stylish city living environments.",
    },
    {
      img: "https://images.unsplash.com/photo-1600493504483-8df7098b5792?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Timeless Comfort",
      des: "Interior inspirations blending timeless elegance with modern flair.",
    },
  ];

  return (
    <>
      {/* ✅ Mobile: normal carousel */}
      <div className="block md:hidden">
        <InteriorDesignCarouselMobile slides={slides} />
      </div>

      {/* ✅ Desktop: your wheel (unchanged) */}
      <div className="hidden md:block">
        <InteriorDesignCarouselDesktop slides={slides} />
      </div>
    </>
  );
};

export default InteriorDesignCarousel;

/* ------------------------- Shared Variants ------------------------- */

const titleV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const textV = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const panel = {
  initial: { opacity: 0, y: 18, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(8px)" },
};

const titleWrap = {
  hidden: { opacity: 0, y: -50, rotateZ: 10 },
  show: { opacity: 1, y: 0, rotateZ: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleLine = {
  hidden: { opacity: 0, y: 30, rotate: -8 },
  show: { opacity: 1, y: 0, rotate: -5, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ------------------------- Mobile: Normal Carousel ------------------------- */

const InteriorDesignCarouselMobile = ({ slides }) => {
  const intervalRef = useRef(null);
  const count = slides.length;

  const [active, setActive] = useState(0);
  const current = slides[active];

  const restartAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % count);
    }, 3500);
  };

  const next = () => {
    setActive((p) => (p + 1) % count);
    restartAuto();
  };

  const prev = () => {
    setActive((p) => (p - 1 + count) % count);
    restartAuto();
  };

  useEffect(() => {
    restartAuto();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative w-full font-poppins bg-white overflow-hidden">
      {/* Top color block (matches your theme) */}
      <div className="absolute inset-x-0 top-0 h-[46%] bg-primary" />
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/20 pointer-events-none" />

      {/* Title (keeps your branding) */}
      <motion.h1
        variants={titleWrap}
        initial="hidden"
        animate="show"
        className="relative z-10 pt-8 px-4 text-center text-white leading-[0.9]"
      >
        <motion.span variants={titleLine} className="block font-dance text-[52px]">
          Interior
        </motion.span>
        <motion.span variants={titleLine} transition={{ delay: 0.1 }} className="block font-dance text-[52px]">
          <LineShadowText className="text-[#751c5d] font-dance -z-1">Desi</LineShadowText>
          gn
        </motion.span>
      </motion.h1>

      {/* Slider */}
      <div className="relative z-10 mt-6 px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.img}
              src={current.img}
              alt={current.title}
              className="w-full h-80 object-cover"
              initial={{ opacity: 0, x: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              draggable="false"
            />
          </AnimatePresence>

          {/* arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-primary text-2xl flex items-center justify-center shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-primary text-2xl flex items-center justify-center shadow"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                restartAuto();
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all",
                i === active ? "w-6 bg-primary" : "w-2 bg-slate-300",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Content card */}
        <div className="mt-5 bg-white rounded-2xl p-4 my-3 shadow-[0_12px_25px_rgba(0,0,0,0.10)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panel}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.h2
                variants={titleV}
                className="text-primary text-2xl font-bold tracking-tight font-yatra"
              >
                {current.title}
              </motion.h2>

              <motion.p
                variants={textV}
                transition={{ delay: 0.08 }}
                className="mt-2 text-slate-700 text-sm leading-relaxed"
              >
                {current.des}
              </motion.p>

              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                className="
                  mt-4 px-6 py-2 rounded-full
                  bg-primary text-white
                  shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                  hover:brightness-110 transition
                "
              >
                See more
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Swipe support */}
      <motion.div
        className="absolute inset-0 z-0"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={(_, info) => {
          const swipe = info.offset.x;
          if (swipe > 60) prev();
          if (swipe < -60) next();
        }}
      />
    </section>
  );
};

/* ------------------------- Desktop: Your Wheel (UNCHANGED) ------------------------- */

const InteriorDesignCarouselDesktop = ({ slides }) => {
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  const count = slides.length;
  const rotateStep = 360 / count;

  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);

  const restartAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % count);
      setRotate((r) => r + rotateStep);
    }, 3000);
  };

  const next = () => {
    setActive((p) => (p + 1) % count);
    setRotate((r) => r + rotateStep);
    restartAuto();
  };

  const prev = () => {
    setActive((p) => (p - 1 + count) % count);
    setRotate((r) => r - rotateStep);
    restartAuto();
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.setProperty("--rotate", `${rotate}deg`);
    }
  }, [rotate]);

  useEffect(() => {
    restartAuto();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = slides[active];

  return (
    <section
      className="
        relative w-full h-screen overflow-hidden
        font-poppins
        bg-linear-to-r from-white to-white
      "
    >
      {/* Left theme block */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-primary shadow-[0_25px_60px_rgba(0,0,0,0.45)]" />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-linear-to-b from- via-black/0 to-black/20 pointer-events-none" />

      {/* Title */}
      <motion.h1
        variants={titleWrap}
        initial="hidden"
        animate="show"
        className="
          absolute top-[11%] right-[68%] w-[44%]
          text-right text-white
          leading-[0.88]
          text-[120px] md:text-[150px]
        "
      >
        <motion.span variants={titleLine} className="block  font-dance">
          Interior
        </motion.span>
        <motion.span
          variants={titleLine}
          transition={{ delay: 0.1 }}
          className="block  font-dance"
        >
          <LineShadowText className="text-[#751c5d] font-dance -z-1">
            Desi
          </LineShadowText>
          gn
        </motion.span>
      </motion.h1>

      {/* Wheel */}
      <motion.div
        ref={imageRef}
        className="
          int-design-images
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-10
          w-[1100px] h-[1100px] md:w-[1500px] md:h-[100px]
          rounded-full
          outline-[3px] outline-dashed outline-white/20
          outline-offset-[-90px] md:outline-offset-0
        "
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="int-design-image-item absolute inset-0 text-center select-none"
            style={{ "--i": i + 1 }}
          >
            <div className="int-design-image-inner">
              <div className="w-[320px] h-80 md:w-[400px] md:h-[400px] overflow-hidden rounded-4xl shadow-[18px_0_40px_rgba(0,0,0,0.35)]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Content panel (AnimatePresence) */}
      <div className="absolute top-[14%] left-[70%] w-[360px] text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={panel}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <motion.h2
              variants={titleV}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-primary text-5xl font-bold tracking-tight font-yatra"
            >
              {current.title}
            </motion.h2>

            <motion.p
              variants={textV}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
              className="mt-4 text-slate-700 leading-relaxed"
            >
              {current.des}
            </motion.p>

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.14 }}
              className="
                mt-8 px-8 py-2 rounded-full float-right
                bg-primary text-white
                shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                hover:brightness-110 transition
              "
            >
              See more
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="
          absolute top-1/2 left-[220px] -translate-y-1/2
          text-white text-[90px]
          opacity-30 hover:opacity-100 transition
        "
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="
          absolute top-1/2 right-[220px] -translate-y-1/2
          text-primary text-[90px]
          opacity-30 hover:opacity-100 transition
        "
      >
        ›
      </button>
    </section>
  );
};
