export default function SectionHead({ index, path, title, children, as: Tag = "h2" }) {
  return (
    <header className="mb-16 md:mb-24">
      <div data-reveal className="label flex items-center gap-4">
        <span className="text-accent">{index}</span>
        <span>{path}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <Tag
        data-split
        className="mt-8 text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
      >
        {title}
      </Tag>
      {children}
    </header>
  );
}
