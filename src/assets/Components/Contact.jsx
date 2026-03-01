import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../css/contact.css";

function Contact() {
  const contactInfo = [
    {
      icon: <SiGmail className="text-[#ffffff]" />,
      label: "Email",
      value: "muhammadirfank2007@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-[#ffffff]" />,
      label: "Phone",
      value: "+91 7907462335",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#ffffff]" />,
      label: "Location",
      value: "Kerala, India",
    },
  ];

  return (
    <section
      className="contact-section py-20 px-6 max-w-7xl mx-auto relative z-10"
      id="contact"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Get In <span className="text-purple-600">Touch</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-600 mt-4 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white mb-8">
            Let's collaborate on your next project
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-6 bg-gray-900/40 border border-white/10 rounded-2xl backdrop-blur-md hover:border-purple-500/50 transition-all group"
              >
                <div className="text-3xl transition-transform group-hover:scale-110">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-mono">
                    {info.label}
                  </p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            {[
              { icon: <SiGithub />, link: "https://github.com/muhammadirfan" }, //
              {
                icon: <SiLinkedin />,
                link: "https://linkedin.com/in/muhammadirfan",
              }, //
              { icon: <SiInstagram />, link: "https://instagram.com" },
            ].map(
              (
                { icon, link },
                i, 
              ) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <button
                    type="button"
                    className="p-4 rounded-xl bg-gray-900 border border-white/10 text-white hover:bg-purple-800 transition-all shadow-lg text-2xl"
                  >
                    {icon}
                  </button>
                </a>
              ),
            )}
          </div>
        </div>

       
        <div className="bg-gray-900/60 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>

            <button className="w-full py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(126,34,206,0.3)] transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
