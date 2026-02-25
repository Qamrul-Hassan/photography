"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
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

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        size: Math.random() > 0.85 ? "0.35rem" : "0.2rem",
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 4,
      })),
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  // keyboard navigation for accessibility
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-4 left-0 z-10 flex w-full flex-col items-center justify-center gap-3 px-6 py-4 md:top-6 md:flex-row"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Qamrul Hassan logo"
            width={64}
            height={64}
            className="rounded-full border border-amber-200/40 object-cover shadow-[0_0_18px_rgba(247,179,90,0.35)]"
            priority
          />
          <div className="text-center md:text-left">
            <motion.h1 className="font-display text-2xl font-semibold uppercase tracking-[0.4em] text-amber-200 md:text-4xl">
              Qamrul Hassan
            </motion.h1>
            <motion.p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-100/70 md:text-sm">
              Visual Storytelling Through Lens
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* background image removed to avoid duplicate network request; main slide uses Next/Image with priority */}

      <div className="relative mx-auto mt-32 flex h-[40vh] w-[80vw] max-w-[90vw] items-center justify-center perspective-[1500px] sm:mt-24 sm:w-[85vw] sm:h-[50vh] md:mt-28 md:w-[90vw] md:h-[62vh]">
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
                  className="absolute h-full w-full preserve-3d"
                >
                  <motion.div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_120px_-60px_rgba(255,122,24,0.7)]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 70vw"
                      className="rounded-[1.75rem] object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-left md:bottom-10 md:left-10">
                      <motion.h2 className="font-display text-2xl font-semibold text-white md:text-4xl">
                        {slide.title}
                      </motion.h2>
                      <motion.p className="mt-2 max-w-lg text-xs uppercase tracking-[0.25em] text-amber-100/80 md:text-sm">
                        {slide.subtitle}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-6 md:bottom-10">
        <motion.button
          onClick={prevSlide}
          className="group grid h-12 w-12 place-items-center rounded-full border border-amber-200/40 bg-black/60 text-amber-200 backdrop-blur transition hover:border-amber-200 hover:text-white hover:shadow-[0_0_24px_rgba(247,179,90,0.4)] md:h-14 md:w-14"
          aria-label="Previous slide"
        >
          <span className="text-2xl md:text-3xl" aria-hidden="true">
            &#8249;
          </span>
        </motion.button>

        <div className="flex items-center gap-2">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => {
                setDirection(dotIndex > index ? 1 : -1);
                setIndex(dotIndex);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIndex === index
                  ? "w-10 bg-amber-200 shadow-[0_0_18px_rgba(247,179,90,0.6)]"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          className="group grid h-12 w-12 place-items-center rounded-full border border-amber-200/40 bg-black/60 text-amber-200 backdrop-blur transition hover:border-amber-200 hover:text-white hover:shadow-[0_0_24px_rgba(247,179,90,0.4)] md:h-14 md:w-14"
          aria-label="Next slide"
        >
          <span className="text-2xl md:text-3xl" aria-hidden="true">
            &#8250;
          </span>
        </motion.button>
      </div>
    </section>
  );
}
