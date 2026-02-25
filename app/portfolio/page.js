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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="content" className="min-h-screen px-6 py-16 text-white">
      <section className="mx-auto w-full max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Portfolio</p>
        <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[0.2em] md:text-5xl">
          Cinematic Collection
        </h1>
        <p className="mt-4 text-base text-slate-200 md:text-lg">
          A rotating look at recent work across landscapes, wildlife, and portraits.
        </p>

        <div className="relative mt-10 h-[60vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_40px_120px_-60px_rgba(255,122,24,0.6)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9 }}
            >
              <Image
                src={portfolioImages[currentImage]}
                alt="Portfolio highlight"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-3 w-12 rounded-full transition ${
                index === currentImage ? "bg-amber-200" : "bg-white/20"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
