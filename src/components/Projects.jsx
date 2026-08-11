import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            name: "Whiff",
            category: "FULL STACK",
            subtitle: "Real-time proximity & sensory social networking platform.",
            description:
                "A full-stack perfume e-commerce platform with JWT authentication, product management, and a secure user experience.",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind"
            ],
            demo: true,
            repoLink: "https://github.com/Pratyush2312/Whiff",
            demoLink:"https://www.whiffperfume.in"
        },
        {
            name: "Yogankan",
            category: "FULL STACK",
            description:
                "A digital yoga judging system featuring dedicated Admin and Judge panels for streamlined competition management.",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind"
            ],
            demo: true,
            repoLink: "https://github.com/Pratyush2312/Yogankan",
            demoLink:"https://yogankan.vercel.app"
        },
        {
            name: "Hand Gesture Volume Controller",
            category: "COMPUTER VISION",
            description:
                "A computer vision application that detects hand gestures through a webcam and uses them to control the system volume in real time.",
            technologies: [
                "Python",
                "OpenCV",
                "MediaPipe",
                "PyCaw"
            ],
            demo: false,
            repoLink:"https://github.com/Pratyush2312/Hand-Gesture-Volume-Controller"
        }
    ];

    return (
        <main
            id="projects"
            className="projects flex flex-col gap-7 py-20 md:py-30"
        >
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 font-mono text-[12px] font-medium text-[#71706F] md:text-[13px]">
                    <span>03</span>
                    <span>/</span>
                    <span>PROJECTS</span>
                </div>

                <h1 className="font-editorial text-3xl leading-tight text-[#F2F0EB] sm:text-4xl">
                    Featured Projects
                </h1>
            </div>

            <section className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                    />
                ))}
            </section>
        </main>
    )
}

export default Projects
