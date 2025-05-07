import React, { useState } from "react";
import logo from "../assets/logo.png";
import { SearchIcon, ShoppingBagIcon, UserIcon, MenuIcon, XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartHooks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const goSignUp = () => {
    navigate("/signup");
  };

  const goCartPage = () => {
    navigate("/cart");
  };

  return (
    <div className='fixed top-10 left-0 w-full z-50'>
      <div className="flex px-5 sm:px-10 lg:px-20 items-center justify-between h-16 bg-white relative">
        <img src={logo} alt="logo" className="h-16" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between items-center w-full max-w-[330px]">
          <Link to="/">
            <li className="cursor-pointer font-medium">Home</li>
          </Link>
          <li className="text-[#6C7275] cursor-pointer font-medium">Shop</li>
          <Link to='/product'><li className="text-[#6C7275] cursor-pointer font-medium">Product</li></Link>
          <li className="text-[#6C7275] cursor-pointer font-medium">Contact Us</li>
        </ul>

        {/* Icons */}
        <div className="flex gap-x-3 items-center">
          <SearchIcon className="w-6 h-6 text-[#141718] cursor-pointer" />
          <button onClick={goSignUp}>
            <UserIcon className="w-6 h-6 text-[#141718] cursor-pointer" />
          </button>
          <button onClick={goCartPage}>
            <div className="relative">
              <ShoppingBagIcon className="w-6 h-6 text-[#141718] cursor-pointer" />
              {cartItemCount > 0 && (
                <div className="absolute bg-black text-center text-[10px] h-4 w-4 rounded-full text-white top-0 -right-2">
                  {cartItemCount}
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden ml-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XIcon className="w-7 h-7 text-[#141718]" />
          ) : (
            <MenuIcon className="w-7 h-7 text-[#141718]" />
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-2">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer font-medium">Home</li>
              </Link>
              <li className="text-[#6C7275] cursor-pointer font-medium" onClick={() => setMenuOpen(false)}>
                Shop
              </li>
              <li className="text-[#6C7275] cursor-pointer font-medium" onClick={() => setMenuOpen(false)}>
                Product
              </li>
              <li className="text-[#6C7275] cursor-pointer font-medium" onClick={() => setMenuOpen(false)}>
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;