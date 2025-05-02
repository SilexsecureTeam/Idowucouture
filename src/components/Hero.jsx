import React from 'react';
import herobg from '../assets/hero-bg.png'; // image for laptop and desktop background
import herobg1 from '../assets/hero-bg1.png'; // image for mobile background

const Hero = () => {
  return (
    <div className="relative px-5 sm:px-10 lg:px-20 w-full h-fit  pb-14 bg-black overflow-hidden">
      {/* Background image with golf clubs and balls */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${herobg1})`, // Default mobile image
        }}
      >
        {/* Hidden image for larger screens (using media query) */}
        <div className="hidden md:block">
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat"
            style={{
              backgroundImage: `url(${herobg})`, // Desktop image
            }}
          ></div>
        </div>
      </div>

      {/* Content overlay (text and button) */}
      <div className="relative h-full w-full flex items-center">
        <div className="container pt-[455px] md:pt-16">
          <div className="w-full">
            {/* Main heading with proper line breaks */}
            <h1 className="text-white text-center md:text-start text-[40px] leading-9 sm:leading-14 md:leading-17 sm:text-6xl md:text-7xl font-meduim poppins mb-5">
              More than<br />
              just a game.<br />
              It's a lifestyle.
            </h1>

            {/* Descriptive paragraph */}
            <p className="text-[#FEFEFE] md:max-w-[400px] max-w-[300px] mx-auto md:mx-0 text-base text-center md:text-start font-normal sm:text-[20px] mb-8">
              Whether you're just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.
            </p>

            {/* Shopping button */}
            <button className="bg-[#38CB89] cursor-pointer hover:bg-green-400 mx-auto md:mx-0 block text-black font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Shopping Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
