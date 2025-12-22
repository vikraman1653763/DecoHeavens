import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

// RAFCE
const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Living & Home Interiors",
      icon: "🏡",
      points: [
        "Living Room Design",
        "TV Unit & Storage Solutions",
        "False Ceiling & Lighting",
        "Paint, Wallpaper & Wall Panels",
        "Furniture Refresh & Styling",
      ],
    },
    {
      title: "Modular Kitchen Solutions",
      icon: "🍳",
      points: [
        "Modular Kitchen",
        "Compact Modular Solutions",
        "Kitchen & Bedroom Upgrades",
        "Electrical & Lighting Revamp",
      ],
    },
    {
      title: "Bedroom & Wardrobes",
      icon: "🛏️",
      points: [
        "Bedroom & Wardrobe Design",
        "Space Optimization Layouts",
        "Storage & Utility Planning",
        "Balcony & Utility Enhancements",
      ],
    },
    {
      title: "Office & Commercial Spaces",
      icon: "🏢",
      points: [
        "Office Space Planning",
        "Reception & Branding Walls",
        "Conference / Meeting Rooms",
      ],
    },
    {
      title: "Retail, Cafes & Showrooms",
      icon: "🛍️",
      points: [
        "Retail & Showroom Interiors",
        "Cafes & Restaurant Layouts",
        "Customer Flow Optimization",
      ],
    },
    {
      title: "Turnkey & Makeover Packages",
      icon: "✅",
      points: [
        "Ready-to-Move Interior Packages",
        "End-to-End Makeover Support",
        "Design to Execution Handling",
      ],
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const goContact = () => navigate("/contact");

  return (
    <section className="text-gray-600 body-font font-poppins">
      <div className="container px-5 mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 w-full mb-10 sm:mb-16">
          <div className="sm:w-1/2 w-full">
            <AnimatedGradientText className="sm:text-5xl text-3xl font-dance title-font">
              Our Services
            </AnimatedGradientText>
            <p className="mt-3 text-gray-700 max-w-xl text-sm sm:text-base">
              Thoughtfully designed interior solutions—crafted, executed, and
              delivered with care.
            </p>
          </div>

          <div className="sm:w-1/2 w-full flex sm:justify-end">
            <motion.button
              onClick={goContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className=" mx-auto sm:mx-0 sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                         bg-secondary text-white
                         shadow-lg shadow-secondary/25"
            >
              Get a Free Quote <span className="ml-2">→</span>
            </motion.button>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-4 sm:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <motion.button
                type="button"
                onClick={goContact}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                className="
                  text-left w-full h-full rounded-2xl border border-black/5
                  bg-white/80 backdrop-blur
                  shadow-md hover:shadow-xl transition-shadow duration-300
                  focus:outline-none focus:ring-2 focus:ring-secondary/40
                "
              >
                <div className="p-5 sm:p-6 flex flex-col h-full">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="
                        w-11 h-11 sm:w-12 sm:h-12 rounded-2xl
                        grid place-items-center text-xl
                        bg-secondary/10 border border-secondary/20
                      "
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-[11px] sm:text-xs font-medium text-gray-500">
                      Premium • Reliable • Timely
                    </span>
                    <span className="text-sm font-semibold text-secondary">
                      Contact us →
                    </span>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
