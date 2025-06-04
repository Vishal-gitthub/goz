import React, { useContext, useMemo } from 'react';
import { FetchContext } from '../Context API/Context';
import ImageSlider from './ChildComponent/ImageSlider';
import ProductSlider from './ChildComponent/ProductSlider';
import TrendingProducts from './ChildComponent/TrendingProducts';
import FewProducts from './ChildComponent/FewProducts';
import qc_Svg from '../Images/Home Page Images/quality-crafting.svg';
import t_Svg from '../Images/Home Page Images/transparency.svg';
import e_Svg from '../Images/Home Page Images/ethically-sourced.svg';
import wavySvg from '../Images/Home Page Images/bottom_header.svg';
import HomeHeroBg from "../Images/Background Images/homeHeroBg.jpg"
import HeroBgVideo from "../Images/Background Images/Bg_Video/HEroSectionBg.mp4"
const Home = () => {
  const { ApiData } = useContext(FetchContext);
  const [ProductData, CategoryData, BannerData] = ApiData || [];

  // Memoized data and components for performance
  const categoryList = useMemo(() => (
    CategoryData?.map((data) => (
      <li
        key={data.id}
        className="group relative hover:bg-white/10 px-6 py-3 rounded-lg overflow-hidden font-medium text-white hover:text-gold-500 transition-all duration-300 cursor-pointer"
      >
        <span className="z-10 relative">{data.name}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </li>
    ))
  ), [CategoryData]);

  const featureItems = useMemo(() => [
    {
      icon: qc_Svg,
      title: 'Quality Craftsman',
      description: 'Handcrafted with premium materials by master artisans'
    },
    {
      icon: e_Svg,
      title: 'Ethically Sourced',
      description: 'Responsibly mined and produced with fair labor practices'
    },
    {
      icon: t_Svg,
      title: '100% Transparency',
      description: 'Full disclosure of materials and origins with certification'
    },
  ], []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] max-h-[800px] overflow-hidden">
        <div className="z-10 absolute inset-0 bg-black/60"></div>
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundAttachment: 'fixed', backgroundImage: `url(${HomeHeroBg}) ` }}
        ></div> */}

        <div className="absolute inset-0 bg-cover bg-center bg-fixed">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={HeroBgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="z-20 relative flex flex-col justify-center h-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="max-w-2xl">
              <h1 className="mb-4 font-bold text-gold-500 text-4xl sm:text-5xl md:text-6xl">
                Luxury <span className="text-white">Redefined</span>
              </h1>
              <p className="mb-8 text-white/90 text-lg sm:text-xl">
                Discover our exquisite collection of handcrafted jewelry and accessories that embody timeless elegance.
              </p>
              <button className="bg-gold hover:bg-gold shadow-gold/20 shadow-lg px-8 py-3 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 transform">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="z-30 relative mx-auto -mt-20 px-4 sm:px-6 lg:px-8 container">
        {/* Categories + Slider Section */}
        <section className="flex lg:flex-row flex-col gap-6 mb-16">
          {/* Categories Sidebar */}
          <aside className="bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl border border-gray-800 rounded-xl w-full lg:w-[20%] overflow-hidden">
            <h2 className="bg-gradient-to-r from-gold-600 to-gold-800 shadow-lg px-6 py-4 font-bold text-white text-lg uppercase tracking-wider">
              Shop By Categories
            </h2>
            <ul className="space-y-1 px-2 py-4 text-sm sm:text-base">
              {categoryList || <p className="p-4 text-white/70 text-center">Loading categories...</p>}
            </ul>
          </aside>

          {/* Main Slider */}
          <div className="shadow-2xl border border-gray-800 rounded-xl w-full lg:w-[60%] overflow-hidden">
            <ImageSlider />
          </div>

          {/* Side Banner */}
          <aside className="w-full lg:w-[20%]">
            {BannerData ? (
              <div className="group relative shadow-2xl border border-gray-800 rounded-xl h-full overflow-hidden">
                <img
                  src={BannerData.banner_url}
                  alt="Promotional Banner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="font-bold text-white text-xl">Seasonal Collection</h3>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center bg-gray-900 border border-gray-800 rounded-xl w-full h-full">
                <p className="text-white/70">Banner loading...</p>
              </div>
            )}
          </aside>
        </section>


        <div class="relative flex overflow-x-hidden">
          <div class="py-12 whitespace-nowrap animate-marquee">
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Luxury Craftsmanship</span>
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Ethically Sourced</span>
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Timeless Designs</span>
          </div>

          <div class="top-0 absolute py-12 whitespace-nowrap animate-marquee2">
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Luxury Craftsmanship</span>
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Ethically Sourced</span>
            <span className="mx-8 font-light text-gold-500 text-2xl">✦</span>
            <span className="font-medium text-lg uppercase tracking-wider">Timeless Designs</span>
          </div>
        </div>



        {/* New Arrivals */}
        <section className="py-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="mb-2 font-bold text-white text-3xl sm:text-4xl">New Arrivals</h2>
              <div className="bg-gradient-to-r from-gold-600 to-transparent w-32 h-1"></div>
            </div>

          </div>
          <ProductSlider />
        </section>

        {/* Featured Collection */}
        <section className="group relative mb-16 rounded-2xl overflow-hidden">
          <div className="z-10 absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <img
            src="https://img.freepik.com/premium-photo/elegant-green-gemstone-pendant-luxurious-black-fabric-surface_1267545-14970.jpg?w=1380"
            alt="Featured Collection"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="z-20 absolute inset-0 flex items-center p-12">
            <div className="max-w-md">
              <span className="block mb-2 font-medium text-gold-500">Limited Edition</span>
              <h2 className="mb-4 font-bold text-white text-4xl sm:text-5xl">The Royal Collection</h2>
              <p className="mb-6 text-white/90">
                Our most exclusive pieces featuring rare gems and precious metals, crafted for those who demand the extraordinary.
              </p>
              <button className="bg-gold hover:bg-gold px-8 py-3 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 transform">
                EXPLORE THE COLLECTION
              </button>
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">

          </div>
          <TrendingProducts />
        </section>

        {/* Curated Selection */}
        <section className="mb-16">
          <FewProducts />
        </section>
      </div>

      {/* Value Propositions */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-white text-3xl sm:text-4xl">Our Commitment</h2>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-transparent via-gold-600 to-transparent w-32 h-1"></div>
            </div>
          </div>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {featureItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black shadow-xl p-8 border border-gray-800 hover:border-gold-500/50 rounded-xl transition-all hover:-translate-y-2 duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex justify-center items-center bg-gradient-to-br from-gold-600 to-gold-800 mb-6 p-4 rounded-full w-20 h-20">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="brightness-0 invert w-10 h-10 filter"
                    />
                  </div>
                  <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black bg-gradient-to-b py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center container">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-bold text-white text-3xl sm:text-4xl">Join Our Community</h2>
            <p className="mb-8 text-white/80">
              Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-800 px-6 py-3 border border-gray-700 focus:border-gold-500 rounded-lg focus:outline-none max-w-md text-white"
              />
              <button className="bg-gold hover:bg-gold px-8 py-3 rounded-lg font-medium text-white transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Home);