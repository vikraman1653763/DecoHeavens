import React from "react";
import { Link } from "react-router-dom";

const EventsPlanningCTA = () => {
  return (
    <section className="w-full py-20 bg-neutral-50 text-center">
      <h2 className="text-4xl font-yatra font-semibold text-primary">
        Plan Your Perfect Event
      </h2>

      <p className="mt-3 max-w-xl mx-auto text-slate-600">
        From weddings to cultural celebrations, we craft thoughtfully designed
        events that reflect your story and create lasting memories.
      </p>

      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default EventsPlanningCTA;
