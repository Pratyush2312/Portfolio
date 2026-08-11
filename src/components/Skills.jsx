import { CodeXml, Server, Database, PanelsTopLeft, GitBranch } from 'lucide-react'
import React from 'react'

const Skills = () => {

    const skills = [
        {
            name: "React",
            technology: "Frontend",
            proficiency: 92,
            icon: CodeXml
        },
        {
            name: "JavaScript (ES6+)",
            technology: "Languages",
            proficiency: 96,
            icon: CodeXml
        },
        {
            name: "Node.js",
            technology: "Backend",
            proficiency: 85,
            icon: Server
        },
        {
            name: "Express",
            technology: "Backend",
            proficiency: 82,
            icon: Server
        },
        {
            name: "MongoDB",
            technology: "Database",
            proficiency: 80,
            icon: Database
        },
        {
            name: "Tailwind CSS",
            technology: "Styling",
            proficiency: 94,
            icon: PanelsTopLeft
        },
        {
            name: "Git & GitHub",
            technology: "Tools",
            proficiency: 88,
            icon: GitBranch
        },
        {
            name: "Python",
            technology: "Languages",
            proficiency: 85,
            icon: CodeXml
        }
    ];

    return (
        <main
            id="skills"
            className="skills flex flex-col gap-7 py-20 md:py-30"
        >
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 font-mono text-[12px] font-medium text-[#71706F] md:text-[13px]">
                    <span>03</span>
                    <span>/</span>
                    <span>SKILLS</span>
                </div>

                <h1 className="skill-heading font-editorial text-3xl leading-tight text-[#F2F0EB] sm:text-4xl">
                    Technical Stack & Proficiency
                </h1>
            </div>

            <section className="grid grid-cols-1 gap-y-5 text-white sm:grid-cols-2 md:grid-cols-4 md:gap-x-6">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className="skill-card flex w-full flex-col gap-4 border border-[#282828] bg-[#121212] px-4 py-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center bg-[#1C1C1C] p-3">
                                    {Icon && <Icon size={24} />}
                                </div>

                                <div className="font-mono text-xs font-medium text-[#82817F] sm:text-sm">
                                    {skill.technology}
                                </div>
                            </div>

                            <h1 className="font-sans text-base font-semibold sm:text-lg">
                                {skill.name}
                            </h1>

                            <div className="h-2 w-full rounded-2xl bg-[#1C1C1C]">
                                <div
                                    className="proficiency-bar h-2 rounded-2xl bg-white"
                                    style={{
                                        width: `${skill.proficiency}%`,
                                    }}
                                />
                            </div>

                            <div className="flex justify-between">
                                <p className="font-mono text-xs font-medium text-[#82817F] sm:text-sm">
                                    Proficiency
                                </p>

                                <p className="font-mono text-xs font-medium text-[#82817F] sm:text-sm">
                                    {skill.proficiency}%
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default Skills
