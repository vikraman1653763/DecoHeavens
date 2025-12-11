import React from "react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { GiTwirlyFlower } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        {/* Left Image Section */}
        <div className="relative shadow-2xl shadow-primary/40 rounded-2xl  shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt="Deco Heavens"
          />

          {/* Floating Community Badge */}
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 -left-8 bg-white p-4 rounded-xl border border-primary/20 shadow-md">
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
            <p className="text-sm font-medium text-slate-800">Happy Clients</p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-3xl font-yatra  text-primary uppercase  ">
            About Us
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-linear-to-r from-primary  to-primary/20 "></div>

          <p className="mt-8 text-base">
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
            experiences. Whether you're planning a magical wedding, designing
            your dream home, or looking to elevate your walls with stunning
            art—we bring passion, precision, and creativity to every detail.
          </p>

          {/* Three Short Key Points */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary text-lg"> <GiTwirlyFlower/> </span>
              Bespoke designs crafted with detail and emotion.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-primary text-lg"><GiTwirlyFlower/></span>
              Seamless execution with premium materials & concepts.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-primary text-lg"><GiTwirlyFlower/></span>
              Personalized experiences for weddings, homes & wall art.
            </li>
          </ul>

          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-primary py-3 px-8 rounded-full text-white">
            <span>Read more</span>
            <BsArrowRight size={16}/>
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
