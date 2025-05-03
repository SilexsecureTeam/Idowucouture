import React from "react";
import golf1 from '../assets/golf1.png';
import golf2 from '../assets/golf2.png';
import golf3 from '../assets/golf3.png';

const collections = [
  {
    title: "Juniors Set",
    image: golf1, 
    link: "#",
  },
  {
    title: "Men’s Set",
    image: golf2, 
    link: "#",
  },
  {
    title: "Women’s Set",
    image: golf3, 
    link: "#",
  },
];

const Collection = () => (
  <div className="bg-white px-5 sm:px-10 lg:px-20 py-8">
    <h2 className="text-2xl md:text-[40px] font-medium poppins mb-8">Shop Collection</h2>
    {/* Responsive grid: 1 column on mobile, 2 columns on md+ */}
    <div className="flex flex-col md:flex-row gap-4 md:max-h-[80vh] md:space-x-6 mx-auto w-full">
      {/* Juniors Set (big card) */}
      <div className="div1 relative flex-1 h-full md:h-auto md:max-h-[80vh] flex flex-col">
        <img
          src={collections[0].image}
          alt={collections[0].title}
          className="w-full h-full object-fill"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">{collections[0].title}</h3>
          <a
            href={collections[0].link}
            className="text-base text-[#121212] font-medium flex items-center gap-1 underline"
          >
            Collections <span>→</span>
          </a>
        </div>
      </div>

      {/* Men’s Set & Women’s Set stacked vertically on md+, horizontally on mobile */}
      <div className="div2 flex flex-col gap-4 flex-1 h-full md:h-auto md:max-h-[80vh]">
        {/* Men’s Set */}
        <div className="relative flex-1 h-1/2 md:aspect-auto">
          <img
            src={collections[1].image}
            alt={collections[1].title}
            className="w-full h-full object-fill"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">{collections[1].title}</h3>
            <a
              href={collections[1].link}
              className="text-base text-[#121212] font-medium flex items-center gap-1 underline"
            >
              Collections <span>→</span>
            </a>
          </div>
        </div>
        {/* Women’s Set */}
        <div className="relative flex-1 h-1/2 md:aspect-auto">
          <img
            src={collections[2].image}
            alt={collections[2].title}
            className="w-full h-full object-fill"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">{collections[2].title}</h3>
            <a
              href={collections[2].link}
              className="text-base text-[#121212] font-medium flex items-center gap-1 underline"
            >
              Collections <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collection;
