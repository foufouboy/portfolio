import { useEffect } from "react";
import ParticlesAnimation from "../components/ParticlesAnimation";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-primary-bg text-primary relative flex h-screen w-full flex-col items-center justify-center px-1 text-center"
    >
      <ParticlesAnimation />
      <h1 className="font-display z-5 text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl">
        <div className="animate-slide-from-left">
          Hello, I'm <span className="text-primary-contrast">Issa</span>.
        </div>
        <div className="animate-slide-from-right">
          I'm a full-stack developer.
        </div>
      </h1>
      <a
        href="#about"
        className="animation-delay-1400 animate-bottom-in border-primary-contrast text-primary-contrast hover:text-primary-dark hover:border-primary-dark mt-4 rounded-sm border-2 border-solid px-5 py-2 text-xl text-[1rem] transition-colors duration-500 sm:text-[1.2rem] md:text-[1.3rem]"
      >
        View my work <span>↓</span>
      </a>
    </div>
  );
}

export default Hero;
