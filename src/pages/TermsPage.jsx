import React from "react";
import Terms from "../components/Terms";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notification from "../components/Notification";

const TermsPage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Terms />
        <Footer />
      </div>
    </div>
  );
};

export default TermsPage;
