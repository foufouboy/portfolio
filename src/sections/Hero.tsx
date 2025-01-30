import { useEffect } from "react";
import ParticlesAnimation from "../components/ParticlesAnimation";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-primary-bg text-primary flex h-full flex-col items-center justify-center text-center"
    >
      <ParticlesAnimation />
      <h1 className="font-display z-5 text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl">
        <div className="animate-slide-from-left">
          Hello, I'm <span className="text-primary-red">Issa</span>.
        </div>
        <div className="animate-slide-from-right">
          I'm a full-stack developer.
        </div>
      </h1>
      <a
        href="https://youtu.be/dQw4w9WgXcQ?si=3fn3V3iPij7hgjAj"
        className="animation-delay-1400 animate-bottom-in border-primary-red text-primary-red mt-4 rounded-sm border-2 border-solid px-4 py-2 text-xl text-[1rem] sm:text-[1.2rem] md:text-[1.3rem]"
      >
        View my work <span className="text-primary-red">↓</span>
      </a>
    </div>
  );
}

export default Hero;
