"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const backgroundImages = [
  "/images/golden.jpg",
  "/images/hill.jpg",
  "/images/morning.jpg",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    setTimeout(() => {
      setStatus("Message Sent! ✅");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white p-6 overflow-hidden">
      {/* Background Image with Fade Transition */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        <Image
          src={backgroundImages[currentBg]}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contact Form */}
      <motion.div 
        className="relative bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-lg w-full text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-200">Get In Touch</h1>
        <motion.form onSubmit={handleSubmit}>
          <motion.div className="mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange} 
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>
          <motion.div className="mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange} 
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>
          <motion.div className="mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={form.message} 
              onChange={handleChange} 
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>
          <motion.button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg text-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
          {status && <p className="mt-3 text-green-400">{status}</p>}
        </motion.form>
        
        {/* Social Media Icons */}
        <motion.div className="flex justify-center space-x-4 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <FaFacebookF className="text-gray-300 text-2xl cursor-pointer hover:text-blue-500 transition-all" />
          <FaTwitter className="text-gray-300 text-2xl cursor-pointer hover:text-blue-400 transition-all" />
          <FaLinkedinIn className="text-gray-300 text-2xl cursor-pointer hover:text-blue-600 transition-all" />
          <FaInstagram className="text-gray-300 text-2xl cursor-pointer hover:text-pink-500 transition-all" />
        </motion.div>
      </motion.div>
    </div>
  );
}
