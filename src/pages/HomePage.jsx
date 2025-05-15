import React from "react";
import Notification from "../components/Notification";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedSlider from "../components/FeaturedSlider";
import Category from "../components/Category";
import Hurray from "../components/Hurray";
import Collection from "../components/Collection";
import Article from "../components/Article";
import Newsletter from "../components/Newsletter";
import Newsfeed from "../components/Newsfeed";
import Image from "../components/Image";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full mx-auto max-w-[1500px]">
      <Notification />
      <Header />
      <div className="mt-26 w-full">
        <Hero />
        <FeaturedSlider />
        <Category />
        <Hurray />
        <Collection />
        <Article />
        <Newsletter />
        <Newsfeed />
        <Image />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
