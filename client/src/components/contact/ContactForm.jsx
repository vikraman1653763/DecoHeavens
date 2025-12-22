import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="
        relative overflow-hidden
        flex flex-col items-center text-sm
        px-4 pb-14 md:pb-16
     
      "
    >
      {/* Rotating BG */}
      <img
        src="/assets/spiral2.svg"
        alt="spiral background"
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[360px] sm:w-[500px] md:w-[650px]
          opacity-15
          pointer-events-none select-none
          animate-slow-spin
        "
      />

      {/* Content (keeps above BG) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <p className="text-xs tracking-[0.2em] uppercase text-secondary pb-2">
          Contact Us
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 pb-3 text-center">
          Get in touch with Deco Heavens
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 text-center pb-8 max-w-xl px-1">
          Share your ideas for events, interiors, or wall art, and our team will
          get back with concepts, timelines, and a tailored plan crafted just
          for you.
        </p>

        {/* Top row: Name + Phone */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
          <div className="w-full">
            <label className="text-black/70 text-xs sm:text-sm" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              className="h-11 mt-2 w-full rounded-lg border border-gray-400/30 px-3 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/40 transition bg-white/70"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="w-full">
            <label className="text-black/70 text-xs sm:text-sm" htmlFor="phone">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              className="h-11 mt-2 w-full rounded-lg border border-gray-400/30 px-3 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/40 transition bg-white/70"
              type="tel"
              placeholder="+91-XXXXXXXXXX"
              required
            />
          </div>
        </div>

        {/* Second row: Email + Service Type */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl mt-5">
          <div className="w-full">
            <label className="text-black/70 text-xs sm:text-sm" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              className="h-11 mt-2 w-full rounded-lg border border-gray-400/30 px-3 text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/40 transition bg-white/70"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="w-full">
            <label
              className="text-black/70 text-xs sm:text-sm"
              htmlFor="serviceType"
            >
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              className="h-11 mt-2 w-full rounded-lg border border-gray-400/30 px-3 text-sm bg-white/70 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/40 transition"
              required
            >
              <option value="">Select a service</option>
              <option value="events">Events & Weddings Planning</option>
              <option value="interior">Interior Design</option>
              <option value="wallart">Wall Art & Painting</option>
              <option value="other">Others / Not sure yet</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 w-full max-w-2xl">
          <label className="text-black/70 text-xs sm:text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-2 p-3 h-36 border border-gray-400/30 rounded-lg resize-none outline-none text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/40 transition bg-white/70"
            placeholder="Share details like event date, type of space, style preferences, location, etc."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            mt-6
            relative z-10
            bg-primary text-white
            h-11 w-48
            text-sm font-medium
            rounded-full
            active:scale-95
            hover:bg-primary/90
            transition
          "
          data-aos="slide-up"
          data-aos-delay={30}
        >
          Send Message
        </button>

        <p className="mt-3 text-[11px] text-slate-400 text-center">
          We’ll respond within 24–48 hours via call, WhatsApp, or email.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
