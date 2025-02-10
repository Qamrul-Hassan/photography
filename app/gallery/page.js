"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Sample images for the gallery
const images = [
  { src: "/images/boat.jpg", alt: "Boat" },
  { src: "/images/farmer.jpg", alt: "Farmer" },
  { src: "/images/eagle.jpg", alt: "Eagle" },
  { src: "/images/fisher.jpg", alt: "Fisher" },
  { src: "/images/fishing.jpg", alt: "Fishing" },
  { src: "/images/landscape.jpg", alt: "Landscape" },
  { src: "/images/hill.jpg", alt: "Mountains" },
  { src: "/images/sun.jpg", alt: "Sunset" },
  { src: "/images/morning.jpg", alt: "Forest" },
  { src: "/images/sun.jpg", alt: "Sunset" },
  { src: "/images/golden.jpg", alt: "Golden" },
  { src: "/images/old.jpg", alt: "Potraite" },
  { src: "/images/live.jpg", alt: "Street" },
  { src: "/images/butterfly.jpg", alt: "Butterfly" },
  
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5">
      {/* Gallery Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Photography Gallery
      </h1>

      {/* Masonry Grid Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="mb-4 break-inside-avoid relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => openLightbox(image)}
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-lg transition-all duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 text-lg font-bold transition-all duration-300">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}