import { Home, ChevronRightIcon, Phone, MessageCircle } from "lucide-react";
import track from "../assets/track.png";
import Secondletter from "./Secondletter";

const shipmentEvents = [
  {
    date: "15 May 2025, 9:13am",
    title: "The Package has been picked Up",
    location: "Ajao Estate, Lagos",
    status: "completed",
  },
  {
    date: "15 May 2025, 12:13pm",
    title: "Package arrived FFN",
    location: "Ajao Estate, Lagos",
    status: "completed",
  },
  {
    date: "20 May 2025, 9:13am",
    title: "Package departs FFN",
    location: "Ajao Estate, Lagos",
    status: "completed",
  },
  {
    date: "20 May 2025, 9:13am",
    title: "Package is in transit",
    location: "Ajao Estate, Lagos",
    status: "current",
  },
];

export default function TrackingOrder() {
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

      {/* Main Content */}
      <div className="px-5 sm:px-10 lg:px-20">
        <div className="lg:flex lg:gap-0 grid gap-6 w-full items-stretch">
          {/* Left - Timeline + Info */}
          <div className="bg-white  shadow-sm p-6 space-y-6 flex-1">
            {/* Shipment Header */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-semibold cab text-[#484A58]">
                  Shipment number
                </p>
                <h2 className="text-2xl poppins font-bold text-black">
                  EV-2017002346
                </h2>
                <p className="text-lg poppins font-normal text-[#484A58] mt-1">
                  Food Items
                </p>
              </div>
              <img
                src={track}
                alt="Truck"
                className="md:max-w-50 w-20 h-auto"
              />
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {shipmentEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        event.status === "current"
                          ? "bg-green-500 border-2 border-white"
                          : "bg-gray-400"
                      }`}
                    />
                    {index !== shipmentEvents.length - 1 && (
                      <div className="h-16 w-0.5 bg-gray-300 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="text-base font-light text-[#232323] poppins">
                      {event.date}
                    </p>
                    <p className="font-semibold text-lg poppins text-[#333333]">
                      {event.title}
                    </p>
                    <p className="text-base poppins font-normal text-[#232323]">
                      {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dispatcher Info */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dispatcher"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-semibold poppins text-xl text-[#B0B0B0]">
                    Dispatch
                  </p>
                  <p className="font-semibold poppins text-2xl text-[#232323]">
                    Dare Benjamin
                  </p>
                  <p className="text-xl poppins font-normal text-[#484A58]">
                    GIG Logistics
                  </p>
                </div>
              </div>
              <div className="flex gap-3 text-green-600">
                <Phone className="w-5 h-5 cursor-pointer" />
                <MessageCircle className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="flex-1  overflow-hidden shadow-sm h-auto">
            <iframe
              title="Map"
              className="w-full h-full min-h-full"
              src="https://www.google.com/maps?q=lagos+nigeria&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-25 px-5 sm:px-10 lg:px-20">
        <Secondletter />
      </div>
    </div>
  );
}
