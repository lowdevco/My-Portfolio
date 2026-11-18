import React from "react";

function ExperienceItem({ hash, head, company, role, duration, description, skills }) {
  return (
    <li data-reveal className="relative grid gap-6 border-t border-line py-12 pl-10 md:grid-cols-12 md:gap-10 md:pl-14">
      <span
        className={`absolute left-[-4.5px] top-[3.4rem] size-2.5 rounded-full border-2 border-bg ${head ? "bg-accent" : "bg-muted"}`}
        aria-hidden="true"
      />

      <div className="md:col-span-4 font-mono text-sm">
        <p className="text-accent">
          commit {hash}
          {head && <span className="ml-2 text-ok">(HEAD → main)</span>}
        </p>
        <p className="mt-2 text-muted">
          <time>{duration}</time>
        </p>
        <p className="mt-4 font-sans text-lg font-medium text-fg">{company}</p>
      </div>

      <div className="md:col-span-8">
        <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em]">{role}</h3>

        <ul className="mt-6 space-y-3 text-muted leading-relaxed">
          {description.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-mono text-ok select-none" aria-hidden="true">
                +
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Skills used">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/80">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceItem;
