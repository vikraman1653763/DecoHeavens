"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiPaintBrushBroadFill } from "react-icons/pi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AnimatedBeam } from "../ui/animated-beam";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";

/* ---------- Circle ---------- */
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-18 items-center justify-center rounded-full",
        "border border-slate-300/30 bg-white shadow-sm",
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
    <div className="mt-8 flex flex-col items-center justify-center">
      {/* Labels */}
      <div className="flex w-full max-w-[620px]  justify-between px-1 text-xl text-neutral-700 ">
        <span className="w-12 text-center font-dance text-[#FF8A3D]">Concept</span>
        <span className="w-12 text-center font-dance text-[#3FA9F5]">Create</span>
        <span className="w-12 text-center font-dance text-[#F4C430]">Refine</span>
        <span className="w-12 text-center font-dance text-[#2ECC71]">Deliver</span>
      </div>

      {/* Flow */}
      <div
        ref={containerRef}
        className="relative flex w-full max-w-[620px] items-center justify-center overflow-hidden py-6"
      >
        <div className="flex w-full justify-between ">
          {/* Concept */}
          <Circle ref={conceptRef}>
            <HiOutlineSparkles className="text-4xl text-[#FF8A3D]" />
          </Circle>

          {/* Create */}
          <Circle ref={createRef}>
            <FaRegHandshake className="text-4xl text-[#3FA9F5]" />
          </Circle>

          {/* Refine */}
          <Circle ref={refineRef}>
            <PiPaintBrushBroadFill  className="text-4xl text-[#F4C430]" />
          </Circle>

          {/* Deliver */}
          <Circle ref={deliverRef}>
            <BsFillPatchCheckFill className="text-4xl text-[#2ECC71]" />
          </Circle>
        </div>

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
          pathWidth={2.4}
          curvature={40}
        />

        {/* Beam: Create → Refine */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={createRef}
          toRef={refineRef}
          duration={2.6}
          delay={0.2}
          pathColor="#e2e8f0 "
          pathOpacity={0.35}
          gradientStartColor="#F4C430"
          gradientStopColor="#3FA9F5"
          pathWidth={2.4}
          curvature={-40}
          />

        {/* Beam: Refine → Deliver */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={refineRef}
          toRef={deliverRef}
          duration={2.6}
          delay={0.4}
          pathColor="#e2e8f0 "
          pathOpacity={0.35}
          gradientStartColor="#2ECC71"
          gradientStopColor="#F4C430"
          pathWidth={2.4}
          curvature={40}
        />
      </div>
    </div>
  );
};

export default WallArtFlowBeam;
