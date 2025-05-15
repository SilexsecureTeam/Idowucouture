import React, { memo } from "react";
import shoe3 from "../assets/art2.jpg";
import shoe4 from "../assets/art1.jpg";
import cup from "../assets/cup.png";

const articles = [
  { id: 1, title: "Air Jordan x Travis Scott Event", image: shoe4, link: "#" },
  {
    id: 2,
    title: "The timeless classics on the green",
    image: shoe3,
    link: "#",
  },
  { id: 3, title: "The 2023 Ryder Cup", image: cup, link: "#" },
];

const Article = () => {
  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-8" id="article">
      <div className="flex justify-between items-center mb-6">
        <h1 className="poppins text-[20px] md:text-[40px] font-medium">
          Latest Articles
        </h1>
        <a
          href="#"
          className="text-base text-[#121212] h-fit pb-1 font-medium flex items-center gap-1 border-b-1 border-b-black"
        >
          View More <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="relative flex flex-col h-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 md:h-64 object-cover mb-2"
              loading="lazy"
              width="400"
              height="256"
            />
            <div className="bottom-4 left-4">
              <h3 className="text-[20px] poppins text-[#23262F] font-medium mb-1 md:mb-2">
                {article.title}
              </h3>
              <a
                href={article.link}
                className="text-base text-[#141718] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
              >
                Read More <span className="text-[]20px">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Article);
