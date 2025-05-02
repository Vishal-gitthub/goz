import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { CiStar, CiHeart } from 'react-icons/ci';
import { FaCartPlus } from 'react-icons/fa';
import { FetchContext } from '../../../Context API/FetchContext';

const Sub_Necklaces = () => {
  const { ApiData } = useContext(FetchContext);
  const [ProductData] = ApiData || [];

  const necklaceProducts = ProductData?.filter(product =>
    product.categories?.some(category =>
      category.name.toLowerCase().includes("necklace") ||
      category.slug.toLowerCase().includes("necklace")
    )
  ) || [];

  const productsToDisplay = necklaceProducts.map(product => ({
    id: product.id,
    image: product.images?.[0]?.src || 'https://via.placeholder.com/200x300?text=No+Image',
    title: product.name,
    price: product.price,
    rating: product.average_rating || 4.0,
  }));

  return (
    <div className="px-4">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={20}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {productsToDisplay.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-gradient-to-b from-white/10 to-white/5 shadow-md p-3 border border-white/10 rounded-2xl w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] transition-transform duration-300">
              <div className="mb-3 rounded-xl w-full h-44 overflow-hidden">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x300?text=No+Image';
                  }}
                />
              </div>
              <h2 className="mb-1 font-semibold text-white text-base line-clamp-2">
                {data.title}
              </h2>
              <p className="mb-1 font-medium text-white">${data.price}</p>
              <div className="flex justify-between items-center">
                <p className="flex items-center text-yellow-400 text-base">
                  <CiStar className="mr-1" />
                  {data.rating}
                </p>
                <div className="flex items-center gap-2">
                  <button className="hover:text-gold transition-colors">
                    <CiHeart size={22} color="white" />
                  </button>
                  <button className="hover:text-gold transition-colors">
                    <FaCartPlus size={22} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sub_Necklaces;
