import React from "react";

const CallToAction = () => {
  return (
    <div className="relative mx-2 md:mx-auto p-px overflow-hidden">
      {/* 🔄 Rotating Spiral BG */}

      <div
        className="relative flex flex-col items-center justify-center text-center 
          py-12 md:py-16 
          bg-linear-to-r from-[#F7FFFD] to-[#FFF7F2] rounded-[15px]
          "
      >
        {/* Badge */}
        <div
          className="flex items-center justify-center bg-white px-3 py-1.5 
            shadow gap-1 rounded-full text-xs border border-primary/20"
        >
          <img
            src="/assets/spiral2.svg"
            alt="spiral background"
            className="
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[500px] md:w-[650px] opacity-25
          pointer-events-none select-none
          animate-slow-spin
        "
          />
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M2.503 10.06a3.3 3.3 0 0 0-.88 1.809 4.7 4.7 0 0 0-.067 1.03v.545h.75q.416-.002.825-.075a3.24 3.24 0 0 0 1.81-.882 1.65 1.65 0 0 0-.131-2.325 1.65 1.65 0 0 0-2.307-.103m1.632 1.621a2.1 2.1 0 0 1-1.182.563h-.206v-.207a2.1 2.1 0 0 1 .563-1.18.34.34 0 0 1 .225-.076.63.63 0 0 1 .44.206.506.506 0 0 1 .16.694m9.6-9.581a.853.853 0 0 0-.835-.835A8.2 8.2 0 0 0 6.816 3.28L5.288 5.062l-2.25-.468a.94.94 0 0 0-.863.253l-.637.637a.94.94 0 0 0-.263.76.94.94 0 0 0 .422.693l1.931 1.238.122.075 3 3.047.075.075 1.238 1.931a.94.94 0 0 0 .693.422h.104a.94.94 0 0 0 .656-.272l.637-.637a.94.94 0 0 0 .253-.863l-.468-2.24 1.725-1.482A8.24 8.24 0 0 0 13.735 2.1M2.915 5.765l1.238.263-.6.703-.937-.628zm5.982 6.657-.628-.938.703-.6.263 1.238zm1.978-5.053-3.45 2.943-2.737-2.737 2.943-3.45a6.98 6.98 0 0 1 4.932-1.688 7 7 0 0 1-1.688 4.932"
              fill="#83bcb8"
            />
            <path
              d="M10.434 6.216a1.116 1.116 0 0 0-.056-1.594 1.086 1.086 0 0 0-1.918.742 1.1 1.1 0 0 0 .38.786 1.125 1.125 0 0 0 1.594.066"
              fill="#83bcb8"
            />
          </svg>

          <span className="text-primary font-medium">
            Trusted by Families & Creators
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-medium mt-3 leading-[1.3] text-slate-700">
          Turn Your Dream Moments Into
          <br />
          <span
            className="bg-linear-to-r from-primary to-secondary 
            bg-clip-text text-transparent font-yatra"
          >
            Art, Beauty & Lasting Memories
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 mt-3 max-w-2xl max-md:text-sm">
          Whether it's a wedding, a home makeover, or a custom mural, Deco
          Heavens brings your story to life with elegance, emotion, and
          unparalleled artistry.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          className="bg-secondary text-white 
            text-sm px-6 py-2.5 rounded-xl font-medium mt-6
            hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
