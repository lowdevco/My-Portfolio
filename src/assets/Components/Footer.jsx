import React from "react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import "../css/footer.css";
import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="footer-container py-12 px-6 relative z-10"
    >
      <div className="w-[90%] xl:w-[70%] mx-auto">
        <div className="bg-gray-900/60 border border-white/10 backdrop-blur-xl rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] group-hover:bg-purple-600/20 transition-all duration-700" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                MUHAMMAD <span className="text-purple-600">IRFAN</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2 font-mono uppercase tracking-widest">
                Full Stack Developer
              </p>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: <SiGithub />, link: "https://github.com/lowdevco" },
                {
                  icon: <SiLinkedin />,
                  link: "https://www.linkedin.com/in/muhammadirfank/",
                },
                {
                  icon: <SiInstagram />,
                  link: "https://www.instagram.com/mhd.iirrfan/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="text-gray-400 hover:text-purple-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-500/50 mb-3">
                lowdevco
              </p>
              <p className="text-gray-500 text-xs font-mono">
                © {currentYear} Built with{" "}
                <span className="text-purple-600">React</span>
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-10" />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
