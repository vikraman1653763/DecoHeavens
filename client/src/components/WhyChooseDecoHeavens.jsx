import React from "react";

const WhyChooseDecoHeavens = () => {
  return (
    <section className="px-4 sm:px-20 xl:px-32 py-20">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,1.2fr] items-center">
        {/* Left: Main Image + Tag */}
        <div className="relative">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/30 shadow-sm rounded-full px-4 py-1 text-xs text-slate-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Handcrafted Experiences, From Sketch to Celebration
          </div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-secondary/40">
            <img
              src="/assets/col.png" // change to your own image
              alt="Beautifully decorated event by Deco Heavens"
              className="w-full h-80 md:h-88 object-cover"
            />
          </div>

          {/* Small floating image */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-40 rounded-2xl overflow-hidden shadow-lg border border-primary/40 bg-white">
            <img
              src="/assets/id4.webp" // change to your own image
              alt="Mural & decor detail"
              className="w-full h-32 object-cover"
            />
            <div className="px-3 py-2 text-xs text-slate-600">
              Every corner styled with meaning, not just aesthetics.
            </div>
          </div>
        </div>

        {/* Right: Text + Feature Cards */}
        <div>
          <h2 className="font-yatra text-3xl md:text-4xl text-primary leading-snug">
            Why Choose <span className="text-secondary">Deco Heavens?</span>
          </h2>
          <p className="text-slate-600 mt-3 max-w-xl">
            Because your story deserves more than generic decor. We blend
            tradition, artistry, and thoughtful design to create spaces and
            moments that feel deeply personal and unforgettable.
          </p>

          <div className="mt-8 space-y-4">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start rounded-2xl bg-white/90 border border-secondary/30 p-4 shadow-sm">
              <img
                src="/assets/wa11.webp" // change as needed
                alt="Event styling"
                className="w-16 h-16 object-cover rounded-xl border border-primary/40"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Bespoke Event Styling
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  From intimate functions to grand celebrations, every element —
                  florals, lights, layouts — is planned to match your story,
                  culture, and vision.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start rounded-2xl bg-white/90 border border-secondary/30 p-4 shadow-sm">
              <img
                src="/assets/wa12.webp" // change as needed
                alt="Interior decor"
                className="w-16 h-16 object-cover rounded-xl border border-primary/40"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Soulful Interiors & Spaces
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  We design homes and spaces that feel lived-in, loved, and
                  timeless — balancing functionality with warmth and character.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start rounded-2xl bg-white/90 border border-secondary/30 p-4 shadow-sm">
              <img
                src="/assets/id4.webp" // change as needed
                alt="Wall mural art"
                className="w-16 h-16 object-cover rounded-xl border border-primary/40"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Hand-Painted Murals & Art
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1">
                  Custom murals that tell your story — crafted stroke by stroke,
                  turning walls into canvases of memory and meaning.
                </p>
              </div>
            </div>
          </div>

          {/* Small line under features */}
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
