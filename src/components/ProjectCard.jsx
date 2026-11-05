import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex min-w-0 flex-col gap-3 font-sans">
      <div className="overflow-hidden rounded-md border border-neutral-800 bg-[#0b0b0d] p-2 sm:p-3">
        <div className="aspect-16/10 overflow-hidden rounded-md border border-neutral-800 bg-black">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
          {project.title}
        </h2>

        <p className="text-xs leading-relaxed text-[#93939C] sm:text-sm">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap items-center gap-2">
          {project.techStack.map(({ name, Icon }) => (
            <li key={name} className="group/icon relative">
              {Icon && (
                <>
                  <Icon
                    role="img"
                    aria-label={name}
                    size={17}
                    className="text-[#93939C] transition-colors group-hover/icon:text-white sm:size-[18px]"
                  />

                  <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover/icon:opacity-100">
                    {name}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>

        <a
          href={project.liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs text-[#93939C] transition-colors hover:text-white sm:text-[13px]">
          View Project
          <MdArrowOutward size={15} />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
