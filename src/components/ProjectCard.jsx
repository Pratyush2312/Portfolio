import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import { RiGithubFill } from "@remixicon/react";
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card flex flex-col gap-6 bg-[#121212] border border-[#282828] p-10 text-[#F2F0EB]">
            <div className="project-content flex items-center justify-between">
                <div className="flex justify-center items-center border border-[#282828] px-3 py-2 font-mono text-xs">
                    {project.category}
                </div>
                
                <ArrowUpRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#85837E]"
                />
            </div>

          
            <div className="project-content flex flex-col gap-3">
                <h2 className="font-editorial text-4xl font-medium">
                    {project.name}
                </h2>

                
            </div>

            <p className="project-content max-w-xl font-sans text-base leading-7 text-[#A3A3A0]">
                {project.description}
            </p>

            <div className="project-divider h-px w-full bg-[#282828]" />

            <div className="project-content flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="border border-[#282828] px-3 py-1.5 font-mono text-xs text-[#C6C4C0]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={project.repoLink} className="flex-1 flex gap-2 items-center justify-center rounded-2xl bg-[#090909] py-3 font-mono text-sm font-semibold text-[#F2F0EB]">
                    <span>Github</span> <RiGithubFill className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </a>

                {project.demo && (
                    <a href={project.demoLink} className="flex-1 flex gap-2 items-center justify-center 
                    rounded-2xl bg-[#F2F0EB] py-3 font-mono text-sm font-semibold text-[#090909]">
                        <span>Live Demo</span> <SquareArrowOutUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;