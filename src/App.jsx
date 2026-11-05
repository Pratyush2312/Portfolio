import About from "./components/About";
import Banner from "./components/Banner";
import Collaboration from "./components/Collaboration";
import Contact from "./components/Contact";
import Expereince from "./components/Expereince";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DesktopIndex from "./components/DescktopIndex";
import MobileIndex from "./components/MobileIndex";

const Plus = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    className={`pointer-events-none absolute z-10 hidden bg-black text-white/40 sm:block ${className}`}>
    <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const Row = ({ children, className = "" }) => (
  <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr]">
    {/* Horizontal divider */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.16)_25%,rgba(255,255,255,0.16)_75%,transparent)]"
    />

    {/* Main content */}
    <div
      className={`relative col-start-1 border-x border-white/10 lg:col-start-2 ${className}`}>
      {children}

      <Plus className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <Plus className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
    </div>
  </div>
);

const App = () => {
  return (
    <main className="relative min-h-screen bg-black pb-24 text-white lg:pb-0">
      <aside className="absolute inset-y-0 right-0 top-50 z-20 hidden w-[28.57%] lg:block">
        <div className="sticky top-24 pl-8">
          <DesktopIndex />
        </div>
      </aside>
      <MobileIndex/>
      <Row>
        <Banner />
      </Row>

      <Row>
        <Hero />
      </Row>

      <Row>
        <About />
      </Row>

      <Row className="px-3 py-2">
        <span className="font-sans font-semibold text-white">Experiences</span>
      </Row>

      <Row className="px-3 py-2">
        <Expereince />
      </Row>

      <Row className="px-3 py-2">
        <span className="font-sans font-semibold text-white">Projects</span>
      </Row>

      <Row className="px-3 py-2">
        <Projects />
      </Row>

      <Row className="px-3 py-2">
        <span className="font-sans font-semibold text-white">
          Collaborations
        </span>
      </Row>

      <Row className="px-3 py-2">
        <Collaboration />
      </Row>

      <Row className="px-3 py-2">
        <span className="font-sans font-semibold text-white">Skills</span>
      </Row>

      <Row className="px-3 py-2">
        <Skills />
      </Row>

      <Row className="px-3 py-2">
        <span className="font-sans font-semibold text-white">Contact</span>
      </Row>

      <Row className="px-3 py-2">
        <Contact />
      </Row>
    </main>
  );
};

export default App;
