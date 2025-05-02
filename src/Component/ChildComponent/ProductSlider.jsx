import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { CiStar } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { FetchContext } from '../../Context API/FetchContext';

const ProductSlider = () => {
  const { ApiData } = useContext(FetchContext);
  const [ProductData, CategoryData] = ApiData || [];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   console.log('ProductData:', ProductData);
  // }, [ApiData, ProductData]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Pagination]}
        className="mySwiper"
      >
        {ProductData &&
          ProductData.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className="group bg-white shadow-lg hover:shadow-xl p-4 rounded-xl w-64 transition-all duration-300 cursor-pointer"
                onClick={() => handleProductClick(data)}
              >
                {/* Image Container with Floating Badge */}
                <div className="relative mb-4 rounded-lg w-full h-64 overflow-hidden">
                  {/* Sale/Featured Badge */}
                  {data.isOnSale && (
                    <div className="top-3 left-3 z-10 absolute bg-red-500 px-2 py-1 rounded-md font-bold text-white text-xs">
                      SALE
                    </div>
                  )}

                  <Swiper
                    className="h-full nested-swiper"
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                      bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-indigo-600'
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    {data.images?.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={image.src || 'https://via.placeholder.com/300'}
                          alt={image.alt || data.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300';
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Product Info */}
                <div className="px-1">
                  <h2 className="mb-1 font-bold hover:text-indigo-600 text-lg line-clamp-1 transition-colors">
                    {data.title}
                  </h2>

                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-indigo-600 text-xl">
                      ${data.price}
                    </p>
                    {data.originalPrice && (
                      <p className="text-gray-400 text-sm line-through">
                        ${data.originalPrice}
                      </p>
                    )}
                  </div>

                  {/* Rating and Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex items-center bg-indigo-50 px-2 py-1 rounded-md">
                        <CiStar className="text-yellow-500" />
                        <span className="ml-1 font-medium text-gray-700 text-sm">
                          {data.rating}
                        </span>
                      </div>
                      {data.reviewCount && (
                        <span className="ml-2 text-gray-500 text-xs">
                          ({data.reviewCount})
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to wishlist handler
                        }}
                      >
                        <CiHeart size={26} />
                      </button>
                      <button
                        className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart handler
                        }}
                      >
                        <FaCartPlus size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={closeModal}
                className="top-4 right-4 absolute text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>

              <div className="flex md:flex-row flex-col gap-6">
                {/* Product Images */}
                <div className="md:w-1/2">
                  <Swiper
                    className="product-detail-swiper"
                    pagination={{ clickable: true }}
                    navigation
                    modules={Pagination}

                  >
                    {selectedProduct.images?.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={image.src || 'https://via.placeholder.com/600'}
                          alt={image.alt || selectedProduct.name}
                          className="w-full h-96 object-contain"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/600';
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2">
                  <h2 className="mb-2 font-bold text-2xl">{selectedProduct.title}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2 text-yellow-500">
                      <CiStar size={20} />
                      <span className="ml-1 text-gray-700">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-500">|</span>
                    <span className="ml-2 text-gray-700">{selectedProduct.reviews || 0} reviews</span>
                  </div>

                  <p className="mb-4 font-bold text-gray-900 text-3xl">${selectedProduct.price}</p>

                  {selectedProduct.discountPercentage && (
                    <p className="mb-4 text-green-600">
                      {selectedProduct.discountPercentage}% OFF
                    </p>
                  )}

                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold text-lg">Description</h3>
                    <p className="text-gray-700">{selectedProduct.description || 'No description available.'}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 font-semibold text-lg">Details</h3>
                    <ul className="space-y-1 text-gray-700">
                      {selectedProduct.brand && <li><strong>Brand:</strong> {selectedProduct.brand}</li>}
                      {selectedProduct.category && <li><strong>Category:</strong> {selectedProduct.category}</li>}
                      {selectedProduct.stock && <li><strong>Availability:</strong> {selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition">
                      Add to Cart
                    </button>
                    <button className="text-gray-700 hover:text-red-500 transition">
                      <CiHeart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;