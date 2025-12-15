import React from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

const VisionMissionSection = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-6 px-6 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
        {/* Text */}
        <div className="font-light text-slate-600 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold text-primary font-yatra">
            Our Vision & Mission
          </h2>

          <p className="mb-4">
            <AnimatedGradientText
              speed={1}
              colorFrom="#ff7a18"
              colorTo="#8b5cf6"
              className="text-2xl leading-0 font-semibold tracking-tight font-dance"
            >
              Our Vision:
            </AnimatedGradientText>{" "}
            <span className="text-base font-normal">
              To craft spaces and celebrations that feel timeless—where culture,
              emotion, and design come together beautifully.
            </span>
          </p>

          <p className="mb-4">
            <AnimatedGradientText
              speed={1}
              colorFrom="#ff7a18"
              colorTo="#8b5cf6"
              className="text-2xl leading-0 font-semibold tracking-tight font-dance"
            >
              Our Mission:
            </AnimatedGradientText>
          </p>

          <ul className="space-y-2 list-disc list-inside text-base font-normal">
            <li>Create personalized designs that reflect every client’s story</li>
            <li>Blend traditional cultural detailing with modern aesthetics</li>
            <li>Ensure transparent pricing and smooth execution</li>
            <li>Deliver quality craftsmanship with attention to detail</li>
          </ul>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-2xl"
            src="https://plus.unsplash.com/premium_photo-1684783847972-1b2406aa4cc8?q=80&w=800&auto=format&fit=crop"
            alt="Vision: creative planning interior"
            loading="lazy"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
          />

          <img
            className="mt-4 w-full lg:mt-10 rounded-2xl"
            src="https://images.unsplash.com/photo-1532455900982-24be47fa89de?q=80&w=800&auto=format&fit=crop"
            alt="Mission: event decor setup"
            loading="lazy"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
