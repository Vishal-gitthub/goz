import React, { useContext, useEffect } from 'react';
import { FetchContext } from '../Context API/FetchContext';
import ImageSlider from './ChildComponent/ImageSlider';
import ProductSlider from './ChildComponent/ProductSlider';
import HomeBgImg from '../Images/Background Images/Website Background.jpg';
import TrendingProducts from './ChildComponent/TrendingProducts';
import FewProducts from './ChildComponent/FewProducts';
import qc_Svg from '../Images/Home Page Images/quality-crafting.svg';
import t_Svg from '../Images/Home Page Images/transparency.svg';
import e_Svg from '../Images/Home Page Images/ethically-sourced.svg';
import wavySvg from '../Images/Home Page Images/bottom_header.svg';

const Home = () => {
  const { ApiData } = useContext(FetchContext); // Get ApiData from context
  const [ProductData, CategoryData, BannerData] = ApiData || [];
  useEffect(
    () => {
      if (ProductData) {
        // console.log (ProductData);
        // console.log (CategoryData);
        // console.log (BannerData);
      }
    },
    [ProductData, CategoryData, BannerData]
  ); // Re-run effect when ApiData updates

  return (
    <div>

      <div
        // style={{backgroundImage: `url(${HomeBgImg})`}}
        className={`bg-[#00172F] bg-cover bg-center bg-fixed px-10`}
      >

        <div className="flex py-5">
          {/* ------------------------------------------------First section  -------------------------------------- */}
          {/*---------------------------------------------- Categories section Left Area------------------------------------------- */}
          <div className="bg-gold shadow-lg mx-5 w-[15%] h-auto overflow-hidden text-left">
            <h1 className="bg-white shadow-md px-6 py-3 font-bold text-black text-xl uppercase tracking-wider">
              Shop By Categories
            </h1>
            <ul className="space-y-3 bg-gold px-4 py-3 text-sm">
              {CategoryData &&
                CategoryData.map((data, index) => (
                  <li
                    key={index}
                    className="hover:bg-white px-4 py-3 rounded-lg font-medium text-black hover:text-red hover:scale-105 transition-colors duration-300 cursor-pointer transform"
                  >
                    {data.name}
                  </li>
                ))}
            </ul>

          </div>

          {/*---------------------------------------------- Slider section center Area------------------------------------------- */}
          <div className="w-[65%]">
            <ImageSlider />
          </div>

          {/*---------------------------------------------- Offer section right Area------------------------------------------- */}
          <div className="px-4 w-[20%]">

            <img src={BannerData?.banner_url} alt="Nature Image" width={600} height={400} />


          </div>
        </div>

        {/*-------------------- section 2 || 3 Offer banners--------------------- */}
        <div>
          <div className="flex">
            {[
              'https://template.hasthemes.com/hiraola/hiraola/assets/images/banner/1_2.jpg',
              'https://template.hasthemes.com/hiraola/hiraola/assets/images/banner/1_2.jpg',
              'https://template.hasthemes.com/hiraola/hiraola/assets/images/banner/1_2.jpg',
            ].map((img, index) => {
              return (
                <div key={index} className="p-4">
                  <img src={img} alt="Offer Banners" width={600} height={400} />
                </div>
              );
            })}
          </div>
        </div>
        {/* ----------------------------  width 7xl Container--------------------- */}
        <div className="m-auto max-w-7xl">
          {/*-------------------- section 3 || Products--------------------- */}

          <div className="py-20">
            <h1 className="text-white text-3xl">New Arrivals</h1>
            <hr className="py-4 text-[#C0C0C0]" />
            <ProductSlider />
          </div>
          {/*-------------------- section 4 || Offer Banner--------------------- */}
          <div>
            <div className="flex bg-white p-6">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-4 w-1/2">
                <p className="text-red-500 text-sm">-25% Off This Week</p>
                <h2 className="font-bold text-3xl">Featured Product</h2>
                <h3 className="text-gray-800 text-2xl">
                  Meito Accessories 2022
                </h3>
                <p className="text-gray-700">
                  Starting at
                  <span className="font-semibold text-red-600">£1209.00</span>
                </p>
                <button className="bg-yellow-600 px-6 py-2 w-fit text-white">
                  SHOPPING NOW
                </button>
              </div>

              {/* Right Image */}
              <div className="w-1/2">
                <img
                  src="https://img.freepik.com/premium-photo/necklaces-chains-beads-featuring-gold-pendants-are-displayed-black-mannequin-busts-along-with-cartoon-objects-modern-formats_854723-60500.jpg?w=1380"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
          <div>
            <TrendingProducts />
          </div>
          <FewProducts />
        </div>

      </div>
      <div
        className="flex justify-around items-center bg-white py-10 w-full object-cover"
        style={{ backgroundImage: `url(${wavySvg})` }}
      >
        <div className="flex flex-col items-center">
          <img src={qc_Svg} alt="" />
          <h1 className="font-semibold text-xl">Quality Craftsman</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={e_Svg} alt="" />
          <h1 className="font-semibold text-xl">
            Ethically Sourced
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={t_Svg} alt="" />
          <h1 className="font-semibold text-xl">
            100% Transparency
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Home;
