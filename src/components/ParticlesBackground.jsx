// ParticlesBackground.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80 },
          shape: { type: "star" },
          size: { value: 2 },
          move: { enable: true, speed: 0.4 },
          opacity: { value: 0.5 },
          color: { value: "#ffffff" },
        },
      }}
    />
  );
}

export default ParticlesBackground;
