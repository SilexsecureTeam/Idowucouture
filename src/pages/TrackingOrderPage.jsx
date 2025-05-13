import React from "react";
import TrackingOrder from "../components/TrackingOrder";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TrackingOrderPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <TrackingOrder />
        <Footer />
      </div>
    </div>
  );
};

export default TrackingOrderPage;
