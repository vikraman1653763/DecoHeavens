import React, { useMemo, useState } from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { Highlighter } from "../ui/highlighter";

const InteriorIntro = () => {
  const chipItems = useMemo(
    () => [
      { id: "homes", label: "Homes" },
      { id: "offices", label: "Offices" },
      { id: "commercial", label: "Commercial" },
    ],
    []
  );

  const [activeChip, setActiveChip] = useState("homes");

  return (
    <section className="w-full py-6 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          We craft functional and aesthetically pleasing{" "}
          <AnimatedGradientText>interiors</AnimatedGradientText> that reflect your
          lifestyle and purpose.{" "}
          <Highlighter action="underline" color="#c65a2e">
            From concept to completion
          </Highlighter>
          , our designs balance creativity, comfort, and practicality to transform
          spaces into inspiring environments.
        </p>

        {/* Chips as Buttons (clickable + responsive) */}
        <div className="mt-8">
          {/* ✅ mobile: horizontal scroll | md+: centered wrap */}
          <div
            className="
              flex gap-3
              overflow-x-auto md:overflow-visible
              md:justify-center md:flex-wrap
              px-1 -mx-1
              pb-2
              scrollbar-hide
            "
          >
            {chipItems.map((chip) => {
              const isActive = chip.id === activeChip;

              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveChip(chip.id)}
                  className={[
                    "shrink-0 whitespace-nowrap",
                    "px-5 py-2 rounded-full text-sm font-medium transition",
                    "border",
                    isActive
                      ? "bg-secondary text-white border-secondary"
                      : "bg-white text-gray-700 border-gray-200 hover:border-secondary/60 hover:text-gray-900",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video */}
        <div className="mt-10 md:mt-12 max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* 16:9 aspect ratio */}
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/3jZ5vnv-LZc?rel=0&modestbranding=1"
              title="Interior Design Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-sm text-gray-500 mt-3 px-2">
            Preview how we plan, visualize, and execute interiors—from 3D concept to handover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteriorIntro;
