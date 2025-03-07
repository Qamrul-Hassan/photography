"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Left Side) */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-5 left-5 text-white text-2xl focus:outline-none z-50 hover:text-gray-400 transition"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Social Media Icons (Vertically on Left-Side) */}
      {!menuOpen && (
        <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-white z-50">
          {[
            { href: "https://www.facebook.com/qamrul.h.shajal", icon: <FaFacebookF /> },
            { href: "https://x.com/Shajal1", icon: <FaTwitter /> },
            { href: "https://www.linkedin.com/in/md-qamrul-hassan-303853347", icon: <FaLinkedinIn /> },
            { href: "https://instagram.com", icon: <FaInstagram /> },
          ].map(({ href, icon }, index) => (
            <a 
              key={index} 
              href={href} 
              aria-label={`Follow on ${href}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl cursor-pointer hover:text-gray-400 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-black text-amber-400 z-50 p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section: Arrow & Logo (Parallel) */}
        <div className="flex items-center justify-between mb-8">
          {/* Close Button with Animation */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-extrabold hover:text-gray-500 transition animate-bounce-left"
            aria-label="Close menu"
          >
            &larr;
          </button>

          <Image src="/images/logo.png" alt="Logo" width={96} height={96} className="h-24" />
          
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6 text-xl font-semibold text-amber-300">
          {["Home", "About", "Gallery", "Blog", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="block hover:text-gray-500 transition" 
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Tailwind Keyframes for Bouncing Animation */}
      <style jsx>{`
        @keyframes bounce-left {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-8px); }
        }
        .animate-bounce-left {
          animation: bounce-left 0.6s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
