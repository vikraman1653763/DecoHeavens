import React from "react";

const ContactMapSection = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-10 pb-16 sm:mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          {/* 
            🔁 Replace this src with your actual Google Maps <iframe> embed link.
            Make sure to keep only the src attribute.
          */}
          <iframe
            title="Deco Heavens Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4703329628265!2d76.966!3d11.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzE4LjAiTiA3NsKwNTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
