import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";
import img5 from "../assets/about5.jpg";
import { MailIcon } from "lucide-react";
import Secondletter from "./Secondletter";

const About = () => {
  const [loading, setLoading] = useState(true);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-10">
      <div className="md:h-[80vh] h-fit flex space-x-5">
        {loading ? (
          <Skeleton
            variant="rectangular"
            className="md:w-2/3 w-full h-[80%] object-cover"
          />
        ) : (
          <img
            src={img1}
            alt="img"
            className="md:w-2/3 w-full h-[80%] object-cover"
          />
        )}
        {loading ? (
          <Skeleton
            variant="rectangular"
            className="w-1/3 mt-[4%] h-[80%] hidden md:block object-cover"
          />
        ) : (
          <img
            src={img2}
            alt="img"
            className="w-1/3 mt-[4%] h-[80%] hidden md:block object-cover"
          />
        )}
      </div>
      <div className="flex space-x-5 md:mt-7 md:space-x-10">
        {loading ? (
          <Skeleton
            variant="rectangular"
            className="md:h-60 md:w-60 md:block hidden rounded-lg"
          />
        ) : (
          <img
            src={img3}
            alt="img3"
            className="md:h-60 md:w-60 md:block hidden rounded-lg"
          />
        )}
        <div className="mt-8 mb-10 flex-1">
          <h2 className="mon font-bold text-2xl md:text-[40px] text-black">
            Our Story
          </h2>
          <h2 className="mon text-black font-normal md:text-[23px] mt-2 text-base">
            Appropriately develop high-quality interfaces vis-a-vis granular
            e-markets. Globally integrate accurate collaboration and
            idea-sharing after effective web services. Seamlessly streamline
            bleeding-edge paradigms for technically
          </h2>
          <h2 className="mon font-bold md:text-2xl md:text-[23px] mt-6 text-base">
            EST. 2015 <span className="mr-10"> </span> 5 DESIGNERS{" "}
            <span className="mr-10"> </span>
            WORLDWIDE DELIVERY
          </h2>
          <h2 className="mon text-black font-normal md:text-[23px] mt-2 text-base">
            Appropriately develop high-quality interfaces vis-a-vis granular
            e-markets. Globally integrate accurate collaboration and
            idea-sharing after effective web services. Seamlessly streamline
            bleeding-edge paradigms for technically.
          </h2>
        </div>
      </div>
      <div className="flex h-full w-full flex-col md:mt-10 md:flex-row gap-4 justify-center md:justify-between items-center md:space-x-10">
        {loading ? (
          <Skeleton
            variant="rectangular"
            className="md:w-1/2 w-full h-60 object-cover md:h-90"
          />
        ) : (
          <img
            src={img4}
            alt="img"
            className="md:w-1/2 w-full h-60 object-cover md:h-90"
          />
        )}
        <div className="w-full md:w-1/2">
          <h2 className="font-bold mb-2 mon text-xl md:text-[30px]">
            WORLDWIDE DELIVERY
          </h2>
          <h2 className="text-normal text-base md:text-xl mon">
            Appropriately develop high-quality interfaces vis-a-vis granular
            e-markets. Globally integrate accurate collaboration and
            idea-sharing after effective web services. Seamlessly streamline
            bleeding-edge paradigms for technically sound ROI. <br /> <br />
            Globally integrate accurate collaboration and idea-sharing after
            effective web services. Seamlessly streamline bleeding-edge
            paradigms for technically sound ROI.
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="relative h-[60vh] w-full mt-10 md:mt-17 overflow-hidden">
          {loading ? (
            <Skeleton
              variant="rectangular"
              className="absolute top-0 left-0 w-full h-[90vh] object-cover"
            />
          ) : (
            <img
              src={img5}
              alt="img"
              className="absolute top-0 left-0 w-full h-[90vh] object-cover"
            />
          )}
        </div>
        <div className="absolute py-4 md:w-[50%] w-[80%] mon left-1/2 -translate-x-1/2 md:text-[40px] text-base font-semibold text-center -bottom-9 bg-[#38CB89]">
          Trusted Baby Product
        </div>
      </div>
      <h2 className="mon text-base w-[80%] text-center md:text-start mx-auto mt-20 font-normal md:text-2xl">
        Appropriately develop high-quality interfaces vis-a-vis granular
        e-markets. Globally integrate accurate collaboration and idea-sharing
        after effective web services. Seamlessly streamline bleeding-edge
        paradigms for technically.
      </h2>
      <div className="mt-10 flex w-full items-center gap-3 justify-center space-x-5 flex-col md:flex-row">
        <h2 className="text-[#7A7A7A] rub text-center font-bold text-xl md:text-3xl">
          Start your journey with us now
        </h2>
        <div className="flex p-2 border border-black items-center space-x-3">
          <MailIcon />
          <h2>Email us</h2>
        </div>
      </div>
      <div className="mt-25">
        <Secondletter />
      </div>
    </div>
  );
};

export default About;
