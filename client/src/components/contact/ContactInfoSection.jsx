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
    <section className="relative max-w-6xl w-full mx-auto px-6 py-16 text-slate-800">
       
      {/* Tag */}
      
      <span className="px-3 py-1 text-xs border border-slate-300 rounded-full text-slate-600">
        Reach Out To Us
      </span>

      {/* Heading */}
      <h1 className="text-4xl font-yatra font-semibold text-left mt-4 text-primary">
        We'd love to hear from you.
      </h1>

      {/* Subtext */}
      <p className="text-left mt-3 text-slate-600">
        Or write to us directly at{" "}
        <a
          href="mailto:contact@decoheavens.com"
          className="text-primary font-dance text-2xl leading-0 font-medium hover:underline"
        >
          contact@decoheavens.com
        </a>
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-14">
  {contactDetails.map((item, i) => (
    <div
      key={i}
      className="flex flex-col"
      data-aos="fade-up"
      data-aos-delay={i * 150}
    >
      <div className="text-white bg-secondary p-3 rounded-full size-12 flex items-center justify-center">
        {item.icon}
      </div>

      <p className="text-lg font-semibold mt-3">{item.title}</p>
      <p className="text-slate-500 mt-1 mb-4">{item.desc}</p>

      {item.link ? (
        <a
          href={item.link}
          className="text-primary font-semibold hover:underline"
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
  );
};

export default ContactInfoSection;
