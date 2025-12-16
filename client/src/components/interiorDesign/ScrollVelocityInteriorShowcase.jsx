import React, { useState } from "react"
import { ScrollVelocityContainer, ScrollVelocityRow } from "../ui/scroll-based-velocity"
import ServicesSection from "./ServicesSection"

const IMAGES_ROW_A = [
  "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://plus.unsplash.com/premium_photo-1733248818744-17b6c632684f?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://plus.unsplash.com/premium_photo-1661780042612-aebf87ce09ce?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1644096922601-80aa39eff1d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1505624198937-c704aff72608?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
]

const IMAGES_ROW_B = [
  "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
  "https://images.pexels.com/photos/6527054/pexels-photo-6527054.jpeg",
  "https://images.unsplash.com/photo-1693034433366-57fbb0286641?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1600493504483-8df7098b5792?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1687946803051-51da173a9f55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1721395288477-b546804ce392?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://plus.unsplash.com/premium_photo-1684980181424-97bd193d2926?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1600214859516-98999dba7cf1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1691751941020-5f0bced88ae7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://plus.unsplash.com/premium_photo-1685152204789-1e3584d48d61?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0",
]

const ScrollVelocityInteriorShowcase = () => {
  const [paused, setPaused] = useState(false)

  return (
    <section className="relative w-full overflow-hidden font-poppins py-10">
      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ScrollVelocityContainer className="w-full">
          {/* Row A (pause on hover) */}
          <div className={paused ? "**:animate-none!" : ""}>
            <ScrollVelocityRow baseVelocity={5} direction={1} className="py-4">
              {IMAGES_ROW_A.map((src, idx) => (
                <img
                  key={`rowA-${idx}`}
                  src={src}
                  alt="Interior reference"
                  width={260}
                  height={170}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-100 w-104 rounded-2xl object-cover
                             border border-black/5 bg-white/70
                             shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </ScrollVelocityRow>
          </div>

          {/* Services (keep clickable above marquee) */}
          <div className="relative z-50 pointer-events-auto">
            <ServicesSection />
          </div>

          {/* Row B (pause on hover) */}
          <div className={paused ? "**:animate-none!" : ""}>
            <ScrollVelocityRow baseVelocity={6} direction={-1}  className="py-4">
              {IMAGES_ROW_B.map((src, idx) => (
                <img
                  key={`rowB-${idx}`}
                  src={src}
                  alt="Interior reference"
                  width={260}
                  height={170}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-100 w-104 rounded-2xl object-cover
                             border border-black/5 bg-white/70
                             shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </ScrollVelocityRow>
          </div>
        </ScrollVelocityContainer>

        {/* ❌ removed the left/right white fog gradient divs */}
      </div>
    </section>
  )
}

export default ScrollVelocityInteriorShowcase
