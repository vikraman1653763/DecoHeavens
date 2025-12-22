import React from "react";
import { useNavigate } from "react-router-dom";

const WallArtCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-neutral-900 rounded-2xl overflow-hidden w-full">
          {/* ✅ MOBILE: image first | DESKTOP: unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* RIGHT IMAGE (mobile first) */}
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Wall art mural"
              className="
                w-full h-[220px] sm:h-80 md:h-full
                object-cover
              "
            />

            {/* LEFT CONTENT */}
            <div
              className="
                p-6 sm:p-8 md:p-10
                text-center md:text-left
              "
            >
              <p className="font-dance text-primary/90 text-lg sm:text-xl">
                Let your walls speak
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                Transform Your <span className="font-yatra">Space</span> with
                <span className="text-primary"> Custom Wall Art</span>
              </h2>

              <p className="mt-5 font-poppins text-sm text-slate-300 leading-relaxed">
                From personalized home walls to large-scale commercial and
                public art projects, we design and execute wall art that
                reflects your vision, culture, and space.
              </p>

              <p className="mt-2 font-poppins text-sm text-slate-300 leading-relaxed">
                Share your wall photos or ideas — our team will suggest
                concepts, themes, and a clear quote tailored just for you.
              </p>

              {/* ✅ MOBILE: full width button */}
              <button
                onClick={() => navigate("/contact")}
                type="button"
                className="
                  mt-8 px-7 py-3 rounded-md
                  w-fit sm:w-auto
                  text-sm font-poppins font-semibold
                  text-white tracking-wide
                  bg-primary hover:bg-primary/90
                  transition
                "
              >
                Get a Custom Wall Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallArtCTASection;
