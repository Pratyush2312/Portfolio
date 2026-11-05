import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="px-5 py-6 flex flex-col gap-5 text-neutral-300">
      <p className="text-base leading-relaxed">
        Computer Science Student / Developer. I love turning ideas into products
        and bringing things to life through code.
      </p>
      <ul className="flex flex-col gap-2 list-disc pl-6 text-[15px] leading-relaxed marker:text-neutral-500">
        <li>
          Full-stack development, AI, and building meaningful digital
          experiences excite me.
        </li>

        <li>
          I enjoy solving problems, experimenting with new technologies, and
          learning by building.
        </li>

        <li>
          Currently exploring{" "}
          <strong className="text-white font-semibold">MERN Stack</strong>,
          <strong className="text-white font-semibold">
            {" "}
            AI-powered applications
          </strong>
          , and crafting beautiful UI experiences.
        </li>
      </ul>
      <div className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="group flex items-center gap-2 px-4 py-2 rounded-md
          bg-white text-black text-sm font-medium
          hover:bg-neutral-200 transition-colors">
          <MdOutlineMail size={18} />
          Send an Email
          <FiArrowUpRight className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-neutral-500">
          <span className="text-white font-semibold">Socials:</span>
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.github.com/Pratyush2312"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md
            border border-neutral-800 bg-neutral-900/50
            text-neutral-400 text-sm hover:text-white
            hover:border-neutral-600 transition-all">
            <FaGithub size={17} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pratyush-singh-70233635a"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md
            border border-neutral-800 bg-neutral-900/50
            text-neutral-400 text-sm hover:text-white
            hover:border-neutral-600 transition-all">
            <FaLinkedinIn size={17} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
