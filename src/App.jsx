// App.jsx – Entry point que orquesta las secciones del portfolio de Judit

import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ParticlesBackground from "./components/ParticlesBackground";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <div className="relative w-screen overflow-x-hidden text-white bg-navy scroll-smooth">
      <VideoBackground />
      <ParticlesBackground />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
