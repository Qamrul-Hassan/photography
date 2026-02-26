"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const slides = [
  { title: "Boat", subtitle: "Haor Adventure", image: "/images/boat.jpg", location: "Sunamganj" },
  { title: "Farmer", subtitle: "Rural Life", image: "/images/farmer.jpg", location: "Sylhet" },
  { title: "Eagle", subtitle: "Freedom in Flight", image: "/images/eagle.jpg", location: "Tanguar Haor" },
  { title: "King-Fisher", subtitle: "The Art of Fishing", image: "/images/fisher.jpg", location: "Haor Belt" },
  { title: "Fishing", subtitle: "Tranquil Waters", image: "/images/fishing.jpg", location: "North East" },
  { title: "Border River", subtitle: "Lush horizons and breathing sky", image: "/images/border.jpg", location: "Borderlands" },
  { title: "Golden Horizon", subtitle: "Misty mountains and amber light", image: "/images/golden.jpg", location: "Foothills" },
  { title: "Golden Serenity", subtitle: "Sunrise reflections on quiet water", image: "/images/morning.jpg", location: "Wetlands" },
];

export default function ThreeDCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  const current = slides[index];

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setInterval(next, 6200);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  if (!ready) return null;

  return (
    <section className="hero-epic relative min-h-[calc(100dvh-86px)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          className="absolute inset-0 -z-30"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
          transition={{ duration: reduceMotion ? 0.15 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <Image src={current.image} alt="" fill sizes="100vw" className="object-cover" priority={index === 0} />
        </motion.div>
      </AnimatePresence>

      <div className="hero-epic-overlay absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-epic-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1520px] gap-8 px-4 pb-14 pt-24 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-12 lg:px-10 lg:pl-28 xl:pl-32">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy-panel relative lg:ml-4"
        >
          <p className="hero-kicker inline-flex rounded-full border border-white/22 bg-black/35 px-4 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-amber-100/90 backdrop-blur sm:text-[0.62rem]">
            Qamrul Hassan Shajal Photography
          </p>

          <p className="hero-epic-stroke pointer-events-none mt-4 font-display text-[clamp(1.8rem,7.4vw,5.8rem)] uppercase leading-[0.9] tracking-[0.03em]">
            Moments
          </p>

          <h1 className="hero-main-heading mt-1 font-display text-[clamp(1.85rem,5vw,4.5rem)] leading-[1.02] text-[#fffaf2]">
            See The World
            <br />
            Through My Lens
          </h1>

          <p className="hero-quote-glow mt-6 max-w-xl text-sm leading-[1.75] text-amber-100/92 sm:text-base">
            Fine-art photography of wildlife, people, and landscapes, composed with emotion, timing, and perspective.
          </p>

          <div className="mt-9 grid max-w-lg grid-cols-3 gap-4">
            <div className="hero-epic-chip">
              <p>Curated Frames</p>
              <strong>120+</strong>
            </div>
            <div className="hero-epic-chip">
              <p>Photo Essays</p>
              <strong>08</strong>
            </div>
            <div className="hero-epic-chip">
              <p>Field Base</p>
              <strong>Bangladesh</strong>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hero-stage-shadow absolute -inset-2 rounded-[2rem]" aria-hidden="true" />

          <div className="hero-stage relative rounded-[1.8rem] border border-white/22 bg-black/38 p-3 backdrop-blur">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.image + "-card"}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction === 1 ? 30 : -30, rotate: direction === 1 ? 0.8 : -0.8 }
                }
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction === 1 ? -30 : 30 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[1.4rem]"
              >
                <div className="relative h-[380px] sm:h-[520px] lg:h-[610px]">
                  <Image
                    src={current.image}
                    alt={`${current.title} by Qamrul Hassan Shajal`}
                    fill
                    sizes="(max-width: 1024px) 95vw, 62vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent" />

                  <figcaption className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-amber-100/90">{current.location}</p>
                    <h2 className="mt-2 font-display text-3xl leading-none text-white sm:text-5xl">{current.title}</h2>
                    <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-amber-100/82 sm:text-xs">{current.subtitle}</p>
                  </figcaption>
                </div>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <button onClick={prev} className="hero-nav-btn" aria-label="Previous slide">
                  <span>&#8249;</span>
                </button>
                <button onClick={next} className="hero-nav-btn" aria-label="Next slide">
                  <span>&#8250;</span>
                </button>
              </div>

              <div className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-amber-100/85">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>

              <div className="hero-pagination flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 backdrop-blur">
                {slides.map((slide, dotIndex) => (
                  <button
                    key={slide.image}
                    onClick={() => {
                      setDirection(dotIndex > index ? 1 : -1);
                      setIndex(dotIndex);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIndex === index ? "w-9 bg-amber-200" : "w-2.5 bg-white/35 hover:bg-white/75"
                    }`}
                    aria-label={`Go to frame ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
