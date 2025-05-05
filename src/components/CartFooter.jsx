import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import logo from '../assets/logo.png';

const CartFooter = () => {
  return (
    <footer className="bg-black text-white py-8 px-5 sm:px-10 lg:px-20">
        <div className="  flex flex-col md:flex-row w-full justify-between items-start">
          <div className='w-full'>
              <img src={logo} alt="Logo" className="h-18 ml-8 mb-2 w-8=18" />
            <div className="flex sm:flex-row flex-col justify-between w-full gap-6 items-start mb-2">
              <span className="font-medium text-sm pl-8 border-l border-l-gray-400">Gift & Decoration Store</span>
              <div className="flex flex-col md:items-end gap-2">
            <nav className="flex gap-x-4 gap-4 text-[#FEFEFE] mb-2">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Product</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </nav>
            
          </div>
            </div>
            <div className="flex justify-between gap-5 items-center w-full flex-wrap mt-3 pt-3 border-t-1 border-t-gray-300">
            <div className="text-xs flex item-center gap-x-3 text-[#fefefe] ">
              Copyright © 2023 Slogant. All rights reserved
              <div className="flex gap-2 text-xs">
              <a href="#" className="underline">Privacy Policy</a>
              <a href="#" className="underline">Terms of Use</a>
            </div>
            </div>
            <div className="flex items-center justify-center md:justify-end w-full md:w-fit gap-x-3">
                <InstagramIcon size={20} className="text-[#FEFEFE] cursor-pointer" />
                <FacebookIcon size={20} className="text-[#FEFEFE] cursor-pointer" />
                <YoutubeIcon size={20} className="text-[#FEFEFE] cursor-pointer" />
            </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default CartFooter
