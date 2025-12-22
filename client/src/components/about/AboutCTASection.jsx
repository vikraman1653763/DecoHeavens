import React from "react";
import { Link } from "react-router-dom";

const AboutCTASection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
          className="relative rounded-3xl overflow-hidden p-6 sm:p-16 text-center"
        >
          {/* Background SVG */}
          <img
            src="/assets/design05.svg"
            alt="bg"
            className="
              absolute inset-0 z-0 mx-auto
              w-full h-full object-cover
              opacity-70
              pointer-events-none select-none
              -translate-y-2
            "
          />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-4xl font-yatra font-semibold text-secondary leading-tight">
              Let’s create something beautiful together.
            </h3>

            <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Share your vision with us — we’ll turn it into a space or
              celebration that feels personal, meaningful, and timeless.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white text-secondary border border-secondary font-semibold hover:opacity-95 transition"
              >
                Contact
              </Link>

              <Link
                to="/work"
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-secondary text-white font-semibold transition hover:opacity-95"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
