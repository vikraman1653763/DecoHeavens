"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AnimatedBeam } from "../ui/animated-beam";
import { FaRegHandshake } from "react-icons/fa6";

/* ---------- Circle ---------- */
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // ✅ responsive size + icon alignment
        "z-10 flex items-center justify-center rounded-full",
        "border border-slate-300/30 bg-white shadow-sm",
        "size-12 sm:size-14 md:size-18",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

/* ---------- Component ---------- */
const WallArtFlowBeam = () => {
  const containerRef = useRef(null);

  const conceptRef = useRef(null);
  const createRef = useRef(null);
  const refineRef = useRef(null);
  const deliverRef = useRef(null);

  return (
    <div className="mt-3 sm:mt-8 flex flex-col items-center justify-center px-4 sm:px-0">
      {/* ✅ Labels (responsive) */}
      <div className="flex w-full max-w-[620px] justify-between px-1 text-neutral-700">
        <span className="w-14 sm:w-16 text-center font-dance text-[#ff6b35] text-sm sm:text-base md:text-xl">
          Concept
        </span>
        <span className="w-14 sm:w-16 text-center font-dance text-[#3FA9F5] text-sm sm:text-base md:text-xl">
          Create
        </span>
        <span className="w-14 sm:w-16 text-center font-dance text-[#F4C430] text-sm sm:text-base md:text-xl">
          Refine
        </span>
        <span className="w-14 sm:w-16 text-center font-dance text-[#2ECC71] text-sm sm:text-base md:text-xl">
          Deliver
        </span>
      </div>

      {/* ✅ Flow (responsive spacing + height) */}
      <div
        ref={containerRef}
        className={cn(
          "relative flex w-full max-w-[620px] items-center justify-center overflow-hidden",
          "py-4 sm:py-6"
        )}
      >
        <div className="flex w-full justify-between gap-2 sm:gap-0">
          {/* Concept */}
          <Circle ref={conceptRef}>
            <HiOutlineSparkles className="text-2xl sm:text-3xl md:text-4xl text-[#ff6b35]" />
          </Circle>

          {/* Create */}
          <Circle ref={createRef}>
            <FaRegHandshake className="text-2xl sm:text-3xl md:text-4xl text-[#3FA9F5]" />
          </Circle>

          {/* Refine */}
          <Circle ref={refineRef}>
            <PiPaintBrushBroadFill className="text-2xl sm:text-3xl md:text-4xl text-[#F4C430]" />
          </Circle>

          {/* Deliver */}
          <Circle ref={deliverRef}>
            <BsFillPatchCheckFill className="text-2xl sm:text-3xl md:text-4xl text-[#2ECC71]" />
          </Circle>
        </div>

        {/* ✅ Mobile-friendly beam tuning:
            - thinner width on mobile
            - smaller curvature on mobile to avoid “too tall arcs”
        */}

        {/* Beam: Concept → Create */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={conceptRef}
          toRef={createRef}
          duration={2.6}
          pathColor="#e2e8f0"
          pathOpacity={0.35}
          gradientStartColor="#3FA9F5"
          gradientStopColor="#FF8A3D"
          pathWidth={1.8} // ✅ thinner for mobile
          curvature={24} // ✅ smaller curve for mobile
        />

        {/* Beam: Create → Refine */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={createRef}
          toRef={refineRef}
          duration={2.6}
          delay={0.2}
          pathColor="#e2e8f0"
          pathOpacity={0.35}
          gradientStartColor="#F4C430"
          gradientStopColor="#3FA9F5"
          pathWidth={1.8}
          curvature={-24}
        />

        {/* Beam: Refine → Deliver */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={refineRef}
          toRef={deliverRef}
          duration={2.6}
          delay={0.4}
          pathColor="#e2e8f0"
          pathOpacity={0.35}
          gradientStartColor="#2ECC71"
          gradientStopColor="#F4C430"
          pathWidth={1.8}
          curvature={24}
        />
      </div>
    </div>
  );
};

export default WallArtFlowBeam;
