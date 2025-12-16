import React from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

const TiltCard = ({ children, className = "" }) => {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // control sensitivity
    const rotateY = ((x - midX) / midX) * 10; // left-right
    const rotateX = -((y - midY) / midY) * 10; // top-bottom

    card.style.transform = `translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = `translateZ(0) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={[
        "will-change-transform transition-transform duration-200 ease-out",
        "rounded-lg",
        className,
      ].join(" ")}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

const InteriorGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      alt: "Inspiration living room",
      tag: "Living Room Design",
    },
    {
      src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
      alt: "Inspiration bedroom",
      tag: "Bedroom Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      alt: "Inspiration kitchen",
      tag: "Modular Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      alt: "Inspiration office",
      tag: "Office Workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      alt: "Inspiration cafe",
      tag: "Cafe & Commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
      alt: "Inspiration retail",
      tag: "Retail Interior",
    },
  ];

  const KeywordTag = ({ text }) => (
    <span
      className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full 
                 bg-white/90 backdrop-blur 
                 border border-secondary/40 
                 text-gray-700 font-medium"
      style={{ transform: "translateZ(30px)" }} // tag pops forward
    >
      {text}
    </span>
  );

  return (
    <section className="text-gray-600 body-font font-poppins">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Header */}
        <div className="flex flex-row  w-full mb-20 flex-nowrap gap-4  justify-left items-center ">
          
            <AnimatedGradientText className="sm:text-5xl text-left  w-fit text-3xl font-dance title-font">
              Inspiration Gallery
            </AnimatedGradientText>
          

          <p className="lg:pl-6 leading-relaxed text-base text-gray-700 w-1/2">
            Sample references to showcase styles we can design and execute. We’ll
            replace these with your actual project photos once available.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="flex flex-wrap md:-m-2 -m-1 w-full items-stretch"
          style={{ perspective: "1200px" }} // depth for tilt
        >
          {/* Left Column */}
          <div className="flex flex-wrap w-1/2 h-full">
            <div className="md:p-2 p-1 w-1/2">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[0].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={images[0].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[0].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[1].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={images[1].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[1].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-full">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[2].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={images[2].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[2].tag} />
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-1/2 h-full">
            <div className="md:p-2 p-1 w-full">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[3].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={images[3].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[3].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[4].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={images[4].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[4].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-1/2 ">
              <TiltCard className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    alt={images[5].alt}
                    className="w-full h-full object-cover object-center block "
                    src={images[5].src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={images[5].tag} />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorGallery;
