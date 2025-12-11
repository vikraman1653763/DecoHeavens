import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Events & Weddings",
      img: "/assets/wedding-cover.webp",
      desc: "From timeless traditions to modern celebrations, we plan weddings and events that honor every culture, every love story, and every detail.",
      points: [
        "Cultural & Traditional Weddings",
        "Destination & Theme Weddings",
        "Complete Planning & Coordination",
        "Décor, Rituals & Guest Management",
      ],
      link: "/services/events-weddings",
    },
    {
      title: "Interior Design",
      img: "/assets/interior-cover.webp",
      desc: "Personalized interiors crafted to match your lifestyle—bringing beauty, function, and comfort to every space we design.",
      points: [
        "Home & Commercial Interiors",
        "Modular Kitchens & Wardrobes",
        "Renovation & Makeover Services",
        "3D Designs & Turnkey Execution",
      ],
      link: "/services/interior-design",
    },
    {
      title: "Wall Art & Painting",
      img: "/assets/wallart-cover.webp",
      desc: "Transforming walls into stories — from home interiors to large-scale murals, we create art that inspires and elevates every space.",
      points: [
        "Designer Walls & Murals",
        "Kids’ Room Themes",
        "Texture Paint & Premium Finishes",
        "Corporate, Public & Govt. Projects",
      ],
      link: "/services/wall-art",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 sm:px-4 ">
      <h2 className="text-3xl md:text-4xl font-yatra text-primary text-center mb-3">
        Our Services
      </h2>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        From unforgettable celebrations to beautiful homes and expressive wall
        art, we bring creativity and craftsmanship to every project we take on.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: idx * 0.15,
              ease: "easeInOut",
            }}
            className="
              bg-white rounded-3xl shadow-md hover:shadow-xl
              transition-all duration-300 overflow-hidden
            "
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Points */}
              <ul className="text-slate-700 text-sm space-y-1 mb-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-secondary font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate(service.link)}
                className="
                  mt-3 inline-block px-4 py-2 rounded-full text-sm
                  bg-primary text-white hover:bg-secondary transition-all
                "
              >
                Explore More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
