"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/boat.jpg",
  "/images/farmer.jpg",
  "/images/eagle.jpg",
  "/images/fisher.jpg",
  "/images/fishing.jpg",
  "/images/boat.jpg",
  "/images/farmer.jpg",
  "/images/eagle.jpg",
  "/images/fisher.jpg",
  "/images/fishing.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setDirection(1); // Auto-slide always moves forward
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: direction === 1 ? "100%" : "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? "-100%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={images[currentIndex]}
            alt="Slide"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
