"use client"; // Mark this component as a Client Component

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link for client-side navigation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from React Icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src="/images/1.png" alt="Logo" className="h-10" />
          <span className="ml-2 text-xl">Qamrul Hassan</span>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Burger Menu */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className={`w-6 h-0.5 bg-white my-1 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 opacity-100 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </div>

      {/* Menu Items */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button (Cross Icon) */}
        <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Menu Links */}
        <ul className="p-4 mt-10">
          <li className="my-2">
            <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="my-2">
            <Link href="/about" className="hover:text-gray-400" onClick={toggleMenu}>About</Link>
          </li>
          <li className="my-2">
            <Link href="/blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="my-2">
            <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="my-2">
            <Link href="/element" className="hover:text-gray-400" onClick={toggleMenu}>Element</Link>
          </li>
          <li className="my-2">
            <Link href="/portfolio" className="hover:text-gray-400" onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li className="my-2">
            <Link href="/services" className="hover:text-gray-400" onClick={toggleMenu}>Services</Link>
          </li>
        </ul>

        {/* Copyright Info */}
        <div className="absolute bottom-4 left-4 text-sm text-gray-400">
          &copy; 2023 Qamrul Hassan
        </div>
      </div>
    </nav>
  );
}