import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import golf from "../assets/dimage1.jpg";
import golf4 from "../assets/dimage2.jpg";
import golf5 from "../assets/dimage3.jpg";
import image from "../assets/dimage4.jpg";
import image2 from "../assets/dimage5.jpg";
import golf6 from "../assets/dimage6.jpg";

const Image = () => {
  const [loading, setLoading] = useState(true);

  const images = [
    { id: 1, img: golf6, alt: "Image 1" },
    { id: 2, img: image2, alt: "Image 2" },
    { id: 3, img: golf4, alt: "Image 3" },
    { id: 4, img: golf, alt: "Image 4" },
    { id: 5, img: image, alt: "Image 5" },
    { id: 6, img: golf5, alt: "Image 6" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden">
            {loading ? (
              <Skeleton
                variant="rectangular"
                className="w-full h-56 object-cover"
              />
            ) : (
              <img
                src={image.img}
                alt={image.alt}
                className="w-full h-56 object-cover bg-gray-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
