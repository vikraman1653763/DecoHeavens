import React from "react";
import { SparklesText } from "@/components/ui/sparkles-text";

const Lander = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Mandala Decorative */}
      <img
        src="/assets/mandala.svg"
        alt="Mandala Decorative"
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-56 sm:w-72 md:w-160
          opacity-50
          pointer-events-none animate-slow-spin
        "
      />

      <section
        className="
          relative min-h-screen
          py-14 md:py-20
          max-w-7xl mx-auto px-4
          flex flex-col md:flex-row items-center justify-between
          gap-10 md:gap-16
        "
      >
        {/* Left Text Content */}
        <div
          className="
            space-y-6 max-w-xl relative z-10
            text-center md:text-left
          "
        >
          <h1 className="font-yatra text-3xl sm:text-4xl md:text-6xl font-medium tracking-widest leading-tight text-primary">
            <SparklesText className="inline-block font-yatra">Celebrate</SparklesText>{" "}
            Love.
            <br />
            Design <SparklesText className="inline-block font-yatra">Living</SparklesText>.
            <br />
            <SparklesText className="inline-block font-yatra"> Paint</SparklesText>{" "}
            Stories.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-poppins px-1 md:px-0">
            From elegant event planning to personalized interior styling and soulful mural
            artistry — we blend tradition with trend to reflect your unique story.
          </p>

          <div className="flex items-center justify-center md:items-start md:justify-start flex-col">
            <p className="font-dance text-lg sm:text-xl text-secondary backdrop-blur-md rounded-2xl text-center md:text-left p-2">
              Let us bring your vision to life with timeless beauty and unmatched craftsmanship.
            </p>

            <div className="w-full flex items-center justify-center h-16 md:h-20 relative">
              <img
                src="/assets/Spirals.svg"
                alt="Spirals"
                className="object-contain w-24 sm:w-30 absolute"
              />
            </div>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="w-full max-w-lg space-y-4 relative z-10">
          {/* Decorative Spirals (kept same on desktop, safer on mobile) */}
          <img
            src="/assets/spiral.svg"
            alt="spiral"
            className="
              absolute right-0 top-1/2
              translate-x-1/3 -translate-y-1/2
              w-44 sm:w-56 md:w-74
              -z-1 pointer-events-none
            "
          />
          <img
            src="/assets/spiral.svg"
            alt="spiral"
            className="
              absolute left-0 top-1/2
              -translate-x-1/3 -translate-y-1/2
              w-44 sm:w-56 md:w-74
              md:left-auto md:right-50
              -z-1 pointer-events-none
            "
          />

          {/* Top Row: 2 Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/assets/id10.webp"
              alt="Top Left"
              className="w-full h-40 sm:h-48 md:h-100 object-cover rounded-2xl shadow-xl"
            />
            <img
              src="/assets/ep2.webp"
              alt="Top Right"
              className="w-full h-40 sm:h-48 md:h-100 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Bottom Row: Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/wa2.webp"
              alt="Bottom Center"
              className="w-full sm:w-3/4 md:w-full h-48 sm:h-56 md:h-70 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lander;
