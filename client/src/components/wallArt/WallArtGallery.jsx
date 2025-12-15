import React from "react";

const tiles = [
  { title: "Feature Walls", span: "md:col-span-2 md:row-span-2" },
  { title: "Wall Murals", span: "md:col-span-2" },

  { title: "Traditional Art", span: "md:col-span-1" },
  { title: "Kids’ Rooms", span: "md:col-span-1" },

  { title: "Canvas & Frames", span: "md:col-span-2" },
  { title: "Texture Panels", span: "md:col-span-2" },

  { title: "Wallpaper Designs", span: "md:col-span-4 md:row-span-2" },

  { title: "Office Branding", span: "md:col-span-2" },
  { title: "Residential Spaces", span: "md:col-span-2" },

  { title: "Commercial Spaces", span: "md:col-span-1" },
  { title: "Before & After", span: "md:col-span-1" },

  { title: "Custom Quotes", span: "md:col-span-2" },
  { title: "Creative Concepts", span: "md:col-span-2" },
];

const WallArtBentoGrid = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-dance text-xl text-primary">
            A visual overview of our work
          </p>
          <h2 className="font-yatra text-3xl sm:text-4xl mt-2">
            Wall Art Gallery
          </h2>
          <p className="font-poppins text-sm sm:text-base text-neutral-600 mt-2">
            Murals, textures, wallpapers, and statement walls across spaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[160px] gap-4">
          {tiles.map((tile, idx) => (
            <div
              key={idx}
              className={`
                relative rounded-2xl overflow-hidden
                bg-neutral-900 text-white
                border border-white/10
                shadow-[0_18px_40px_-25px_rgba(0,0,0,0.7)]
                flex items-end p-5
                transition-transform duration-300
                hover:-translate-y-1
                ${tile.span}
              `}
            >
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/70" />

              {/* Content */}
              <h3 className="relative z-10 font-yatra text-lg">
                {tile.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallArtBentoGrid;
