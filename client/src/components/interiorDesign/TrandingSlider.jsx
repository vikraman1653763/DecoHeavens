import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TrandingSlider = ({ slides = [], initialSlide = 0 }) => {
  // ✅ unique selectors per component instance (prevents multiple sliders conflicting)
  const navId = useMemo(
    () => `tranding-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  return (
    <section id="tranding" className="h-full">
      <div className="mx-auto">
        <div className="relative py-8 w-screen sm:w-full mx-auto ">
          {/* ✅ Custom nav buttons (responsive positioning) */}
          <button
            className={`${navId}-prev absolute left-[22%] sm:left-[30%] md:left-[42%] top-[calc(100%-10px)] z-10 grid h-12 w-12 sm:h-14 sm:w-14 -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0px_8px_24px_rgba(18,28,53,0.1)]`}
            aria-label="Previous slide"
            type="button"
          >
            <BiSolidLeftArrow className="text-lg sm:text-xl text-neutral-800" />
          </button>

          <button
            className={`${navId}-next absolute left-[78%] sm:left-[70%] md:left-[58%] top-[calc(100%-10px)] z-10 grid h-12 w-12 sm:h-14 sm:w-14 -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0px_8px_24px_rgba(18,28,53,0.1)]`}
            aria-label="Next slide"
            type="button"
          >
            <BiSolidRightArrow className="text-lg sm:text-xl text-neutral-800" />
          </button>

          <Swiper
            className="h-full w-full sm:w-[80vw]"
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            initialSlide={initialSlide}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: `.${navId}-pagination`,
            }}
            navigation={{
              nextEl: `.${navId}-next`,
              prevEl: `.${navId}-prev`,
            }}
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx} className="w-60! sm:w-[320px]! md:w-auto!">
                <div className="overflow-hidden rounded-4xl shadow-md">
                  <div className="h-80 w-60 sm:h-[420px] sm:w-[320px] md:h-138 md:w-138">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div
            className={`${navId}-pagination mx-auto mt-2 w-70 text-center`}
          />

          <style>{`
            .${navId}-pagination .swiper-pagination-bullet {
              box-shadow: 0px 8px 24px rgba(18, 28, 53, 0.1);

            }
            .${navId}-pagination .swiper-pagination-bullet-active {
              background: #ec994b;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TrandingSlider;
