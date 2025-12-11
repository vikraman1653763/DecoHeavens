import React from "react";

const ContactHero = () => {
  return (
    <section
      className="
        bg-linear-to-b 
        from-[#fff7f3] via-[#fffbee] to-[#e6f0ec]
        px-3 sm:px-10 
        pt-10 pb-16 
        overflow-hidden
      "
    >
      <main className="grow flex flex-col items-center max-w-6xl mx-auto w-full">
        {/* Small pill CTA */}
        <button
          type="button"
          className="
            mt-10 mb-6
            flex items-center space-x-2
            border border-primary
            text-primary 
            text-[11px] sm:text-xs
            rounded-full 
            px-4 pr-1.5 py-1.5 
            hover:bg-primary/5 
            transition
          "
        >
          <span className="font-medium">
            Tell us about your event, space, or wall.
          </span>
          <span
            className="
              flex items-center justify-center 
              size-6 p-1 
              rounded-full 
              bg-primary
            "
          >
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Heading */}
        <h1
          className="
            text-center 
            text-slate-900 
            font-semibold 
            text-3xl sm:text-4xl md:text-5xl 
            max-w-2xl 
            leading-tight
          "
        >
          Let’s bring your{" "}
          <span className="text-primary">vision to life</span> with
          <span className="text-secondary"> Deco Heavens</span>.
        </h1>

        {/* Subheading */}
        <p
          className="
            mt-4 
            text-center 
            text-slate-600 
            max-w-md 
            text-sm sm:text-base 
            leading-relaxed
          "
        >
          Share your ideas for events, interiors, or wall art, and our team will
          get back with concepts, timelines, and a tailored plan crafted just
          for you.
        </p>

        {/* Primary CTA */}
        <a
          href="#form"
          className="
            mt-8 
            bg-primary 
            text-white 
            px-6 pr-2.5 py-2.5 
            rounded-full 
            text-sm font-medium 
            flex items-center space-x-2 
            hover:bg-primary/90 
            transition
          "
        >
          <span>Share Your Requirements</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Hero image */}
        <img
          className="
            rounded-32px
            mt-14 
            h-64 sm:h-72 
            w-full 
            object-cover 
            max-w-4xl
          "
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
          alt="Clients collaborating and planning with Deco Heavens"
        />
      </main>
    </section>
  );
};

export default ContactHero;
