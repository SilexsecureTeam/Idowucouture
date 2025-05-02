import React, { useEffect, useState } from "react";
import hurray from "../assets/hurray.png";

const Hurray = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-05-08T17:46:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const calculatedDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to format numbers with at least 2 digits
  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-wrap w-full h-fit items-stretch">
    <div className="bg-black px-15 py-5 w-full sm:w-1/2 flex flex-col justify-center">
      <h3 className="text-[#38CB89] text-center sm:text-start font-bold mb-2 text-base">LIMITED EDITION</h3>
      <h1 className="text-2xl text-center sm:text-start md:text-[40px] font-medium poppins mb-2 text-white">
        Hurry up: 30% OFF
      </h1>
      <h3 className="text-[20px] font-normal text-[#fefefe] text-center sm:text-start mb-8">
        Find clubs that are right for your game
      </h3>
      <h4 className="text-base font-normal text-[#fefefe] text-center sm:text-start mb-2">Offer expires in:</h4>
      <div className="flex justify-center sm:justify-start gap-x-2 mb-6">
        <span className="bg-white text-black p-2 text-center text-[20px]">
          {formatNumber(days)}
        </span>
        <span className="bg-white text-black p-2 text-center text-[20px]">
          {formatNumber(hours)}
        </span>
        <span className="bg-white text-black p-2 text-center text-[20px]">
          {formatNumber(minutes)}
        </span>
        <span className="bg-white text-black p-2 text-center text-[20px]">
          {formatNumber(seconds)}
        </span>
      </div>
      <div className="flex justify-center sm:justify-start">
        <button className="rounded-xl text-black mx-auto sm:mx-0 font-medium cursor-pointer text-base px-6 py-2 bg-[#38CB89]">
          Shop now
        </button>
      </div>
    </div>
    <div className="w-full sm:w-1/2">
      <img src={hurray} alt="img" className="h-full w-full object-cover" />
    </div>
  </div>

  );
};

export default Hurray;
