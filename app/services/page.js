"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/boat.jpg",
  "/images/farmer.jpg",
  "/images/eagle.jpg",
  "/images/fisher.jpg",
  "/images/fishing.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center font-custom">
      {/* Left Side Image with Gradient Overlay */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1/6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/morning.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-4/6 px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative z-20 w-full h-4/5 overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={images[currentIndex]}
              alt="Current slide"
              className="w-full h-full object-cover rounded-3xl"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Side Image with Gradient Overlay */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/eagle.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent"></div>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        className="absolute bottom-20 left-20 text-white z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="bg-blue-500 text-xs px-2 py-1 rounded-full uppercase tracking-widest">
          PHOTOGRAPHY
        </span>
        <h1 className="text-6xl font-bold mt-4">Qamrul Hassan</h1>
        <p className="text-xl mt-2 opacity-80">Capturing Moments, Creating Memories</p>
      </motion.div>

      {/* Navigation Arrows */}
      <motion.div
        className="absolute left-10 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer"
        onClick={prevSlide}
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white opacity-70 hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer"
        onClick={nextSlide}
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white opacity-70 hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.div>
    </div>
  );
}
