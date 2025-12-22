import { Facebook, Instagram, Whatsapp, Youtube } from "iconsax-reactjs";
import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer-only font fallback (safer than global *) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
      `}</style>

      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-600 bg-white pt-6 sm:pt-10 font-[Poppins]">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
          {/* COLUMN 1 – Logo + Name */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <a href="/" className="inline-flex sm:inline">
              <img
                src="/assets/logo.svg"
                alt="Deco Heavens Logo"
                className="w-20 opacity-90 mx-auto sm:mx-0"
              />
            </a>

            <h2 className="font-yatra text-2xl text-primary mt-4 tracking-wide">
              Deco Heavens
            </h2>

            <p className="text-sm mt-4 leading-relaxed max-w-md mx-auto sm:mx-0">
              Crafting celebrations, transforming spaces, and painting soulful
              stories — where tradition meets timeless design.
            </p>
          </div>

          {/* COLUMN 2 – Navlinks */}
          <div className="flex flex-col lg:items-center lg:justify-center text-center sm:text-left">
            <div className="flex flex-col text-sm space-y-2.5">
              <h2 className="font-semibold mb-4 sm:mb-5 text-gray-800">
                Navigation
              </h2>

              <a className="hover:text-primary transition" href="#home">
                Home
              </a>
              <a className="hover:text-primary transition" href="#events">
                Events & Weddings
              </a>
              <a className="hover:text-primary transition" href="#interior">
                Interior Design
              </a>
              <a className="hover:text-primary transition" href="#wallart">
                Wall Art
              </a>
              <a className="hover:text-primary transition" href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* COLUMN 3 – Social Icons */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-gray-800 mb-4 sm:mb-5">
              Connect With Us
            </h2>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xl text-secondary">
              <a href="#" aria-label="Instagram">
                <Instagram size="24" variant="Broken" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size="24" variant="Broken" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <Whatsapp size="24" variant="Broken" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size="24" variant="Broken" />
              </a>
            </div>

            <p className="text-sm mt-6 leading-relaxed max-w-md mx-auto sm:mx-0">
              Follow us for design inspiration, event highlights, mural art, and
              behind-the-scenes creativity.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="py-4 text-center border-t mt-6 border-slate-200">
          Copyright © {new Date().getFullYear()}
          <span className="text-primary font-medium"> Deco Heavens</span> — All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
}
