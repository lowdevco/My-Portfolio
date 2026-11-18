import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHead from "@/components/SectionHead";
import WindowBar from "@/components/WindowBar";
import { gsap, useGSAP, prefersMotion } from "@/lib/gsap";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { categories } from "@/data/skills";
import { EMAIL, SOCIALS } from "@/data/profile";
import resumeFile from "@/assets/Resume/Resume.pdf";

const K = ({ children }) => <span className="text-accent">{children}</span>;
const S = ({ children }) => <span className="text-[#a6e3a1]">{children}</span>;
const M = ({ children }) => <span className="text-muted">{children}</span>;
const Err = ({ children }) => <span className="text-[#ff7ab2]">{children}</span>;
const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-fg underline decoration-accent/50 underline-offset-4 hover:text-accent">
    {children}
  </a>
);

const FILES = { "about.txt": "about", "skills.json": "skills", "experience.log": "experience", "contact.md": "contact" };
const LOGO = ["██╗", "╚██╗", " ╚██╗", " ██╔╝", "██╔╝ ██████╗", "╚═╝  ╚═════╝"].join("\n");
const SUGGESTIONS = ["help", "whoami", "projects", "skills", "neofetch", "snake", "matrix"];

const fmtDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  dateStyle: "full",
  timeStyle: "long",
  hourCycle: "h23",
});

const uptime = () => {
  const now = new Date();
  const months = (now.getFullYear() - 2025) * 12 + now.getMonth() - 5;
  return `${Math.floor(months / 12)}y ${months % 12}m`;
};

const findProject = (q = "") => {
  const n = Number(q);
  if (Number.isInteger(n) && n >= 1) return projects[n - 1];
  return projects.find((p) => p.title.toLowerCase().startsWith(q.toLowerCase()));
};

const STORE = "lowdevco.snake";
const loadScores = () => {
  try {
    return JSON.parse(localStorage.getItem(STORE)) ?? { high: 0, recent: [] };
  } catch {
    return { high: 0, recent: [] };
  }
};
const saveScore = (score) => {
  const prev = loadScores();
  const next = { high: Math.max(prev.high, score), recent: [score, ...prev.recent].slice(0, 5) };
  try {
    localStorage.setItem(STORE, JSON.stringify(next));
  } catch {
    // private mode / storage full: the game still works, scores just don't persist
  }
  return { ...next, isNew: score > prev.high };
};

const openUrl = (url) => window.open(url, "_blank", "noopener,noreferrer");

const COMMANDS = {
  help: {
    desc: "list available commands",
    run: () => (
      <div className="grid gap-x-8 gap-y-1 sm:grid-cols-[11rem_1fr]">
        {Object.entries(COMMANDS)
          .filter(([, c]) => c.desc)
          .map(([name, c]) => (
            <Fragment key={name}>
              <K>
                {name}
                {c.usage && <M> {c.usage}</M>}
              </K>
              <M>{c.desc}</M>
            </Fragment>
          ))}
      </div>
    ),
  },
  whoami: {
    desc: "who is behind this",
    run: () => (
      <p>
        Muhammad Irfan — <K>Full Stack Developer</K> from Kerala, India. I build fast, scalable web apps with React,
        Django & Python.
      </p>
    ),
  },
  about: {
    desc: "a short bio",
    run: () => (
      <p className="max-w-2xl">
        Passionate about building the future, one high-performance, user-centric web application at a time. With a
        solid foundation in both front-end and back-end technologies, I thrive on creating seamless digital
        experiences that captivate users and drive results.
      </p>
    ),
  },
  skills: {
    desc: "tech stack",
    run: () => (
      <div>
        {"{"}
        {categories.map((c, i) => (
          <p key={c.title} className="pl-4">
            <K>"{c.title}"</K>: [{c.skills.map((s, j) => (
              <Fragment key={s.name}>
                <S>"{s.name}"</S>
                {j < c.skills.length - 1 && ", "}
              </Fragment>
            ))}]{i < categories.length - 1 && ","}
          </p>
        ))}
        {"}"}
      </div>
    ),
  },
  experience: {
    desc: "work history (git log)",
    run: () => (
      <div className="space-y-3">
        {experiences.map((e) => (
          <div key={e.hash}>
            <p className="text-[#e5c07b]">
              commit {e.hash}
              {e.head && <span className="text-ok"> (HEAD → main)</span>}
            </p>
            <p>
              <M>Date:</M> {e.duration}
            </p>
            <p className="pl-4">
              {e.role} @ <K>{e.company}</K>
            </p>
          </div>
        ))}
      </div>
    ),
  },
  projects: {
    desc: "list my projects",
    run: () => (
      <div>
        {projects.map((p, i) => (
          <p key={p.title} className="flex flex-wrap gap-x-4">
            <M>{String(i + 1).padStart(2, "0")}</M>
            <Ext href={p.link}>{p.title}</Ext>
            <M>{p.tags.join(" / ")}</M>
          </p>
        ))}
        <p className="mt-2">
          <M>Type</M> <K>open 1</K> <M>for a live demo or</M> <K>code 1</K> <M>for the source.</M>
        </p>
      </div>
    ),
  },
  open: {
    usage: "<n|name>",
    desc: "open a project's live demo",
    run: ([q]) => {
      const p = findProject(q);
      if (!p) return <Err>open: no project "{q ?? ""}". Try 'projects'.</Err>;
      openUrl(p.link);
      return <p>Opening {p.title} ↗</p>;
    },
  },
  code: {
    usage: "<n|name>",
    desc: "open a project's source on GitHub",
    run: ([q]) => {
      const p = findProject(q);
      if (!p) return <Err>code: no project "{q ?? ""}". Try 'projects'.</Err>;
      openUrl(p.github);
      return <p>Opening {p.title} on GitHub ↗</p>;
    },
  },
  contact: {
    desc: "email and socials",
    run: () => (
      <div>
        <p>
          <M>email</M> <Ext href={`mailto:${EMAIL}`}>{EMAIL}</Ext>
        </p>
        {SOCIALS.map((s) => (
          <p key={s.name}>
            <M>{s.name.toLowerCase().padEnd(9, " ")}</M> <Ext href={s.link}>{s.handle}</Ext>
          </p>
        ))}
      </div>
    ),
  },
  resume: {
    desc: "download my résumé",
    run: () => {
      const a = document.createElement("a");
      a.href = resumeFile;
      a.download = "Irfan-Resume.pdf";
      a.click();
      return <p>Downloading Irfan-Resume.pdf…</p>;
    },
  },
  neofetch: {
    desc: "system info",
    run: () => (
      <div className="flex flex-col gap-6 sm:flex-row">
        <pre className="leading-tight text-accent">{LOGO}</pre>
        <div>
          <p>
            <span className="text-ok">irfan</span>@<span className="text-ok">lowdevco</span>
          </p>
          <M>--------------------</M>
          {[
            ["OS", "Portfolio OS (React + GSAP)"],
            ["Host", "Kerala, India"],
            ["Uptime", `${uptime()} of shipping code`],
            ["Shell", "lsh 1.0"],
            ["Role", "Full Stack Developer"],
            ["Stack", "Python · Django · React"],
            ["Editor", "VS Code"],
            ["Status", "Available for work"],
          ].map(([k, v]) => (
            <p key={k}>
              <K>{k}</K>: {v}
            </p>
          ))}
          <div className="mt-2 flex gap-1" aria-hidden="true">
            {["#0a0a0b", "#ff7ab2", "#a6e3a1", "#e5c07b", "#7dd3fc", "#a57aff", "#ededed"].map((c) => (
              <span key={c} className="size-4 border border-line" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  ls: {
    desc: "list files",
    run: () => (
      <p className="flex flex-wrap gap-x-6">
        {Object.keys(FILES).map((f) => (
          <span key={f}>{f}</span>
        ))}
        <span>resume.pdf</span>
        <K>projects/</K>
      </p>
    ),
  },
  cat: {
    usage: "<file>",
    desc: "print a file",
    run: ([f], ctx) => {
      if (FILES[f]) return COMMANDS[FILES[f]].run([], ctx);
      if (f === "resume.pdf") return <M>cat: resume.pdf: binary file. Try 'resume'.</M>;
      if (f?.startsWith("projects")) return <Err>cat: projects/: Is a directory</Err>;
      return <Err>cat: {f ?? ""}: No such file. Try 'ls'.</Err>;
    },
  },
  cd: {
    usage: "<dir>",
    desc: "change page (~, projects)",
    run: ([d = "~"], ctx) => {
      if (["~", "/", ".."].includes(d)) return ctx.navigate("/"), null;
      if (d.replace(/\/$/, "") === "projects") return ctx.navigate("/projects"), null;
      return <Err>cd: {d}: No such directory</Err>;
    },
  },
  pwd: { desc: "print working directory", run: () => <p>/home/irfan</p> },
  date: { desc: "current time in Kerala", run: () => <p>{fmtDate.format(new Date())}</p> },
  echo: { usage: "<text>", desc: "print text", run: (args) => <p>{args.join(" ")}</p> },
  history: {
    desc: "command history",
    run: (_, ctx) => (
      <div>
        {ctx.history.map((h, i) => (
          <p key={i}>
            <M>{String(i + 1).padStart(4, " ")}</M> {h}
          </p>
        ))}
      </div>
    ),
  },
  clear: { desc: "clear the screen (Ctrl+L)", run: () => null },
  matrix: { desc: "follow the white rabbit", run: (_, ctx) => ctx.launch("matrix") },
  snake: { desc: "play snake (scores saved on this device)", run: (_, ctx) => ctx.launch("snake") },
  scores: {
    desc: "your snake high score",
    run: () => {
      const { high, recent } = loadScores();
      if (!recent.length) return <M>No games yet. Type 'snake' to play.</M>;
      return (
        <div>
          <p>
            high score <S>{high}</S>
          </p>
          <p>
            <M>last games:</M> {recent.join(", ")}
          </p>
        </div>
      );
    },
  },
  exit: { desc: "back to the homepage", run: (_, ctx) => (ctx.navigate("/"), null) },
  sudo: {
    run: () => (
      <p>
        <Err>irfan is not in the sudoers file. This incident will be reported.</Err> <M>Try</M> <K>contact</K>{" "}
        <M>instead.</M>
      </p>
    ),
  },
  rm: { run: () => <Err>rm: permission denied. This portfolio is read-only.</Err> },
};

const NAMES = Object.keys(COMMANDS).filter((n) => COMMANDS[n].desc);

function Prompt({ children }) {
  return (
    <span className="whitespace-pre-wrap break-all">
      <span className="text-ok">irfan@lowdevco</span>
      <M>:</M>
      <K>~</K>
      <M>$ </M>
      {children}
    </span>
  );
}

function Welcome({ when }) {
  return (
    <div>
      <p>
        lowdevco shell <M>v1.0.0</M> — Muhammad Irfan's portfolio
      </p>
      <M>Last login: {when} on ttys001</M>
      <p className="mt-3">
        Type <K>help</K> to list commands. Try <K>neofetch</K>, <K>projects</K> or <K>snake</K>.
      </p>
      <M>Tab autocompletes · ↑ ↓ browse history · Ctrl+L clears</M>
    </div>
  );
}

function Matrix({ onExit }) {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const g = c.getContext("2d");
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const size = 14;
    const chars = "01<>/{}[]=+*#アイウエオカキクケコサシスセソ";
    const drops = Array.from({ length: Math.ceil(c.width / size) }, () => Math.random() * -30);
    const tick = setInterval(() => {
      g.fillStyle = "rgba(17,17,19,0.16)";
      g.fillRect(0, 0, c.width, c.height);
      g.fillStyle = "#a57aff";
      g.font = `${size}px "Geist Mono", monospace`;
      drops.forEach((y, i) => {
        g.fillText(chars[Math.floor(Math.random() * chars.length)], i * size, y * size);
        drops[i] = y * size > c.height && Math.random() > 0.97 ? 0 : y + 1;
      });
    }, 50);
    const onKey = (e) => {
      e.preventDefault();
      onExit();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearInterval(tick);
      window.removeEventListener("keydown", onKey);
    };
  }, [onExit]);

  return (
    <button type="button" onClick={onExit} aria-label="Exit matrix" className="absolute inset-0 z-10 bg-surface">
      <canvas ref={ref} aria-hidden="true" className="block size-full" />
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-bg/90 px-4 py-2 font-mono text-xs text-fg">
        press any key or click to wake up
      </span>
    </button>
  );
}

const RESERVE = 160; // px kept free for the score line, game-over text and buttons
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const KEYS = {
  arrowup: [0, -1],
  w: [0, -1],
  arrowdown: [0, 1],
  s: [0, 1],
  arrowleft: [-1, 0],
  a: [-1, 0],
  arrowright: [1, 0],
  d: [1, 0],
};
const CELL = {
  0: <span className="text-muted/30">· </span>,
  1: <span className="text-accent">██</span>,
  2: <span className="text-fg">██</span>,
  3: <span className="text-[#a6e3a1]">{"{}"}</span>,
};

function Snake({ onExit }) {
  const box = useRef(null);
  const probe = useRef(null);
  const ctrl = useRef(null);
  const swipe = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    let cols = 0;
    let rows = 0;
    let snake, dir, next, food, state, timer;
    let score = 0;
    let high = loadScores().high;
    let isNew = false;
    const same = (a, b) => a.x === b.x && a.y === b.y;
    const place = () => {
      do food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
      while (snake.some((s) => same(s, food)));
    };
    const paint = () => setView({ cols, rows, snake: [...snake], food, score, high, state, isNew });
    const measure = () => {
      const b = box.current.getBoundingClientRect();
      const c = probe.current.getBoundingClientRect();
      return [
        clamp(Math.floor(((b.width - 40) * 0.94) / c.width) - 1, 10, 90),
        clamp(Math.floor((b.height - RESERVE) / c.height) - 2, 6, 45),
      ];
    };

    const tick = () => {
      dir = next;
      const head = { x: (snake[0].x + dir.x + cols) % cols, y: (snake[0].y + dir.y + rows) % rows };
      const eats = same(head, food);
      const body = eats ? snake : snake.slice(0, -1);
      if (body.some((s) => same(s, head))) {
        state = "over";
        ({ high, isNew } = saveScore(score));
        return paint();
      }
      snake = [head, ...body];
      if (eats) {
        score += 1;
        place();
      }
      paint();
      timer = setTimeout(tick, Math.max(60, 130 - score * 4));
    };
    const start = () => {
      clearTimeout(timer);
      const cx = Math.floor(cols / 2);
      const cy = Math.floor(rows / 2);
      snake = [{ x: cx, y: cy }, { x: cx - 1, y: cy }, { x: cx - 2, y: cy }];
      dir = next = { x: 1, y: 0 };
      score = 0;
      state = "play";
      isNew = false;
      place();
      paint();
      timer = setTimeout(tick, 500);
    };
    const turn = (x, y) => {
      if (state === "play" && (x !== -dir.x || y !== -dir.y)) next = { x, y };
    };
    const pause = () => {
      if (state === "play") {
        state = "pause";
        clearTimeout(timer);
        paint();
      } else if (state === "pause") {
        state = "play";
        tick();
      }
    };
    const quit = () => {
      clearTimeout(timer);
      if (state !== "over" && score > 0) ({ high, isNew } = saveScore(score));
      onExit({ score, high, isNew });
    };
    const onKey = (e) => {
      const k = e.key.toLowerCase();
      if (KEYS[k]) turn(...KEYS[k]);
      else if (k === "escape" || k === "q") quit();
      else if (k === "p" || k === " ") pause();
      else if (k === "enter" && state === "over") start();
      else return;
      e.preventDefault();
    };

    // Fires once on observe (first game) and again if the window is resized or rotated.
    const ro = new ResizeObserver(() => {
      const [c, r] = measure();
      if (c === cols && r === rows) return;
      cols = c;
      rows = r;
      start();
    });
    ro.observe(box.current);
    ctrl.current = { turn, pause, quit, restart: () => state === "over" && start() };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [onExit]);

  let board = null;
  if (view) {
    const grid = Array.from({ length: view.rows }, () => Array(view.cols).fill(0));
    view.snake.forEach((s, i) => (grid[s.y][s.x] = i === 0 ? 2 : 1));
    grid[view.food.y][view.food.x] = 3;
    const bar = "─".repeat(view.cols * 2);
    board = (
      <>
        <p>
          <K>snake.py</K> <M>—</M> score <K>{view.score}</K> <M>·</M> high <S>{view.high}</S>
          {view.state === "pause" && <M> · paused</M>}
        </p>

        <pre className="leading-[1.15]" aria-label={`Snake board, score ${view.score}`}>
          <M>┌{bar}┐</M>
          {"\n"}
          {grid.map((row, y) => (
            <Fragment key={y}>
              <M>│</M>
              {row.map((c, x) => (
                <Fragment key={x}>{CELL[c]}</Fragment>
              ))}
              <M>│</M>
              {"\n"}
            </Fragment>
          ))}
          <M>└{bar}┘</M>
        </pre>

        {view.state === "over" ? (
          <p className="text-center">
            <Err>GAME OVER</Err> <M>·</M> score {view.score}
            {view.isNew && <span className="text-ok"> · NEW HIGH SCORE!</span>}
            <br />
            <M>[Enter / tap] play again · [Esc] quit</M>
          </p>
        ) : (
          <p className="text-center">
            <M>[←↑↓→ / WASD / swipe] move · [P] pause · [Esc] quit</M>
          </p>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => ctrl.current.pause()}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-accent hover:text-accent"
          >
            [p] pause
          </button>
          <button
            type="button"
            onClick={() => ctrl.current.quit()}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-accent hover:text-accent"
          >
            [esc] quit
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      ref={box}
      onPointerDown={(e) => (swipe.current = { x: e.clientX, y: e.clientY })}
      onPointerUp={(e) => {
        if (e.target.closest("button") || !swipe.current) return;
        const dx = e.clientX - swipe.current.x;
        const dy = e.clientY - swipe.current.y;
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return ctrl.current.restart();
        if (Math.abs(dx) > Math.abs(dy)) ctrl.current.turn(Math.sign(dx), 0);
        else ctrl.current.turn(0, Math.sign(dy));
      }}
      className="absolute inset-0 z-10 flex touch-none select-none flex-col items-center justify-center gap-3 overflow-hidden bg-surface p-4 font-mono text-[12px] text-fg/90 sm:text-[13px] md:text-[14px]"
    >
      <span ref={probe} aria-hidden="true" className="invisible absolute left-0 top-0 leading-[1.15]">
        ██
      </span>
      {board}
    </div>
  );
}

function Terminal() {
  const navigate = useNavigate();
  const root = useRef(null);
  const body = useRef(null);
  const input = useRef(null);
  const nextId = useRef(1);
  const histIdx = useRef(-1);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState(null);
  const [entries, setEntries] = useState(() => [{ id: 0, out: <Welcome when={fmtDate.format(new Date())} /> }]);

  const push = useCallback((entry) => setEntries((e) => [...e, { id: nextId.current++, ...entry }]), []);
  const focus = useCallback(() => input.current?.focus({ preventScroll: true }), []);
  const exitMatrix = useCallback(() => {
    setMode(null);
    focus();
  }, [focus]);
  const exitSnake = useCallback(
    ({ score, high, isNew }) => {
      setMode(null);
      push({
        out: (
          <p>
            snake: score <K>{score}</K> <M>·</M> high score <S>{high}</S>
            {isNew && <span className="text-ok"> · new high score!</span>}
          </p>
        ),
      });
      focus();
    },
    [push, focus],
  );

  const run = (raw) => {
    const line = raw.trim();
    histIdx.current = -1;
    setValue("");
    if (!line) return push({ input: "" });
    const all = [...history, line];
    setHistory(all);
    const [name, ...args] = line.split(/\s+/);
    if (name.toLowerCase() === "clear") return setEntries([]);
    const cmd = COMMANDS[name.toLowerCase()];
    const out = cmd ? (
      cmd.run(args, {
        navigate,
        history: all,
        launch: (game) => {
          if (game === "matrix" && !prefersMotion()) return <M>matrix: disabled because reduced motion is on.</M>;
          input.current?.blur();
          setMode(game);
          return game === "matrix" ? <S>Wake up, Neo…</S> : <M>Launching snake.py…</M>;
        },
      })
    ) : (
      <Err>
        command not found: {name}. Type 'help' to see what's available.
      </Err>
    );
    push({ input: line, out });
  };

  const complete = () => {
    const [name, ...rest] = value.split(" ");
    const pool = rest.length === 0 ? NAMES : name === "cat" ? [...Object.keys(FILES), "resume.pdf"] : [];
    const word = rest.length === 0 ? name.toLowerCase() : rest.join(" ");
    const hits = pool.filter((p) => p.startsWith(word));
    if (hits.length === 1) setValue(rest.length === 0 ? `${hits[0]} ` : `${name} ${hits[0]}`);
    else if (hits.length > 1) push({ input: value, out: <p className="flex flex-wrap gap-x-6">{hits.map((h) => <span key={h}>{h}</span>)}</p> });
  };

  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      histIdx.current = histIdx.current === -1 ? history.length - 1 : Math.max(0, histIdx.current - 1);
      setValue(history[histIdx.current]);
    } else if (e.key === "ArrowDown" && histIdx.current !== -1) {
      e.preventDefault();
      histIdx.current += 1;
      if (histIdx.current >= history.length) histIdx.current = -1;
      setValue(histIdx.current === -1 ? "" : history[histIdx.current]);
    } else if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setEntries([]);
    } else if (e.ctrlKey && e.key.toLowerCase() === "c" && !window.getSelection()?.toString()) {
      e.preventDefault();
      push({ input: `${value}^C` });
      setValue("");
    }
  };

  useEffect(() => {
    body.current.scrollTop = body.current.scrollHeight;
  }, [entries]);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) focus();
  }, [focus]);

  useGSAP(
    () => {
      if (!prefersMotion()) return;
      const last = body.current.querySelector("[data-entry]:last-of-type");
      if (last) gsap.from(last, { autoAlpha: 0, y: 8, duration: 0.4, ease: "power3.out" });
    },
    { scope: root, dependencies: [entries.length] },
  );

  return (
    <Layout>
      <main ref={root} className="wrap pt-36 pb-24 md:pt-44 md:pb-32">
        <SectionHead
          as="h1"
          index=">_"
          path="~/terminal"
          title={
            <>
              Interactive <span className="text-accent">terminal.</span>
            </>
          }
        >
          <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Explore my work the developer way. Type <code className="font-mono text-fg">help</code> to get started, or
            tap a command below.
          </p>
        </SectionHead>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_40px_120px_-40px_rgba(165,122,255,0.35)]">
          <WindowBar title={`irfan@lowdevco: ~${mode ? ` — ${mode}` : ""}`} meta="bash" />
          <div className="relative">
            <div
              ref={body}
              onClick={() => !window.getSelection()?.toString() && focus()}
              role="log"
              aria-live="polite"
              className="h-[62svh] min-h-[380px] overflow-y-auto overscroll-contain p-5 font-mono text-[13px] leading-relaxed text-fg/90 md:p-6"
            >
              {entries.map((e) => (
                <div key={e.id} data-entry className="mb-3">
                  {e.input !== undefined && <Prompt>{e.input}</Prompt>}
                  {e.out && <div className={e.input !== undefined ? "mt-1" : ""}>{e.out}</div>}
                </div>
              ))}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  run(value);
                }}
                className="flex"
              >
                <label htmlFor="term-input" className="shrink-0">
                  <Prompt />
                </label>
                <input
                  id="term-input"
                  ref={input}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  enterKeyHint="send"
                  aria-label="Terminal command"
                  className="min-w-0 flex-1 bg-transparent text-fg caret-accent outline-none focus-visible:outline-none"
                />
              </form>
            </div>
            {mode === "matrix" && <Matrix onExit={exitMatrix} />}
            {mode === "snake" && <Snake onExit={exitSnake} />}
          </div>
        </div>

        <div data-reveal className="mt-6 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                run(s);
                focus();
              }}
              className="rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {s}
            </button>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Terminal;
