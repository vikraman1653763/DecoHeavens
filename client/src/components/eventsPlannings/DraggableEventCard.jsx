// ✅ File: components/DraggableEventCard.jsx
import React, { useState } from "react";
import { CiRedo } from "react-icons/ci";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableEventCard() {
  const [resetKey, setResetKey] = useState(0);

  const items = [
    {
      title: "Weddings & Receptions",
      image:
        "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-10 left-[18%] rotate-[-6deg]",
    },
    {
      title: "Engagement & Mehendi",
      image:
        "https://images.unsplash.com/photo-1523438097201-512ae7d59b7b?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-40 left-[26%] rotate-[-10deg]",
    },
    {
      title: "Birthday Celebrations",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-6 left-[42%] rotate-[7deg]",
    },
    {
      title: "Corporate Events",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-32 left-[58%] rotate-[10deg]",
    },
    {
      title: "Stage & Floral Decor",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-20 right-[34%] rotate-[3deg]",
    },
    {
      title: "Haldi & Sangeet Nights",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-24 left-[48%] rotate-[-7deg]",
    },
    {
      title: "Venue Styling",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="text-center p-6 z-40">
        <h2 className="text-4xl font-yatra font-semibold text-primary">
          Events Gallery
        </h2>
        <p className="mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-300">
          a glimpse of the celebrations, decor, and experiences we design.
        </p>
      </div>

      <DraggableCardContainer className="relative flex h-200 p-10 w-full items-center justify-center overflow-clip bg-white">
        {/* ✅ BACKGROUND CENTER TEXT + RESET (BEHIND CARDS) */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center px-6">
          <p className="text-sm md:text-6xl font-dance font-extrabold text-black/10 mb-4">
            We plan weddings, birthdays, corporate events, and decor <br />
            want to see them again?
          </p>

          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-105 active:scale-95 transition"
            aria-label="Reset cards"
            title="Reset"
          >
            <CiRedo className="text-2xl" />
          </button>
        </div>

        {/* ✅ PILE WRAPPER: DO NOT CAPTURE POINTER EVENTS */}
        <div className="absolute left-1/2 z-10 -translate-x-[45%] translate-y-1/2 md:translate-y-16 w-full h-full pointer-events-none">
          {items.map((item, index) => (
            <DraggableCardBody
              key={item.title}
              className={`${item.className} pointer-events-auto`} // ✅ cards can drag
              resetKey={resetKey}
              index={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 rounded-md object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-800  font-dance">
                {item.title}
              </h3>
              <p className="mt-1 text-center text-sm text-secondary ">
                Tap & drag to explore
              </p>
            </DraggableCardBody>
          ))}
        </div>
      </DraggableCardContainer>
    </div>
  );
}
