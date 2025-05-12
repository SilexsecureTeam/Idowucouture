import React from "react";
import Product from "../components/Product";
import Notification from "../components/Notification";
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import ProductNewsletter from "../components/ProductNewsletter";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div>
      <Notification />
      <Header />
      <div className="absolute top-26 left-0 w-full">
        <Product />
        <ProductSlider />
        <ProductNewsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
