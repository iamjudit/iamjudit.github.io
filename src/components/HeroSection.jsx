import React from "react";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center z-10 px-4">
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-xl">
        Judit Otazu
      </h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-200 max-w-xl">
        Machine Learning Engineer navigating uncharted waters
      </p>
    </section>
  );
}

export default HeroSection;
