import React, { useContext } from 'react';
import { FetchContext } from '../Context API/Context';
import { Trash2, Plus, Minus } from 'lucide-react';
import { data } from 'react-router-dom';

const Cart = () => {
  const { Cart, RemoveFromCart } = useContext(FetchContext);

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 w-full">
      {Cart?.map((item) => (
        <div key={item.id} className="flex bg-white shadow-sm mb-4 p-4 rounded-lg">
          {/* Product Image */}
          <div className="flex-shrink-0 bg-gray-100 rounded-md w-24 h-24 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow ml-4">
            <h3 className="font-medium text-gray-900 line-clamp-2">{item.title}</h3>
            <p className="mt-1 text-gray-600">${item.price}</p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-3">
              <button className="hover:bg-gray-100 p-1 rounded text-gray-500">
                <Minus size={16} />
              </button>
              <span className="mx-2 w-8 text-center">1</span>
              <button className="hover:bg-gray-100 p-1 rounded text-gray-500">
                <Plus size={16} />
              </button>

              <button className="ml-auto text-red-500 hover:text-red-700" onClick={() => RemoveFromCart(item.id)}>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;