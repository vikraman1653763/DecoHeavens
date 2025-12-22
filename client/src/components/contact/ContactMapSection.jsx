import React from "react";

const ContactMapSection = () => {
  return (
    <section
      className="
        px-4 sm:px-8 lg:px-10 pb-16
           bg-linear-to-b
        from-[#e6f0ec] via-[#fffbee] to-[#fff7f3]
      "
    >
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Map container */}
        <div
          className="
            relative z-10
            overflow-hidden w-full
            h-64 sm:h-80 md:h-96
            rounded-2xl border border-slate-200 border-b-0
            rounded-b-none bg-transparent
          "
        >
          <iframe
            title="Deco Heavens Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4703329628265!2d76.966!3d11.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzE4LjAiTiA3NsKwNTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Decorative background (safe on mobile) */}
        <img
          src="/assets/design03.svg"
          alt="decorative background"
          className="
            absolute left-1/2
            top-[120%] sm:top-[135%] md:top-[145%]
            -translate-x-1/2 -translate-y-1/2
            w-[520px] sm:w-[800px] md:w-full
            -z-10
            pointer-events-none select-none
          "
        />
      </div>
    </section>
  );
};

export default ContactMapSection;
