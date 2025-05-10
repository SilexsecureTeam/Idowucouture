import React from "react";
import Contact from "../components/Contact";
import Secondletter from "../components/Secondletter";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Contact />
        <div className="mt-20 px-5 py-20 md:px-10 lg:px-20">
          <Secondletter />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
