import React from "react";
import { BorderBeam } from "./ui/BorderBeam";

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
    <section className="px-4 sm:px-20 xl:px-32 py-20">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,1.2fr] items-center">
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
              className="w-full h-80 md:h-88 object-cover"
            />
          </div>

          {/* Floating Small Image */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-40 rounded-2xl overflow-hidden shadow-lg border border-primary/40 bg-white">
            <img
              src="/assets/id4.webp"
              alt="Mural & decor detail"
              className="w-full h-32 object-cover"
            />
            <div className="px-3 py-2 text-xs text-slate-600">
              Every corner styled with meaning, not just aesthetics.
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="font-yatra text-3xl md:text-4xl text-primary leading-snug">
            Why Choose <span className="text-secondary">Deco Heavens?</span>
          </h2>
          <p className="text-slate-600 mt-3 max-w-full">
            Because your story deserves more than generic decor. We blend
            tradition, artistry, and thoughtful design to create spaces and
            moments that feel deeply personal and unforgettable.
          </p>

          {/* Feature Cards — row, decorated */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="
                  relative rounded-2xl p-px
                  shadow-md hover:shadow-primary/40
                  transition-transform duration-300 hover:-translate-y-1
                "
              >
                  <BorderBeam delay={1000} colorFrom="#fff000" colorTo="red"/>
                  <BorderBeam delay={2000} initialOffset={50}/>

                <div className="h-full flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-4">
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
              </div>
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
