import { Menu, Terminal } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
const Navbar = ({ setTerminal }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTOSection = (section) => {
        gsap.to(window, {
            scrollTo: `#${section}`,
            duration: 1,
            ease: "power3.out"
        })
    }

    useEffect(() => {
        gsap.to(menuRef.current, {
            clipPath: showMenu
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 0% 0% 100%)",
            duration: 0.8,
            ease: "power3.inOut"
        });
    }, [showMenu]);

    return (
        <nav className='flex gap-2 justify-between items-center px-5 py-5 md:flex md:justify-between text-white bg-[#0E0E0E] md:py-5 md:px-5  border border-transparent rounded-4xl'>
            <h1 className='text-xl font-semibold md:text-2xl '>PRATYUSH</h1>
            <button
                onClick={() => setShowMenu(true)}
                className='md:hidden'>
                <Menu size={24} />
            </button>
            {/* {showMenu && */}
                <div ref={menuRef} className='flex flex-col gap-5 z-10 inset-0  fixed bg-black px-10 py-10'>
                    <button
                        onClick={() => setShowMenu(false)}
                        className='self-start py-3 px-5 bg-[#F2F0EB] text-[#090909] font-mono md:px-5 md:py-2 text-sm font-semibold'>Back</button>
                    <a href='#about' onClick={() => {
                        scrollTOSection("about");
                        setShowMenu(false);
                    }}>ABOUT</a>
                    <a href='#skills' onClick={() => {
                        scrollTOSection("skills");
                        setShowMenu(false);
                    }}>SKILLS</a>
                    <a href='#projects' onClick={() => {
                        scrollTOSection("projects");
                        setShowMenu(false);
                    }}>PROJECTS</a>
                    <a href='#contact' onClick={() => {
                        scrollTOSection("contact");
                        setShowMenu(false);
                    }}>CONTACT</a>
                    <button
                        onClick={() => { setTerminal(true) }}
                        className='self-start py-3 px-3 bg-[#171717] md:px-5 md:py-2 border-2 border-[#383837] text-[#F2F0EB] font-mono'><span className='text-sm flex gap-2 items-center'><Terminal size={20} />Terminal</span></button>
                    <button className='self-start py-3 px-3 bg-[#F2F0EB] text-[#090909] font-mono md:px-5 md:py-2 text-sm font-semibold'>Let's Connect</button>
                </div>
                
            {/* } */}
            <ul className=' hidden md:flex gap-10'>
                <a href='#about' onClick={() => scrollTOSection("about")}>ABOUT</a>
                <a href='#skills' onClick={() => scrollTOSection("skills")}>SKILLS</a>
                <a href='#projects' onClick={() => scrollTOSection("projects")}>PROJECTS</a>
                <a href='#contact' onClick={() => scrollTOSection("contact")}>CONTACT</a>
            </ul>
            <div className=' hidden md:flex md:gap-5'>
                <button
                    onClick={() => { setTerminal(true) }}
                    className='bg-[#171717] px-5 py-2 border-2 border-[#383837] text-[#F2F0EB] font-mono'><span className='text-sm flex gap-2 items-center'><Terminal size={20} />Terminal</span></button>
                <button className='bg-[#F2F0EB] text-[#090909] font-mono md:px-5 md:py-2 text-sm font-semibold'>Let's Connect</button>
            </div>
        </nav>
    )
}

export default Navbar