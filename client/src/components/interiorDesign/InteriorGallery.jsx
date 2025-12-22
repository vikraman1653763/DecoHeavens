import React, { useEffect, useState } from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import TrandingSlider from "./TrandingSlider"; // ✅ adjust path if needed
import { IoIosClose } from "react-icons/io";

const TiltCard = ({ children, className = "" }) => {
  const handleMove = (e) => {
    // ✅ Disable tilt on mobile / touch screens
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

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
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
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
  // ✅ Your same 6 tiles, but each has its own slides set
  const imageSets = [
    {
      cover: {
        src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        alt: "Inspiration living room",
      },
      tag: "Living Room Design",
      slides: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1733248818744-17b6c632684f?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661780042612-aebf87ce09ce?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/6527054/pexels-photo-6527054.jpeg",
        "https://images.unsplash.com/photo-1560821648-a31f6ddaa9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1674730952302-c9c9bc5da824?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1673014201877-64e88f4b5542?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      cover: {
        src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
        alt: "Inspiration bedroom",
      },
      tag: "Bedroom Interior",
      slides: [
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600493504483-8df7098b5792?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2019/04/30/08/07/bedroom-4167971_1280.jpg",
      ],
    },
    {
      cover: {
        src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
        alt: "Inspiration kitchen",
      },
      tag: "Modular Kitchen",
      slides: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        "https://images.pexels.com/photos/7746072/pexels-photo-7746072.jpeg",
        "https://images.pexels.com/photos/6021777/pexels-photo-6021777.jpeg",
        "https://images.pexels.com/photos/35189705/pexels-photo-35189705.jpeg",
        "https://plus.unsplash.com/premium_photo-1670950412066-2dc58699d7ad?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/11/21/11/39/kitchen-8403074_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/01/31/14/32/architecture-1171462_1280.jpg",
      ],
    },
    {
      cover: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Inspiration office",
      },
      tag: "Office Workspace",
      slides: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1706074740295-d7a79c079562?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1706074797611-a02f9ed06439?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1667646590380-670b53b8c393?q=80&w=933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1708190680331-9adcf727fd9f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600765727005-d189ea57a894?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      cover: {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        alt: "Inspiration cafe",
      },
      tag: "Cafe & Commercial",
      slides: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1644096922601-80aa39eff1d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1723489681852-e8fcb02439fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      cover: {
        src: "https://images.unsplash.com/photo-1600214859516-98999dba7cf1?auto=format&fit=crop&w=800&q=80",
        alt: "Inspiration retail",
      },
      tag: "Kids Room Interior",
      slides: [
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1400&q=80",
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?_gl=1*c7wiuu*_ga*MTEwMzUzOTIyMy4xNzY1ODgwOTQy*_ga_8JE65Q40S6*czE3NjU5NjQ2MDQkbzIkZzEkdDE3NjU5NjY0ODMkajYwJGwwJGgw",
        "https://images.unsplash.com/photo-1693034433366-57fbb0286641?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1687946803051-51da173a9f55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1721395288477-b546804ce392?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1684980181424-97bd193d2926?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600214859516-98999dba7cf1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1691751941020-5f0bced88ae7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];

  // ✅ Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [modalSlides, setModalSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (slides, startIndex = 0) => {
    setModalSlides(slides);
    setActiveIndex(startIndex);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  // ✅ ESC close + lock scroll
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const KeywordTag = ({ text }) => (
    <span
      className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full 
                 bg-white/90 backdrop-blur 
                 border border-secondary/40 
                 text-gray-700 font-medium"
      style={{ transform: "translateZ(30px)" }}
    >
      {text}
    </span>
  );

  return (
    <section className="text-gray-600 body-font font-poppins">
      <div className="container px-5 py-6 md:py-24 mx-auto flex flex-wrap">
        {/* ✅ Header (responsive) */}
        <div className="w-full mb-10 md:mb-20 flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
          <AnimatedGradientText className="text-3xl sm:text-4xl md:text-5xl text-left w-fit font-dance title-font">
            Inspiration Gallery
          </AnimatedGradientText>

          <p className="leading-relaxed text-sm sm:text-base text-gray-700 md:w-1/2">
            Sample references to showcase styles we can design and execute.
            We’ll replace these with your actual project photos once available.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="flex flex-wrap md:-m-2 -m-1 w-full items-stretch"
          style={{ perspective: "1200px" }}
        >
          {/* Left Column */}
          <div className="flex flex-wrap w-full gap-3 sm:gap-0 md:w-1/2 sm:h-full">
            <div className="md:p-2 p-1 w-full md:w-1/2">
              <TiltCard className="sm:h-full ">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  style={{
                    clipPath: "path('M0,40 Q0,0 40,0 H100% V100% H0 Z')",
                  }}
                  onClick={() => openModal(imageSets[0].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[0].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[0].cover.alt}
                    className="w-full h-56 sm:h-64 md:h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={imageSets[0].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[0].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-full md:w-1/2">
              <TiltCard className="h-full">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(imageSets[1].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[1].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[1].cover.alt}
                    className="w-full h-56 sm:h-64 md:h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={imageSets[1].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[1].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-full">
              <TiltCard className="h-full">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(imageSets[2].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[2].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[2].cover.alt}
                    className="w-full h-64 sm:h-72 md:h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={imageSets[2].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[2].tag} />
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full md:w-1/2 sm:h-full">
            <div className="md:p-2 p-1 w-full">
              <TiltCard className="h-full">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(imageSets[3].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[3].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[3].cover.alt}
                    className="w-full h-64 sm:h-72 md:h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={imageSets[3].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[3].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-full md:w-1/2">
              <TiltCard className="h-full">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(imageSets[4].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[4].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[4].cover.alt}
                    className="w-full h-56 sm:h-64 md:h-full object-cover object-center block transition-transform duration-300 hover:scale-[1.04]"
                    src={imageSets[4].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[4].tag} />
                </div>
              </TiltCard>
            </div>

            <div className="md:p-2 p-1 w-full md:w-1/2">
              <TiltCard className="h-full">
                <div
                  className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(imageSets[5].slides, 0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(imageSets[5].slides, 0)
                  }
                >
                  <img
                    alt={imageSets[5].cover.alt}
                    className="w-full h-56 sm:h-64 md:h-full object-cover object-center block"
                    src={imageSets[5].cover.src}
                    loading="lazy"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  <KeywordTag text={imageSets[5].tag} />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-3 top-3 px-3 py-2"
            aria-label="Close modal"
          >
            <IoIosClose
              size={34}
              color="black"
              className="bg-white text-white rounded-full hover:bg-white/80"
            />
          </button>

          <div
            className="relative sm:w-full rounded-2xl p-0 sm:p-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <TrandingSlider slides={modalSlides} initialSlide={activeIndex} />
          </div>
        </div>
      )}
    </section>
  );
};

export default InteriorGallery;
