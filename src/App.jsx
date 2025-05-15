import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div style={spinnerStyle}></div>
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

// Inline styles for the circular loading spinner
const spinnerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #3498db",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

// Add keyframes for the spinner animation (you can move this to your CSS file)
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject keyframes into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default App;
