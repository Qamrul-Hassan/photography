"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Left Side) */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-5 left-5 text-white text-3xl focus:outline-none z-50"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Social Media Icons (Vertically on Left-Side) */}
      {!menuOpen && (
        <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-white z-50">
          {[
            { href: "https://facebook.com", icon: <FaFacebookF /> },
            { href: "https://twitter.com", icon: <FaTwitter /> },
            { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
            { href: "https://instagram.com", icon: <FaInstagram /> },
          ].map(({ href, icon }, index) => (
            <a key={index} href={href} aria-label={href} target="_blank" rel="noopener noreferrer" className="text-xl cursor-pointer hover:text-gray-400">
              {icon}
            </a>
          ))}
        </div>
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-white text-black z-50 p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section: Arrow & Logo (Parallel) */}
        <div className="flex items-center justify-between mb-8">
          {/* Left Arrow Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-extrabold"
            aria-label="Close menu"
          >
            &larr;
          </button>

          {/* Logo (Aligned with Arrow) */}
          <img src="/images/1.png" alt="Logo" className="h-32" />
        </div>

       {/* Navigation Links */}
<nav className="space-y-6 text-lg font-semibold text-gray-800">
  {["Home", "About", "Gallery", "Blog", "Contact"].map((item) => (
    <Link 
      key={item} 
      href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
      className="block hover:text-gray-500" 
      onClick={() => setMenuOpen(false)}
    >
      {item}
    </Link>
  ))}
</nav>
      </aside>
    </>
  );
}
