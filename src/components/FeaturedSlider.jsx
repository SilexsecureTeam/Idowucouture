import React from "react";
import Slider from "react-slick";
import products from "../data/FeatureProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-400 mb-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 fill-current ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-.181h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
};

const FeaturedSlider = () => {
  const [activeProductId, setActiveProductId] = React.useState(null);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".clickable-product")) {
        setActiveProductId(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const slidesToShow = 4;
  const settings = {
    dots: true,
    infinite: true, // Changed to true to loop back to the first slide
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set to 1.5 seconds (1500ms)
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
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="w-full mx-auto py-8 relative">
      <div className="flex px-5 sm:px-10 lg:px-20 justify-between items-center mb-6">
        <h2 className="text-2xl md:text-[40px] poppins text-black font-semibold">Featured</h2>
        {/* This div will receive the dots from appendDots */}
        <div className="dots-container"></div>
      </div>

      {/* Add cursor styles for drag functionality */}
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
      `}</style>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="pl-5 sm:pl-10 lg:pl-20 ">
            <div
              className="bg-white rounded-md relative group clickable-product"
              onClick={() => {
                if (window.innerWidth <= 640) {
                  setActiveProductId((prev) => (prev === product.id ? null : product.id));
                }
              }}
            >
              {/* HOT badge */}
              {product.hot && (
                <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded z-10">
                  HOT
                </span>
              )}

              {/* Discount badge */}
              {product.discount && (
                <span className="absolute top-3 left-16 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">
                  -{product.discount}%
                </span>
              )}

              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover bg-white rounded-t-md"
                />
                {/* Add to cart button */}
                <button
                  className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-6 rounded transition-opacity w-[95%] mx-auto
                  ${activeProductId === product.id ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
                  aria-label={`Add ${product.name} to cart  `}
                >
                  Add to cart
                </button>
              </div>

              {/* Rating */}
              <div className="px-3 pt-3">
                <StarRating rating={product.rating} />
              </div>

              {/* Product name */}
              <h3 className="text-sm font-semibold px-3">{product.name}</h3>

              {/* Price */}
              <div className="px-3 pb-3 mt-1 flex items-center gap-2">
                <span className="font-semibold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-xs">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedSlider;