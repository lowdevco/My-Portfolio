import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail, SiFacebook } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";

function Contact() {
  const contactLinks = [
    {
      title: "Email Me",
      value: "muhammadirfank2007@gmail.com",
      link: "mailto:muhammadirfank2007@gmail.com",
      icon: <SiGmail className="w-8 h-8" aria-hidden="true" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "GitHub",
      value: "@lowdevco",
      link: "https://github.com/lowdevco",
      icon: <SiGithub className="w-8 h-8" aria-hidden="true" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "LinkedIn",
      value: "Muhammad Irfan K",
      link: "https://www.linkedin.com/in/muhammadirfank/",
      icon: <SiLinkedin className="w-8 h-8" aria-hidden="true" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "Instagram",
      value: "@mhd.iirrfan",
      link: "https://www.instagram.com/mhd.iirrfan/",
      icon: <SiInstagram className="w-8 h-8" aria-hidden="true" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "col-span-1",
    },
    {
      title: "Facebook",
      value: "@mhd.iirrfan",
      link: "https://www.facebook.com/mhd.iirrfan/",
      icon: <SiFacebook className="w-7 h-7" aria-hidden="true" />,
      color: "hover:border-[#1877F2]/50 hover:shadow-[0_0_30px_rgba(24,119,242,0.2)]",
      textColor: "group-hover:text-[#1877F2]",
      colSpan: "col-span-1",
    },
    {
      title: "Location",
      value: "Kerala, India",
      link: "https://maps.google.com/?q=Kerala,+India",
      icon: <FaMapMarkerAlt className="w-7 h-7" aria-hidden="true" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      textColor: "group-hover:text-purple-400",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 w-full relative z-10"
      id="contact"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f7] tracking-tight">
          Let's <span className="text-[#A57AFF]">Connect</span>
        </h2>
        <p className="mt-6 text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="h-1.5 w-24 bg-[#A57AFF] mt-8 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactLinks.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target={item.title === "Email Me" || item.title === "Location" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={`Contact via ${item.title}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            className={`group relative overflow-hidden flex flex-col justify-between items-start p-8 bg-gradient-to-br from-[#111113] to-[#151518] border border-white/5 rounded-3xl transition-all duration-500 ${item.colSpan} hover:border-[#A57AFF]/40 hover:shadow-[0_0_40px_rgba(165,122,255,0.1)]`}
          >
            {/* Giant Faint Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 text-white/[0.02] group-hover:text-[#A57AFF]/[0.05] transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
              {React.cloneElement(item.icon, { className: "w-48 h-48" })}
            </div>

            {/* Top-Right Arrow (Appears on Hover) */}
            <div className="absolute top-8 right-8 text-[#86868b] opacity-0 group-hover:opacity-100 group-hover:text-[#A57AFF] transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>

            {/* Icon (Foreground) */}
            <div className={`relative z-10 mb-14 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:bg-[#A57AFF] group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(165,122,255,0.4)] text-[#f5f5f7]`} aria-hidden="true">
              {item.icon}
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 flex flex-col text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f7] mb-1 tracking-tight group-hover:text-[#A57AFF] transition-colors duration-300">{item.title}</h3>
              <p className="text-[#86868b] text-sm md:text-base font-medium truncate max-w-full">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
