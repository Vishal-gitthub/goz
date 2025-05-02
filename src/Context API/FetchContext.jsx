// FetchContext.jsx
import { createContext, useState, useEffect } from 'react'

const FetchContext = createContext()

const DataProvider = ({ children }) => {
  const [ApiData, setApiData] = useState()
  //  WooCommerce API Data

  const WCP_url_Product = import.meta.env.VITE_WCP_API_URL_PRODUCTS
  const WCP_url_Categories = import.meta.env.VITE_WCP_API_URL_CATEGORIES
  const Custom_url_Banner = import.meta.env.VITE_WCP_API_URL_SIDE_BANNER

  const FetchApiData = async () => {
    try {
      const [ProductRes, CategoriesRes,BannerRes] = await Promise.all([
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
      setApiData([ProductData, CategoryData,BannerData])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    FetchApiData()
  }, [])

  return (
    <FetchContext.Provider value={{ ApiData, setApiData }}>
      {children}
    </FetchContext.Provider>
  )
}

// Correct export syntax
export { FetchContext, DataProvider }
