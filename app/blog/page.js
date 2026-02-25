"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Landscape Photography",
    excerpt: "Discover the secrets to capturing stunning landscapes with tips on composition, lighting, and gear.",
    date: "October 10, 2023",
    author: "Qamrul Hassan",
    tags: ["Photography", "Landscape"],
    image: "/images/landscape.jpg",
  },
  {
    id: 2,
    title: "Mastering Portrait Photography",
    excerpt: "Learn how to take captivating portraits with techniques for posing, lighting, and post-processing.",
    date: "October 5, 2023",
    author: "Qamrul Hassan",
    tags: ["Photography", "Portrait"],
    image: "/images/old.jpg",
  },
  {
    id: 3,
    title: "Street Photography: Capturing Life",
    excerpt: "Explore the world of street photography and how to tell compelling stories through your lens.",
    date: "September 28, 2023",
    author: "Qamrul Hassan",
    tags: ["Photography", "Street"],
    image: "/images/life.jpg",
  },
];

export default function Blog() {
  return (
    <main id="content" className="relative min-h-screen overflow-hidden px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/blog-bg.jpg"
          alt="Moody studio background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Journal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[0.2em] md:text-5xl">
            Behind The Lens
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            Insights, tips, and stories from a photography journey in motion.
          </p>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <section className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-amber-100/80">
                    <span className="inline-flex items-center gap-2">
                      <FaCalendarAlt />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FaUser />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{post.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-200 md:text-base">{post.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-2">
                    <FaTags className="text-amber-200/80" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-amber-200/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </section>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-display text-lg uppercase tracking-[0.2em] text-amber-100">Recent Posts</h3>
              <ul className="mt-6 space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <Link href="#" className="text-sm font-semibold text-white transition hover:text-amber-200">
                      {post.title}
                    </Link>
                    <p className="mt-1 text-xs text-slate-400">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-display text-lg uppercase tracking-[0.2em] text-amber-100">Tags</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Photography", "Landscape", "Portrait", "Street", "Travel", "Nature"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
