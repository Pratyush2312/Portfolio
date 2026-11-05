import React from "react";

const items = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "collaboration", label: "Collaboration" },
  { id: "contact", label: "Contact" },
];

const MobileIndex = () => (
  <nav
    aria-label="Mobile section navigation"
    className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-24px)] -translate-x-1/2 rounded-xl border border-white/10 bg-[#151517]/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
    <ul className="flex items-center justify-around gap-1">
      {items.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="block whitespace-nowrap rounded-lg px-2 py-2 font-sans text-[10px] text-[#93939C] transition-colors hover:bg-white/10 hover:text-white sm:px-3 sm:text-xs">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default MobileIndex;
