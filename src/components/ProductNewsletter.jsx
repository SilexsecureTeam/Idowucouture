import React from "react";
// import newsletter from '../assets/pnewsletter.png'
import { Mail } from "lucide-react";

const ProductNewsletter = () => {
  // const backgroundImage = newsletter
  return (
    <div
      className="bg-cover py-18 px-5 bg-[#E0B654] bg-no-repeat bg-center h-fit w-full"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[520px] w-full mx-auto">
        <h1 className="poppins text-white text-[20px] md:text-[40px] font-medium text-center mb-0">
          Join Our Newsletter
        </h1>
        <p className="text-center text-normal mt-0 mb:text-[18px] text-sm text-white mb-6">
          Sign up for deals, new products and promotions
        </p>
        <form className="flex items-center pb-2 border-b-1 border-b-[#f2f2f2] justify-between gap-4">
          <div className="flex gap-x-2 items-center">
            <Mail className="text-[#f2f2f2] w-fit" size={20} />
            <input
              type="email"
              placeholder="Email address"
              className="border-0 placeholder-[#fff] text-[#f2f2f2] outline-none flex-1  py-2"
            />
          </div>
          <button className="  text-[#f2f2f2]  cursor-pointer">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default ProductNewsletter;
