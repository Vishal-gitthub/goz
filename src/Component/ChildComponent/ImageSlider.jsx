import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider_1 from "../../Images/Home Page Images/slider Images/slider_1.jpg"
import Slider_2 from "../../Images/Home Page Images/slider Images/slider+2.jpg"
export default function ImageSlider() {

  // Static Banner Data with image URLs
  const banners = [
    { imageSrc: Slider_1, imageAlt: 'Banner 1' },
    { imageSrc: Slider_2, imageAlt: 'Banner 2' },

  ];

  // Combine Product Slides and Banner Slides
  const allSlides = [...banners];

  return (
    <Swiper
      spaceBetween={30}
      effect="slide" // Using slide effect
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      autoplay={{ delay: 3000 }} // Automatic slide change every 3 seconds
      loop={true} // Loop through the slides continuously
    >
      {allSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[500px]">
            {slide.imageSrc && ( // Only render if image exists
              <img
                src={slide.imageSrc}
                alt={slide.imageAlt}
                className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-in-out"
                priority={index === 0} // Only prioritize the first image
              />
            )}
            {slide.productName && (
              <div className="absolute inset-0 flex justify-center items-center bg-black/40 p-6 rounded-xl">
                <h2 className="shadow-lg font-semibold text-white text-3xl text-center">{slide.productName}</h2>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
