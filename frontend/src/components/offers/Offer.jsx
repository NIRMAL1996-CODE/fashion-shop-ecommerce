import React from 'react'


const Offer = () => {
  return (
    <div className='flex flex-row justify-end gap-15 items-end m-[10px] p-[10px] mt-[120px] '>
       <div className='shadow-xl h-[300px] w-[500px] m-[10px] p-[10px]'>
           <h1 className='text-7xl font-bold'>Exclusive</h1>
           <h1 className='text-7xl font-bold'>Offers For You</h1>
           <p className='text-2xl font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className='bg-red-400 text-xl text-white font-medium rounded-2xl m-[10px] p-[10px] cursor-pointer hover:bg-green-400 hover:text-white'>Check Now</button>
        </div>
        <div>
         <img className='w-[500px]' src="exclusive.jpg" alt="exclusive" />
        </div>
    </div>
  )
}

export default Offer