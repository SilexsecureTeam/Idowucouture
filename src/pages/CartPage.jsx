import React from "react";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div>
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Cart />
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
