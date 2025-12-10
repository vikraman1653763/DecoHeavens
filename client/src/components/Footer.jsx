import { Facebook, Instagram, Whatsapp, Youtube } from "iconsax-reactjs";
import React from "react";


export default function Footer() {
  return (
    <>
      {/* Global font fallback (optional) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
          
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-600 bg-white pt-10">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {/* COLUMN 1 – Logo + Name */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/">
              <img
                src="/assets/logo.svg"
                alt="Deco Heavens Logo"
                className="w-20 opacity-90"
              />
            </a>

            <h2 className="font-yatra text-2xl text-primary mt-4 tracking-wide">
              Deco Heavens
            </h2>

            <p className="text-sm mt-4 leading-relaxed">
              Crafting celebrations, transforming spaces, and painting soulful
              stories — where tradition meets timeless design.
            </p>
          </div>

          {/* COLUMN 2 – Navlinks */}
          <div className="flex flex-col lg:items-center lg:justify-center">
            <div className="flex flex-col text-sm space-y-2.5">
              <h2 className="font-semibold mb-5 text-gray-800">Navigation</h2>

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
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Connect With Us
            </h2>

            <div className="flex gap-4 text-xl text-secondary">
              <a href="#" >
                <Instagram size="24"  variant="Broken" />
              </a>
              <a href="#" >
                <Facebook size="24"  variant="Broken" />
              </a>
              <a href="#" >
                <Whatsapp size="24"  variant="Broken" />{" "}
              </a>
              <a href="#">
                <Youtube size="24" variant="Broken" />{" "}
              </a>
            </div>

            <p className="text-sm mt-6 leading-relaxed">
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
