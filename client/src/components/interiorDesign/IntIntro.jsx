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
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          We craft functional and aesthetically pleasing{" "}
          <AnimatedGradientText>interiors</AnimatedGradientText> that reflect your
          lifestyle and purpose.{" "}
          <Highlighter action="underline" color="#c65a2e">
            From concept to completion
          </Highlighter>
          , our designs balance creativity, comfort, and practicality to transform
          spaces into inspiring environments.
        </p>

        {/* Chips as Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mt-8">
          {["Homes", "Offices", "Commercial"].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full border border-secondary text-sm font-medium text-gray-100 bg-secondary transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Video (Online reference) */}
        <div className="mt-12 max-w-4xl mx-auto">
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

          {/* Optional caption */}
          <p className="text-sm text-gray-500 mt-3">
            Preview how we plan, visualize, and execute interiors—from 3D concept to handover.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteriorIntro;
