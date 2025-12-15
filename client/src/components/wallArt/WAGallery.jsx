"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================================
   TILE DATA — START
================================= */
const tiles = [
  {
    title: "Feature Walls",
    subtitle: "Bold accents that transform rooms",
    img: "/assets/wa5.webp",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Wall Murals",
    subtitle: "Custom themes & storytelling art",
    img: "/assets/wa6.webp",
    span: "md:col-span-2",
  },
  {
    title: "Traditional Art",
    subtitle: "Heritage-inspired designs",
    img: "https://plus.unsplash.com/premium_photo-1694475155167-4d3b05c8dee3?auto=format&fit=crop&w=1600&q=70",
    span: "md:col-span-1",
  },
  {
    title: "Kids’ Rooms",
    subtitle: "Playful worlds for little ones",
    img: "/assets/wa1.webp",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Canvas & Frames",
    subtitle: "Gallery-style prints & frames",
    img: "/assets/wa2.webp",
    span: "md:col-span-2",
  },
  {
    title: "Texture Panels",
    subtitle: "3D depth and premium texture",
    img: "/assets/wa4.webp",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Wallpaper Designs",
    subtitle: "Modern, minimal & luxury finishes",
    img: "/assets/wa3.webp",
    span: "md:col-start-1 md:col-span-1 md:row-span-3",
  },
  {
    title: "Office Branding",
    subtitle: "Logo walls & statement quotes",
    img: "/assets/wa11.webp",
    span: "md:col-span-1",
  },
  {
    title: "Residential Spaces",
    subtitle: "Homes, villas & apartments",
    img: "/assets/wa5.webp",
    span: "md:col-span-2",
  },
  {
    title: "Commercial Spaces",
    subtitle: "Cafes, studios & retail interiors",
    img: "/assets/wa10.webp",
    span: "md:col-span-1 md:col-start-4 md:row-start-4 md:row-span-2",
  },
  {
    title: "Before & After",
    subtitle: "See the transformation impact",
    img: "/assets/wa9.webp",
    span: "md:col-span-1",
  },
  {
    title: "Custom Quotes",
    subtitle: "Share your wall size & photos",
    img: "/assets/wa7.webp",
    span: "md:col-span-2",
  },
];
/* ================================
   TILE DATA — END
================================= */

/* ================================
   IN-VIEW ANIMATION HELPER
   👉 gives different x/y directions per tile
================================= */
const getInViewOffset = (index) => {
  const offsets = [
    { x: -40, y: 0 }, // left
    { x: 40, y: 0 }, // right
    { x: 0, y: 40 }, // bottom
    { x: 0, y: -40 }, // top
  ];
  return offsets[index % offsets.length];
};

/* ================================
   MODAL — START (Light Theme)
================================= */
const ImageModal = ({ isOpen, onClose, image, title, subtitle }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-white/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-[92%] max-h-[90vh] rounded-2xl overflow-hidden bg-white
                   shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative svg (optional) */}
        <img
          src="/assets/design06.svg"
          alt=""
          className="pointer-events-none absolute -top-24 -left-14 opacity-10 rotate-45 w-[280px] select-none"
          draggable={false}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-slate-200
                     bg-white hover:bg-slate-50 text-slate-700 text-xl
                     flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Image */}
        <div className="bg-neutral-100 flex items-center justify-center">
          <img
            src={image}
            alt={title || "Preview"}
            className="w-full h-[72vh] object-contain bg-white p-2"
            draggable={false}
          />
        </div>

        {/* Caption */}
        <div className="p-5 bg-white border-t border-slate-200">
          {title ? (
            <h3 className="font-yatra text-xl text-slate-900">{title}</h3>
          ) : null}
          {subtitle ? (
            <p className="font-poppins text-sm text-slate-600 mt-1">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
/* ================================
   MODAL — END
================================= */

const WallArtBentoGrid = () => {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <section className="w-full py-20 relative">
      {/* Decorative svgs (optional) */}
      <img
        src="/assets/design06.svg"
        alt=""
        className="pointer-events-none absolute bottom-1/2 translate-y-1/2 left-0 opacity-15 select-none"
        draggable={false}
      />
      <img
        src="/assets/design06.svg"
        alt=""
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 opacity-15 select-none"
        draggable={false}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-dance text-xl text-secondary">
            A visual overview of our work
          </p>

          <h2 className="font-yatra text-3xl sm:text-4xl text-primary mt-2">
            Wall Art Gallery
          </h2>

          <p className="font-poppins text-sm sm:text-base text-neutral-600 mt-2">
            Murals, textures, wallpapers, and statement walls across spaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[160px] gap-4">
          {tiles.map((tile, idx) => {
            const offset = getInViewOffset(idx);

            return (
              <motion.div
                key={idx}
                onClick={() => setActiveTile(tile)}
                initial={{ opacity: 0, x: offset.x, y: offset.y, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.1,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className={`
                  group relative rounded-2xl overflow-hidden
                  border border-black/10
                  shadow-[0_18px_40px_-25px_rgba(0,0,0,0.7)]
                  transition-transform duration-300 hover:-translate-y-1
                  cursor-pointer
                  ${tile.span}
                `}
              >
                {/* Background Image */}
                <img
                  src={tile.img}
                  alt={tile.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />

                {/* Base overlay */}
                <div className="absolute inset-0 bg-black/15" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300" />

                {/* Hover Text */}
                <div
                  className="
                    absolute inset-x-0 bottom-0 p-5
                    translate-y-4 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300
                  "
                >
                  <h3 className="font-yatra text-lg text-white">{tile.title}</h3>
                  {tile.subtitle ? (
                    <p className="font-poppins text-xs sm:text-sm text-white/80 mt-1">
                      {tile.subtitle}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={!!activeTile}
        onClose={() => setActiveTile(null)}
        image={activeTile?.img}
        title={activeTile?.title}
        subtitle={activeTile?.subtitle}
      />
    </section>
  );
};

export default WallArtBentoGrid;
