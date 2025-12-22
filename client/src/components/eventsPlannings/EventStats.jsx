"use client";

import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { NumberTicker } from "../ui/number-ticker";

const EventStats = () => {
  const stats = [
    {
      value: 162,
      suffix: "+",
      label: "Events Executed",
      Icon: IoCheckmarkDoneCircleSharp,
      blob: (
        <path d="M42.4,-69.9C51.9,-59.9,54.4,-43,59.3,-28.3C64.2,-13.5,71.4,-1.1,72.1,12C72.7,25.1,66.8,38.9,57.4,49.7C48,60.5,35.2,68.4,21.6,71.3C8,74.2,-6.3,72.3,-20.1,68.3C-33.9,64.3,-47.1,58.3,-56.5,48.4C-65.9,38.6,-71.5,24.8,-69.7,12.3C-67.9,-0.2,-58.7,-11.4,-53,-24.2C-47.2,-37.1,-44.8,-51.5,-36.5,-62C-28.3,-72.5,-14.1,-78.9,1.2,-80.8C16.5,-82.6,33,-79.8,42.4,-69.9Z" />
      ),
    },
    {
      value: 50,
      suffix: "+",
      label: "Happy Clients",
      Icon: FaUserFriends,
      blob: (
        <path d="M34.3,-56.1C45,-46.4,54.8,-38,61.4,-27C68,-16.1,71.5,-2.6,70.6,10.8C69.7,24.3,64.4,37.8,55.5,47.9C46.5,58.1,33.8,64.9,20.8,67C7.8,69,-5.4,66.3,-19.3,63.3C-33.2,60.3,-47.7,57.1,-57.7,48.4C-67.6,39.7,-73,25.5,-73.6,11.5C-74.2,-2.5,-70,-16.3,-63.5,-28.4C-57,-40.5,-48.2,-50.9,-37.2,-60.4C-26.3,-70,-13.1,-78.7,-0.7,-77.6C11.8,-76.6,23.5,-65.7,34.3,-56.1Z" />
      ),
    },
    {
      value: 30,
      suffix: "+",
      label: "Team Members",
      Icon: RiCustomerService2Fill,
      blob: (
        <path d="M44.1,-69.5C55.7,-61.2,62.7,-46.5,68.6,-31.8C74.5,-17.2,79.4,-2.5,79.5,12.9C79.7,28.4,75,44.7,64.1,53.4C53.2,62,36,63.1,20.7,65.2C5.4,67.2,-8.1,70.3,-22.5,69.4C-36.9,68.5,-52.3,63.6,-65.1,53.7C-78,43.8,-88.3,29,-86.5,14.9C-84.8,0.7,-71.1,-12.8,-60.8,-24.7C-50.6,-36.6,-43.8,-47.1,-34.2,-56.3C-24.6,-65.5,-12.3,-73.6,2,-76.6C16.3,-79.7,32.5,-77.8,44.1,-69.5Z" />
      ),
    },
    {
      value: 40,
      suffix: "+",
      label: "Venues Covered",
      Icon: ImLocation2,
      blob: (
        <path d="M47.8,-72.5C62.7,-64.8,76.1,-52.9,77.3,-38.7C78.4,-24.6,67.2,-8.3,62.8,7.7C58.4,23.6,60.7,39.1,56,53.7C51.4,68.2,39.7,81.8,26.1,83.2C12.6,84.5,-2.9,73.6,-18.2,66.9C-33.5,60.2,-48.5,57.6,-58.9,49.1C-69.2,40.6,-74.7,26.1,-79.1,10.1C-83.4,-5.9,-86.5,-23.4,-79.4,-35.1C-72.3,-46.8,-55,-52.7,-40,-60.4C-25.1,-68.1,-12.5,-77.6,1.9,-80.6C16.4,-83.7,32.9,-80.2,47.8,-72.5Z" />
      ),
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 sm:px-5 py-16 md:py-24 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-10 md:mb-20">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-primary font-yatra">
            Our Journey
          </h2>
          <p className="lg:w-1/2 mx-auto leading-relaxed text-sm sm:text-base">
            From intimate celebrations to large-scale events, these numbers
            reflect our experience, creativity, and flawless execution.
          </p>
        </div>

        {/* Stats */}
        <div className=" flex flex-wrap -m-4 text-center">
          {stats.map(({ value, suffix, label, Icon, blob }, index) => (
            <div
              key={index}
              className="p-4 w-[49%] md:w-1/4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="px-6 py-8 rounded-lg relative  ">
                {/* Blob */}
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-50 h-50 sm:w-72 sm:h-72 md:w-80 md:h-80
                    drop-shadow-[0px_15px_10px_rgba(0,0,0,0.35)]
                  "
                >
                  <path
                    fill="#C65A2E"
                    transform="translate(100 100)"
                    d={blob.props.d}
                  />
                </svg>

                {/* Icon */}
                <Icon className="relative z-10 mx-auto mb-3 text-4xl sm:text-5xl text-white" />

                {/* Number */}
                <h3 className="relative z-10 flex items-center justify-center text-3xl sm:text-4xl font-medium text-white gap-1">
                  <NumberTicker
                    value={value}
                    decimalPlaces={0}
                    className="text-3xl sm:text-4xl text-white font-yatra"
                  />
                  <span>{suffix}</span>
                </h3>

                {/* Label */}
                <p className="leading-relaxed text-white relative z-10 text-sm sm:text-base">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventStats;
