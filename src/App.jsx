import React from "react";
import {  Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotfoundPage from './pages/NotfoundPage';

const App = () => {
  return (
    <CartProvider>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes> 
    </CartProvider>
  );
};

export default App;


 
