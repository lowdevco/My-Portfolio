import { FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiDjango,
  SiMysql,
  SiJquery,
  SiSqlite,
} from "react-icons/si";

export const categories = [
  {
    title: "Frontend",
    file: "frontend.config.js",
    skills: [
      { name: "React", Icon: FaReact },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "jQuery", Icon: SiJquery },
    ],
  },
  {
    title: "Backend & Database",
    file: "backend/settings.py",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "Django", Icon: SiDjango },
      { name: "Node.js", Icon: DiNodejsSmall },
      { name: "MySQL", Icon: SiMysql },
      { name: "SQLite", Icon: SiSqlite },
    ],
  },
  {
    title: "Developer Tools",
    file: ".tools/index.json",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "VS Code", Icon: VscVscode },
      { name: "Postman", Icon: SiPostman },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];
