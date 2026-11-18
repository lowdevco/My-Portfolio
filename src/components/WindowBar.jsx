import { VscTerminalBash, VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc";

export default function WindowBar({ title, meta }) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
      <VscTerminalBash className="size-4 shrink-0 text-accent" aria-hidden="true" />
      <span className="truncate rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-fg/80">{title}</span>
      <div className="ml-auto flex shrink-0 items-center gap-3">
        {meta && <span className="hidden font-mono text-[10px] text-muted sm:inline">{meta}</span>}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {[VscChromeMinimize, VscChromeMaximize, VscChromeClose].map((Icon, i) => (
            <span key={i} className="grid size-5 place-items-center rounded-full bg-surface-2 text-muted">
              <Icon className="size-3" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
