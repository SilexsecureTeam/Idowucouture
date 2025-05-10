import { ChevronRightIcon } from "lucide-react";
import bg from "../assets/checkout.png";
import Secondletter from "./Secondletter";
// import { User, Home, Truck, FileText } from "lucide-react";

const Checkout = () => {
  return (
    <div>
      <div className="flex items-center space-x-3 py-3 ">
        <h2 className="text-black text-base poppins font-normal opacity-60">
          Home
        </h2>
        <ChevronRightIcon size={16} />
        <h2 className="text-black text-base poppins font-normal">Checkout</h2>
      </div>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 min-w-[100vw] min-h-[50vh]">
          <img
            src={bg}
            alt="term"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="min-h-fit py-6 bg-gray-100 my-15 px-5 sm:px-10 lg:px-20 ">
        <h1 className="text-3xl font-bold mb-8">Checkout Page</h1>
        <div className="w-full space-x-4  flex flex-col md:flex-row overflow-hidden">
          {/* Left: Form Section */}
          <div className="flex-1 px-1">
            {/* Stepper */}
            <div className="flex items-center gap-4 mb-8 overflow-x-auto">
              <Step active>Shipping Address</Step>
              <Step>Billing Address</Step>
              <Step>Shipping Methods</Step>
              <Step>Order Details</Step>
            </div>
            {/* Form */}
            <form className="grid grid-cols-2 gap-2">
              <Input
                placeholder="First Name"
                name="firstName"
                autoComplete="given-name"
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
              <Input placeholder="Company Name" name="company" className="" />
              <Input
                placeholder="Address"
                name="address"
                className=""
                autoComplete="street-address"
              />
              <Select
                placeholder="Country"
                name="country"
                options={["Select Country", "USA", "Canada", "UK"]}
              />
              <Select
                placeholder="State"
                name="state"
                options={["Select State", "CA", "NY", "TX"]}
              />
              <Input placeholder="City" name="city" />
              <Input placeholder="Postal Code" name="postalCode" />
              <Input
                placeholder="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
              <div className="w-fit mt-4 col-span-2">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-yellow-900 px-6 text-white py-3 mb-5 font-semibold hover:bg-yellow-800 f transition"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          {/* Right: Order Summary */}
          <div className=" w-full md:max-w-96 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl border-b-1 border-b-black font-semibold pb-6">
                Order Summary
              </h2>
              <SummaryRow label="Subtotal" value="$910.00" />
              <SummaryRow label="Coupon Code" value="$20.00" />
              <SummaryRow label="TAX" value="$150.00" />
              <SummaryRow label="Flat Rate Shipping" value="$11.00" />
              <div className="flex justify-between items-center pt-6 text-lg font-bold text-yellow-900">
                <span>Total</span>
                <span>$1051.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <Secondletter />
      </div>
    </div>
  );
};
// Stepper Item
function Step({ active, icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`rounded-full p-2 ${
          active ? "bg-yellow-900 text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-medium ${
          active ? "text-yellow-900" : "text-gray-500"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

// Input Field
function Input({ label, name, type = "text", className = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-900 transition"
        {...props}
      />
    </div>
  );
}

function Select({ label, name, options = [], className = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-900 transition"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// Summary Row
function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-b-gray-400 items-center py-3 text-black">
      <span className="font-medium">{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default Checkout;
