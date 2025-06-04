import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchContext } from '../../Context API/Context';
import { CiStar, CiHeart } from 'react-icons/ci';
import { FaCartPlus } from 'react-icons/fa';

const ProductPage = () => {
  const { id } = useParams();
  const { ApiData, AddToCart, IsInWishlist, RemoveFromWishlist, AddToWishlist, Cart } = useContext(FetchContext);
  const [ProductData] = ApiData || [];
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (ProductData) {
      const foundProduct = ProductData.find(item => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [ProductData, id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      image: product.images?.[0]?.src || 'https://via.placeholder.com/200x300?text=No+Image',
      title: product.name,
      price: product.price,
      quantity: 1
    };

    AddToCart(cartItem);
    console.log('Current Cart:', Cart); // Debug cart state
  };

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-gray-300 to-black py-20 w-full h-full">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col justify-center items-center gap-8">
          {/* Product Images */}
          <div className="w-full md:w-[450px]">
            <div className="bg-white/10 rounded-xl overflow-hidden">
              <img
                src={product.images?.[0]?.src || 'https://via.placeholder.com/600'}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="mb-4 font-bold text-white text-3xl">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex mr-4 text-yellow-400">
                <CiStar className="text-xl" />
                <span className="ml-1">{product.average_rating || 4.0}</span>
              </div>
            </div>

            <p className="mb-6 font-bold text-white text-2xl">${product.price}</p>

            <div className="mb-6">
              <h2 className="mb-2 font-semibold text-white text-xl">Description</h2>
              <div
                className="text-white/80"
                dangerouslySetInnerHTML={{ __html: product.description || 'No description available' }}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (IsInWishlist(product.id)) {
                    RemoveFromWishlist(product.id);
                  } else {
                    AddToWishlist(product);
                  }
                }}
                className="bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors"
              >
                <CiHeart
                  size={24}
                  className={IsInWishlist(product.id) ? "text-red-500 fill-red-500" : "text-white"}
                />
              </button>

              <button
                onClick={handleAddToCart}
                className="flex flex-1 justify-center items-center gap-2 bg-red-600 hover:bg-yellow-500 px-6 py-3 rounded-lg font-medium text-white transition-colors"
              >
                <FaCartPlus size={18} />
                Add to Cart
              </button>
            </div>

            <div className="mt-8 pt-6 border-white/10 border-t">
              <h3 className="mb-3 font-semibold text-white text-lg">Product Details</h3>
              <ul className="space-y-2 text-white/80">
                <li><strong>Categories:</strong> {product.categories?.map(c => c.name).join(', ') || 'N/A'}</li>
                <li><strong>Tags:</strong> {product.tags?.map(t => t.name).join(', ') || 'N/A'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;