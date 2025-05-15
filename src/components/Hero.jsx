import React, { useState, useEffect } from "react";
import herobg from "../assets/hero-bg.png";
import herobg1 from "../assets/hero-bg1.png";
import herobg2 from "../assets/hero-bg2.png";

const Hero = () => {
  const images = [herobg, herobg1, herobg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative px-5 sm:px-10 lg:px-20 w-full md:h-[90vh] h-[50vh] pb-14 bg-black overflow-hidden">
      {/* Sliding background container */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(100 / images.length) * currentImage}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Shop Now Button */}
      <button className="bg-[#38CB89] absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 cursor-pointer hover:bg-green-400 mx-auto md:mx-0 block text-black font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
