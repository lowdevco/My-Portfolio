import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import "../css/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900/60 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative group">
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
              <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">
                  Available for Hire
                </p>
              </div>
              <p className="text-gray-500 text-xs font-mono">
                © {currentYear} Built with{" "}
                <span className="text-purple-600">React</span>
              </p>
            </div>
          </div>

          
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-10" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
