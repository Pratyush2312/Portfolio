import { useLayoutEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import Terminal from './components/Terminal'
const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [terminal, setTerminal] = useState(false);

  const appRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const counter = {
        value: 0
      };
      const t1 = gsap.timeline();

      t1.to(counter, {
        value: 100,
        duration: 3,
        ease: "power2.out",
        onUpdate: () => {
          document.querySelector(".loader-percentage").textContent =
            `${Math.round(counter.value)}%`;
        }
      });

      t1.to('.loader', {
        yPercent: -100,
        duration: 1.2,
        ease: 'power2.inOut'
      })

        .from(".hero-heading", {
          y: 100,
          opacity: 0,
          duration: 1
        }, "-=0.5")

        .from(".hero-description", {
          y: 40,
          opacity: 0,
          duration: 1
        }, "-=0.5")

        .fromTo(".hero-buttons",
          {
            opacity: 0,
            scale: 0.95
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1
          }, "-=0.5")


      gsap.from(".about", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut"
      })

      gsap.from(".skill-heading", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      })

      gsap.from(".skill-card", {
        opacity: 0,
        rotateX: 35,
        scale: 0.9,
        transformPerspective: 800,
        duration: 1,
        stagger: 0.12,
        ease: "back.out(1.4)",

        scrollTrigger: {
          trigger: ".skills",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      });

      gsap.from(".proficiency-bar", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".skills",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      });

      gsap.from(".project-card", {
        opacity: 0,
        scale: 0.96,
        clipPath: "inset(8% 0 8% 0)",
        duration: 1,
        stagger: 0.18,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".projects",
          start: "top 70%",
          toggleActions: "play reverse play reverse"
        }
      })

      

    }, appRef);
    return () => ctx.revert();
  }, [])

  return (
    <main ref={appRef} className='px-3 py-3 md:py-5 md:px-10 min-h-screen bg-[#090909] flex flex-col '>
      {terminal && <Terminal setTerminal={setTerminal} />}
      <Loader />
      {/* <div className='grid-background'> */}
      <Navbar setTerminal={setTerminal} />
      <Hero />
      {/* </div> */}
      <hr className='text-[#373736]' />
      <About />
      <hr className='text-[#373736]' />
      <Skills />
      <hr className='text-[#373736]' />
      <Projects />
      <hr className='text-[#373736]' />
      <Contact />
    </main>
  )
}

export default App