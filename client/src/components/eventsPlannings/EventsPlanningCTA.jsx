import React from "react";
import { Link } from "react-router-dom";

const EventsPlanningCTA = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <img
        src="/assets/wave.svg"
        alt=""
        className="w-full h-69 object-cover object-bottom"
      />

      {/* CTA SECTION */}
      <section className="relative w-full py-20 text-center bg-primary overflow-hidden">
        {/* TEXT CONTENT (AOS) */}
        <div data-aos="fade-up" data-aos-duration="900">
          <h2 className="text-4xl font-yatra font-semibold text-white">
            Plan Your Perfect Event
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-slate-1 ````````````00">
            From weddings to cultural celebrations, we craft thoughtfully designed
            events that reflect your story and create lasting memories.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-primary font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <img
          src="/assets/spiral2.svg"
          alt="spiral background"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="150"
          className="
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[500px] md:w-[320px]
            opacity-60
            pointer-events-none select-none
            invert brightness-0
          "
        />
      </section>

      <img
        src="/assets/wave.svg"
        alt=""
        className="w-full h-69 object-cover object-bottom rotate-180"
      />
    </div>
  );
};

export default EventsPlanningCTA;
