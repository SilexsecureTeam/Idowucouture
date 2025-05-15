add image loading to each component and help increase the optimization of the page

// hero section
import React, { useState, useEffect } from "react";
import herobg from "../assets/hero-bg.png";
import herobg1 from "../assets/hero-bg1.png";
import herobg2 from "../assets/hero-bg2.png";

const Hero = () => {
  const images = [herobg, herobg1, herobg2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative px-5 sm:px-10 lg:px-20 w-full md:h-[90vh] h-[50vh] pb-14 bg-black overflow-hidden">
      {/* Sliding background container */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(100 / images.length) * currentImage}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Shop Now Button */}
      <button className="bg-[#38CB89] absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 cursor-pointer hover:bg-green-400 mx-auto md:mx-0 block text-black font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;

//feature slider
import React from "react";
import Slider from "react-slick";
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
  const [showButtons, setShowButtons] = React.useState({});

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    navigate("/product");
  };

  const handleAddToCart = (product) => {
    // Create a product object with all required fields
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: "default", // Default color since FeaturedSlider doesn't select color
      qty: 1, // Explicitly set qty to 1
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
                  className="image-container"
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover bg-black  rounded-t-md"
                  />
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

// shop
import React from "react";
import categories from "../data/CategoryProduct";

const Category = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-20 py-8">
      <h1 className="text-center text-2xl md:text-[40px] text-[#23262f] font-medium poppins mb-6 md:mb-10">
        Shop by Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 sm:gap-10 lg:gap-12">
        {categories.map((category) => (
          <div key={category.id} className=" gap-2 items-center ">
            <img
              src={category.image}
              alt={category.name}
              className=" h-[150px] md:h-[250px] w-full object-cover mb-2"
            />
            <h2 className="text-base md:text-lg text-center poppins font-medium">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

// article
import React from "react";
import shoe3 from "../assets/art2.jpg";
import shoe4 from "../assets/art1.jpg";
import cup from "../assets/cup.png";

const articles = [
  {
    id: 1,
    title: "Air Jordan x Travis Scott Event",
    image: shoe4,
    link: "#",
  },
  {
    id: 2,
    title: "The timeless classics on the green",
    image: shoe3,
    link: "#",
  },
  {
    id: 3,
    title: "The 2023 Ryder Cup",
    image: cup,
    link: "#",
  },
];

const Article = () => {
  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-8" id="article">
      <div className="flex justify-between items-center mb-6">
        <h1 className="poppins text-[20px] md:text-[40px] font-medium">
          Latest Articles
        </h1>
        <a
          href="#"
          className="text-base text-[#121212] h-fit pb-1 font-medium flex items-center gap-1 border-b-1 border-b-black"
        >
          View More <span>→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="relative flex flex-col h-full">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 md:h-64 object-cover mb-2"
            />
            <div className=" bottom-4 left-4">
              <h3 className="text-[20px] poppins text-[#23262F] font-medium mb-1 md:mb-2">
                {article.title}
              </h3>
              <a
                href={article.link}
                className="text-base text-[#141718] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
              >
                Read More <span className="text-[]20px">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;

// collection
import React from "react";
import golf1 from "../assets/collection.jpg";
import golf2 from "../assets/men.jpg";
import golf3 from "../assets/women.jpg";

const collections = [
  {
    title: "Juniors Set",
    image: golf1,
    link: "#",
  },
  {
    title: "Men’s Set",
    image: golf2,
    link: "#",
  },
  {
    title: "Women’s Set",
    image: golf3,
    link: "#",
  },
];

const Collection = () => (
  <div className="bg-white px-5 sm:px-10 lg:px-20 py-8">
    <h2 className="text-2xl md:text-[40px] font-medium poppins mb-8">
      Shop Collection
    </h2>
    {/* Responsive grid: 1 column on mobile, 2 columns on md+ */}
    <div className="flex flex-col md:flex-row gap-4 md:max-h-[80vh] mx-auto w-full">
      {/* Juniors Set (big card) */}
      <div className="div1 relative flex-1 h-full md:h-auto md:max-h-[80vh] flex flex-col">
        <img
          src={collections[0].image}
          alt={collections[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
            {collections[0].title}
          </h3>
          <a
            href={collections[0].link}
            className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
          >
            Collections <span>→</span>
          </a>
        </div>
      </div>

      {/* Men’s Set & Women’s Set stacked vertically on md+, horizontally on mobile */}
      <div className="div2 flex flex-col gap-4 flex-1 h-full md:h-auto md:max-h-[77vh]">
        {/* Men’s Set */}
        <div className="relative flex-1 h-1/2 md:aspect-auto">
          <img
            src={collections[1].image}
            alt={collections[1].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
              {collections[1].title}
            </h3>
            <a
              href={collections[1].link}
              className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
            >
              Collections <span>→</span>
            </a>
          </div>
        </div>
        {/* Women’s Set */}
        <div className="relative flex-1 h-1/2 md:aspect-auto">
          <img
            src={collections[2].image}
            alt={collections[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="sm:text-[34px] text-xl poppins text-[#121212] font-medium mb-1 md:mb-2">
              {collections[2].title}
            </h3>
            <a
              href={collections[2].link}
              className="text-base text-[#121212] font-medium flex items-center gap-1 border-b-1 border-b-black pb-1 w-fit"
            >
              Collections <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Collection;

// product slider
import React from "react";
import Slider from "react-slick";
// import shirt from "../assets/blackshirt.png";
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
  const [favorites, setFavorites] = React.useState({});
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Store the entire product
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

  // Render nothing if products array is empty
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
              <img
                src={selectedProduct?.image || product.image}
                alt={selectedProduct?.name || product.name}
                className="w-full h-60 object-fill mb-3"
              />
              <div className="px-2 w-full">
                <div className="flex w-full justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 0 00.951-.69l1.07-3.292z" />
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
                      className="bg-gray-900 text-white text-sm py-2 px-6 rounded w-full hover:bg-green-500 transition-all duration-300"
                      onClick={() => handleViewDetails(product)} // Pass entire product
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

