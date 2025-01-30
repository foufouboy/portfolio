import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import options from "../scripts/particles.config.js";

function ParticlesAnimation() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
}

export default ParticlesAnimation;
