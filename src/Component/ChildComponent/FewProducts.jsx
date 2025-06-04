import React, { useContext } from 'react';
import { CiStar } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaCartPlus } from 'react-icons/fa';
import { FetchContext } from '../../Context API/Context';

import { Link } from 'react-router-dom';

function FewProducts() {

  const { ApiData, AddToCart, IsInWishlist, RemoveFromWishlist, AddToWishlist } = useContext(FetchContext);
  const [ProductData] = ApiData || []
  console.log(ProductData)
  return (
    <div className="max-w-full">
      <div className="flex justify-between">
        <h1 className="pb-2 text-white text-4xl">All Products</h1>
        <Link to="/products" className="text-white text-lg">Explore All</Link>
      </div>
      <hr className="text-white" />
      <div className="grid grid-cols-4">
        {ProductData && ProductData?.map((data, index) => (
          <div key={index} className="group m-4">

            <div className="group bg-gradient-to-b from-white/10 to-white/5 shadow-md p-3 border border-white/10 rounded-2xl w-72 max-sm:w-full max-md:w-60 transition-transform duration-300"
            >
              <div className="relative mb-4 rounded-lg w-full h-64 overflow-hidden group-hover:scale-105 transition-transform duration-300">

                <img
                  src={data.images?.[0]?.src}
                  alt={data.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h2 className="mb-1 font-bold text-white text-lg">
                {data.name}
              </h2>
              <p className="mb-1 font-semibold text-white">${data.price}</p>
              <div className="flex justify-between items-center">
                <p className="flex items-center font-medium text-yellow-500 text-xl">
                  <CiStar /> <span className="text-lg"> {data.rating}</span>
                </p>
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
        ))}
      </div>
    </div>
  );
}

export default FewProducts;