import React from 'react'
import Item from '../items/Item';
import data_product from "../../data/data.js"; // adjust based on actual location


const Popular = () => {
  return (
    <div  className='flex flex-col justify-center items-center border-t-2 border-gray-300 p-[10px] '>
      <h1 className='text-6xl font-semibold font-sans text-black mt-[30px]'>Popular in Women</h1>
      <div className="flex flex-wrap justify-center gap-10 m-[10px] mt-[100px]">
        {data_product.map((item, i)=>{
         return (<Item key={i}
           id={item.id}
           name={item.name } 
           image={item.image}
           new_price={item.new_price} 
           old_price={item.old_price}  
            />)
        }) }
      </div>
    </div>
  )
}

export default Popular;  