import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "./pages/Cover";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const pages = [Cover, Index, About, Experience, Skills, Projects, Contact];

export default function Notebook() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (page < pages.length - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  }, [page]);

  const goPrev = useCallback(() => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  }, [page]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const CurrentPage = pages[page];

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a1f44]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          initial={{ rotateY: direction * 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: direction * -90, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-screen flex items-center justify-center bg-white cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          onClick={goNext}
        >
          <CurrentPage />
        </motion.div>
      </AnimatePresence>

      {/* Page indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > page ? 1 : -1);
              setPage(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === page ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next buttons */}
      {page > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl transition-colors z-10 select-none"
        >
          ‹
        </button>
      )}
      {page < pages.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl transition-colors z-10 select-none"
        >
          ›
        </button>
      )}
    </div>
  );
}
