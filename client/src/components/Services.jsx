import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Events & Weddings",
      img: "/assets/ep5.webp",
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
      img: "/assets/id1.webp",
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
      img: "/assets/wa5.webp",
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
      <h2 className="text-3xl md:text-4xl  text-primary text-center mb-3 font-yatra">
        Our Services
      </h2>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        From unforgettable celebrations to beautiful homes and expressive wall
        art, we bring creativity and craftsmanship to every project we take on.
      </p>

      {/* items-stretch makes all grid children equal height */}
      <div className="grid gap-10 md:grid-cols-3 items-stretch">
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
            className="relative group h-full" // h-full so wrapper matches tallest card
          >
            {/* Hover-reveal button */}
           

            {/* Card with fixed image height + flex layout */}
            <div
              className="
                bg-white rounded-3xl shadow-md hover:shadow-xl
                transition-all duration-300 overflow-hidden
                flex flex-col h-full
              "
            >
              {/* Image (fixed height for all cards) */}
              <div className="overflow-hidden h-80">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content fills remaining height */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold text-primary mb-2 font-dance">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
 <button
              onClick={() => navigate(service.link)}
              className="
               
                px-4 py-2 rounded-full text-xs md:text-sm font-medium
                bg-primary text-white shadow-lg
               -translate-y-3 pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-300
              "
            >
              Explore more →
            </button>
                {/* Make list take remaining space nicely */}
                {/* <ul className="text-slate-700 text-sm space-y-1 mt-auto">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-secondary font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
