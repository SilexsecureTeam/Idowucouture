import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./assets/logo.png";

// Lazy load all page components
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TrackPage = lazy(() => import("./pages/TrackPage"));
const TrackingOrderPage = lazy(() => import("./pages/TrackingOrderPage"));
const NotfoundPage = lazy(() => import("./pages/NotfoundPage"));

const App = () => {
  const loadingSpinner = (
    <div style={spinnerContainerStyle}>
      <img
        src={logo} // Replace with your image path
        alt="Loading..."
        style={loadingImageStyle}
      />
    </div>
  );

  return (
    <CartProvider>
      <ProductProvider>
        <Suspense fallback={loadingSpinner}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/term" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tracking" element={<TrackPage />} />
            <Route path="/trackingorder" element={<TrackingOrderPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </Suspense>
      </ProductProvider>
    </CartProvider>
  );
};

// Inline styles for the loading container (unchanged)
const spinnerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

// Inline styles for the loading image with animation
const loadingImageStyle = {
  width: "80px", // Initial size (adjust as needed)
  height: "80px",
  animation: "pulse 1.5s ease-in-out infinite", // Animation for size increase/decrease
};

// Add keyframes for the pulse animation
const keyframes = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2); /* Increase size by 20% */
    }
    100% {
      transform: scale(1);
    }
  }
`;

// Inject keyframes into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default App;
