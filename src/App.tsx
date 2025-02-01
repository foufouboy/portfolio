import { useState } from "react";
import { useInView, InView } from "react-intersection-observer";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Around from "./sections/Around";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";

import "./index.css";

const sections = [<Hero />, <About />, <Projects />, <Around />, <Contact />];

function App() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const [visibleSection, setVisibleSection] = useState("#hero");

  const setInView = (inView, entry) => {
    if (inView) {
      console.log(entry.target.firstChild.getAttribute("id"));
      setVisibleSection(entry.target.firstChild.getAttribute("id"));
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <InView
          onChange={setInView}
          threshold={0.8}
          key={`section_${index + 1}`}
        >
          {({ ref }) => {
            return (
              <div id={`section_${index + 1}`} ref={ref}>
                {section}
              </div>
            );
          }}
        </InView>
      ))}
      <Nav visibleSection={visibleSection} />
    </>
  );
}

export default App;
