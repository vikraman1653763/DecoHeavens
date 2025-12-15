import React, { useEffect, useRef, useState } from "react";
import "@/components/css/CarouselSlider.css";
import { ArrowLeft3, ArrowRight3 } from "iconsax-reactjs";

const CarouselSlider = () => {
  const slideRef = useRef(null);

  // Track which URLs are allowed to load (lazy)
  const [loadedMap, setLoadedMap] = useState({});

  const slides = [
    {
      bg: "https://plus.unsplash.com/premium_photo-1706375750361-0760b9a10b05?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Modern Serenity",
      des: "A contemporary wall art design that brings calm, balance, and visual depth to modern living spaces, creating an atmosphere of quiet sophistication.",
    },
    {
      bg: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nature’s Canvas",
      des: "Inspired by organic landscapes, this wall art adds warmth and natural flow to interiors, making it ideal for feature walls and calm environments.",
    },
    {
      bg: "https://images.unsplash.com/photo-1589669525478-0090c61760e7?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Minimal Horizon",
      des: "A minimalist wall art composition designed for modern homes and workspaces, offering clean lines, subtle tones, and timeless appeal.",
    },
    {
      bg: "https://plus.unsplash.com/premium_photo-1705835519832-a2cff501427e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Abstract Harmony",
      des: "A premium abstract wall art piece crafted to make a bold visual statement while maintaining artistic balance and modern elegance.",
    },
    {
      bg: "/assets/wa11.webp",
      name: "Timeless Texture",
      des: "Textured wall art that blends classic inspiration with modern design sensibilities, adding depth and character to refined interiors.",
    },
    {
      bg: "/assets/wa7.webp",
      name: "Urban Elegance",
      des: "A sophisticated wall art selection curated for contemporary urban spaces, enhancing apartments and studios with subtle luxury.",
    },
    {
      bg: "/assets/wa2.webp",
      name: "Artistic Expression",
      des: "Expressive forms and rich tones come together in this modern wall art, designed to elevate spaces with creative personality.",
    },
  ];

  // ✅ Preload the first 2 slides immediately (so hero looks perfect)
  useEffect(() => {
    const firstTwo = slides.slice(0, 2).map((s) => s.bg);
    firstTwo.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedMap((prev) => ({ ...prev, [url]: true }));
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Lazy-load the rest using IntersectionObserver
  useEffect(() => {
    const container = slideRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll(".wall-art-item"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const url = entry.target.getAttribute("data-bg");
          if (!url) return;

          // already loaded?
          if (loadedMap[url]) {
            io.unobserve(entry.target);
            return;
          }

          // preload image then mark as loaded
          const img = new Image();
          img.src = url;
          img.onload = () => {
            setLoadedMap((prev) => ({ ...prev, [url]: true }));
            io.unobserve(entry.target);
          };
          img.onerror = () => {
            // stop retry loop if error
            io.unobserve(entry.target);
          };
        });
      },
      {
        root: null,
        // start loading a bit before it becomes visible
        rootMargin: "300px",
        threshold: 0.01,
      }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [loadedMap]);

  const handleNext = () => {
    const slide = slideRef.current;
    if (!slide) return;

    const items = slide.querySelectorAll(".wall-art-item");
    if (!items.length) return;

    slide.appendChild(items[0]);

    // ensure newly shown ones are loaded quickly
    const visible = slide.querySelectorAll(".wall-art-item");
    for (let i = 0; i < Math.min(5, visible.length); i++) {
      const url = visible[i].getAttribute("data-bg");
      if (url && !loadedMap[url]) {
        const img = new Image();
        img.src = url;
        img.onload = () => setLoadedMap((prev) => ({ ...prev, [url]: true }));
      }
    }
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    if (!slide) return;

    const items = slide.querySelectorAll(".wall-art-item");
    if (!items.length) return;

    slide.prepend(items[items.length - 1]);

    const visible = slide.querySelectorAll(".wall-art-item");
    for (let i = 0; i < Math.min(5, visible.length); i++) {
      const url = visible[i].getAttribute("data-bg");
      if (url && !loadedMap[url]) {
        const img = new Image();
        img.src = url;
        img.onload = () => setLoadedMap((prev) => ({ ...prev, [url]: true }));
      }
    }
  };

  return (
    <section className="wall-art-body w-full min-h-screen bg-[#eaeaea] overflow-hidden flex items-center justify-center relative">
      <div className="wall-art-container relative w-screen h-screen bg-[#f5f5f5] shadow-[0_30px_50px_#dbdbdb]">
        <div
          id="wall-art-slide"
          ref={slideRef}
          className="wall-art-slide relative w-full h-full"
        >
          {slides.map((s, idx) => {
            const isLoaded = !!loadedMap[s.bg];

            return (
              <div
                key={idx}
                data-bg={s.bg}
                className="
                  wall-art-item
                  w-[200px] h-[300px]
                  bg-cover bg-center
                  transition-all duration-500
                  absolute top-1/2 -translate-y-1/2
                  rounded-[20px]
                  shadow-[0_30px_50px_#505050]
                "
                style={{
                  backgroundImage: isLoaded ? `url(${s.bg})` : "none",
                }}
              >
                {/* placeholder layer until loaded */}
                <div
                  className={`
                    absolute inset-0 rounded-[inherit]
                    ${isLoaded ? "opacity-0" : "opacity-100"}
                    transition-opacity duration-500
                    bg-linear-to-br from-gray-200/40 to-gray-400/20
                  `}
                />

                {/* fade-in layer for bg once loaded */}
                <div
                  className={`
                    absolute inset-0 rounded-[inherit]
                    ${isLoaded ? "opacity-100" : "opacity-0"}
                    transition-opacity duration-500
                  `}
                  style={{
                    backgroundImage: isLoaded ? `url(${s.bg})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* content stays above bg layers */}
                <div
                  className="
                    wall-art-content
                    absolute top-1/2 left-[300px] -translate-y-1/2
                    w-[500px] text-left
                    text-white
                    hidden
                    z-5
                    
                  "
                >
                  <div className="wall-art-name text-6xl text-primary font-bold opacity-0 font-dance">
                    {s.name}
                  </div>
                  <div className="wall-art-des my-5 opacity-0 text-slate-700">
                    {s.des}
                  </div>
                  <button
                    type="button"
                    className="wall-art-btn px-5 py-2 border-0 opacity-0 bg-primary text-white rounded-md"
                  >
                    See more
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="wall-art-buttons absolute bottom-[30px] left-0 w-full text-center z-10">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous"
              className="w-[30px] h-[30px] rounded-full border border-white transition-all duration-500 hover:bg-gray-200/30 grid place-items-center"
            >
              <ArrowLeft3 size="24" color="white" variant="Broken" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next"
              className="w-[30px] h-[30px] rounded-full border border-white transition-all duration-500 hover:bg-gray-200/30 grid place-items-center"
            >
              <ArrowRight3 size="24" color="white" variant="Broken" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlider;
