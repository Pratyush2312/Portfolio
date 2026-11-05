import React from "react";
import { TypewriterText } from "tatva-ui";

const Hero = () => {
  const lines = [
    "Turning 'what if?' into 'it works!'",
    "Open to building something cool.",
    "Building the plane while flying it",
  ];

  return (
    <header className="flex flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10 md:py-12">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Pratyush Singh
        </h1>

        <p className="text-sm text-[#93939C] sm:text-[15px] md:text-base">
          Computer Science student <span className="mx-1">·</span> Full Stack
          Developer
        </p>
      </div>

      <p className="min-h-5 font-mono text-xs text-neutral-500 sm:text-sm md:text-base">
        <TypewriterText
          words={lines}
          typingSpeed={50}
          deletingSpeed={50}
          pauseDuration={100}
          className="typewriter-text"
        />

        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-neutral-500 motion-safe:animate-pulse"
        />
      </p>
    </header>
  );
};

export default Hero;
