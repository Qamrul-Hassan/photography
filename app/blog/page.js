"use client";

import { FaCalendarAlt, FaTags, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    setTimeout(() => setLoading(false), 1500);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-black text-white p-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('./images/blog-bg.jpg')" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Insights, tips, and stories from my photography journey.</p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Section with Shimmer Effect */}
                <motion.div
                  className="relative w-full h-96 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {loading ? (
                    <div className="w-full h-full bg-gray-700 animate-pulse"></div>
                  ) : (
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-t-xl"
                      priority
                    />
                  )}
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex items-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-2">
                    <FaTags className="text-gray-400" />
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.id} className="border-b border-gray-600 pb-4">
                    <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">
                      {post.title}
                    </a>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Photography", "Landscape", "Portrait", "Street", "Travel", "Nature"].map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}