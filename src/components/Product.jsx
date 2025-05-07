import { useState, useEffect, useRef } from 'react';
import { Heart, Minus, Plus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import table from '../assets/blackshirt.png';
import { useProduct } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Product = () => {
  const { selectedProduct } = useProduct();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [expandedSection, setExpandedSection] = useState('details');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const timerRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  const colors = [
    { id: 'black', name: 'Black', src: selectedProduct?.image || table, alt: 'image' },
    { id: 'gray', name: 'Gray', src: selectedProduct?.image || table, alt: 'image' },
    { id: 'red', name: 'Red', src: selectedProduct?.image || table, alt: 'image' },
    { id: 'white', name: 'White', src: selectedProduct?.image || table, alt: 'image' },
  ];

  const productImages = [
    { src: selectedProduct?.image || table, alt: `${selectedProduct?.name || "Black Shirt"} - Main View` },
    { src: selectedProduct?.image || table, alt: `${selectedProduct?.name || "Black Shirt"} - Side View` },
    { src: selectedProduct?.image || table, alt: `${selectedProduct?.name || "Black Shirt"} - Detail View` },
    { src: selectedProduct?.image || table, alt: `${selectedProduct?.name || "Black Shirt"} - Lifestyle View` },
  ];

  const title = selectedProduct?.name || "Black Shirt";
  const description = "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top.";
  const price = selectedProduct?.price || 199.00;
  const oldPrice = selectedProduct?.oldPrice || selectedProduct?.originalPrice || 400.00;

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [isSmallScreen, currentSlide,]);

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-8">
      <nav className="flex items-center gap-x-2 text-sm mb-6">
        <Link to='/'> <a href="#" className="text-[#605F5F]">Home</a> </Link>
        <ChevronRight size={16} className=" text-gray-400" />
        <a href="#" className="text-[#605F5F] font-medium">Product</a>
        <ChevronRight size={16} className=" text-gray-400" />
        <a href="#" className="text-black font-medium">{title}</a>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative">
            <span className="absolute md:hidden top-4 left-4 bg-white text-black px-2 py-1 text-xs font-semibold uppercase z-10">New</span>
            <span className="absolute md:hidden top-4 right-4 bg-green-500 text-black px-2 py-1 text-xs font-semibold uppercase z-10">-20%</span>

            <div className="relative">
              <div className={`overflow-hidden rounded ${isSmallScreen ? 'block' : 'hidden md:hidden'}`}>
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {productImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-82 object-fill object-center flex-shrink-0"
                    />
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md z-10 hover:bg-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md z-10 hover:bg-white"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden md:flex justify-between items-center space-x-4">
                <div className="relative w-1/2">
                  <img
                    src={productImages[0].src}
                    alt={productImages[0].alt}
                    className="w-full h-70 object-fill rounded"
                  />
                  <span className="absolute md:block hidden top-4 left-4 bg-white text-black px-2 py-1 text-xs font-semibold uppercase z-10">New</span>
                  <span className="absolute md:block hidden top-4 right-4 bg-green-500 text-black px-2 py-1 text-xs font-semibold uppercase z-10">-20%</span>
                </div>
                <img
                  src={productImages[0].src}
                  alt={productImages[0].alt}
                  className="w-1/2 h-70 object-fill rounded"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-70 object-fill rounded cursor-pointer"
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-[12px] font-normal text-[#141718] poppins">5 Reviews</span>
          </div>

          <h1 className="text-2xl md:text-[40px] font-normal poppins text-[#141718] mb-3">{title}</h1>

          <p className="text-[#6C7275] text-base font-normal mb-4">
            {description}
          </p>

          <div className="flex items-center mb-4">
            <span className="text-[24px] font-bold text-[#121212] mr-4">₦{price.toFixed(2)}</span>
            {oldPrice && (
              <span className="text-[24px] font-normal text-[#6C7275] line-through">₦{oldPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-base text-[#6C7275] mb-2">Measurements</h3>
            <p className="text-xl text-[#000000]">17 1/2x20 5/8 </p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-[#6C7275] mb-2">Choose Color</h3>
            <p className="mt-2 text-sm text-[#6C7275] mb-2">Selected: {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</p>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <img
                  key={color.id}
                  src={color.src}
                  alt={color.alt}
                  className={`w-8 h-8 rounded-md border object-fill cursor-pointer ${
                    selectedColor === color.id ? 'ring-2 ring-offset-1 ring-black' : 'ring-1 ring-gray-200'
                  }`}
                  onClick={() => setSelectedColor(color.id)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          <div className='flex gap-x-3 items-center w-full mb-5'>
            <div className="flex rounded-lg p-1 bg-[#F5F5F5] w-fit items-center space-x-4">
              <button onClick={decreaseQuantity} className="p-2">
                <Minus size={16} />
              </button>
              <span className="text-lg poppins font-medium">{quantity}</span>
              <button onClick={increaseQuantity} className="p-2">
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={toggleFavorite}
              className="flex items-center flex-1 justify-center py-1.5 border cursor-pointer border-gray-300 duration-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              {isFavorite ? (
                <Heart className="text-red-500 fill-red-500 w-5 h-5" />
              ) : (
                <Heart className="text-gray-500 w-5 h-5" />
              )}
            </button>
          </div>

          <button className="md:col-span-4 py-3 bg-black cursor-pointer w-full text-center text-white rounded-md hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className='text-[#6C7275] text-base'>SKU</span>
              <span className='text-[#121212] font-medium'>1123</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className='text-[#6C7275] text-base'>Categories</span>
              <span className='text-[#121212] font-medium'>Living Room, Modern</span>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-6">
            <div className="py-4 border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => toggleSection('details')}
              >
                <span className='text-[#121212] text-xl font-medium'>Details</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${expandedSection === 'details' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'details' && (
                <div className="mt-4 text-[#6C7275]">
                  <p>
                    You can use the removable tray for serving. The design makes it easy to put the tray
                    back afterward because, place it directly in the tray's recessed surface without fussing to find any holes.
                  </p>
                </div>
              )}
            </div>

            <div className="py-4 border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => toggleSection('packaging')}
              >
                <span className='text-[#121212] text-xl font-medium'>Packaging</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${expandedSection === 'packaging' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'packaging' && (
                <div className="mt-4 text-[#6C7275]">
                  <p>Width: 21 ¼"<br />
                  Height: 3 ½"<br />
                  Length: 21 ¾"<br />
                  Weight: 7 lb 8 oz<br />
                  Packages: 1</p>
                </div>
              )}
            </div>

            <div className="py-4 border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => toggleSection('questions')}
              >
                <span className='text-[#121212] text-xl font-medium'>Questions</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${expandedSection === 'questions' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'questions' && (
                <div className="mt-4 text-[#6C7275]">
                  <p>No questions asked yet. Ask the first one!</p>
                </div>
              )}
            </div>

            <div className="py-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium"
                onClick={() => toggleSection('reviews')}
              >
                <span className='text-[#121212] text-xl font-medium'>Reviews (11)</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${expandedSection === 'reviews' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedSection === 'reviews' && (
                <div className="mt-4 text-gray-600">
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">John D.</span>
                      <span className="mx-2 text-[#6C7275]">•</span>
                      <span className="text-sm text-[#6C7275]">March 15, 2025</span>
                    </div>
                    <p className="text-sm text-[#6C7275]">Perfect for my small apartment. Well built and very stylish!</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All 11 Reviews
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product