import React, { useContext } from 'react'
import Sub_Earrings from './ChildComponent/Sub Child Comonents/_Sub_Earrings'
import { FetchContext } from '../Context API/Context'
import { CiStar } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import patternBg from "../Images/Background Images/bg1netomi_hywdqo.png"
import Sub_Necklaces from './ChildComponent/Sub Child Comonents/_Sub_Necklaces'
import Sub_Bracelet from "./ChildComponent/Sub Child Comonents/_Sub_Bracelet"
const All_Products = () => {
  const { ApiData } = useContext(FetchContext);
  const [ProductData, CategoryData] = ApiData || [];

  console.log(CategoryData)
  return (
    <div className='relative flex bg-black'>
      {/* Sidebar - Made sticky with proper positioning */}
      <div style={{ backgroundImage: `url(${patternBg})` }} className='top-[112px] left-0 sticky flex flex-col items-start gap-5 bg-gradient-to-b shadow-2xl border-white/10 w-[16%] h-[calc(100vh-112px)] overflow-y-auto'>
        <div className='backdrop-blur-xs p-6 border-r w-full h-full'>

          <h1 className='mb-4 pb-2 border-white/20 border-b w-full font-bold text-white text-2xl text-center'>
            All Categories
          </h1>
          <div className='space-y-3 w-full'>
            <div className='group'>
              <a href="#popular" className='flex items-center group-hover:bg-white/10 px-3 py-2 group-hover:pl-4 rounded-lg font-medium text-white/80 hover:text-white transition-all duration-200 cursor-pointer'>
                <span className='opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300'>→</span>
                All
              </a>
            </div>
            {CategoryData && CategoryData?.map((data, index) => (
              <div
                key={index}
                className='group relative overflow-hidden'
              >

                <a href={`#` + data.name} className='flex items-center group-hover:bg-white/10 px-3 py-2 group-hover:pl-4 rounded-lg font-medium text-white/80 hover:text-white transition-all duration-200 cursor-pointer'>

                  <span className='opacity-0 group-hover:opacity-100 mr-2 transition-all duration-300'>→</span>
                  {data.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className='pb-32 w-[90%]'>
        <div id="popular" className='bg-transparent h-[100px]' />
        {/* Heading For all Products */}
        <div className='flex items-center gap-3 m-5 p-4 border border-gold/25 rounded-4xl'>
          <h1 className='text-[#C0C0C0]'>Popular</h1>
          <div className='bg-[#C0C0C0]/40 w-full h-[0.1px]'></div>
        </div>

        {/* Displayed ALL products */}
        {/* <div className='flex flex-wrap justify-evenly items-center gap-5'>
          {ProductData && ProductData?.map((data, index) => (
            <div key={index}>
              <div className="group bg-gradient-to-b shadow-md p-3 border border-white/10 rounded-2xl w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] transition-transform duration-300 /10">
                <div className="mb-3 rounded-xl w-full h-44 overflow-hidden">
                  <img
                    src={data.images?.[0]?.src}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mb-1 font-semibold text-white text-base line-clamp-2">
                  {data.title}
                </h2>
                <p className="mb-1 font-medium text-white">${data.price}</p>
                <div className="flex justify-between items-center">
                  <p className="flex items-center text-yellow-400 text-base">
                    <CiStar className="mr-1" />
                    {data.rating}
                  </p>0
                </div>
              </div>
            </div>
          ))}

        </div> */}

        <div>
          <Sub_Bracelet /><br />
          <Sub_Earrings /><br />
          <Sub_Necklaces />
        </div>

        {/* Displayed Necklaces Products */}
        <div id="Necklaces" className='pt-[100px]'>
          <div className='flex items-center gap-3 m-5 p-4 border border-gold/25 rounded-4xl'>
            <h1 className='text-[#C0C0C0]'>Necklaces</h1>
            <div className='bg-[#C0C0C0]/40 w-full h-[0.1px]'></div>
          </div>
          <div>
            <Sub_Necklaces />
          </div>

        </div>
        {/* Displayed Bracelets Products */}
        <div id='Bracelets' className='pt-[100px]'>
          <div className='flex items-center gap-3 m-5 p-4 border border-gold/25 rounded-4xl'>
            <h1 className='text-[#C0C0C0]'>Bracelets</h1>
            <div className='bg-[#C0C0C0]/40 w-full h-[0.1px]'></div>
          </div>
          <div>
            < Sub_Bracelet />
          </div>

        </div>
        {/* Displayed Earrings Products */}
        <div id='Earrings' className='pt-[100px]'>
          <div className='flex items-center gap-3 m-5 p-4 border border-gold/25 rounded-4xl'>
            <h1 className='text-[#C0C0C0]'>Earrings</h1>
            <div className='bg-[#C0C0C0]/40 w-full h-[0.1px]'></div>
          </div>
          <div>
            <Sub_Earrings />
          </div>

        </div>
        {/* Displayed Rings Products */}
        <div id='Rings' className='pt-[100px]'>
          <div className='flex items-center gap-3 m-5 p-4 border border-gold/25 rounded-4xl'>
            <h1 className='text-[#C0C0C0]'>Rings</h1>
            <div className='bg-[#C0C0C0]/40 w-full h-[0.1px]'></div>
          </div>
          <div>
            <Sub_Earrings />
          </div>

        </div>

      </div>
    </div >
  )
}

export default All_Products