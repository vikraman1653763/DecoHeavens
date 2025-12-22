import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  IoHeart,
  IoColorPalette,
  IoCalendar,
  IoPeople,
  IoSparkles,
} from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const WhyChooseUsEventsTabs = () => {
const steps = useMemo(
  () => [
    {
      label: "Planning",
      title: "Personalized Planning",
      desc: "We begin by understanding your vision, traditions, and expectations to design an event that truly reflects you.",
      icon: IoHeart,
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      label: "Design",
      title: "Creative Design Approach",
      desc: "Our team develops themes, layouts, and decor concepts that blend aesthetics with meaningful storytelling.",
      icon: IoColorPalette,
      img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      label: "Coordination",
      title: "Seamless Coordination",
      desc: "We manage timelines, logistics, and vendors so everything runs smoothly without last-minute stress.",
      icon: IoCalendar,
      img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      label: "Team",
      title: "Trusted Team & Vendors",
      desc: "With an experienced team and reliable vendor network, we ensure quality, consistency, and professionalism.",
      icon: IoPeople,
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      label: "Execution",
      title: "Flawless Event Execution",
      desc: "On the big day, we handle every detail behind the scenes — so you can be fully present and enjoy every moment.",
      icon: IoSparkles,
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  []
);


  const [active, setActive] = useState(0);
  const CurrentIcon = steps[active].icon;

  // ✅ horizontal scroll helper (mobile)
  const tabsRef = useRef(null);

  useEffect(() => {
    const root = tabsRef.current;
    if (!root) return;

    // scroll the active pill into view on mobile
    const activeEl = root.querySelector('[data-active="true"]');
    if (activeEl && window.innerWidth < 768) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 sm:px-5 py-16 md:py-24 mx-auto flex flex-wrap flex-col">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-yatra font-semibold text-primary">
            Why Choose Us
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            A clear process, creative design, and seamless execution — so your
            celebration feels effortless and memorable.
          </p>
        </div>

        {/* ✅ Tabs (Mobile: horizontal scroll pills | md+: centered row) */}
        <div className="mb-10 md:mb-14 w-full">
          <div
            ref={tabsRef}
            className="
              relative
              flex items-center gap-2
              overflow-x-scroll
              whitespace-nowrap
              scroll-smooth
              snap-x snap-mandatory
              pb-2
              -mx-4 px-4

              md:overflow-visible md:whitespace-normal md:snap-none
              md:justify-center md:gap-0 md:mx-auto md:px-0
            "
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none", // firefox
            }}
          >
            {/* hide scrollbar (webkit) */}
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;

              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(i)}
                  data-active={isActive}
                  className={[
                    "hide-scrollbar",
                    // ✅ mobile pill
                    "shrink-0 snap-center",
                    "px-4 sm:px-6 py-3",
                    "rounded-full md:rounded-t",
                    "inline-flex items-center gap-2",
                    "text-sm sm:text-base",
                    "transition",
                    // ✅ desktop underline look (your original vibe)
                    "md:rounded-t md:rounded-b-none",
                    "md:border-b-2 md:tracking-wider md:title-font md:font-medium",
                    isActive
                      ? "bg-gray-100 md:bg-transparent border-secondary text-secondary md:text-secondary"
                      : "bg-white/60 md:bg-transparent border-gray-200 hover:text-gray-900",
                  ].join(" ")}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* ✅ optional: tiny hint for mobile */}
          <p className="mt-2 text-xs text-slate-500 text-center md:hidden">
            Swipe to view steps →
          </p>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center mb-8 md:mb-10">
          <div className="relative w-full max-w-md sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 aspect-6/5 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={steps[active].img}
                src={steps[active].img}
                alt={steps[active].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0, x: 14, scale: 0.98, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -12, scale: 0.98, filter: "blur(6px)" }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col text-center w-full">
          <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
            <CurrentIcon className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-medium title-font mb-3 text-gray-900">
            {steps[active].title}
          </h3>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-sm sm:text-base">
            {steps[active].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsEventsTabs;
