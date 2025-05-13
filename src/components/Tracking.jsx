import { useState } from "react";
import { ArrowRight, Info, Home, ChevronRightIcon } from "lucide-react";
import Secondletter from "./Secondletter";
import { Link } from "react-router-dom";

export default function Tracking() {
  const [orderId, setOrderId] = useState("");

  return (
    <div className="w-full md:py-10 py-5 font-rubik">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 py-3 px-5 sm:px-10 lg:px-20 bg-[#F2F4F5] flex items-center gap-2 mb-6">
        <Home className="w-4 h-4" />
        <span>Home</span>
        <span>
          <ChevronRightIcon />
        </span>
        <span>Pages</span>
        <span>
          <ChevronRightIcon />
        </span>
        <span className="text-green-600 font-medium">Track Order</span>
      </div>

      {/* Heading */}
      <div className="px-5 sm:px-10 lg:px-20">
        <h1 className="text-xl md:text-3xl font-semibold text-[#191C1F] poppins my-3">
          Track Order
        </h1>
        <p className="text-[15px] md:text-[18px] text-[#5F6C72] mb-6 max-w-xl">
          To track your order please enter your order ID in the input field
          below and press the "Track Order" button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>

        {/* Form */}
        <form className="space-y-4 max-w-xl">
          <div>
            <label
              htmlFor="order-id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Order ID
            </label>
            <input
              id="order-id"
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="ID..."
            />
          </div>

          <div className="flex items-start text-sm text-gray-600 gap-2">
            <Info className="w-4 h-4 text-green-500 mt-1" />
            <span>Order ID that we sent to you in your email address.</span>
          </div>
          <Link to="/trackingorder">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-6 py-2 rounded flex items-center gap-2"
            >
              TRACK ORDER <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </form>
      </div>
      <div className="mt-25 px-5 sm:px-10 lg:px-20">
        <Secondletter />
      </div>
    </div>
  );
}
