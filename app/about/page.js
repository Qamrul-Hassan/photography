"use client"; // Mark this component as a Client Component

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaCamera } from 'react-icons/fa'; // Import icons from React Icons

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-72 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src="/images/profile.jpg" // Replace with your profile image
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-20 px-6 pb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Qamrul Hassan</h1>
          <p className="mt-2 text-gray-300 flex items-center justify-center">
            <FaCamera className="mr-2 animate-pulse" /> Photographer & Visual Storyteller
          </p>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-colors transform hover:scale-125 duration-300"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors transform hover:scale-125 duration-300"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-125 duration-300"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition-colors transform hover:scale-125 duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>

          {/* About Me Section */}
          <div className="mt-10 text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm Qamrul Hassan, a passionate photographer with a love for capturing the beauty of the world through my lens. I specialize in landscape, portrait, and street photography, and I believe every picture tells a unique story.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              My journey in photography began 10 years ago, and since then, I've traveled to over 20 countries, capturing moments that inspire and evoke emotions. Whether it's the golden hour on a mountain peak or the vibrant life of a bustling city, I strive to bring out the essence of every scene.
            </p>
          </div>

          {/* Photography Style Section */}
          <div className="mt-10 text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">My Photography Style</h2>
            <p className="text-gray-300 leading-relaxed">
              I focus on creating visually stunning images that highlight the interplay of light, shadow, and color. My work is characterized by:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              <li>Natural and authentic compositions</li>
              <li>Emphasis on storytelling and emotion</li>
              <li>Attention to detail and precision</li>
              <li>Creative use of lighting and angles</li>
            </ul>
          </div>

          {/* Featured Work Section */}
          <div className="mt-10 text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">Featured Work</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/boat.jpg"
                  alt="Boat"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Boat at Sunset</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/eagle.jpg"
                  alt="Eagle"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Majestic Eagle</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/border.jpg"
                  alt="Border"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Mountain Border</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}