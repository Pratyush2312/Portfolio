import React from 'react'
import { MapPin, Laptop } from 'lucide-react'
const About = () => {
    return (
        <main
            id="about"
            className="about grid grid-cols-1 gap-10 py-20 md:grid-cols-2 md:gap-12 md:py-30"
        >
            <section className="flex flex-col gap-5">
                <div className="flex gap-3 font-mono text-[12px] font-medium text-[#71706F] md:text-[13px]">
                    <span>02</span>
                    <span>/</span>
                    <span>BACKGROUND</span>
                </div>

                <h1 className="about-heading font-editorial text-3xl leading-tight text-[#F2F0EB] sm:text-4xl">
                    Designing with logic, building
                    <br className="hidden sm:block" />
                    with craft.
                </h1>

                <p className="font-sans text-sm leading-7 text-[#A3A3A0] md:text-base">
                    As a Computer Science student, I enjoy building things and learning
                    how they work. I'm mainly focused on web development, working with
                    React and Node.js to turn ideas into practical applications. I'm
                    always exploring new technologies and improving my skills through
                    projects and hands-on experience.
                </p>

                <div className="flex h-auto w-full flex-col justify-center gap-4 border border-[#282828] bg-[#121212] px-5 py-6 text-white sm:h-30 sm:px-7">
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                        <Laptop size={20} />
                        B.Tech Computer Science & Engineering
                    </span>

                    <span className="flex items-center gap-2 text-sm sm:text-base">
                        <MapPin size={20} />
                        Kolkata
                    </span>
                </div>
            </section>

            <section className="flex flex-col gap-7">
                <div className="flex h-auto w-full flex-col justify-center gap-5 border border-[#282828] bg-[#121212] px-5 py-7 text-white sm:px-10 md:min-h-65 md:py-8">
                    <h1 className="font-editorial text-[24px] font-semibold text-[#F2F0EB]">
                        Building & Learning
                    </h1>

                    <p className="font-sans text-sm leading-7 text-[#A3A3A0] sm:text-base sm:leading-[1.75]">
                        I enjoy turning ideas into working projects and learning something
                        new with every one. From web applications with React and Node.js
                        to smaller experiments in Python, I like exploring different
                        technologies and seeing what I can create with them.
                        <br />
                        I'm still learning, but that's what makes building projects
                        exciting. Each project helps me understand development a little
                        better and gives me something new to improve.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex min-h-30 flex-col justify-center gap-2 border border-[#282828] bg-[#121212] px-5 py-5 text-white">
                        <p className="font-mono text-[13px] font-medium tracking-[1.5px] text-[#85837E]">
                            FRONTEND
                        </p>

                        <p className="max-w-70 font-sans text-[15px] leading-[1.45] text-[#C6C4C0]">
                            React, Tailwind CSS, JavaScript, Redux Toolkit, Responsive
                            Design, GSAP.
                        </p>
                    </div>

                    <div className="flex min-h-30 flex-col justify-center gap-2 border border-[#282828] bg-[#121212] px-5 py-5 text-white">
                        <p className="font-mono text-[13px] font-medium tracking-[1.5px] text-[#85837E]">
                            BACKEND
                        </p>

                        <p className="max-w-70 font-sans text-[15px] leading-[1.45] text-[#C6C4C0]">
                            Node.js, Express, MongoDB, Python, REST APIs, Git & GitHub.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About