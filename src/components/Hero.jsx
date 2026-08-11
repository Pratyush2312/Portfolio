import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
const Hero = () => {
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTOSection = (section) => {
        gsap.to(window, {
            scrollTo: `#${section}`,
            duration: 1,
            ease: "power3.out"
        })
    }

    return (
        <main className="grid grid-cols-1 py-25 md:grid-cols-2 md:py-50">
            <section className="flex flex-col gap-5">
                <span></span>

                <h1 className="hero-heading font-editorial text-5xl font-semibold leading-tight text-[#F2F0EB] md:text-7xl">
                    Hi, I'm Pratyush.
                </h1>

                <p className="hero-description font-sans text-sm leading-6 text-white md:text-xl md:leading-8">
                    Computer Science student building web experiences with React, Node.js and JavaScript. Always learning, always building.
                </p>

                <div className="hero-buttons flex flex-col gap-3 sm:flex-row sm:gap-5">
                    <button
                        onClick={() => scrollTOSection("projects")}
                        className="bg-[#f2f0eb] px-5 py-3 text-xs font-mono text-black sm:px-4 sm:py-2">
                        VIEW PROJECTS
                    </button>

                    <button
                        onClick={() => scrollTOSection("contact")}
                        className="border border-[#202127] px-4 py-3 font-mono text-xs text-white sm:py-2">
                        LET'S CONNECT
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Hero