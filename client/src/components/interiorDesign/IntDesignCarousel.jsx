import React, { useEffect, useRef, useState } from "react";
import "@/components/css/InteriorDesignCarousel.css";
import { AnimatePresence, motion } from "framer-motion";
import { LineShadowText } from "../ui/line-shadow-text";

const InteriorDesignCarousel = () => {
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      img: "/assets/id1.webp",
      title: "Modern Living",
      des: "Elegant interior styling crafted to enhance modern living spaces with warmth and balance.",
    },
    {
      img: "/assets/id2.webp",
      title: "Luxury Comfort",
      des: "Premium interior concepts blending comfort, sophistication, and timeless design.",
    },
    {
      img: "/assets/id3.webp",
      title: "Minimal Spaces",
      des: "Clean lines and neutral tones designed for calm, clutter-free interiors.",
    },
    {
      img: "/assets/id4.webp",
      title: "Artistic Homes",
      des: "Creative textures and colors that transform homes into artistic statements.",
    },
    {
      img: "/assets/id5.webp",
      title: "Urban Style",
      des: "Contemporary designs curated for stylish city living environments.",
    },
    {
      img: "/assets/id6.webp",
      title: "Timeless Design",
      des: "Interior solutions that remain elegant across evolving trends.",
    },
  ];

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

  // apply rotation only
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.setProperty("--rotate", `${rotate}deg`);
    }
  }, [rotate]);

  // auto slide
  useEffect(() => {
    restartAuto();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = slides[active];

  const titleV = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const textV = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const titleWrap = {
    hidden: { opacity: 0, y: -50,rotateZ:10 },
    show: {
      opacity: 1,
      y: 0,
      rotateZ:0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleLine = {
    hidden: { opacity: 0, y: 30, rotate: -8 },
    show: {
      opacity: 1,
      y: 0,
      rotate: -5,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const panel = {
    initial: { opacity: 0, y: 18, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -12, filter: "blur(8px)" },
  };

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
              <img
                src={s.img}
                alt={s.title}
                className="h-80 md:h-[400px] rounded-4xl shadow-[18px_0_40px_rgba(0,0,0,0.35)]"
                draggable="false"
              />
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
          text-white text-[90px]
          opacity-30 hover:opacity-100 transition
        "
      >
        ›
      </button>
    </section>
  );
};

export default InteriorDesignCarousel;
