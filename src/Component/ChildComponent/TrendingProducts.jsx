import React, { useState } from 'react';
import _Sub_Necklaces from './Sub Child Comonents/_Sub_Necklaces';
import _Sub_Earrings from './Sub Child Comonents/_Sub_Earrings';
import _Sub_Bracelet from './Sub Child Comonents/_Sub_Bracelet';

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mx-auto px-4 py-8 w-full max-w-7xl">
      {/* Tab Buttons */}
      <div className="flex justify-between py-3 border-white/40 border-b max-w-7xl">
        <div>
          <h1 className="text-white text-3xl">Trending Products</h1>
        </div>
        <div>
          {['Necklaces', 'Earrings', 'Bracelets'].map((tab, index) => (
            <button
              key={index + 1}
              onClick={() => setActiveTab(index + 1)}
              className={`py-2 px-4 flex-1 text-center transition ${activeTab === index + 1 ? 'border-b-2 text-white border-gold font-medium' : 'text-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>

      </div>

      {/* Slider Container - Remove fixed height */}
      <div className="relative py-8 overflow-hidden">
        <div
          className={`flex transition-transform duration-300 ease-in-out`}
          style={{ transform: `translateX(-${(activeTab - 1) * 100}%)` }}
        >
          <div className="flex-shrink-0 w-full">
            <_Sub_Necklaces />
          </div>
          <div className="flex-shrink-0 w-full">
            <_Sub_Earrings />
          </div>
          <div className="flex-shrink-0 w-full">
            <_Sub_Bracelet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;