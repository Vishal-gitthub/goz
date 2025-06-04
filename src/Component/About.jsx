import React from 'react';
import heroSecctionBg from "../Images/About us Images/hero section bg.jpg";
import { FaRing, FaShippingFast } from 'react-icons/fa';
import { FaDiamond, FaStar } from 'react-icons/fa6';
import jewellerySets from "../Images/About us Images/Owner Image.jpg";

const About = () => {
  const stats = [
    {
      icon: <FaRing className="mx-auto" size={40} />,
      count: "5,000+",
      label: "Custom Jewellery Designed"
    },
    {
      icon: <FaDiamond className="mx-auto" size={40} />,
      count: "100%",
      label: "Conflict-Free Diamonds"
    },
    {
      icon: <FaStar className="mx-auto" size={40} />,
      count: "4.9/5",
      label: "Customer Rating"
    },
    {
      icon: <FaShippingFast className="mx-auto" size={40} />,
      count: "24h",
      label: "Delivery Promise"
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div
        className="relative flex justify-center items-center bg-cover bg-no-repeat bg-center h-64 sm:h-80 md:h-96"
        style={{ backgroundImage: `url(${heroSecctionBg})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/40">
          <h1 className="px-4 font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* About Us Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl">
        <div className="flex md:flex-row max-md:flex-col max-md:flex-col-reverse items-center gap-8 lg:gap-12">
          <div className="md:w-1/2 text-white">
            <h2 className="mb-4 sm:mb-6 pb-3 border-gold border-b-2 font-bold text-2xl sm:text-3xl">
              Welcome to <span className='text-gold'>Gems Of Zuri</span>
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Gems of Zuri is a brand that stands for a noble cause and raises funds for Autism by offering high-quality 92.5 sterling silver and fashion jewelry along with accessories that exude style and elegance. Based out of Zurich, the brand was founded in 2021.
            </p>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Vantika Singh started the brand with a passion to deliver unique and niche products curated and made in India, Afghanistan, and Korea. She has been living in Zurich, Switzerland since June 2010 and runs the online jewelry business from there.
            </p>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Born during the COVID lockdown (2020–2021), the brand is deeply personal to Vantika, helping her become financially independent and raise funds for her Autistic son's future therapies and treatments.
            </p>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Every piece is hand-picked by top jewelry makers in India and predominantly handmade by women artisans. Gems of Zuri frequently features in exhibitions across Switzerland, showcasing a blend of modern, traditional, fusion, and contemporary jewelry and accessories for all age groups.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Gems of Zuri brings you the best of jewelry craftsmanship — made with love from India.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={jewellerySets}
              alt="Jewellery Set"
              className="shadow-lg rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 md:py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md p-4 sm:p-6 rounded-lg text-center transition duration-300"
              >
                <div className="mb-3 sm:mb-4 text-gold">
                  {stat.icon}
                </div>
                <h3 className="mb-1 sm:mb-2 font-bold text-gold text-2xl sm:text-3xl md:text-4xl">
                  {stat.count}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
