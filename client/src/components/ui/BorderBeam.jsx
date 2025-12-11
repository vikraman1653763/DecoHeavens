import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BorderBeam = ({
  className,
  size = 200,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 5,
}) => {
  // Make sure offset is always between 0 and 100
  const clampedOffset =
    ((initialOffset % 100) + 100) % 100; // handles negatives too

  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]"
      style={{
        "--border-beam-width": `${borderWidth}px`,
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-linear-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          ...style,
        }}
        initial={{ offsetDistance: `${clampedOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 + clampedOffset}%`, `${clampedOffset}%`]
            : [`${clampedOffset}%`, `${100 + clampedOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay, // ✅ no more negative delay
          ...transition,
        }}
      />
    </div>
  );
};
