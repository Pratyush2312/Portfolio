import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

import whiffDemo from "../assets/whiff.png";
import yogankanDemo from "../assets/yogankan.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: whiffDemo,
    title: "Whiff",
    description:
      "A modern full-stack perfume e-commerce platform featuring elegant UI, seamless product discovery, and a smooth shopping experience.",
    techStack: [
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "TailwindCSS", Icon: RiTailwindCssFill },
      { name: "Express", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    liveURL: "https://www.whiffperfume.in/",
  },
  {
    image: yogankanDemo,
    title: "Yogankan",
    description:
      "A digital yoga judging system featuring dedicated Admin and Judge panels for streamlined competition management.",
    techStack: [
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "TailwindCSS", Icon: RiTailwindCssFill },
      { name: "Express", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    liveURL: "https://yogankan.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col gap-7 px-3 py-4 font-sans sm:gap-9 sm:px-5 md:gap-10 md:px-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;
