import React, { useState, useEffect, memo } from "react";
import { Skeleton } from "@mui/material";
import herobg from "../assets/hero-bg.png";
import herobg1 from "../assets/hero-bg1.png";
import herobg2 from "../assets/hero-bg2.png";

const Hero = () => {
  const images = [herobg, herobg1, herobg2];
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState(
    Array(images.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="relative px-5 sm:px-10 lg:px-20 w-full md:h-[90vh] h-[50vh] pb-14 bg-black overflow-hidden">
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
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
          >
            {!loadedImages[index] && (
              <Skeleton
                variant="rectangular"
                className="w-full h-full object-cover absolute inset-0"
                sx={{ zIndex: 10 }}
              />
            )}
            <img
              src={img}
              alt={`Hero background ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              onLoad={() => handleImageLoad(index)}
              className="w-full h-full object-cover absolute inset-0"
              style={{ zIndex: 9 }}
            />
          </div>
        ))}
      </div>
      <button className="bg-[#E0B654] hover:bg-amber-300 transition duration-300 ease-in-out transform hover:scale-105 absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 cursor-pointer  mx-auto md:mx-0 block text-black font-medium py-3 px-8 rounded-md ">
        Shop Now
      </button>
    </div>
  );
};

export default memo(Hero);
