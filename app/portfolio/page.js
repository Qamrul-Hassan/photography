"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioImages = [
  "./Images/boat.jpg",
  "./Images/farmer.jpg",
  "./Images/border.jpg",
  "./Images/eagle.jpg",
  "./Images/fisher.jpg"
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 overflow-hidden">
      <h1 className="text-4xl font-bold mb-10 text-gray-200">My Photography Portfolio</h1>
      <div className="relative w-full max-w-4xl h-96 overflow-hidden">
        <motion.img
          key={currentImage}
          src={portfolioImages[currentImage]}
          alt="Portfolio"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="flex space-x-4 mt-8">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentImage ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
