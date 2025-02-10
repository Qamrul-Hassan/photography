"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white p-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/golden.jpg" // Path to the image in the public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      {/* Animated Content Box */}
      <motion.div
        className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-lg shadow-2xl max-w-4xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile.jpg" // Path to the image in the public folder
            alt="Photographer"
            width={224}
            height={224}
            className="rounded-full mx-auto border-4 border-white mb-6 shadow-lg"
          />
        </motion.div>
        <h1 className="text-4xl font-extrabold mb-4">Hey, I'm Qamrul Hassan</h1>
        <motion.p
          className="text-lg text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          A visual storyteller, capturing the world one frame at a time. From breathtaking landscapes to intimate portraits,
          I turn moments into everlasting memories.
        </motion.p>
        <div className="mt-6 flex justify-center space-x-4">
          <motion.a
            href="#"
            className="text-xl hover:text-yellow-400 transition-all"
            whileHover={{ scale: 1.2 }}
          >
            📷 Instagram
          </motion.a>
          <motion.a
            href="#"
            className="text-xl hover:text-blue-400 transition-all"
            whileHover={{ scale: 1.2 }}
          >
            🌍 Website
          </motion.a>
          <motion.a
            href="#"
            className="text-xl hover:text-red-400 transition-all"
            whileHover={{ scale: 1.2 }}
          >
            🎥 YouTube
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}