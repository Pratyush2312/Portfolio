import React from "react";
import { DiRedis } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiPostman,
  SiGsap,
  SiJsonwebtokens,
  SiRazorpay,
  SiLangchaincorporate,
  SiLanggraph,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "C++", Icon: SiCplusplus },
      { name: "C", Icon: SiC },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "Redux", Icon: SiRedux },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Redis", Icon: DiRedis },
    ],
  },
  {
    label: "Authentication",
    items: [
      { name: "OAuth 2.0", Icon: TbBrandOauth },
      { name: "JWT", Icon: SiJsonwebtokens },
    ],
  },
  {
    label: "Generative AI",
    items: [
      { name: "Langchain", Icon: SiLangchaincorporate },
      { name: "Langgraph", Icon: SiLanggraph },
    ],
  },
  {
    label: "Integrations",
    items: [{ name: "Razorpay", Icon: SiRazorpay }, { name: "REST APIs" }],
  },
  {
    label: "Libraries",
    items: [
      { name: "Socket.io", Icon: SiSocketdotio },
      { name: "GSAP", Icon: SiGsap },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: SiPostman },
    ],
  },
];

const Skills = () => (
  <div id="skills" className="flex flex-col font-sans">
    {skillGroups.map(({ label, items }) => (
      <div
        key={label}
        className="
          grid grid-cols-1 gap-2
          border-b border-dotted border-neutral-800
          py-3 first:pt-1 last:border-b-0 last:pb-1
          sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-3
          md:grid-cols-[110px_minmax(0,1fr)] md:gap-4
        ">
        <span className="pt-1 text-xs tracking-wide text-[#93939C] sm:text-sm">
          {label}
        </span>

        <ul className="flex flex-wrap gap-1.5 sm:gap-2">
          {items.map(({ name, Icon }) => (
            <li
              key={name}
              className="
                group inline-flex items-center gap-1.5
                rounded-md border border-white/10
                bg-white/[0.03] px-2 py-1
                text-xs text-white/80
                transition-colors duration-200
                hover:border-white/25 hover:bg-white/[0.08]
                sm:gap-2 sm:px-2.5 sm:py-1.5 sm:text-sm
              ">
              {Icon && (
                <Icon
                  size={14}
                  aria-hidden="true"
                  className="shrink-0 text-[#93939C] transition-colors group-hover:text-white sm:size-[15px]"
                />
              )}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Skills;
