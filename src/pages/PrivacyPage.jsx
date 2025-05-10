import React from "react";
import Privacy from "../components/Privacy";
import CartFooter from "../components/CartFooter";
import Header from "../components/Header";
import Notification from "../components/Notification";

const PrivacyPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Privacy />
        <CartFooter />
      </div>
    </div>
  );
};

export default PrivacyPage;
