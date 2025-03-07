"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/boat.jpg", alt: "Boat" },
  { src: "/images/farmer.jpg", alt: "Farmer" },
  { src: "/images/eagle.jpg", alt: "Eagle" },
  { src: "/images/fisher.jpg", alt: "Fisher" },
  { src: "/images/fishing.jpg", alt: "Fishing" },
  { src: "/images/landscape.jpg", alt: "Landscape" },
  { src: "/images/hill.jpg", alt: "Mountains" },
  { src: "/images/sun.jpg", alt: "Sunset" },
  { src: "/images/morning.jpg", alt: "Morning Glow" },
  { src: "/images/golden.jpg", alt: "Golden" },
  { src: "/images/old.jpg", alt: "Portrait" },
  { src: "/images/life.jpg", alt: "Street" },
  { src: "/images/butterfly.jpg", alt: "Butterfly" },
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden"; // Disable scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const showNextImage = () => {
    setDirection(1); // Set direction to next
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevImage = () => {
    setDirection(-1); // Set direction to previous
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex !== null) {
        if (event.key === "ArrowRight") showNextImage();
        if (event.key === "ArrowLeft") showPrevImage();
        if (event.key === "Escape") closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Photography Gallery
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            onClick={() => openLightbox(index)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-lg transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 text-lg font-bold transition-all duration-300">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fixed image display */}
              <motion.div
                className="relative w-[90vw] h-[90vh]"
                key={selectedImageIndex} // Ensure the image changes with a unique key
                initial={{ x: direction === 1 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction === 1 ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 500, damping: 200 }}
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill={true}
                  objectFit="contain"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none hover:text-gray-400 transition"
                aria-label="Close lightbox"
              >
                &times;
              </button>

              <button
                onClick={showPrevImage}
                className="absolute left-6 text-white bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full text-3xl shadow-lg hover:bg-opacity-40 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <button
                onClick={showNextImage}
                className="absolute right-6 text-white bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full text-3xl shadow-lg hover:bg-opacity-40 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
