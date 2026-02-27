"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const backgroundImages = ["/images/golden.jpg", "/images/hill.jpg", "/images/morning.jpg"];
const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_OWNER =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER_ID ||
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER;
const EMAILJS_TEMPLATE_AUTOREPLY =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY_ID ||
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTOREPLY;

async function sendEmailJS(templateId, templateParams) {
  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "EmailJS request failed.");
  }
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_OWNER) {
        setStatus("Email service is not configured. Add EmailJS keys in .env.local.");
        return;
      }

      const ownerParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        reply_to: form.email,
      };

      await sendEmailJS(EMAILJS_TEMPLATE_OWNER, ownerParams);

      // Optional auto-reply template. If omitted, owner notification still works.
      if (EMAILJS_TEMPLATE_AUTOREPLY) {
        const autoReplyParams = {
          to_name: form.name,
          name: form.name,
          user_name: form.name,
          to_email: form.email,
          email: form.email,
          message: form.message,
          from_name: form.name,
          studio_name: "Qamrul Hassan Shajal Photography",
          brand_name: "QHS Team",
        };
        await sendEmailJS(EMAILJS_TEMPLATE_AUTOREPLY, autoReplyParams);
      }

      setStatus("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Email sending failed.";
      setStatus(`Failed to send: ${msg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="content" className="relative flex min-h-[calc(100dvh-130px)] items-center overflow-x-hidden px-6 pb-2 pt-24 text-white md:pt-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImages[currentBg]}
          className="fixed inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <Image
            src={backgroundImages[currentBg]}
            alt="Contact background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(115deg,rgba(0,0,0,0.84),rgba(0,0,0,0.52),rgba(0,0,0,0.8))]" aria-hidden="true" />

      <motion.section
        className="mx-auto my-auto grid w-full max-w-6xl items-center gap-4 rounded-[2rem] border border-white/15 bg-[linear-gradient(155deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.34)] p-5 backdrop-blur lg:grid-cols-[1fr_0.95fr] lg:p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-amber-200/75">Contact</p>
          <h1 className="mt-3 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-[2.3rem] leading-[0.95] text-transparent md:text-[2.55rem]">Let&apos;s Create Something Exceptional</h1>
          <p className="mt-2 max-w-xl text-slate-200 md:text-[0.98rem]">
            Share your vision and I&apos;ll get back with availability, creative direction, and project details.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-2.5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-3 text-white caret-amber-300 placeholder:text-slate-300/80 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/35"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-3 text-white caret-amber-300 placeholder:text-slate-300/80 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/35"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={2}
              required
              className="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-3 text-white caret-amber-300 placeholder:text-slate-300/80 focus:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200/35"
            />

            <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-amber-300 disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-amber-200" aria-live="polite">{status}</p>}
          </form>

          <div className="mt-4 flex items-center gap-4">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="text-xl text-slate-200 transition hover:text-amber-200" /></a>
            <a href="https://x.com/Shajal1" target="_blank" rel="noopener noreferrer" aria-label="X"><FaTwitter className="text-xl text-slate-200 transition hover:text-amber-200" /></a>
            <a href="https://www.linkedin.com/in/md-qamrul-hassan-303853347" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="text-xl text-slate-200 transition hover:text-amber-200" /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-xl text-slate-200 transition hover:text-amber-200" /></a>
          </div>
        </div>

        <motion.div className="relative overflow-hidden rounded-2xl border border-white/15" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="relative h-[320px] lg:h-[500px]">
            <Image src="/images/profile.jpg" alt="Photographer portrait" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
