import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import "../css/footer.css";
import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer-container py-12 w-full relative z-10"
    >
      <div className="w-full">
        <div className="bg-[#111113] border border-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#A57AFF]/5 blur-[100px] group-hover:bg-[#A57AFF]/10 transition-all duration-700" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[#f5f5f7] tracking-tighter">
                MUHAMMAD <span className="text-[#A57AFF]">IRFAN</span>
              </h2>
              <p className="text-[#86868b] text-sm mt-2 font-mono uppercase tracking-widest">
                Full Stack Developer
              </p>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { name: "GitHub", icon: <SiGithub aria-hidden="true" />, link: "https://github.com/lowdevco" },
                {
                  name: "LinkedIn",
                  icon: <SiLinkedin aria-hidden="true" />,
                  link: "https://www.linkedin.com/in/muhammadirfank/",
                },
                {
                  name: "Instagram",
                  icon: <SiInstagram aria-hidden="true" />,
                  link: "https://www.instagram.com/mhd.iirrfan/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  aria-label={`Visit my ${social.name} profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86868b] hover:text-[#A57AFF] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#A57AFF]/50 mb-3">
                lowdevco
              </p>
              <p className="text-[#86868b] text-xs font-mono">
                © {currentYear} Built with{" "}
                <span className="text-[#A57AFF]">React</span>
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#A57AFF]/20 to-transparent mt-10" />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
