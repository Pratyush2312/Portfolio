import React from "react";

const items = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "collaboration", label: "Collaboration" },
  { id: "contact", label: "Contact" },
];

const DesktopIndex = () => (
  <nav aria-label="Page sections" className="font-sans">
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
      Index
    </p>

    <ul className="flex flex-col gap-3">
      {items.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="text-sm text-[#93939C] transition-colors hover:text-white">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default DesktopIndex;
