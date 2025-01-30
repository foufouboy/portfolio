import { useState } from 'react'

import About from './sections/About';
import Projects from './sections/Projects';
import Around from './sections/Around';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Around />
      <Contact /> 
    </>
  )
}

export default App
