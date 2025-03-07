"use client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { title: "Boat", subtitle: "Haor Adventure", image: "/images/boat.jpg" },
  { title: "Farmer", subtitle: "Rural Life", image: "/images/farmer.jpg" },
  { title: "Eagle", subtitle: "Freedom in Flight", image: "/images/eagle.jpg" },
  { title: "King-Fisher", subtitle: "The Art of Fishing", image: "/images/fisher.jpg" },
  { title: "Fishing", subtitle: "Tranquil Waters", image: "/images/fishing.jpg" },
  { title: "Border River", subtitle: "Embraced by lush greenery and a breathtaking sky", image: "/images/border.jpg" },
  { title: "Golden Horizon", subtitle: "The golden hues with the distant misty mountains.", image: "/images/golden.jpg" },
  { title: "Golden Serenity", subtitle: "A mesmerizing sunrise casting golden reflections on the water.", image: "/images/morning.jpg" },
];

export default function ThreeDCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (!isClient) return null;

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-4 md:top-6 left-0 w-full z-10 py-4 md:py-6 flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mb-4 md:mb-0 md:mr-6">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
        </div>
        <div className="text-center md:text-left">
          <motion.h1 className="text-xl md:text-4xl font-bold uppercase bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Qamrul Hassan Shajal
          </motion.h1>
          <motion.span className="text-sm md:text-lg font-semibold text-yellow-300 text-center w-full flex justify-center">
  Visual Storytelling Through Lens
</motion.span>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${slides[index].image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative w-[90vw] h-[50vh] md:h-[60vh] perspective-[1500px] mt-16 md:mt-24">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, i) =>
              i === index && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateY: direction === 1 ? 90 : -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: direction === 1 ? -90 : 90, scale: 0.8 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-full h-full preserve-3d"
                >
                  <motion.div className="w-full h-full rounded-[1.5rem] shadow-xl overflow-hidden relative cursor-grab">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[1.5rem]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-left px-3">
                      <motion.h2 className="text-xl md:text-3xl font-bold text-white mb-2">{slide.title}</motion.h2>
                      <motion.p className="text-sm md:text-lg text-amber-200 font-light">{slide.subtitle}</motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 md:bottom-10 flex items-center gap-4 md:gap-6 z-20">
        <motion.button
          onClick={prevSlide}
          className="p-3 md:p-4 "
        >
          <span className="text-4xl md:text-4xl text-amber-400">‹</span>
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="p-3 md:p-4"
        >
          <span className="text-4xl md:text-4xl text-amber-400">›</span>
        </motion.button>
      </div>
    </div>
  );
}
