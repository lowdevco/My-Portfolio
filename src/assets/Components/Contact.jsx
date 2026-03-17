import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });

        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, info: { error: false, msg: null } }));
        }, 3000);
      } else {
        setStatus({
          submitting: false,
          info: { error: true, msg: data.error || "Something went wrong." },
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: {
          error: true,
          msg: "Failed to connect to the server. Make sure the backend is running.",
        },
      });
    }
  };

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
              { icon: <SiGithub />, link: "https://github.com/muhammadirfan" },
              {
                icon: <SiLinkedin />,
                link: "https://linkedin.com/in/muhammadirfan",
              },
              { icon: <SiInstagram />, link: "https://instagram.com" },
            ].map(({ icon, link }, i) => (
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
            ))}
          </div>
        </div>

        <div className="bg-gray-900/60 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(126,34,206,0.3)] transition-all active:scale-[0.98] ${status.submitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            
            {status.info.msg && (
              <div
                className={`mt-4 text-center p-3 rounded-lg font-medium transition-all duration-300 ${status.info.error ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`}
              >
                {status.info.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
