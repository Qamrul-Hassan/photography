"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioImages = [
  "/images/boat.jpg",
  "/images/farmer.jpg",
  "/images/border.jpg",
  "/images/eagle.jpg",
  "/images/fisher.jpg",
];

export default function PortfolioPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % portfolioImages.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="content" className="relative min-h-screen overflow-hidden px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(255,150,76,0.2),transparent_42%),linear-gradient(132deg,#070707,#120d09_50%,#1e140d)]" />

      <section className="mx-auto w-full max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.36em] text-amber-200/75">Portfolio</p>
        <h1 className="mt-4 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-4xl text-transparent md:text-6xl">Signature Collection</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200 md:text-lg">
          A rotating sequence of selected frames across landscapes, portraits, and wildlife narratives.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.4)] p-2 shadow-[0_40px_130px_-70px_rgba(255,130,35,0.75)]">
          <div className="relative h-[58vh] min-h-[380px] w-full overflow-hidden rounded-[1.5rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={portfolioImages[currentImage]} alt="Portfolio highlight" fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2.5 rounded-full transition ${index === currentImage ? "w-12 bg-amber-200" : "w-5 bg-white/30"}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
