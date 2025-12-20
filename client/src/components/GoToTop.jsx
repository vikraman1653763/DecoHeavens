import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DirectUp } from "iconsax-reactjs";

const GoToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // Fallback
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="goto-top"
          onClick={scrollToTop}
          aria-label="Go to top"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className={`
            fixed z-50
            bottom-4 right-4 md:bottom-2 md:right-2
            w-8 h-8 md:w-12 md:h-12
            rounded-full
            flex items-center justify-center
            hover:brightness-110 active:scale-95
            border-0
            transition-all duration-200
          `}
        >
            <DirectUp size={32}
             variant="Bold"
            className=" text-rose-400 outline-2 outline-rose-400  rounded-full pointer-events-none p-1"
             />
          
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
