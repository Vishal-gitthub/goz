import React from 'react';
import {CiStar} from 'react-icons/ci';
import {CiHeart} from 'react-icons/ci';
import {FaCartPlus} from 'react-icons/fa';

const necklaces_products = [
  {
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Product 1',
    price: 299,
    rating: 4.5,
  },
  {
    image: 'https://picsum.photos/200/300?random=2',
    title: 'Product 2',
    price: 499,
    rating: 4.2,
  },
  {
    image: 'https://picsum.photos/200/300?random=3',
    title: 'Product 3',
    price: 199,
    rating: 4.8,
  },
  {
    image: 'https://picsum.photos/200/300?random=4',
    title: 'Product 4',
    price: 259,
    rating: 4.1,
  },
  {
    image: 'https://picsum.photos/200/300?random=5',
    title: 'Product 5',
    price: 399,
    rating: 4.6,
  },
  {
    image: 'https://picsum.photos/200/300?random=2',
    title: 'Product 2',
    price: 499,
    rating: 4.2,
  },
  {
    image: 'https://picsum.photos/200/300?random=3',
    title: 'Product 3',
    price: 199,
    rating: 4.8,
  },
  {
    image: 'https://picsum.photos/200/300?random=4',
    title: 'Product 4',
    price: 259,
    rating: 4.1,
  },
];
function FewProducts () {
  return (
    <div className="max-w-full">
      <div className="flex justify-between">
        <h1 className="pb-2 text-white text-4xl">All Products</h1>
        <a href="0" className="text-white text-lg">Explore All</a>
      </div>
      <hr className="text-white" />
      <div className="grid grid-cols-4">
        {necklaces_products.map ((data, index) => (
          <div key={index} className="group m-4">

            <div className="group bg-transparent shadow-lg backdrop-blur-[1px] p-2 border border-white/20 group-hover:border-gold/50 w-full">
              <div className="mb-4 w-full h-44 overflow-hidden group-hover:scale-105 transition-transform duration-300">

                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mb-1 font-bold text-white text-lg">
                {data.title}
              </h2>
              <p className="mb-1 font-semibold text-white">${data.price}</p>
              <div className="flex justify-between items-center">
                <p className="flex items-center font-medium text-yellow-500 text-xl">
                  <CiStar /> <span className="text-lg"> {data.rating}</span>
                </p>
                <div className="flex items-center gap-2">
                  <button className="group before:hover:left-40 before:left-8 before:-z-10 before:absolute relative flex justify-start items-center gap-2 before:hover:bg-gold bg-goldbefore:bg-gold hover:bg-gold p-2 pr-6 rounded w-12 before:w-6 hover:w-44 h-12 before:h-6 font-bold text-neutral-50 before:rotate-45 duration-700 before:duration-700 before:hover:500">

                    <svg
                      y="0"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      fill="currentColor"
                      className="fill-neutral-50 w-8 h-8 shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <span className="inline-flex opacity-0 group-hover:opacity-100 px-1 border-l-2 w-8 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-100 group-hover:duration-300 group-hover:delay-500 transform">
                      Buy Now
                    </span>
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
