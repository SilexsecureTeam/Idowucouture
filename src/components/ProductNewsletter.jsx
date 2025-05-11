import React from "react";
// import newsletter from '../assets/pnewsletter.png'
import { Mail } from "lucide-react";

const ProductNewsletter = () => {
  // const backgroundImage = newsletter
  return (
    <div
      className="bg-cover py-18 px-5 bg-gray-300 bg-no-repeat bg-center h-fit w-full"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[520px] w-full mx-auto">
        <h1 className="poppins text-[#141718] text-[20px] md:text-[40px] font-medium text-center mb-0">
          Join Our Newsletter
        </h1>
        <p className="text-center text-normal mt-0 mb:text-[18px] text-sm text-[#141718] mb-6">
          Sign up for deals, new products and promotions
        </p>
        <form className="flex items-center pb-2 border-b-1 border-b-[#6C7275] justify-between gap-4">
          <div className="flex gap-x-2 items-center">
            <Mail className="text-[#6C7275] w-fit" size={20} />
            <input
              type="email"
              placeholder="Email address"
              className="border-0 placeholder-[#6C7275] text-[#6C7275] outline-none flex-1  py-2"
            />
          </div>
          <button className="  text-[#6C7275]  cursor-pointer">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default ProductNewsletter;
