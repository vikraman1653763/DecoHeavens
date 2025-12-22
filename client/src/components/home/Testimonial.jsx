import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const Testimonials = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      name: "Aarav & Meera",
      title: "Wedding Couple, Chennai",
      content:
        "Deco Heavens made our wedding feel magical. Every detail—from the mandap to the floral arrangements—looked like it came straight out of a dream.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
      name: "Nandini Rao",
      title: "Homeowner, Coimbatore",
      content:
        "Their interior styling completely transformed my home. The mix of traditional charm and modern aesthetics was exactly what I wished for.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=200&auto=format&fit=crop",
      name: "Rahul Sharma",
      title: "Café Owner, Bengaluru",
      content:
        "The wall mural created by Deco Heavens has become the soul of my café. Guests walk in and instantly fall in love with the artwork.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=200&auto=format&fit=crop",
      name: "Sneha Krishnan",
      title: "Event Planner, Hyderabad",
      content:
        "As an event planner, finding reliable partners is rare. Deco Heavens consistently delivers breathtaking, theme-perfect designs on time.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      name: "Priya Menon",
      title: "Mother's 60th Birthday Decor, Kochi",
      content:
        "They added so much warmth and elegance to my mother’s milestone celebration. The décor had a personal touch that brought happy tears.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop",
      name: "Vishal Patel",
      title: "Studio Owner, Mumbai",
      content:
        "Their artistic vision completely elevated my photography studio. The custom backdrop and artistic detailing look phenomenal in every shoot.",
      rating: 4,
    },
  ];

  return (
    <section className="px-4 sm:px-20 xl:px-32 py-16 sm:py-24 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-primary text-3xl sm:text-[42px] font-semibold font-yatra leading-tight">
          Loved by Those We Design For
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto mt-2 text-sm sm:text-base">
          Hear from the couples, homeowners, and brands who trusted Deco Heavens
          to bring their stories to life.
        </p>
      </div>

      {/* ⭐ Velocity Scrolling Cards – ONE ROW */}
      <ScrollVelocityContainer className="w-full py-6 sm:py-10">
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-3 py-2">
            {dummyTestimonialData.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </section>
  );
};

// ⭐ Card Component
const TestimonialCard = ({ testimonial }) => (
  <div
    className="
      shrink-0
      p-5 sm:p-6
      w-64 sm:w-72
      rounded-xl bg-white/80 backdrop-blur-sm
      shadow-lg border border-secondary/40
      hover:shadow-primary/40 hover:-translate-y-1
      transition duration-300 cursor-pointer
      whitespace-normal
    "
  >
    {/* Stars */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="15"
          className={i < testimonial.rating ? "opacity-100" : "opacity-30"}
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
            fill="#83bcb8"
          />
        </svg>
      ))}
    </div>

    <p className="text-slate-600 text-sm my-4 sm:my-5 leading-relaxed wrap-break-word">
      “{testimonial.content}”
    </p>

    <hr className="mb-4 sm:mb-5 border-secondary/30" />

    <div className="flex items-center gap-3 sm:gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-secondary/50"
      />
      <div className="text-sm text-slate-700">
        <h3 className="font-medium leading-tight">{testimonial.name}</h3>
        <p className="text-xs text-secondary">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
