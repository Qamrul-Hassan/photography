"use client"; // Mark this component as a Client Component

import { useState, useEffect } from 'react';

const images = [
  '/images/boat.jpg',
  '/images/eagle.jpg',
  '/images/border.jpg',
  '/images/farmer.jpg',
  '/images/fisher.jpg',
  '/images/golden.jpg',
  '/images/hill.jpg',
  '/images/morning.jpg',
  '/images/sun.jpg',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={prevSlide}
          className="bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all"
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}