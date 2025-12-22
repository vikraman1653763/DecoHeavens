import React from "react";
import { BorderBeam } from "../ui/BorderBeam";
import { motion } from "framer-motion";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

const WhyChooseDecoHeavens = () => {
  const features = [
    {
      img: "/assets/id6.webp",
      title: "Bespoke Event Styling",
      desc: "From intimate functions to grand celebrations, every element — florals, lights, layouts — is planned to match your story, culture, and vision.",
    },
    {
      img: "/assets/wa12.webp",
      title: "Soulful Interiors & Spaces",
      desc: "We design homes and spaces that feel lived-in, loved, and timeless — balancing functionality with warmth and character.",
    },
    {
      img: "/assets/wa4.webp",
      title: "Hand-Painted Murals & Art",
      desc: "Custom murals that tell your story — crafted stroke by stroke, turning walls into canvases of memory and meaning.",
    },
  ];

  return (
    <section className="px-4 sm:px-20 xl:px-32 py-6 md:py-20 relative overflow-hidden">
      {/* Background design (safe on mobile) */}
      <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 flex flex-row opacity-20 pointer-events-none select-none">
        <img
          src="/assets/design.svg"
          alt=""
          className="object-cover w-[520px] sm:w-[700px] md:w-auto"
        />
        <img
          src="/assets/design.svg"
          alt=""
          className="object-cover w-[520px] sm:w-[700px] md:w-auto"
        />
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,1.2fr] items-center relative z-10">
        {/* Left Section */}
        <div className="relative">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/30 shadow-sm rounded-full px-4 py-1 text-xs text-slate-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Handcrafted Experiences, From Sketch to Celebration
          </div>

          {/* Main Large Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-secondary/40">
            <img
              src="/assets/col.png"
              alt="Beautifully decorated event by Deco Heavens"
              className="w-full h-35 sm:h-80 md:h-88 sm:object-cover"
            />
          </div>

          {/* Desktop: floating small image (unchanged) */}
          <div className="block absolute -bottom-10 sm:-bottom-6 right-0 sm:-right-6 w-20 sm:w-40  rounded-2xl overflow-hidden shadow-lg border border-primary/40 bg-white">
            <img
              src="/assets/id4.webp"
              alt="Mural & decor detail"
              className="w-full h-15 sm:h-32 object-cover"
            />
            <div className="p-1 sm:px-3 sm:py-2 text-[7px] sm:text-xs text-slate-600">
              Every corner styled with meaning, not just aesthetics.
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h2 className="font-yatra text-2xl md:text-4xl text-primary leading-snug">
            Why Choose{" "}
            <AnimatedGradientText
              speed={1}
              colorFrom="#f9a8d4"
              colorTo="#9db7a4"
              className="text-4xl font-semibold tracking-tight font-dance"
            >
              Deco Heavens?
            </AnimatedGradientText>
          </h2>

          <p className="text-slate-600 mt-3 max-w-full text-justify sm:text-left">
            Because your story deserves more than generic decor. We blend
            tradition, artistry, and thoughtful design to create spaces and
            moments that feel deeply personal and unforgettable.
          </p>

          {/* Feature Cards */}
          <div className="mt-4 sm:mt-8 grid gap-4  md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="
                  relative rounded-2xl p-px
                  shadow-md hover:shadow-primary/40
                  transition-transform duration-300 hover:-translate-y-1
                "
              >
                <BorderBeam
                  initialOffset={0}
                  reverse
                  colorFrom="#D9A7FF"
                  colorTo="#FECFEF"
                />
                <BorderBeam
                  initialOffset={50}
                  reverse
                  colorFrom="#D9A7FF"
                  colorTo="#FECFEF"
                />

                <div className="h-full flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-2  sm:p-4 text-left">
                  <div className="overflow-hidden rounded-xl border border-primary/20 mb-3">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-32 md:h-36 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-xs md:text-sm text-slate-500">
            From the first sketch to the final candle lit, we’re with you in
            every detail — so you can simply arrive and feel at home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDecoHeavens;
