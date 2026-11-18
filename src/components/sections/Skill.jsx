import React from "react";
import SectionHead from "@/components/SectionHead";
import { categories } from "@/data/skills";

function Skill() {
  return (
    <div className="wrap py-28 md:py-40">
      <SectionHead
        index="03"
        path="cat package.json"
        title={
          <>
            Technical <span className="text-accent">stack.</span>
          </>
        }
      />

      <div data-reveal className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
        {categories.map((cat) => (
          <article key={cat.title} className="bg-bg">
            <header className="flex items-center justify-between border-b border-line px-6 py-4">
              <h3 className="text-lg font-semibold tracking-tight">{cat.title}</h3>
              <span className="font-mono text-[11px] text-muted">{cat.file}</span>
            </header>
            <ul className="py-3 font-mono text-sm" aria-label={`${cat.title} skills`}>
              {cat.skills.map(({ name, Icon }, i) => (
                <li
                  key={name}
                  className="group flex items-center gap-4 px-6 py-2.5 transition-colors hover:bg-surface-2"
                >
                  <span className="w-5 text-right text-muted/50 select-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="size-5 text-muted transition-colors duration-300 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-fg/85 group-hover:text-fg">{name}</span>
                  <span className="ml-auto text-muted/0 transition-colors group-hover:text-muted" aria-hidden="true">
                    ✓ installed
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skill;
