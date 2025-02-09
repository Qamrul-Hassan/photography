"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPinterest, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <h1 className="text-white text-2xl font-semibold">Qamrul Hassan</h1>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white">
            <Link href="#"><FaPinterest className="hover:text-gray-400" /></Link>
            <Link href="#"><FaLinkedin className="hover:text-gray-400" /></Link>
            <Link href="#"><FaInstagram className="hover:text-gray-400" /></Link>
            <Link href="#"><FaFacebook className="hover:text-gray-400" /></Link>
            <Link href="#"><FaTwitter className="hover:text-gray-400" /></Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex w-full h-full">
        {/* Each column for images */}
        {[
          { src: "/images/boat.jpg", title: "New York View" },
          { src: "/images/border.jpg", title: "The Desert" },
          { src: "/images/hill.jpg", title: "Mountains Hike" },
          { src: "/images/eagle.jpg", title: "Sand Storm" },
        ].map((item, index) => (
          <div key={index} className="relative w-1/4 h-full overflow-hidden group">
            <Image
              src={item.src}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
            {/* Title */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="w-12 h-[2px] bg-white mb-2"></div>
              <h2 className="text-lg">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
