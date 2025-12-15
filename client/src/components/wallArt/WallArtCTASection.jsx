import React from "react";

const WallArtCTASection = () => {
  return (
    <section className="w-full mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-neutral-900 rounded-2xl overflow-hidden w-full">
          <div className="grid md:grid-cols-2 items-center">
            
            {/* LEFT CONTENT */}
            <div className="p-8 sm:p-10">
              <p className="font-dance text-primary/90 text-lg sm:text-xl">
                Let your walls speak
              </p>

              <h2 className="mt-2 font-yatra sm:text-4xl text-2xl text-white leading-tight">
                Transform Your Space with
                <span className="text-primary"> Custom Wall Art</span>
              </h2>

              <p className="mt-5 font-poppins text-sm text-slate-300 leading-relaxed">
                From personalized home walls to large-scale commercial and public
                art projects, we design and execute wall art that reflects your
                vision, culture, and space.
              </p>

              <p className="mt-2 font-poppins text-sm text-slate-300 leading-relaxed">
                Share your wall photos or ideas — our team will suggest concepts,
                themes, and a clear quote tailored just for you.
              </p>

              <button
                type="button"
                className="px-7 py-3 mt-8 rounded-md text-sm font-poppins font-semibold
                           text-white tracking-wide bg-primary hover:bg-primary/90
                           transition"
              >
                Get a Custom Wall Quote
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Wall art mural"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallArtCTASection;
