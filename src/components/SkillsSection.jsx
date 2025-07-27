// SkillsSection.jsx

import React, { useEffect, useRef, useState } from "react";
import galleon from "../assets/galleon_skills.png";

function SkillsSection() {
  const shipRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (shipRef.current) observer.observe(shipRef.current);
    return () => shipRef.current && observer.unobserve(shipRef.current);
  }, []);

  return (
    <section className="relative py-32 bg-navy flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        Skills on Deck
      </h2>
      <div
        ref={shipRef}
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <img
            src={galleon}
            alt="Galleon"
            className="absolute bottom-0 left-[10%] w-[60%] animate-sail z-10"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12 text-center">
        {["Python", "PyTorch", "React", "Tailwind", "OpenCV", "Git", "Docker", "Linux"].map((skill) => (
          <span
            key={skill}
            className="bg-white text-navy py-2 px-4 rounded-lg shadow-lg font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
