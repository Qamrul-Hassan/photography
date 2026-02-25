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
  const [direction, setDirection] = useState(1);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNextImage = () => {
    setDirection(1);
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevImage = () => {
    setDirection(-1);
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
    <main id="content" className="min-h-screen px-6 py-16 text-white">
      <section className="mx-auto w-full max-w-6xl">
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Gallery</p>
          <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[0.2em] md:text-5xl">
            Featured Frames
          </h1>
          <p className="mt-4 text-base text-slate-200 md:text-lg">
            A curated collection of landscapes, portraits, and quiet moments.
          </p>
        </header>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              className="group mb-4 break-inside-avoid rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_40px_-30px_rgba(0,0,0,0.8)]"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="relative block w-full overflow-hidden rounded-2xl"
                aria-label={`Open ${image.alt} photo`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.3em] text-white/80 opacity-0 transition duration-300 group-hover:opacity-100">
                  {image.alt}
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              className="relative flex h-full w-full items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative h-[85vh] w-[90vw]"
                key={selectedImageIndex}
                initial={{ x: direction === 1 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction === 1 ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 60 }}
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill
                  sizes="90vw"
                  className="rounded-2xl object-contain"
                />
              </motion.div>

              <button
                onClick={closeLightbox}
                className="absolute right-6 top-6 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white"
                aria-label="Close lightbox"
              >
                Close
              </button>

              <button
                onClick={showPrevImage}
                className="absolute left-6 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-xl text-white transition hover:border-white"
                aria-label="Previous image"
              >
                &#8249;
              </button>

              <button
                onClick={showNextImage}
                className="absolute right-6 rounded-full border border-white/20 bg-black/40 px-4 py-3 text-xl text-white transition hover:border-white"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
