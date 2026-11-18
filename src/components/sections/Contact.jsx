import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import SectionHead from "@/components/SectionHead";
import Magnetic from "@/components/Magnetic";
import { EMAIL, SOCIALS } from "@/data/profile";

const ICONS = { GitHub: SiGithub, LinkedIn: SiLinkedin, Instagram: SiInstagram, Facebook: SiFacebook };

function Contact() {
  const [copied, setCopied] = useState(null);

  const copy = () =>
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => setCopied("ok"))
      .catch(() => setCopied("fail"))
      .finally(() => setTimeout(() => setCopied(null), 2000));

  return (
    <div className="wrap py-28 md:py-40">
      <SectionHead
        index="05"
        path="./contact.sh --hire"
        title={
          <>
            Let's build something <span className="text-accent">great.</span>
          </>
        }
      >
        <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to
          you!
        </p>
      </SectionHead>

      <div data-reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Magnetic strength={0.15}>
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email me at ${EMAIL}`}
            className="group relative block break-all text-[clamp(1.4rem,4.2vw,3.75rem)] font-semibold tracking-[-0.04em]"
          >
            {EMAIL}
            <span
              className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-accent transition-transform duration-700 ease-[var(--ease-expo)] group-hover:origin-left group-hover:scale-x-100"
              aria-hidden="true"
            />
          </a>
        </Magnetic>
        <button onClick={copy} className="btn btn-ghost font-mono text-xs uppercase tracking-[0.15em]">
          {copied === "ok" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
          <span aria-live="polite">
            {copied === "ok" ? "Copied" : copied === "fail" ? "Copy failed" : "Copy email"}
          </span>
        </button>
      </div>

      <ul data-reveal className="mt-20 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {SOCIALS.map(({ name: title, handle: value, link }) => {
          const Icon = ICONS[title];
          return (
          <li key={title} className="border-b border-line sm:odd:border-r lg:border-r lg:last:border-r-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contact via ${title}`}
              className="group relative flex items-center gap-4 overflow-hidden p-6 md:p-8"
            >
              <span
                className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-y-100"
                aria-hidden="true"
              />
              <Icon className="relative size-6 transition-colors duration-500 group-hover:text-bg" aria-hidden="true" />
              <span className="relative flex flex-col">
                <span className="text-lg font-semibold tracking-tight transition-colors duration-500 group-hover:text-bg">
                  {title}
                </span>
                <span className="font-mono text-xs text-muted transition-colors duration-500 group-hover:text-bg/70">
                  {value}
                </span>
              </span>
              <FiArrowUpRight
                className="relative ml-auto size-5 transition-all duration-500 group-hover:rotate-45 group-hover:text-bg"
                aria-hidden="true"
              />
            </a>
          </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contact;
