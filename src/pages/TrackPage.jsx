import React from "react";
import Tracking from "../components/Tracking";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TrackPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Tracking />
        <Footer />
      </div>
    </div>
  );
};

export default TrackPage;
