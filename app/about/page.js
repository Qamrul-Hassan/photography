"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaGlobe, FaYoutube } from "react-icons/fa";

export default function AboutMePage() {
  return (
    <main id="content" className="relative min-h-screen overflow-hidden px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/golden.jpg"
          alt="Golden landscape background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 rounded-3xl border border-amber-200/20 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md md:flex-row md:text-left">
        <motion.div
          className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border-4 border-amber-200/60 shadow-[0_20px_60px_-25px_rgba(255,122,24,0.8)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Qamrul Hassan"
            fill
            sizes="(max-width: 768px) 60vw, 240px"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-1 flex-col gap-6">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">About</p>
            <h1 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.2em] text-white md:text-4xl">
              Hey, I&apos;m Qamrul Hassan
            </h1>
          </motion.header>

          <motion.p
            className="text-base leading-relaxed text-slate-200 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            A visual storyteller capturing the world one frame at a time. From sweeping landscapes to intimate portraits,
            I craft images that feel cinematic, bold, and timeless.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="https://instagram.com"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-200 hover:text-white"
            >
              <FaInstagram className="text-lg" />
              Instagram
            </a>
            <a
              href="https://example.com"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-200 hover:text-white"
            >
              <FaGlobe className="text-lg" />
              Website
            </a>
            <a
              href="https://youtube.com"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.2em] text-amber-100 transition hover:border-amber-200 hover:text-white"
            >
              <FaYoutube className="text-lg" />
              YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
