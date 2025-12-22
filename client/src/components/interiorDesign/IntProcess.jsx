import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const InteriorProcess = () => {
  const steps = useMemo(
    () => [
      {
        key: "step1",
        label: "STEP 1",
        title: "Requirement & Moodboarding",
        desc: "We understand your space, style, needs, and collect references to lock the direction.",
        image:
          "https://plus.unsplash.com/premium_photo-1683122048062-a72f36c7b34f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
      {
        key: "step2",
        label: "STEP 2",
        title: "Layout & 3D Concept",
        desc: "We create layout options and 3D views to visualize the complete look before execution.",
        image:
          "https://images.unsplash.com/photo-1758524943162-2e7cea927354?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
      {
        key: "step3",
        label: "STEP 3",
        title: "Material Selection & Budget",
        desc: "We finalize materials, finishes, and cost options to match your budget and durability needs.",
        image:
          "https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="5" r="3" />
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
          </svg>
        ),
      },
      {
        key: "step4",
        label: "STEP 4",
        title: "Execution, Final Reveal & Handover",
        desc: "Complete turnkey execution followed by final styling, quality checks, walkthrough, and smooth handover of your finished space.",
        image:
          "https://plus.unsplash.com/premium_photo-1721680901207-e3bc0895b150?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        ),
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // ✅ Auto step change (pauses while user interacts)
  const restartAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % steps.length);
    }, 3500);
  };

  useEffect(() => {
    restartAuto();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps.length]);

  const activeStep = steps[activeIndex];

  // Framer variants (on-view + stagger)
  const sectionV = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const lineV = {
    hidden: { scaleY: 0, opacity: 0 },
    show: { scaleY: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const iconV = {
    hidden: { opacity: 0, scale: 0.85, rotate: -6 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.45 } },
  };

  const textV = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const imageV = {
    hidden: { opacity: 0, scale: 1.02 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="text-gray-600 body-font font-poppins"
      variants={sectionV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container px-5 py-6 sm:py-10 mx-auto flex flex-wrap">
          <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-dance text-gray-900">
            Our Design & Execution Process
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-lg leading-relaxed">
            A clear, transparent, and well-structured approach — guiding your space
            from initial idea to final handover with precision and care.
          </p>
        </div>

        <div className="flex flex-wrap w-full">
          {/* ✅ Left: Steps (desktop same) | ✅ Mobile: horizontal scroll tabs */}
          <motion.div
            className="w-full lg:w-2/5 md:w-1/2 md:pr-10 md:py-6"
            variants={fadeUp}
          >
            {/* ✅ Mobile tabs */}
            <div className="md:hidden mb-6">
              <div className="flex gap-3 sm:gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {steps.map((step, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={step.key}
                      type="button"
                      onClick={() => {
                        setActiveIndex(idx);
                        restartAuto();
                      }}
                      className={[
                        "shrink-0 whitespace-nowrap",
                        "sm:px-4 sm:py-2 px-2 py-1 rounded-full text-sm font-medium border transition",
                        "flex items-center gap-2",
                        isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-200",
                      ].join(" ")}
                    >
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/10">
                        {step.icon}
                      </span>
                      {step.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ✅ Desktop list (your same layout) */}
            <div className="hidden md:block">
              {steps.map((step, idx) => {
                const isActive = idx === activeIndex;
                const isLast = idx === steps.length - 1;

                return (
                  <motion.button
                    key={step.key}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      restartAuto();
                    }}
                    variants={fadeUp}
                    className={[
                      "w-full text-left flex relative",
                      !isLast ? "pb-3" : "",
                      "group focus:outline-none",
                    ].join(" ")}
                  >
                    {/* Vertical line */}
                    {!isLast && (
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="h-full w-1 bg-gray-200 pointer-events-none origin-top"
                          variants={lineV}
                        />
                      </div>
                    )}

                    {/* Icon bubble */}
                    <motion.div
                      variants={iconV}
                      className={[
                        "shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10 transition",
                        isActive ? "bg-primary" : "bg-secondary",
                      ].join(" ")}
                      aria-hidden="true"
                      title={step.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="grow pl-4">
                      <motion.h2
                        variants={textV}
                        className={[
                          "font-medium title-font text-sm mb-1 tracking-wider transition",
                          isActive ? "text-primary" : "text-gray-900",
                        ].join(" ")}
                      >
                        {step.label}
                      </motion.h2>

                      <motion.p
                        variants={textV}
                        className={[
                          "leading-relaxed transition",
                          isActive ? "text-gray-800" : "text-gray-600",
                        ].join(" ")}
                      >
                        <motion.span
                          variants={textV}
                          className="font-medium text-gray-900 font-dance text-2xl"
                        >
                          {step.title}
                        </motion.span>
                        <motion.span variants={textV} className="block mt-1">
                          {step.desc}
                        </motion.span>
                      </motion.p>

                      {/* Active indicator */}
                      <motion.div
                        className={[
                          "mt-3 h-0.5 bg-primary",
                          "transition-all duration-300",
                          isActive ? "w-24" : "w-0",
                          "group-hover:w-24",
                        ].join(" ")}
                        initial={false}
                        animate={{ width: isActive ? 96 : 0 }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* ✅ Right: Image changes with step */}
          <motion.div
            className="w-full lg:w-3/5 md:w-1/2 md:mt-0 mt-8 md:mt-12"
            variants={fadeUp}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-secondary/40 shadow-sm"
              variants={fadeUp}
            >
              <motion.img
                key={activeStep.key}
                variants={imageV}
                initial="hidden"
                animate="show"
                className="w-full h-[320px] sm:h-[380px] md:h-[520px] object-cover object-center"
                src={activeStep.image}
                alt={activeStep.title}
                loading="lazy"
              />

              {/* Label overlay */}
              <motion.div className="absolute left-4 bottom-4" variants={fadeUp}>
                <motion.div
                  className="bg-white/90 backdrop-blur px-4 py-3 rounded-xl border border-secondary/40"
                  variants={fadeUp}
                >
                  <motion.p
                    variants={textV}
                    className="text-xs tracking-wider text-gray-600"
                  >
                    {activeStep.label}
                  </motion.p>
                  <motion.p variants={textV} className="font-yatra text-lg text-primary">
                    {activeStep.title}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Dots */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-5"
              variants={fadeUp}
            >
              {steps.map((s, i) => (
                <motion.button
                  key={s.key}
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    restartAuto();
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={[
                    "h-2 rounded-full transition-all",
                    i === activeIndex ? "w-8" : "w-2",
                    i === activeIndex ? "bg-primary" : "bg-secondary/60",
                  ].join(" ")}
                  aria-label={`Go to ${s.label}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InteriorProcess;
