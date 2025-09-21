import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-20'>
        <h1 className='text-6xl m-5 font-semibold text-gray-600 mt-30'>Get Exclusive Offers on Your Email</h1>
        <p className='text-xl m-5 font-medium text-gray-500'>Subscribe to our newsletter and stay updated</p>
        <div>
            <input className='border rounded-2xl w-[400px] m-1 p-2' type='email' placeholder='Your Email Id'/>
            <button className='bg-black text-white p-2 rounded-2xl '>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;