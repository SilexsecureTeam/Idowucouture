import React from "react";
import {  Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from './context/ProductContext';
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotfoundPage from './pages/NotfoundPage';
import ProductPage from "./pages/ProductPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <CartProvider>
      <ProductProvider>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/term" element={<TermsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes> 
    </ ProductProvider>
    </CartProvider>
  );
};

export default App;


 
