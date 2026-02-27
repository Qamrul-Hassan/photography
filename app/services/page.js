"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/boat.jpg", "/images/farmer.jpg", "/images/eagle.jpg", "/images/fisher.jpg", "/images/fishing.jpg"];

const services = [
  {
    title: "Portrait Sessions",
    description: "Editorial and lifestyle portrait sessions with natural direction and cinematic tonality.",
  },
  {
    title: "Landscape Stories",
    description: "Atmospheric landscapes captured with strong composition and intentional light.",
  },
  {
    title: "Documentary Projects",
    description: "Visual narratives for campaigns, magazines, and brand storytelling.",
  },
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main id="content" className="relative min-h-screen overflow-x-hidden px-4 py-14 text-white sm:px-6 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(255,180,110,0.18),transparent_38%),linear-gradient(130deg,#070707,#0f0b08_48%,#19120c)]" />

      <section className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.8rem] border border-white/15 bg-[linear-gradient(155deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.34)] p-7 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.36em] text-amber-200/75">Services</p>
          <h1 className="mt-4 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-[clamp(2rem,8vw,3.3rem)] leading-[1.04] text-transparent">Photography Services</h1>
          <p className="mt-4 text-slate-200 md:text-lg">
            Tailored photography sessions with a premium visual language, from concept to final delivery.
          </p>

          <div className="mt-7 grid gap-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.08),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.35)] p-5">
                <h2 className="font-display text-2xl">{service.title}</h2>
                <p className="mt-2 text-slate-200">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3">
            <button onClick={prevSlide} className="rounded-full border border-amber-200/35 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.26em] text-amber-100 transition hover:border-amber-200 hover:text-white">Previous</button>
            <button onClick={nextSlide} className="rounded-full border border-amber-200/35 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.26em] text-amber-100 transition hover:border-amber-200 hover:text-white">Next</button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/15 bg-black/35 p-2 shadow-[0_38px_110px_-65px_rgba(255,130,30,0.7)]">
          <div className="relative h-[52vh] min-h-[300px] overflow-hidden rounded-[1.4rem] sm:h-[62vh] sm:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 34 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -34 }}
                transition={{ duration: 0.8 }}
              >
                <Image src={images[currentIndex]} alt="Service highlight" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
