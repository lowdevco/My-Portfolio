import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "motion/react";

function Contact() {
  const contactLinks = [
    {
      title: "Email Me",
      value: "muhammadirfank2007@gmail.com",
      link: "mailto:muhammadirfank2007@gmail.com",
      icon: <SiGmail className="w-8 h-8" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "GitHub",
      value: "@lowdevco",
      link: "https://github.com/lowdevco",
      icon: <SiGithub className="w-8 h-8" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "LinkedIn",
      value: "Muhammad Irfan K",
      link: "https://www.linkedin.com/in/muhammadirfank/",
      icon: <SiLinkedin className="w-8 h-8" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "Instagram",
      value: "@mhd.iirrfan",
      link: "https://www.instagram.com/mhd.iirrfan/",
      icon: <SiInstagram className="w-8 h-8" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "Phone",
      value: "+91 7907462335",
      link: "tel:+917907462335",
      icon: <FaPhoneAlt className="w-7 h-7" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "Location",
      value: "Kerala, India",
      link: "https://maps.google.com/?q=Kerala,+India",
      icon: <FaMapMarkerAlt className="w-7 h-7" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="py-24 px-6 w-[90%] xl:w-[70%] mx-auto relative z-10"
      id="contact"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Let's <span className="text-purple-600">Connect</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="h-1.5 w-24 bg-purple-600 mt-8 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactLinks.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target={item.title === "Email Me" || item.title === "Phone" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`group flex flex-col items-center justify-center p-8 bg-gray-900/40 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 ${item.colSpan} ${item.color}`}
          >
            <div className={`mb-4 p-4 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 ${item.textColor}`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 font-medium text-center">{item.value}</p>
            
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <span className={item.textColor}>
                {item.title === "Location" ? "View Map" : item.title === "Phone" ? "Call Now" : item.title === "Email Me" ? "Send Email" : "Visit Profile"}
              </span>
              <span className={`transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ${item.textColor}`}>
                →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
