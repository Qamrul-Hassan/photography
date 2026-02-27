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
    <main id="content" className="relative min-h-screen overflow-x-hidden px-4 py-14 text-white sm:px-6 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,142,66,0.18),transparent_40%),linear-gradient(130deg,#060606,#120c08_55%,#1d140d)]" />

      <section className="mx-auto w-full max-w-7xl">
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.36em] text-amber-200/75">Gallery</p>
          <h1 className="mt-4 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-[clamp(2rem,8vw,3.7rem)] leading-[1.03] text-transparent">Curated Visual Archive</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200 md:text-lg">
            Explore selected works across documentary, landscape, and wildlife collections.
          </p>
        </header>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.08),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.35)] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)]"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <button type="button" onClick={() => openLightbox(index)} className="relative block w-full" aria-label={`Open ${image.alt}`}>
                <Image src={image.src} alt={image.alt} width={900} height={1200} className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 text-[0.64rem] uppercase tracking-[0.26em] text-amber-100/90 opacity-0 transition group-hover:opacity-100">{image.alt}</figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black p-2 sm:p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div className="relative flex h-full w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="absolute left-1/2 top-2 z-20 flex w-[96vw] max-w-[1320px] -translate-x-1/2 items-center justify-between gap-2 rounded-full border border-white/20 bg-black/58 px-3 py-2 backdrop-blur sm:top-4 sm:px-5">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-amber-100/70">Gallery</p>
                  <p className="text-sm font-semibold text-white sm:text-base">{images[selectedImageIndex].alt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="hidden text-[0.62rem] uppercase tracking-[0.18em] text-white/65 md:block">
                    Esc Close | ← Prev | → Next
                  </p>
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-amber-100/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
                    {String(selectedImageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </p>
                  <button
                    onClick={closeLightbox}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/45 text-xl leading-none text-white transition hover:border-amber-200/45 hover:text-amber-100"
                    aria-label="Close preview"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <motion.div
                className="relative h-[86dvh] w-[96vw] max-w-[1320px] overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(155deg,rgba(255,214,160,0.12),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.6)] p-2 shadow-[0_30px_110px_-55px_rgba(0,0,0,0.95)] sm:h-[88dvh] sm:rounded-3xl sm:p-3"
                key={selectedImageIndex}
                initial={{ x: direction === 1 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction === 1 ? "-100%" : "100%" }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  fill
                  sizes="96vw"
                  className="rounded-xl object-contain sm:rounded-2xl"
                />
                <motion.figcaption
                  key={`${images[selectedImageIndex].alt}-caption`}
                  className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-amber-100/85 backdrop-blur sm:bottom-5 sm:left-5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
                >
                  {images[selectedImageIndex].alt}
                </motion.figcaption>
              </motion.div>

              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/55 px-3 py-2 backdrop-blur sm:bottom-6">
                <button
                  onClick={showPrevImage}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/45 text-xl text-white transition hover:border-amber-200/45 hover:text-amber-100"
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button
                  onClick={showNextImage}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/45 text-xl text-white transition hover:border-amber-200/45 hover:text-amber-100"
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
