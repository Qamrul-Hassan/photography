"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-black h-14 flex items-center px-5 z-50">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white text-black z-50 p-5 shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform`}
      >
        <div className="flex items-center mb-5">
          {/* Close Menu Button */}
          <button onClick={() => setMenuOpen(false)} className="text-black  text-3xl mr-3">
            ←
          </button>
          {/* Logo Image in Menu */}
          <img src="/images/1.png" alt="Logo" className="h-28" />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6 text-xl font-bold text-gray-700">
          <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/gallery" className="block" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/blog" className="block" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        {/* Copyright Info */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
          © 2025 Qamrul Hassan
        </div>
      </div>

      {/* Social Media Icons (Vertical on Navbar) */}
      <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-white z-50">
        <FaFacebookF className="text-xl font-bold cursor-pointer hover:text-gray-400" />
        <FaTwitter className="text-xl font-bold cursor-pointer hover:text-gray-400" />
        <FaLinkedinIn className="text-xl font-extrabold cursor-pointer hover:text-gray-400" />
        <FaInstagram className="text-xl font-extrabold cursor-pointer hover:text-gray-400" />
      </div>
    </>
  );
}
