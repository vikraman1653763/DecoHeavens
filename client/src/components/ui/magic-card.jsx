import React, { useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#ff9ce8",
  gradientOpacity = 0.5,
  gradientFrom = "#ffaa40",
  gradientTo = "#afbab2",

  // ✅ New background gradient controls
  bgGradientFrom = "white",
  bgGradientTo = "white",
  bgGradientSize = 30,
}) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handlePointerMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const handleGlobalPointerOut = (e) => {
      if (!e.relatedTarget) reset();
    };

    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset();
    };

    window.addEventListener("pointerout", handleGlobalPointerOut);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reset]);

  // ✅ IMPORTANT: call useMotionTemplate ONCE here (top-level), not inside JSX
  const borderBg = useMotionTemplate`
    radial-gradient(
      ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      var(--border) 100%
    )
  `;

  const baseBg = useMotionTemplate`
    radial-gradient(
      ${bgGradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${bgGradientFrom},
      ${bgGradientTo} 70%
    )
  `;

  const glowBg = useMotionTemplate`
    radial-gradient(
      ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor},
      transparent 100%
    )
  `;

  return (
    <div
      className={cn("group shadow-md relative rounded-[inherit]", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerEnter={reset}
    >
      {/* Border gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] duration-300"
        style={{ background: borderBg }}
      />

      {/* Base background (solid) */}
      <div className="absolute inset-px rounded-[inherit] bg-background" />

      {/* ✅ NEW: subtle background radial gradient */}
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit]"
        style={{ background: baseBg }}
      />

      {/* Hover glow */}
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBg, opacity: gradientOpacity }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
