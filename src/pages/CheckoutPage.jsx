import React from "react";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Header from "../components/Header";

const CheckoutPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Checkout />
        <Footer />
      </div>
    </div>
  );
};

export default CheckoutPage;
