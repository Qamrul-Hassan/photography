"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaGlobe, FaYoutube } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main id="content" className="relative flex min-h-[calc(100dvh-86px)] items-center overflow-hidden px-6 py-8 text-white md:py-10">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/golden.jpg" alt="About background" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.82),rgba(0,0,0,0.52),rgba(0,0,0,0.78))]" />
      </div>

      <section className="mx-auto my-auto grid w-full max-w-6xl items-center gap-8 rounded-[2rem] border border-white/15 bg-[linear-gradient(155deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_34%),rgba(0,0,0,0.32)] p-8 shadow-[0_40px_100px_-70px_rgba(0,0,0,0.9)] backdrop-blur lg:grid-cols-[0.65fr_1fr] lg:p-9">
        <motion.div
          className="relative mx-auto h-64 w-64 overflow-hidden rounded-[2rem] border border-amber-200/40 sm:h-72 sm:w-72"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image src="/images/profile.jpg" alt="Portrait of Qamrul Hassan Shajal" fill sizes="(max-width: 768px) 70vw, 320px" className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-amber-200/75">About The Photographer</p>
          <h1 className="mt-4 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-3xl text-transparent md:text-5xl">Qamrul Hassan Shajal</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate-200 md:text-lg">
            I am a fine-art and documentary photographer focused on authentic people, atmospheric landscapes, and visual stories that preserve feeling. My work blends cinematic composition with natural light to create timeless frames.
          </p>

          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.35)] p-3">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber-100/70">Experience</p>
              <p className="mt-1 text-xl font-semibold">20 Years</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.35)] p-3">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber-100/70">Published</p>
              <p className="mt-1 text-xl font-semibold">Editorial</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.35)] p-3">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-amber-100/70">Based In</p>
              <p className="mt-1 text-xl font-semibold">Bangladesh</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://instagram.com" className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.18em] text-amber-100 transition hover:border-amber-200 hover:text-white"><FaInstagram />Instagram</a>
            <a href="https://example.com" className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.18em] text-amber-100 transition hover:border-amber-200 hover:text-white"><FaGlobe />Website</a>
            <a href="https://youtube.com" className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-sm uppercase tracking-[0.18em] text-amber-100 transition hover:border-amber-200 hover:text-white"><FaYoutube />YouTube</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
