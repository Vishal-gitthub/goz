// FetchContext.jsx
import { createContext, useState, useEffect } from 'react'

const FetchContext = createContext()

const DataProvider = ({ children }) => {
  const [ApiData, SetApiData] = useState()
  const [Cart, SetCart] = useState([])
  const [Wishlist, SetWishlist] = useState([])


  //  WooCommerce API Data

  const WCP_url_Product = import.meta.env.VITE_WCP_API_URL_PRODUCTS
  const WCP_url_Categories = import.meta.env.VITE_WCP_API_URL_CATEGORIES
  const Custom_url_Banner = import.meta.env.VITE_WCP_API_URL_SIDE_BANNER

  const FetchApiData = async () => {
    try {
      const [ProductRes, CategoriesRes, BannerRes] = await Promise.all([
        fetch(WCP_url_Product),
        fetch(WCP_url_Categories),
        fetch(Custom_url_Banner),
      ])
      if (!ProductRes.ok || !CategoriesRes.ok || !BannerRes.ok) {
        throw new Error('Got some Error With Api Url')
      }

      // parse json datta
      const ProductData = await ProductRes.json()
      const CategoryData = await CategoriesRes.json()
      const BannerData = await BannerRes.json()
      // console.log(BannerData)
      SetApiData([ProductData, CategoryData, BannerData])
    } catch (error) {
      console.error(error)
    }
  }


  // ADD TO CART FUNCTIONALITY

  const AddToCart = (product) => {
    SetCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Remove From Cart 
  const RemoveFromCart = (product) => {
    SetCart(prevCart => prevCart.filter(item => item.id !== product))
  }


  // Update Cart Quantity 
  const UpdateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    SetCart(prevCart => prevCart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item))
  }


  // Add To Wishlist 
  const AddToWishlist = (product) => {
    SetWishlist(prevWishlist => {

      if (prevWishlist.some(item => item.id === product.id)) {
        return prevWishlist
      }

      return [...prevWishlist, product]
    })
  }

  // Remove from wishlist 

  const RemoveFromWishlist = (productId) => {
    SetWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId))
  }

  // check if product is in wishlist 
  const IsInWishlist = (productId) => {
    return Wishlist.some(item => item.id === productId)
  }


  useEffect(() => {
    FetchApiData()
  }, [])

  return (
    <FetchContext.Provider value={{ ApiData, SetApiData, Cart, AddToCart, RemoveFromCart, UpdateCartItemQuantity, Wishlist, AddToWishlist, RemoveFromWishlist, IsInWishlist }}>
      {children}
    </FetchContext.Provider>
  )
}

// Correct export syntax
export { FetchContext, DataProvider }
