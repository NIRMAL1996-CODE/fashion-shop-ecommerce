import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaChevronDown } from 'react-icons/fa'
import Item from '../components/items/Item'

const ShopCategory = (props) => {
  
  const {allProducts}= useContext(ShopContext)
  return (
    <div className='flex flex-col justify-center items-center'>
     <img className='h-[500px] mt-10 w-[1000px]' src={props.banner} alt="banner" />

     <div className='flex justify-between gap-150 items-center mt-10'>
        <p className='text-xl font-semibold'>
          <span className='text-xl font-semibold'>Showing 1-12</span> out of 36 Products
        </p>
          <button className='border border-gray-500 rounded-2xl p-2 gap-2 w-30 text-xl text-gray-600 font-semibold flex flex-row justify-center items-center hover:bg-orange-200'>sort by<FaChevronDown/></button>
     </div>
    <div className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
        {allProducts.map((item,i)=>{
          if(props.category === item.category){
            return (<Item key={i}
            id={item.id} 
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>)
          }else{
            return null;}
         })}
      </div>
      <div>
          <button className="mt-10 px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white 
            font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl 
            transition-all duration-300">
            Explore More
          </button>
      </div>
    </div>
  )
}

export default ShopCategory