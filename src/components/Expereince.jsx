import React, { useState } from "react";
import img from "../assets/Animation-VELoop-xJgvrjNN.gif";
import { IoIosArrowDown } from "react-icons/io";

const Experience = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section
      id="experience"
      className="flex flex-col px-3 py-3 font-sans sm:px-5 md:px-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md sm:h-14 sm:w-14">
          <img
            src={img}
            alt="Veloop Rewards logo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Veloop Rewards
            </h2>

            <p className="text-xs text-[#93939C] sm:text-sm">
              Frontend Developer Intern
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <button
              type="button"
              aria-expanded={showDescription}
              aria-label={
                showDescription
                  ? "Collapse experience details"
                  : "Expand experience details"
              }
              onClick={() => setShowDescription((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs text-white/80 transition-colors hover:text-white sm:text-sm">
              Aug 2026 - Sep 2026
              <IoIosArrowDown
                size={16}
                className={`text-[#93939C] transition-transform duration-300 ${
                  showDescription ? "rotate-180" : ""
                }`}
              />
            </button>

            <span className="text-xs text-[#93939C] sm:text-sm">Remote</span>
          </div>
        </div>
      </div>

      {/* Expandable description */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          showDescription
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <ul className="ml-4 mt-4 list-disc space-y-2 border-l border-white/10 pl-4 text-xs leading-relaxed text-[#93939C] sm:ml-7 sm:pl-5 sm:text-sm">
            <li>
              Redesigned the "Watch Ads" page of a live startup product using
              React, Vite, Bootstrap 5 and CSS Modules, with React Icons and
              Lucide for the UI.
            </li>

            <li>
              Built reusable, responsive components covering six UI states:
              loading, watching, verifying, success, completed and empty.
            </li>

            <li>
              Collaborated through Git and GitHub and prepared the frontend for
              production deployment.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
