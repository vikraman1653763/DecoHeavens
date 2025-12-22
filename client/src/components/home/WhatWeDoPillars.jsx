import React from "react";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const WhatWeDoPillars = () => {
  const pillars = [
    {
      title: "Event Planning",
      bullets: [
        "Weddings & cultural celebrations",
        "Theme-based decor & styling",
        "End-to-end coordination",
      ],
      img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=800&auto=format&fit=crop",
      pos: "object-center",
      path: "/events-and-weddings",
    },
    {
      title: "Interior Design",
      bullets: [
        "Residential & commercial spaces",
        "Functional, aesthetic layouts",
        "Customized decor elements",
      ],
      img: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop",
      pos: "object-center",
      path: "/interior-design",
    },
    {
      title: "Wall Art & Murals",
      bullets: [
        "Hand-painted & custom murals",
        "Storytelling through art",
        "Indoor & outdoor walls",
      ],
      img: "https://images.unsplash.com/photo-1642370324100-324b21fab3a9?q=80&w=1200&auto=format&fit=crop",
      pos: "object-center",
      path: "/wall-art",
    },
  ];

  return (
    <section className="w-full my-6 sm:my-10 px-4 md:px-0">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl text-primary font-yatra font-semibold text-center mx-auto">
        What We Do
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        From celebrations to spaces and stories on walls — we design experiences
        that feel personal, meaningful, and timeless.
      </p>

      {/* Cards */}
      <div
        className="
          mt-4 md:mt-12 mx-auto w-full max-w-5xl
          flex gap-4 md:gap-6
          md:items-center
          md:h-[420px]
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory md:snap-none
          pb-2
        "
      >
        {pillars.map((item, i) => (
          <div
            key={i}
            className="
              relative group
              shrink-0 md:shrink
              w-[75%] sm:w-[70%] md:w-56
              h-[260px] sm:h-[400px] md:h-[420px]
              rounded-3xl overflow-hidden
              snap-center
              md:grow md:transition-all md:duration-500 md:hover:w-full
            "
          >
            <img
              className={`h-full w-full object-cover ${item.pos}`}
              src={item.img}
              alt={item.title}
              loading="lazy"
            />

            {/* Overlay: always visible on mobile, hover on desktop */}
            <div
              className="
                absolute inset-0 flex flex-col justify-end
                p-6 sm:p-8 text-white bg-black/55
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-all duration-300
              "
            >
              <h2 className="text-2xl sm:text-3xl font-semibold font-dance text-rose-200">
                {item.title}
              </h2>

              <ul className="text-sm mt-2 space-y-1">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-1 text-nowrap">
                    <IoHeartSharp color="pink" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to={item.path}
                className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-rose-200 px-5 py-2 text-sm font-medium text-black transition hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Optional small helper text only on mobile */}
      <p className="mt-2 text-xs text-slate-400 text-center md:hidden">
        Swipe to explore
      </p>
    </section>
  );
};

export default WhatWeDoPillars;
