import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='h-[150px]' src="logo.jpg" alt="logo" />
      <div>
        <ul className='flex flex-row justify-center gap-15 items-center text-xl font-semibold text-gray-500'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Contacts</li>
          <li className='cursor-pointer'>Careers</li>
          <li className='cursor-pointer'>services</li>
        </ul>
       <div className='flex flex-row justify-center gap-6 m-10 items-center'>
        <FaWhatsapp className='cursor-pointer ' size={30} color="green" />
        <FaFacebook className='cursor-pointer ' size={30} color="Blue" />
        <FaInstagram className='cursor-pointer ' size={30} color="red" />
        <FaTwitter className='cursor-pointer ' size={30} color="blue" />
       </div>
       <div className='flex flex-col justify-center items-center text-gray-600'>
         <hr className='w-[1200px] '/>
            <p className='p-5 text-semibold'>Copyright @ 2025 - All Right Reserved</p>
       </div>
      </div>
    </div>
  )
}

export default Footer