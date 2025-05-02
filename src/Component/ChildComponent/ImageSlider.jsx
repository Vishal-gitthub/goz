import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useContext, useEffect } from 'react';
import { FetchContext } from '../../Context API/FetchContext';

export default function ImageSlider() {
  const { ApiData } = useContext(FetchContext);
  const [ProductData] = ApiData || [];

  // Take first 5 products and use their first image
  const slides = ProductData?.slice(0, 5).map(product => ({
    productName: product.name,
    imageSrc: product.images?.[1]?.src, // Only take the first image
    imageAlt: product.images?.[1]?.alt || `Image of ${product.name}`
  }));

  useEffect(() => {
    if (ProductData) {
      // console.log('First product image:', ProductData[0]?.images?.[0]?.src);
      // console.log('Generated slides:', slides);
    }
  }, [ProductData, slides]);

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      pagination={{ clickable: true }}
      modules={[EffectFade, Pagination]}
      className="mySwiper"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-md w-full h-[500px]">
            {slide.imageSrc && ( // Only render if image exists
              <img
                src={slide.imageSrc}
                alt={slide.imageAlt}
                className="rounded-md w-full h-full object-contain object-top"
                priority={index === 0} // Only prioritize first image
              />
            )}
            <div className="top-1/2 left-10 absolute bg-red/60 bg-opacity-50 p-6 rounded max-w-md text-white -translate-y-1/2 transform">
              <h2 className="font-bold text-2xl">{slide.productName}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}