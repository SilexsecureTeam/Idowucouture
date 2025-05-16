import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Skeleton } from "@mui/material";
import products from "../data/FeatureProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "../context/CartHooks";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { ShoppingCart, Eye } from "lucide-react";

const FeaturedSlider = () => {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();
  const [showButtons, setShowButtons] = useState({});
  const [loading, setLoading] = useState(true);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    navigate("/product");
  };

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: "default",
      qty: 1,
    };
    addToCart(productToAdd);
  };

  const toggleButtons = (productId, show) => {
    setShowButtons((prev) => ({
      ...prev,
      [productId]: show,
    }));
  };

  const slidesToShow = 4;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dotsClass: "slick-dots custom-dots-class",
    appendDots: (dots) => (
      <div className="flex absolute -top-6 right-8 items-center">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: function () {
      return (
        <div className="w-2 h-2 bg-gray-400 rounded-full transition-colors duration-200 hover:bg-black"></div>
      );
    },
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="w-full mx-auto py-8 relative">
      <div className="flex px-5 sm:px-10 lg:px-20 justify-between items-center mb-6">
        <h2 className="text-2xl md:text-[40px] poppins text-black font-semibold">
          Featured
        </h2>
        <div className="dots-container"></div>
      </div>

      <style jsx global>{`
        .slick-list {
          cursor: grab;
        }
        .slick-list:active {
          cursor: grabbing;
          color: black;
          background-color: white;
        }
        @media (max-width: 768px) {
          .slick-list {
            cursor: pointer;
          }
        }
        .custom-dots-class {
          position: absolute;
          top: -45px;
          right: 30px !important;
          bottom: auto;
          display: flex !important;
          justify-content: flex-end;
        }
        .custom-dots-class li {
          margin: 0 3px;
        }
        .custom-dots-class li div {
          background-color: gray;
        }
        .custom-dots-class li.slick-active div {
          background-color: black !important;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 14rem; /* h-56 = 14 * 4 = 56px units */
          border-top-left-radius: 0.375rem; /* rounded-t-md */
          border-top-right-radius: 0.375rem;
          overflow: hidden;
          background-color: black;
          cursor: pointer;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 10;
        }
        @media (min-width: 768px) {
          .image-container:hover .overlay {
            opacity: 1;
          }
        }
        @media (max-width: 767px) {
          .overlay.active {
            opacity: 1;
          }
        }
      `}</style>

      <Slider {...settings}>
        {products.map((product) => {
          const cartItem = cart.find(
            (item) => item.id === product.id && item.color === "default"
          );
          const qty = cartItem ? cartItem.qty : 0;
          const buttonText = qty > 0 ? `Add to cart (${qty})` : "Add to cart";

          return (
            <div key={product.id} className="pl-5 sm:pl-10">
              <div className="bg-white rounded-md relative clickable-product">
                {product.hot && (
                  <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded z-20">
                    HOT
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-3 left-16 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded z-20">
                    -{product.discount}%
                  </span>
                )}
                <div
                  className="image-container h-56"
                  onClick={() =>
                    window.innerWidth < 768 &&
                    toggleButtons(product.id, !showButtons[product.id])
                  }
                  onMouseEnter={() =>
                    window.innerWidth >= 768 && toggleButtons(product.id, true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 768 && toggleButtons(product.id, false)
                  }
                >
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                      className="rounded-t-md"
                    />
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover bg-black rounded-t-md"
                    />
                  )}
                  <div
                    className={`overlay ${
                      showButtons[product.id] ? "active" : ""
                    }`}
                  >
                    {window.innerWidth >= 768 ? (
                      <>
                        <button
                          className="bg-black text-white text-sm py-2 px-6 cursor-pointer rounded hover:bg-gray-800 transition-all duration-300"
                          aria-label={`Add ${product.name} to cart`}
                          onClick={() => handleAddToCart(product)}
                        >
                          {buttonText}
                        </button>
                        <button
                          className="bg-gray-900 text-white text-sm py-2 px-6 cursor-pointer rounded hover:bg-green-500 transition-all duration-300"
                          onClick={() => handleViewDetails(product)}
                        >
                          View Details
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                          aria-label={`Add ${product.name} to cart`}
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button
                          className="bg-gray-900 text-white p-2 rounded-full hover:bg-green-500 transition-all duration-300"
                          onClick={() => handleViewDetails(product)}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="px-3 pt-3">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-.181h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="text-sm font-semibold px-3">{product.name}</h3>
                <div className="px-3 pb-3 mt-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 text-xs">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default FeaturedSlider;
