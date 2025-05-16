import React, { memo, useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import golf1 from "../assets/collection.jpg";
import golf2 from "../assets/men.jpg";
import golf3 from "../assets/women.jpg";

const collections = [
  { title: "Juniors Set", image: golf1, link: "#" },
  { title: "Men’s Set", image: golf2, link: "#" },
  { title: "Women’s Set", image: golf3, link: "#" },
];

const Collection = () => {
  const [loading, setLoading] = useState(true);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-8">
      <h2 className="text-2xl md:text-[40px] font-medium poppins mb-8">
        Shop Collection
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:max-h-[80vh] mx-auto w-full">
        <div className="div1 relative flex-1 h-full md:h-auto md:max-h-[80vh] flex flex-col">
          {loading ? (
            <Skeleton
              variant="rectangular"
              className="w-full h-full object-cover"
              width="600"
              height="800"
            />
          ) : (
            <img
              src={collections[0].image}
              alt={collections[0].title}
              className="w-full h-full object-cover"
              loading="lazy"
              width="600"
              height="800"
            />
          )}
          <div className="absolute bottom-4 left-4">
            <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
              {collections[0].title}
            </h3>
            <a
              href={collections[0].link}
              className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
            >
              Collections <span>→</span>
            </a>
          </div>
        </div>
        <div className="div2 flex flex-col gap-4 flex-1 h-full md:h-auto md:max-h-[77vh]">
          <div className="relative flex-1 h-1/2 md:aspect-auto">
            {loading ? (
              <Skeleton
                variant="rectangular"
                className="w-full h-full object-cover"
                width="600"
                height="400"
              />
            ) : (
              <img
                src={collections[1].image}
                alt={collections[1].title}
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
            )}
            <div className="absolute bottom-4 left-4">
              <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
                {collections[1].title}
              </h3>
              <a
                href={collections[1].link}
                className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
              >
                Collections <span>→</span>
              </a>
            </div>
          </div>
          <div className="relative flex-1 h-1/2 md:aspect-auto">
            {loading ? (
              <Skeleton
                variant="rectangular"
                className="w-full h-full object-cover"
                width="600"
                height="400"
              />
            ) : (
              <img
                src={collections[2].image}
                alt={collections[2].title}
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
            )}
            <div className="absolute bottom-4 left-4">
              <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
                {collections[2].title}
              </h3>
              <a
                href={collections[2].link}
                className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
              >
                Collections <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Collection);
