"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Landscape Photography",
    excerpt: "Discover the techniques behind cinematic landscapes, from framing layers to timing light.",
    date: "October 10, 2023",
    author: "Qamrul Hassan Shajal",
    tags: ["Photography", "Landscape"],
    image: "/images/landscape.jpg",
  },
  {
    id: 2,
    title: "Mastering Portrait Photography",
    excerpt: "Create portraits with authentic emotion through direction, composition, and careful color tone.",
    date: "October 5, 2023",
    author: "Qamrul Hassan Shajal",
    tags: ["Photography", "Portrait"],
    image: "/images/old.jpg",
  },
  {
    id: 3,
    title: "Street Photography: Capturing Life",
    excerpt: "Build stories in motion by reading scenes, waiting for rhythm, and working with decisive moments.",
    date: "September 28, 2023",
    author: "Qamrul Hassan Shajal",
    tags: ["Photography", "Street"],
    image: "/images/life.jpg",
  },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main id="content" className="relative min-h-screen overflow-hidden px-6 py-16 text-white">
      <div className="absolute inset-0 -z-20">
        <Image src="/images/hill.jpg" alt="Blog background" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(255,159,81,0.24),transparent_38%),radial-gradient(circle_at_82%_14%,rgba(190,224,255,0.16),transparent_30%),linear-gradient(120deg,rgba(0,0,0,0.9),rgba(0,0,0,0.62),rgba(0,0,0,0.9))]" />

      <section className="mx-auto w-full max-w-7xl">
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.42em] text-amber-200/80">Journal</p>
          <h1 className="mt-3 bg-gradient-to-b from-white via-[#ffefda] to-[#f0bf7f] bg-clip-text font-display text-4xl text-transparent md:text-6xl">
            Stories Behind The Frame
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-200 md:text-lg">
            Field notes, composition studies, and practical insights from real photography sessions.
          </p>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.82fr]">
          <section className="space-y-8">
            <motion.article
              className="group overflow-hidden rounded-[2rem] border border-white/20 bg-[linear-gradient(155deg,rgba(255,214,160,0.12),rgba(255,214,160,0.02)_32%),rgba(0,0,0,0.42)] shadow-[0_35px_120px_-65px_rgba(0,0,0,0.95)] backdrop-blur"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 64vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-amber-100/85 backdrop-blur">
                  Featured Story
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-[0.68rem] uppercase tracking-[0.18em] text-amber-100/82">
                  <span className="inline-flex items-center gap-2"><FaCalendarAlt />{featured.date}</span>
                  <span className="inline-flex items-center gap-2"><FaUser />{featured.author}</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl">{featured.title}</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-200 md:text-lg">{featured.excerpt}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <FaTags className="text-amber-200/80" />
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-amber-200/35 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-amber-100/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 rounded-full border border-amber-200/40 bg-black/35 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-amber-100 transition hover:border-amber-200 hover:text-white">
                  Read Article
                </button>
              </div>
            </motion.article>

            <div className="grid gap-8 md:grid-cols-2">
              {rest.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(155deg,rgba(255,214,160,0.08),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.4)] backdrop-blur"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-amber-100/75">
                      <span className="inline-flex items-center gap-2"><FaCalendarAlt />{post.date}</span>
                      <span className="inline-flex items-center gap-2"><FaUser />{post.author}</span>
                    </div>

                    <h3 className="font-display text-2xl">{post.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-200">{post.excerpt}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-5 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-white/90 transition hover:border-amber-200/50 hover:text-amber-100">
                      Read Story
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.42)] p-6 backdrop-blur-md">
              <h3 className="font-display text-xl text-white">Recent Posts</h3>
              <ul className="mt-5 space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <Link href="#" className="font-semibold text-white transition hover:text-amber-200">{post.title}</Link>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[linear-gradient(150deg,rgba(255,214,160,0.1),rgba(255,214,160,0.01)_35%),rgba(0,0,0,0.42)] p-6 backdrop-blur-md">
              <h3 className="font-display text-xl text-white">Topics</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Photography", "Landscape", "Portrait", "Street", "Travel", "Nature"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
