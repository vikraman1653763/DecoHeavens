import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* SVG reveal */}
        <motion.img
          src="/assets/design04.svg"
          alt=""
          aria-hidden="true"
          className="w-full max-w-6xl object-contain opacity-90"
          initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1], // smooth cinematic ease
          }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 26 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
              ease: "easeOut",
              staggerChildren: 0.12,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.span
          className="mb-4 inline-flex items-center px-3 py-1 text-xs border border-slate-300 rounded-full text-slate-700 bg-white/60 backdrop-blur"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
        >
          About DecoHeavens
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-yatra font-semibold text-primary leading-tight"
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
        >
          Crafting Spaces, Celebrating Moments, and Painting Dreams
        </motion.h1>

        <motion.p
          className="mt-4 text-slate-600 text-base sm:text-lg"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
        >
          Where thoughtful design meets meaningful celebrations.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3"
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
        >
          <Link
            to="/contact"
            className="px-7 py-3 rounded-2xl bg-secondary text-white font-semibold hover:opacity-95 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/work"
            className="px-7 py-3 rounded-2xl border border-slate-300 bg-white/60 backdrop-blur text-slate-800 font-semibold hover:bg-white transition"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
