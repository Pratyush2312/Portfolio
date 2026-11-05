import React from "react";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGsap } from "react-icons/si";

const REPO_URL = "";

const highlights = [
  "Contributing to the development and improvement of reusable React components.",
  "Working on interactive UI elements, animations, and component styling.",
  "Improving component usability and consistency across the library.",
  "Collaborating through Git and GitHub workflows, including code contributions and version control.",
];

const stack = [
  { name: "React", Icon: FaReact },
  { name: "TypeScript", Icon: BsTypescript },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "GSAP", Icon: SiGsap },
];

const Collaboration = () => (
  <section
    id="collaboration"
    className="flex flex-col gap-3 px-3 py-4 font-sans sm:gap-4 sm:px-5 md:px-6">
    {/* Header */}
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
        Tatva UI
      </h3>

      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-[#93939C] sm:text-xs">
        Contributor
      </span>
    </div>

    <p className="text-xs text-[#93939C] sm:text-sm">
      Open-Source Collaboration
    </p>

    <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">
      Collaborating on Tatva UI, a React component library focused on reusable,
      interactive, and visually engaging UI components.
    </p>

    {/* Contributions */}
    <ul className="flex flex-col gap-2">
      {highlights.map((text) => (
        <li
          key={text}
          className="flex items-start gap-3 text-xs leading-relaxed text-white/80 sm:text-sm">
          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#93939C] sm:mt-2" />
          <span>{text}</span>
        </li>
      ))}
    </ul>

    {/* Stack and links */}
    <div className="mt-2 flex flex-col gap-4 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
      <ul className="flex items-center gap-3">
        {stack.map(({ name, Icon }) => (
          <li key={name} className="group relative">
            <Icon
              role="img"
              aria-label={name}
              size={18}
              className="text-[#93939C] transition-colors group-hover:text-white"
            />

            <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {name}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {REPO_URL && (
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#93939C] transition-colors hover:text-white sm:text-sm">
            View Repository <FiArrowUpRight size={14} />
          </a>
        )}

        <a
          href="https://www.tattvaui.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[#93939C] transition-colors hover:text-white sm:text-sm">
          Check the library <FiArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default Collaboration;
