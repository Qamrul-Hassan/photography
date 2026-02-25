"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const backgroundImages = ["/images/golden.jpg", "/images/hill.jpg", "/images/morning.jpg"];
const FORM_ENDPOINT = "https://formspree.io/f/mqednknq";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("_subject", "New contact form submission");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent. Thank you for reaching out.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="content" className="relative min-h-screen overflow-hidden px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImages[currentBg]}
          alt="Moody landscape background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.section
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/2">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Contact</p>
          <h1 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.2em] md:text-4xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-base text-slate-200">
            Share your project details and I will follow up with availability, timelines, and next steps.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm text-slate-200">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-200 focus:outline-none"
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-200 focus:outline-none"
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-200 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-amber-200" aria-live="polite">
                {status}
              </p>
            )}
          </form>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl text-slate-200 transition hover:text-amber-200" />
            </a>
            <a href="https://x.com/Shajal1" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaTwitter className="text-xl text-slate-200 transition hover:text-amber-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-qamrul-hassan-303853347"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl text-slate-200 transition hover:text-amber-200" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl text-slate-200 transition hover:text-amber-200" />
            </a>
          </div>
        </div>

        <motion.div
          className="relative w-full overflow-hidden rounded-2xl border border-white/10 md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Photographer portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </motion.section>
    </main>
  );
}
