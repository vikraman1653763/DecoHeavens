import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { BiSolidRightArrow,BiSolidLeftArrow } from "react-icons/bi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



const TrandingSlider = ({ slides = [] }) => {
  return (
    <section id="tranding" className="h-full">
      <div className="mx-auto ">
        <div className="relative py-8 w-full mx-auto">
          {/* Custom nav buttons */}
          <button
            className="tranding-prev absolute left-[30%] top-[calc(100%-10px)] z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0px_8px_24px_rgba(18,28,53,0.1)] md:left-[42%]"
            aria-label="Previous slide"
            type="button"
          >
            <BiSolidLeftArrow className="text-xl text-neutral-800" />
          </button>

          <button
            className="tranding-next absolute left-[70%] top-[calc(100%-10px)] z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0px_8px_24px_rgba(18,28,53,0.1)] md:left-[58%]"
            aria-label="Next slide"
            type="button"
          >
            <BiSolidRightArrow className="text-xl text-neutral-800" />
          </button>

          <Swiper
            className=" h-full w-[70vw]"
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true, el: ".tranding-pagination" }}
            navigation={{
              nextEl: ".tranding-next",
              prevEl: ".tranding-prev",
            }}
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx} className="w-auto! max-[500px]:w-md!">
                <div className="h-138 w-138 overflow-hidden rounded-4xl max-[500px]:h-144 max-[500px]:w-md">
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="tranding-pagination mx-auto mt-2 w-60 text-center" />

          <style>{`
            .tranding-pagination .swiper-pagination-bullet {
              box-shadow: 0px 8px 24px rgba(18, 28, 53, 0.1);
            }
            .tranding-pagination .swiper-pagination-bullet-active {
              background: #ec994b;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TrandingSlider;
