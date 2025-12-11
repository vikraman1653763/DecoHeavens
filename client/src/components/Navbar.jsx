// components/nav/Navbar.jsx
import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import useIsSmallScreen from "../hooks/useIsSmallScreen.js";

import logoLight from "/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmall = useIsSmallScreen();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events & Weddings", path: "/events" },
    { label: "Interior Design", path: "/interior" },
    { label: "Wall Art", path: "/wall-art" },
    { label: "About Us", path: "/about" },
  ];

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = logoLight;
  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -10, height: 0 },
  };

  // Smooth scroll helper
  const smoothScrollTo = (hash) => {
    if (!hash || hash[0] !== "#") return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = 0;
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top - headerHeight;
    window.scrollTo({ top: absoluteTop, behavior: "smooth" });
  };

  const handleHireMe = () => smoothScrollTo("#form");

  return (
    <div className="fixed w-full z-50 flex justify-center items-center transition-all duration-500">
      <header
        className={`flex items-center justify-between backdrop-blur-xl transition-all duration-500
${
  scrolled
    ? `
translate-y-3 sm:translate-y-10 max-w-[1140px] w-[80%] sm:w-[1140px] rounded-2xl px-4 sm:px-8 py-2 sm:py-2
bg-white/40 text-slate-800
border border-white/30
shadow-[0_6px_24px_rgba(2,6,23,0.06)] 
${menuOpen ? "rounded-b-none" : ""}
`
    : `
sm:translate-y-0 px-7 sm:px-10 py-4 max-w-full w-full sm:py-4
bg-white/50 text-slate-800
border border-white/30
shadow-[0_6px_24px_rgba(2,6,23,0.01)]
`
}`}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          className="w-[120px] sm:w-[210px] h-10 cursor-pointer"
          alt="Logo"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ label }) => (
            <div
              key={label}
              className={`${
                scrolled ? "text-slate-700" : "text-[#525F81]"
              } hover:text-pretty`}
            >
              {label}
            </div>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {!isSmall && (
           <button
  onClick={handleHireMe}
  className="
    relative
    px-2 py-1
    rounded-xl
    font-medium font-yatra
    text-white
    bg-linear-to-r from-primary/70 to-primary
    shadow-[0_4px_0_#7a4a2a]
    hover:shadow-[0_6px_0_#7a4a2a]
    active:shadow-[0_2px_0_#7a4a2a]
    active:translate-y-1
    transition-all duration-300
  "
>
  Contact
</button>
)}



          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="md:hidden text-slate-800"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}6
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className={`absolute top-[66px] rounded-b-2xl md:hidden z-40 w-full
border-t-2 border-pretty
bg-white/50 backdrop-blur-xl
shadow-[0_10px_30px_rgba(2,6,23,0.08)]
${scrolled ? "max-w-[80%]" : "max-w-[1140px]"}
`}
          >
            <div className="flex flex-col gap-4 py-3 px-4">
              {navItems.map(({ label, path }) => (
                <div
                  key={label}
                  className="text-slate-700 hover:text-pretty"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => smoothScrollTo(path), 50);
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
