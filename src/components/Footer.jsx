import { Instagram, Facebook, Youtube, ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import visa from "../assets/visa.png";
import express from "../assets/express.png";
import card from "../assets/card.png";
import stripe from "../assets/stripe.png";
import paypal from "../assets/paypal.png";
import pay from "../assets/pay.png";

const Footer = () => {
  // State to manage visibility of each section's list
  const [isOpen, setIsOpen] = useState({
    page: true,
    info: true,
    office: true,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-black text-white px-5 sm:px-10 lg:px-20 py-10">
      <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Left section */}
        <div className="md:w-1/3 mb-2 md:mb-0 border-b-1 border-b-gray-700 md:border-b-0 pb-4 md:pb-0 w-full">
          <h2 className="text-[24px] poppins font-medium mb-4">Idowucouture</h2>
          <p className="mb-6 text-[20px] poppins font-medium text-[#fefefe]">
            More than just a game.<br />It’s a lifestyle.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-[#fefefe] cursor-pointer">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#fefefe] cursor-pointer">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="text-[#fefefe] cursor-pointer">
              <Youtube size={22} />
            </a>
          </div>
        </div>
        {/* Center section */}
        <div className="flex flex-wrap justify-between md:justify-start gap-10">
          <div className="md:w-[160px] border-b-1 border-b-gray-700 md:border-b-0 pb-4 md:pb-0 w-full">
            <div className="flex justify-between w-full">
              <h3 className="font-medium mb-4 poppins text-[16px] text-[#fefefe]">Page</h3>
              <button
                onClick={() => toggleSection("page")}
                className="text-white md:hidden block font-medium cursor-pointer"
                aria-label={isOpen.page ? "Collapse Page section" : "Expand Page section"}
              >
                {isOpen.page ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
              </button>
            </div>
            <ul className={`${isOpen.page ? "block" : "hidden"} md:block space-y-3 text-[14px] text-[#fefefe]`}>
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">Product</a></li>
              <li><a href="#" className="hover:text-white transition">Articles</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div className="md:w-[160px] border-b-1 border-b-gray-700 md:border-b-0 pb-4 md:pb-0 w-full">
            <div className="flex justify-between w-full">
              <h3 className="font-medium mb-4 poppins text-[16px] text-[#fefefe]">Info</h3>
              <button
                onClick={() => toggleSection("info")}
                className="text-white md:hidden block font-medium cursor-pointer"
                aria-label={isOpen.info ? "Collapse Info section" : "Expand Info section"}
              >
                {isOpen.info ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
              </button>
            </div>
            <ul className={`${isOpen.info ? "block" : "hidden"} md:block space-y-3 text-[14px] text-[#fefefe]`}>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Return & Refund</a></li>
              <li><a href="#" className="hover:text-white transition">Terms and Condition</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          <div className="md:w-[160px] w-full">
            <div className="flex justify-between w-full">
              <h3 className="font-medium mb-4 poppins text-[16px] text-[#fefefe]">Office</h3>
              <button
                onClick={() => toggleSection("office")}
                className="text-white md:hidden block font-medium cursor-pointer"
                aria-label={isOpen.office ? "Collapse Office section" : "Expand Office section"}
              >
                {isOpen.office ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
              </button>
            </div>
            <ul className={`${isOpen.office ? "block" : "hidden"} md:block space-y-1.5 text-[14px] text-[#fefefe]`}>
              <li>43111 Hai Trieu street,</li>
              <li>District 1, HCMC</li>
              <li>Vietnam</li>
              <li className="mt-3">84-756-3237</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Mobile view */}
                <div className="flex flex-col gap-6 md:hidden">
          {/* Payment icons */}
          <div className="flex gap-2 items-center w-fit mx-auto flex-wrap">
            <img src={visa} alt="Visa" className="h-6" />
            <img src={express} alt="Amex" className="h-6" />
            <img src={card} alt="Mastercard" className="h-6" />
            <img src={stripe} alt="Stripe" className="h-6" />
            <img src={pay} alt="PayPal" className="h-6" />
            <img src={paypal} alt="Apple Pay" className="h-6" />
          </div>
          {/* Privacy Policy & Terms */}
          <div className="flex gap-4 text-[#6C7275] w-fit mx-auto poppins font-normal text-[12px]">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
          {/* Copyright */}
          <div className="text-[#E8ECEF] pop Pins text-center font-normal text-[12px]">
            Copyright © 2025 Idowucouture. All rights reserved
          </div>
        </div>
        {/* Laptop view  */}
      <div className="hidden md:flex w-full md:items-center md:justify-between gap-6">
          <div className="text-[#E8ECEF] poppins font-normal text-[12px]">
            Copyright © 2025 Idowucouture. All rights reserved | 
            <a href="#" className="text-[#6C7275] ml-1">Privacy Policy</a> 
            <a href="#" className="text-[#6C7275] ml-1">Terms & Conditions</a>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <img src={visa} alt="Visa" className="h-6" />
            <img src={express} alt="Amex" className="h-6" />
            <img src={card} alt="Mastercard" className="h-6" />
            <img src={stripe} alt="Stripe" className="h-6" />
            <img src={pay} alt="PayPal" className="h-6" />
            <img src={paypal} alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;