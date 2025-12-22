import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { PiBuildingsFill } from "react-icons/pi";

const ContactInfoSection = () => {
  const contactDetails = [
    {
      icon: <MdAlternateEmail className="text-2xl" />,
      title: "Email Support",
      desc: "Our team responds quickly and efficiently.",
      value: "contact@decoheavens.com",
      link: "mailto:contact@decoheavens.com",
    },
    {
      icon: <PiBuildingsFill className="text-2xl" />,
      title: "Visit Our Studio",
      desc: "Come see our work in person.",
      value: "Puducherry / Chennai",
      link: null,
    },
    {
      icon: <IoMdCall className="text-2xl" />,
      title: "Call Us Directly",
      desc: "We’re available all weekdays.",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
  ];

  return (
    <div className="  bg-linear-to-b
        from-[#fff7f3] via-[#fffbee] to-[#ffffff]">

    <section className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-16 text-slate-800 ">
      {/* Tag */}
      <div className="text-center md:text-left">
        <span className="inline-flex px-3 py-1 text-xs border border-slate-300 rounded-full text-slate-600">
          Reach Out To Us
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-yatra font-semibold mt-4 text-primary">
          We'd love to hear from you.
        </h1>

        {/* Subtext */}
        <p className="sm:mt-3 text-slate-600">
          Or write to us directly at{" "}
          <a
            href="mailto:contact@decoheavens.com"
            className="text-primary font-dance text-lg sm:text-2xl font-medium hover:underline break-all sm:break-normal"
            >
            contact@decoheavens.com
          </a>
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 sm:gap-10 mt-6 md:mt-14">
        {contactDetails.map((item, i) => (
          <div
          key={i}
          className="flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay={i * 150}
          >
            <div className="text-white bg-secondary p-3 rounded-full sm:size-12 flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            <p className="text-lg font-semibold mt-1 sm:mt-3">{item.title}</p>
            <p className="text-slate-500 my-1 sm:mt-1 sm:mb-4">{item.desc}</p>

            {item.link ? (
              <a
              href={item.link}
              className="text-primary font-semibold hover:underline wrap-break-word"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-primary font-semibold">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
        </div>
  );
};

export default ContactInfoSection;
