import React from "react";
import Profile from "../components/Profile";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Secondletter from "../components/Secondletter";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Profile />
        <div className="mt-20 px-5 py-20 md:px-10 lg:px-20">
          <Secondletter />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
