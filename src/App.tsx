import { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";

import "./index.css";

const sections = [<Hero />, <About />, <Projects />, <Contact />];

function App() {
  const { ref, inView } = useInView();
  const [visibleSection, setVisibleSection] = useState("hero");

  const setInView = (inView, entry) => {
    if (inView) {
      setVisibleSection(entry.target.firstChild.getAttribute("id"));
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <InView
          onChange={setInView}
          threshold={0.2}
          key={`section_${index + 1}`}
        >
          {({ ref }) => {
            return (
              <div
                id={`section_${index + 1}`}
                ref={ref}
                className="flex flex-col items-center"
              >
                {section}
              </div>
            );
          }}
        </InView>
      ))}
      <Nav visibleSection={visibleSection} />
      <Footer />
    </>
  );
}

export default App;
