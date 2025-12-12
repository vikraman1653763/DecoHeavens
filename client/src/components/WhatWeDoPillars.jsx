import React from "react";
import { IoHeartSharp } from "react-icons/io5";

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
    },
  ];

  return (
    <section className="w-full my-10">
      {/* Heading */}
      <h1 className="text-4xl text-primary font-yatra font-semibold text-center mx-auto">What We Do</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        From celebrations to spaces and stories on walls — we design experiences
        that feel personal, meaningful, and timeless.
      </p>

      {/* Cards */}
      <div className="flex items-center gap-6 h-[420px] w-full max-w-5xl mt-12 mx-auto">
        {pillars.map((item, i) => (
          <div
            key={i}
            className="relative group flex-grow transition-all w-56 h-[420px] duration-500 hover:w-full rounded-3xl overflow-hidden"
          >
            <img
              className={`h-full w-full object-cover ${item.pos}`}
              src={item.img}
              alt={item.title}
              loading="lazy"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-3xl font-semibold font-dance">{item.title}</h2>

              <ul className="text-sm mt-2 space-y-1">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className=" flex items-center gap-1"><IoHeartSharp className=" inline-flex items-center justify-center "/> {b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoPillars;
