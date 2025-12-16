import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const InteriorCTA = () => {
  const navigate = useNavigate()

  const goContact = () => navigate("/contact")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  }

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      className="text-gray-700 body-font font-poppins"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        {/* Image */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          variants={fadeUp}
        >
          <motion.img
            variants={fadeIn}
            className="object-cover object-center rounded-2xl border border-secondary/40 shadow-sm"
            alt="Interior design preview"
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          variants={fadeUp}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-yatra text-primary"
            variants={fadeUp}
          >
            Ready to transform your space?
            <br className="hidden lg:inline-block" />
            Let’s plan it beautifully.
          </motion.h1>

          <motion.p
            className="mb-8 leading-relaxed text-gray-600 max-w-xl"
            variants={fadeUp}
          >
            From modern modular kitchens to elegant living rooms and office
            interiors — we design with purpose, optimize every inch, and execute
            with premium finishing.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex justify-center" variants={fadeUp}>
            <motion.button
              type="button"
              onClick={goContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:opacity-90 rounded-full text-lg transition"
            >
              Get a Design Quote
            </motion.button>

            <motion.button
              type="button"
              onClick={goContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="ml-4 inline-flex text-primary border border-primary py-2 px-6 focus:outline-none hover:bg-primary/30 rounded-full text-lg transition"
            >
              Plan My Space
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default InteriorCTA
