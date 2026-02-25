"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/boat.jpg",
  "/images/farmer.jpg",
  "/images/eagle.jpg",
  "/images/fisher.jpg",
  "/images/fishing.jpg",
];

const services = [
  {
    title: "Portrait Sessions",
    description: "Studio and environmental portraits with cinematic lighting and direction.",
  },
  {
    title: "Landscape Stories",
    description: "Expansive, mood-forward landscapes captured at golden hour and beyond.",
  },
  {
    title: "Documentary Projects",
    description: "Visual storytelling for brands, campaigns, and editorial features.",
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main id="content" className="min-h-screen px-6 py-16 text-white">
      <section className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Services</p>
          <h1 className="font-display text-4xl font-semibold uppercase tracking-[0.2em] md:text-5xl">
            Crafted Visual Stories
          </h1>
          <p className="text-base text-slate-200 md:text-lg">
            From intimate portraits to epic landscapes, every session is designed to feel bold, intentional, and timeless.
          </p>

          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.8)]"
              >
                <h2 className="font-display text-xl uppercase tracking-[0.2em] text-white">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-slate-200 md:text-base">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="rounded-full border border-amber-200/30 px-4 py-2 text-sm uppercase tracking-[0.3em] text-amber-100 transition hover:border-amber-200 hover:text-white"
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full border border-amber-200/30 px-4 py-2 text-sm uppercase tracking-[0.3em] text-amber-100 transition hover:border-amber-200 hover:text-white"
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        </div>

        <div className="relative h-[60vh] overflow-hidden rounded-3xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.9 }}
            >
              <Image
                src={images[currentIndex]}
                alt="Service highlight"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
