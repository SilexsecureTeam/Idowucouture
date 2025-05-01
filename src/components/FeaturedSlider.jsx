import React from "react";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    name: "Shark - Men's cabretta white golf glove",
    price: 19.0,
    image: "/images/golf-glove-1.jpg",
    rating: 5,
    hot: true,
    discount: null,
  },
  {
    id: 2,
    name: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
    price: 24.99,
    originalPrice: 40.0,
    image: "/images/golf-polo.jpg",
    rating: 5,
    hot: true,
    discount: 50,
  },
  {
    id: 3,
    name: "G/FORE - Mens Left Glove Snow 2023",
    price: 30.0,
    image: "/images/golf-glove-2.jpg",
    rating: 5,
    hot: true,
    discount: null,
  },
  {
    id: 4,
    name: "Utility Rover-R Double Strap Bag All Black - 2023",
    price: 209.99,
    image: "/images/golf-bag.jpg",
    rating: 5,
    hot: true,
    discount: null,
  },
  {
    id: 5,
    name: "Air Jordan 1 Low OG Iron Grey - SS23",
    price: 111.99,
    originalPrice: 200.0,
    image: "/images/air-jordan.jpg",
    rating: 5,
    hot: true,
    discount: 50,
  },
];

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
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
};

const FeaturedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Featured</h2>
      </div>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="bg-gray-50 rounded-md relative group">
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
                  className="w-full h-56 object-contain bg-white rounded-t-md"
                />
                {/* Add to cart button on hover */}
                <button
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-6 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Add ${product.name} to cart`}
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
                <span className="font-bold">${product.price.toFixed(2)}</span>
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
