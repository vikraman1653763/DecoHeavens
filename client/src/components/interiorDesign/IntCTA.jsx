import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const InteriorCTA = () => {
  const navigate = useNavigate();
  const goContact = () => navigate("/contact");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="text-gray-700 body-font font-poppins"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className="
          container mx-auto px-5
          py-6 sm:py-16 
          flex flex-col-reverse md:flex-row
          items-center justify-center
          gap-10 md:gap-0
        "
      >
        {/* Content */}
        <motion.div
          className="
            w-full md:w-1/2
            md:pl-16 lg:pl-24
            flex flex-col
            items-center md:items-start
            text-center md:text-left
          "
          variants={fadeUp}
        >
          <motion.h1
            className="
              title-font font-yatra text-primary
              text-2xl sm:text-3xl lg:text-4xl
              leading-snug
              mb-4
            "
            variants={fadeUp}
          >
            Ready to transform your space?
            <br className="hidden lg:inline-block" />
            Let’s plan it beautifully.
          </motion.h1>

          <motion.p
            className="
              mb-7 sm:mb-8
              leading-relaxed text-gray-600
              text-sm sm:text-base
              max-w-xl
            "
            variants={fadeUp}
          >
            From modern modular kitchens to elegant living rooms and office
            interiors — we design with purpose, optimize every inch, and execute
            with premium finishing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="
              w-full
              flex flex-row
              items-center text-nowrap sm:items-center
              justify-center md:justify-start
              gap-2 sm:gap-4
            "
            variants={fadeUp}
          >
            <motion.button
              type="button"
              onClick={goContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full sm:w-auto
                inline-flex justify-center
                text-white bg-primary border-0
                py-2.5 px-6
                focus:outline-none hover:opacity-90
                rounded-full
                text-base sm:text-lg
                transition
              "
            >
              Get a Design Quote
            </motion.button>

            <motion.button
              type="button"
              onClick={goContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full sm:w-auto
                inline-flex justify-center
                text-primary border border-primary
                py-2.5 px-6
                focus:outline-none hover:bg-primary/10
                rounded-full
                text-base sm:text-lg
                transition
              "
            >
              Plan My Space
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="
            w-full md:w-1/2
            lg:max-w-lg
          "
          variants={fadeUp}
        >
          <motion.img
            variants={fadeIn}
            className="
              w-full
              h-64 sm:h-80 md:h-auto
              object-cover object-center
              rounded-2xl
              border border-secondary/40
              shadow-sm
            "
            alt="Interior design preview"
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteriorCTA;
