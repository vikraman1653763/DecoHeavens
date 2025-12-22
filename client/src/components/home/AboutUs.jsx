import React from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { GiTwirlyFlower } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0 overflow-hidden">
      {/* Left Image Section */}
      <div className="relative shadow-2xl shadow-primary/10 rounded-2xl shrink-0 w-full md:w-auto">
        <img
          className="w-full max-w-md h-80 sm:h-96 md:h-130 object-contain rounded-2xl mx-auto"
          src="/assets/wa6.webp"
          alt="Deco Heavens"
        />

        {/* Floating Community Badge */}
        <div
          className="
            flex items-center gap-2 max-w-72
            absolute bottom-4 sm:bottom-6 md:bottom-8
            left-4 sm:left-6 md:-left-8
            bg-white p-3 sm:p-4 rounded-xl
            border border-primary/20 shadow-md
          "
        >
          <div className="flex -space-x-4 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="client"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="client"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="client"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-3"
            />
            <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-primary hover:-translate-y-1 transition z-4">
              50+
            </div>
          </div>
          <p className="text-sm font-medium text-slate-800 whitespace-nowrap">
            Happy Clients
          </p>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="text-sm text-slate-600 max-w-lg text-center md:text-left">
        <h1 className="text-3xl font-yatra text-primary uppercase">About Us</h1>
        <div className="w-24 h-[3px] rounded-full bg-linear-to-r from-primary to-primary/20 mx-auto md:mx-0" />

        <p className="mt-6 md:mt-8 text-base">
          At{" "}
          <AnimatedGradientText
            speed={1}
            colorFrom="#f43f5e"
            colorTo="#fbbf24"
            className="text-4xl font-semibold tracking-tight font-dance"
          >
            Deco Heavens
          </AnimatedGradientText>
          , we transform your special moments and spaces into unforgettable
          experiences. Whether you're planning a magical wedding, designing your
          dream home, or looking to elevate your walls with stunning art—we
          bring passion, precision, and creativity to every detail.
        </p>

        {/* Three Short Key Points */}
        <ul className="mt-6 space-y-3">
          <li className="flex items-start gap-2 justify-center md:justify-start">
            <span className="text-primary text-lg mt-0.5">
              <GiTwirlyFlower />
            </span>
            <span>Bespoke designs crafted with detail and emotion.</span>
          </li>

          <li className="flex items-start gap-2 justify-center md:justify-start">
            <span className="text-primary text-lg mt-0.5">
              <GiTwirlyFlower />
            </span>
            <span>Seamless execution with premium materials & concepts.</span>
          </li>

          <li className="flex items-start gap-2 justify-center md:justify-start">
            <span className="text-primary text-lg mt-0.5">
              <GiTwirlyFlower />
            </span>
            <span>Personalized experiences for weddings, homes & wall art.</span>
          </li>
        </ul>

        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-primary py-3 px-8 rounded-full text-white">
            <span>Read more</span>
            <BsArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
