import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Skeleton } from "@mui/material";
import image1 from "../assets/pimage1.jpg";
import image2 from "../assets/pimage2.jpg";
import image3 from "../assets/pimage3.jpg";
import image4 from "../assets/pimage4.jpg";
import image5 from "../assets/pimage5.jpg";
import { Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const products = [
  {
    id: 1,
    label: "NEW",
    discount: "-50%",
    image: image1,
    name: "Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    rating: 5,
  },
  {
    id: 2,
    label: "NEW",
    discount: "-20%",
    image: image2,
    name: "Table Lamp",
    price: 24.99,
    oldPrice: 31.24,
    rating: 5,
  },
  {
    id: 3,
    label: "NEW",
    discount: "-20%",
    image: image3,
    name: "Beige Table Lamp",
    price: 24.99,
    oldPrice: 31.24,
    rating: 5,
  },
  {
    id: 4,
    label: "NEW",
    discount: "-20%",
    image: image4,
    name: "Bamboo basket",
    price: 24.99,
    oldPrice: 31.24,
    rating: 5,
  },
  {
    id: 5,
    label: "NEW",
    discount: "-10%",
    image: image5,
    name: "Toasted",
    price: 224.99,
    oldPrice: 249.99,
    rating: 5,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 ml-0 md:-ml-8 cursor-pointer bg-black text-white rounded-full p-2 hover:bg-slate-800 transition-all duration-300 ease-in-out transform hover:scale-110 z-10 opacity-80 hover:opacity-100"
    aria-label="Previous slide"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 mr-0 md:-mr-8 cursor-pointer bg-black text-white rounded-full p-2 hover:bg-slate-800 transition-all duration-300 ease-in-out transform hover:scale-110 z-10 opacity-80 hover:opacity-100"
    aria-label="Next slide"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const ProductSlider = () => {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const [favorites, setFavorites] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    navigate("/product");
  };

  const getSlidesVisible = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
      return 4;
    }
    return 4;
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const totalSlides = products.length;
  const slidesVisible = getSlidesVisible();
  const progress = ((currentSlide + slidesVisible) / totalSlides) * 100;

  if (products.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-gray-500">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="md:text-[28px] text-[20px] poppins font-medium">
          You might also like
        </h2>
        <a
          href="#"
          className="text-base font-medium text-[#141718] hover:underline"
        >
          More Products →
        </a>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-lg shadow-sm pb-4 items-center relative group hover:shadow-lg transition">
              <span className="absolute left-3 top-2 bg-white text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                {product.label}
              </span>
              <span className="absolute left-3 top-8 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                {product.discount}
              </span>
              <div className="absolute right-3 top-2">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="flex items-center justify-center cursor-pointer border-gray-300 duration-200 hover:bg-gray-50 transition-colors"
                >
                  {favorites[product.id] ? (
                    <Heart className="text-red-500 fill-red-500 w-5 h-5" />
                  ) : (
                    <Heart className="text-gray-500 w-5 h-5" />
                  )}
                </button>
              </div>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  className="w-full h-60 object-fill mb-3"
                />
              ) : (
                <img
                  src={selectedProduct?.image || product.image}
                  alt={selectedProduct?.name || product.name}
                  className="w-full h-60 object-fill bg-gray-300 mb-3"
                />
              )}
              <div className="px-2 w-full">
                <div className="flex w-full justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81 .588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-start w-full mt-2">
                  <div className="font-semibold w-full text-base">
                    {selectedProduct?.name || product.name}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">
                        ₦{(selectedProduct?.price || product.price).toFixed(2)}
                      </span>
                      {(selectedProduct?.oldPrice || product.oldPrice) && (
                        <span className="text-sm text-gray-400 line-through">
                          ₦
                          {(
                            selectedProduct?.oldPrice || product.oldPrice
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      className="bg-gray-900 text-white text-sm py-2 px-6 rounded w-full hover:bg-amber-300 transition-all duration-300"
                      onClick={() => handleViewDetails(product)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-8 w-full h-1 sm:h-1 md:h-1 lg:h-1 xl:h-1 2xl:h-1 max-[640px]:h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </section>
  );
};

export default ProductSlider;
