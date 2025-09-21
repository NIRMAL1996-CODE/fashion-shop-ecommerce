import React, { useState } from 'react'

import logo from '../../assets/logo.jpg';
import cart from '../../assets/cart.png';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  
  return (
    <div className='font-seri tracking-wide uppercase flex flex-row justify-between items-center m-[1px] border-b-2 border-gray-300 '>
      <div>
        <img className='h-[100px]' src={logo} alt="logo"  />
      </div>
      <div>
        <ul className="nav-menu flex flex-row justify-between items-center gap-20 font-semibold text-gray-600">
            <li className={`cursor-pointer border-b-3 ${menu === "home" ? "border-red-500" : "border-transparent"}`} onClick={() => setMenu("home")}><Link to="/">Home</Link></li>

            <li className={`cursor-pointer border-b-3 ${menu === "men" ? "border-red-500" : "border-transparent"}`} onClick={() => setMenu("men")}><Link to="/men">Men</Link></li>

            <li className={`cursor-pointer border-b-3 ${menu === "women" ? "border-red-500" : "border-transparent"}`} onClick={() => setMenu("women")}><Link to="/women">Women</Link></li>

            <li className={`cursor-pointer border-b-3 ${menu === "kids" ? "border-red-500" : "border-transparent"}`} onClick={() => setMenu("kids")}><Link to="/kids">Kids</Link></li>
        </ul>
      </div>
      <div className='nav-login-cart flex flex-row font-semibold text-gray-600'>
      <Link to="/cart">
      <img className='h-[50px] cursor-pointer' src={cart} alt="cart"/>
      </Link>
       <button className="border border-blue-400 w-[90px] rounded-2xl p-2 font-semibold text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer m-1">
          <Link to="/login">Login</Link>
        </button>

        <div className='absolute w-5 h-5 bg-red-500 text-white  rounded-full border flex justify-center items-center text-xs'>0</div>
      </div>
    </div>
  )
}

export default Navbar