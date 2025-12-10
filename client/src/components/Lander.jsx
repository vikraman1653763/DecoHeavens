import React from "react";
import { SparklesText } from "@/components/ui/sparkles-text"
const Lander = () => {
  return (
    <div>
      <img
        src="/assets/mandala.svg"
        alt="Mandala Decorative"
        className="
        absolute left-1/2 md:left-0 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-72 sm:w-160 opacity-50
        pointer-events-none animate-slow-spin
        "
      />
       

      <section
        className="relative min-h-screen py-20 max-w-7xl mx-auto px-4
      flex flex-col md:flex-row items-center justify-between
      gap-12 md:gap-16"
      >
        {/* Rotating Mandala Background */}

        {/* Left Text Content */}
        <div className="space-y-6 max-w-xl relative z-10">
          <h1 className="font-yatra text-4xl md:text-6xl font-medium tracking-widest  leading-tight text-primary">
            <span> <SparklesText className='inline-block'>Celebrate</SparklesText> Love.</span>
            <br />
            Design <SparklesText className='inline-block'>Living</SparklesText>.
            <br />
           <SparklesText className='inline-block'> Paint</SparklesText> Stories.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-poppins">
            At Deco Heavens, we transform your special moments and spaces into
            unforgettable experiences. Whether you're planning a magical
            wedding, designing your dream home, or looking to elevate your walls
            with stunning art, we bring passion, precision, and creativity to
            every detail.
          </p>

          <p className="text-base text-slate-600 leading-relaxed font-poppins">
            From elegant event planning to personalized interior styling and
            soulful mural artistry — we blend tradition with trend to reflect
            your unique story.
          </p>

<p className="font-yatra text-sm text-secondary  backdrop-blur-md border border-white/10 rounded-4xl text-center p-1">
  Let us bring your vision to life with timeless beauty and unmatched craftsmanship.
</p>




        </div>

        {/* Right: Image Grid */}
        <div className="w-full max-w-lg space-y-4 relative z-10">
            <img
        src="/assets/spiral.svg"
        alt="spiral"
        className="
        absolute right-1 top-1/2
        translate-x-1/2 -translate-y-1/2
        w-74 -z-1
        pointer-events-none 
        "
      />
      <img
        src="/assets/spiral.svg"
        alt="spiral"
        className="
        absolute left-1 md:right-50 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-74 -z-1
        pointer-events-none 
        "
      />
          {/* Top Row: 2 Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/id10.webp"
              alt="Top Left"
              className="w-full h-48 md:h-100 object-cover rounded-2xl shadow-xl"
            />
            <img
              src="/assets/ep2.webp"
              alt="Top Right"
              className="w-full h-48 md:h-100 object-cover rounded-2xl  shadow-xl"
            />
          </div>

          {/* Bottom Row: Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/wa2.webp"
              alt="Bottom Center"
              className="w-3/4 md:w-full h-56 md:h-70 object-cover rounded-2xl  shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lander;
