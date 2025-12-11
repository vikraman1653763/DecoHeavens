// components/nav/Navbar.jsx
import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import useIsSmallScreen from "../hooks/useIsSmallScreen.js";
import logoLight from "/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmall = useIsSmallScreen();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events & Weddings", path: "/events" },
    { label: "Interior Design", path: "/interior" },
    { label: "Wall Art", path: "/wall-art" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" }, // only used for mobile menu
  ];

  const desktopNavItems = navItems.filter((item) => item.label !== "Contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -10, height: 0 },
  };

  return (
    <div className="fixed w-full z-50 flex justify-center items-center transition-all duration-500">
      <header
        className={`flex items-center justify-between backdrop-blur-xl transition-all duration-500
${
  scrolled
    ? `
translate-y-3 sm:translate-y-10 max-w-[1140px] w-[80%] sm:w-[1140px]
rounded-2xl px-4 sm:px-8 py-2 sm:py-2
bg-white/40 text-slate-800 border border-white/30 
shadow-[0_6px_24px_rgba(2,6,23,0.06)]
${isSmall && menuOpen ? "rounded-b-none" : ""}
`
    : `
sm:translate-y-0 px-7 sm:px-10 py-4 max-w-full w-full
bg-white/50 text-slate-800 border border-white/30
shadow-[0_6px_24px_rgba(2,6,23,0.01)]
`
}`}
      >
        {/* Logo */}
        <img
          src={logoLight}
          alt="Logo"
          className="w-[120px] sm:w-[210px] h-10 cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {desktopNavItems.map(({ label, path }) => (
            <button
              key={label}
              onClick={() => {
                navigate(path);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-base  ${
                scrolled ? "text-slate-700" : "text-[#525F81]"
              } hover:text-primary transition-colors`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Desktop Contact Button */}
          {!isSmall && (
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="
                px-4 py-2 rounded-xl text-sm font-medium
                bg-primary text-white shadow-md
                hover:bg-primary/90 transition-all
              "
            >
              Contact
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle Menu"
            className="md:hidden text-slate-800"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
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
border-t-2 border-primary
bg-white/50 backdrop-blur-xl
shadow-[0_10px_30px_rgba(2,6,23,0.08)]
${scrolled ? "max-w-[80%]" : "max-w-[1140px]"}
`}
          >
            <div className="flex flex-col gap-4 py-3 px-4">
              {navItems.map(({ label, path }) => (
                <button
                  key={label}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-left text-slate-700 hover:text-primary transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
