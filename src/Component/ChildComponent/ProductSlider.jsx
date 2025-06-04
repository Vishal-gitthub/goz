import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { CiStar } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { FetchContext } from '../../Context API/Context';

const ProductSlider = () => {
  const { ApiData, AddToCart, IsInWishlist, RemoveFromWishlist, AddToWishlist } = useContext(FetchContext);
  const [ProductData, CategoryData] = ApiData || [];


  useEffect(() => {
    console.log('ProductData:', ProductData);
  }, [ApiData, ProductData]);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        // navigation
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {ProductData &&
          ProductData.map((data, index) => (
            <SwiperSlide key={index}>

              <div
                className="group bg-gradient-to-b from-white/10 to-white/5 shadow-md p-3 border border-white/10 rounded-2xl w-72 max-sm:w-full max-md:w-60 transition-transform duration-300"

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
                  <h2 className="mb-1 font-bold text-white text-lg">
                    {data.name}
                  </h2>

                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-white text-xl">
                      ${data.price}
                    </p>
                    {data.price && (
                      <p className="text-gray-400 text-sm line-through">
                        ${data.regular_price}
                      </p>
                    )}
                  </div>

                  {/* Rating and Actions */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex items-center px-2 py-1 rounded-md">
                        <CiStar className="text-gold" />
                        <span className="ml-1 font-medium text-gold text-sm">
                          {data.rating}
                        </span>
                      </div>
                      {data.reviewCount && (
                        <span className="ml-2 text-gray-500 text-xs">
                          ({data.reviewCount})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => {
                        if (IsInWishlist(data.id)) {
                          RemoveFromWishlist(data.id)
                        }
                        else {
                          AddToWishlist(data)
                        }
                      }}>
                        <CiHeart size={22} className={`text-lg ${IsInWishlist(data.id) ? "fill-red text-red" : "text-white"}`} />
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-white text-sm transition-colors cursor-pointer" onClick={() => AddToCart(data)} >
                        <FaCartPlus size={22} color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

    </div>
  );
};

export default ProductSlider;