import React from "react";
import About from "../components/About";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
