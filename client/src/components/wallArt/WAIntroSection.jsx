"use client";

import React from "react";
import { motion } from "framer-motion";
import WallArtFlowBeam from "./WAFlowBeam"; // ✅ adjust path if needed
import { AnimatedGradientText } from "../ui/animated-gradient-text";

const WallArtIntroSection = () => {
  return (
    <section className="w-full py-6 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="font-dance text-lg sm:text-xl text-primary/90"
          >
            Art that feels personal. Finishes that look premium.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl text-neutral-900 leading-tight"
          >
            From{" "}
            <AnimatedGradientText className="font-semibold">
              Concept
            </AnimatedGradientText>{" "}
            to{" "}
            <AnimatedGradientText className="font-semibold">
              Wall
            </AnimatedGradientText>{" "}
            — We Handle It All
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 font-poppins text-sm sm:text-base text-neutral-700 leading-relaxed"
          >
            From premium home interiors to large-scale public murals, we create
            wall art that transforms blank spaces into inspiring stories. We
            work with you on theme, colors, and placement — delivering clean
            execution, durable finishes, and a look that fits your space
            perfectly.
          </motion.p>

          {/* ✅ Replaces chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 sm:mt-8"
          >
            <WallArtFlowBeam />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WallArtIntroSection;
