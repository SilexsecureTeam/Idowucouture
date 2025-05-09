import React, { useState } from "react";
import { ArrowRightIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartHooks";
import Secondletter from "./Secondletter";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const [promo, setPromo] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = Math.round(subtotal * 0.2);
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 flex flex-col">
      <div className="flex items-center gap-x-1 mt-2 font-normal text-black text-[16px]">
        <h1 className="opacity-60 flex items-center">
        <Link to='/'>  Home </Link> <ChevronRightIcon size={15} />
        </h1>{" "}
        <span>Cart</span>
      </div>
      <div className="mx-auto w-full pb-6 pt-3">
        <h1 className="md:text-[40px] text-xl font-bold mb-5">Your cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-5 gap-x-5">
            {/* Cart Items */}
            <div className="flex-1 bg-white h-[385px] overflow-y-auto cartshadow px-4 py-1 rounded-xl">
              {cart.map((item, index) => (
                <div key={item.id} className={`${index < cart.length - 1 ? 'border-b' : ''} flex border-b-gray-200 items-center gap-x-2 py-3`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-22 rounded-sm object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between w-full">
                      <div className="font-bold text-sm md:text-[20px] text-black">{item.name}</div>
                      <button
                        className="text-red-500 corsor-pointer hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove"
                      >
                        <Trash2Icon size={18} />
                      </button>
                    </div>
                    <div className="text-sm text-black font-normal">
                      Size: <span className="opacity-60">{item.size || "N/A"}</span> <br />
                      Color: <span className="opacity-60">{item.color || "N/A"}</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="font-bold mt-1">₦{item.price}</div>
                      <div className="flex items-center p-1 px-1.5 bg-[#F0F0F0] rounded-2xl gap-x-3">
                        <button
                          className="w-[20px] cursor-pointer"
                          onClick={() => updateQty(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="text-[15px]">{item.qty}</span>
                        <button
                          className="w-[20px] cursor-pointer"
                          onClick={() => updateQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
              <div className="w-full lg:min-w-1/3 lg:w-fit bg-white cartshadow rounded-xl p-6">
                <h2 className="font-bold text-2xl mb-4">Order Summary</h2>
                <div className="flex justify-between py-1">
                  <span className="text-[20px] opacity-60 font-medium">Subtotal</span>
                  <span className="text-[20px] font-bold">₦{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-[20px] opacity-60 font-medium">Discount (-20%)</span>
                    <span className="text-[#FF3333] text-[20px] font-bold">-₦{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-[20px] opacity-60 font-medium">Delivery Fee</span>
                    <span className="text-[20px] font-bold">₦{delivery.toFixed(2)}</span>
                </div>
                <div className="border-t border-t-gray-300 my-2"></div>
                <div className="flex justify-between font-bold text-lg py-1">
                    <span className="text-[20px] font-medium">Total</span>
                    <span>₦{total.toFixed(2)}</span>
                </div>
                <div className="flex w-full px-4 justify-center mt-4 gap-2">
                    <input
                      type="text"
                       placeholder="Add promo code"
                       value={promo}
                       onChange={(e) => setPromo(e.target.value)}
                       className="md:flex-1 w-full  px-3 py-2 bg-[#F0F0F0] rounded-4xl text-black outline-none placeholder:text-[#6C7275]"
                    />
                    <button className="bg-black text-16 rounded-4xl cursor-pointer text-white px-4 md:px-6 py-2">
                          Apply
                    </button>
                </div>
                <button className="w-full flex justify-center gap-x-2 cursor-pointer bg-black text-white py-3 rounded-4xl mt-4 font-semibold hover:bg-gray-800 transition">
                    Go to Checkout
                    <ArrowRightIcon className="w-[30px]" />
                </button>
              </div>
          </div>
        )}
      </div>
      <Secondletter />
    </div>
  );
};

export default Cart;